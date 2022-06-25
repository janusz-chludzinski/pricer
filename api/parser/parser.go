package parser

import (
	"log"
	"strconv"
	"strings"
	"time"
	"unicode"

	"github.com/gocolly/colly"
	"github.com/janusz-chludzinski/pricer/types"
)

const COMMA = ','
const DOT = '.'

func Parse(requests []types.ProductRequest) []*types.Product {
	products := mapRequestsToProducts(requests)
	collectProducts(products)

	return products
}

func mapRequestsToProducts(requests []types.ProductRequest) []*types.Product {
	products := make([]*types.Product, 0, len(requests))
	for _, request := range requests {
		products = append(products, createProduct(request))
	}
	return products
}

func collectProducts(products []*types.Product) {
	for _, product := range products {
		collector := setupCollector(product)
		collector.Visit(product.Request.Url)
		collector.Wait()
	}
}

func setupCollector(product *types.Product) *colly.Collector {

	collector := colly.NewCollector(colly.Async(true))

	collector.OnRequest(func(r *colly.Request) {
		log.Println("Visiting", r.URL)
	})

	collector.OnError(func(_ *colly.Response, err error) {
		log.Println("Something went wrong:", err)
		product.Errored = true
		product.ErrorMessage = err.Error()
	})

	collector.OnHTML(product.Request.Scope, func(e *colly.HTMLElement) {
		log.Println("Price found: ", e.Text)
		price, err := convertPriceStringToFloat(e.Text)

		if err != nil {
			product.Errored = true
			product.ErrorMessage = err.Error()
			
		}
		product.Price = price
	})

	collector.OnScraped(func(r *colly.Response) {
		log.Println("Finished", r.Request.URL)

		if product.Price == 0 {
			product.Errored = true
			product.ErrorMessage = `Price equals zero. Probably not found by parser.`
		}
	})

	return collector
}

func createProduct(request types.ProductRequest) *types.Product {
	return &types.Product{Request: request, VisitedOn: time.Now()}
}

func convertPriceStringToFloat(price string) (float32, error) {
	trimmedPrice := strings.TrimSpace(price)
	runes := filterDigitsAndSeparators(trimmedPrice)
	return parseStringToFloat(string(runes))
}

func convertCommaToDot(character rune) rune {
	if character == COMMA {
		return DOT 
	}
	return character
}

func filterDigitsAndSeparators(price string) []rune {
	runes := make([]rune, 0)

	for _, r := range price {
		if unicode.IsDigit(r) || r == DOT || r == COMMA {
			r = convertCommaToDot(r)
			runes = append(runes, r)
		}
	}

	return runes
}

func parseStringToFloat(price string) (float32, error) {
	parsedPrice, err := strconv.ParseFloat(string(price), 32)
	if err != nil {
		return 0, err
	}
	return float32(parsedPrice), nil
}
