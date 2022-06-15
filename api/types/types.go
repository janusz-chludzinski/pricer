package types

import (
	"time"
)

type ProductRequest struct {
	Name  string `json:"name"`
	Url   string `json:"url"`
	Scope string `json:"search-scope"`
}

type Product struct {
	Request      ProductRequest `json:"request"`
	Price        string         `json:"price"`
	VisitedOn    time.Time      `json:"visitedOn"`
	Errored      bool           `json:"errored"`
	ErrorMessage string         `json:"errorMessage"`
}

type CollectorConfig struct {
	Product ProductRequest
	Result  Product
	Results []Product
}
