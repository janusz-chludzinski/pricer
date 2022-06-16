package types

import (
	"time"
)

type ProductRequest struct {
	Name  string `json:"name"`
	Url   string `json:"url"`
	Scope string `json:"searchScope"`
}

type Product struct {
	Request      ProductRequest `json:"request"`
	Price        string         `json:"price"`
	VisitedOn    time.Time      `json:"visitedOn"`
	Errored      bool           `json:"errored"`
	ErrorMessage string         `json:"errorMessage"`
}
