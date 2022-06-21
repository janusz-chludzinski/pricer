package parser

import (
	"log"
	"time"

	"github.com/gocolly/colly"
	"github.com/janusz-chludzinski/pricer/types"
)

func Parse(requests []types.ProductRequest) []*types.Product {
	products := mapRequestsToProducts(requests)
	collectProducts(products)

	return products
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
		product.Price = e.Text
	})

	collector.OnScraped(func(r *colly.Response) {
		log.Println("Finished", r.Request.URL)
	})

	return collector
}

func createProduct(request types.ProductRequest) *types.Product {
	return &types.Product{Request: request, VisitedOn: time.Now()}
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

