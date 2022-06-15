package parser

import (
	"log"
	"time"

	"github.com/gocolly/colly"
	"github.com/janusz-chludzinski/pricer/types"
)

func Parse(products []types.ProductRequestInfo) []*types.ParsingResult {
	results := make([]*types.ParsingResult, 0, len(products))

	for _, product := range products {
		collectorConfig := types.CollectorConfig{Product: product, Results: results}
		collector := setupCollector(collectorConfig)
		collector.Visit(product.Url)
	}

	return results
}

func setupCollector(config types.CollectorConfig) *colly.Collector {
	result := types.ParsingResult{
		VisitedOn: time.Now(),
		Name:      config.Product.Name,
		Url:       config.Product.Url,
	}

	collector := colly.NewCollector()

	collector.OnRequest(func(r *colly.Request) {
		log.Println("Visiting", r.URL)
	})

	collector.OnError(func(_ *colly.Response, err error) {
		log.Println("Something went wrong:", err)
		result.Errored = true
		result.ErrorMessage = err.Error()
	})

	collector.OnHTML(config.Product.Scope, func(e *colly.HTMLElement) {
		log.Println("Price: ", config.Product.Name, e.Text)
		result.Price = e.Text
	})

	collector.OnScraped(func(r *colly.Response) {
		log.Println("Finished", r.Request.URL)
		config.Results = append(config.Results, &result)
	})

	return collector
}
