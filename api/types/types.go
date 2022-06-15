package types

import (
	"time"
)

type ProductRequestInfo struct {
	Name  string `json:"name"`
	Url   string `json:"url"`
	Scope string `json:"search-scope"`
}

type ParsingResult struct {
	Name         string
	Price        string
	Url          string
	VisitedOn    time.Time
	Errored      bool
	ErrorMessage string
}

type CollectorConfig struct {
	Product ProductRequestInfo
	Result  *ParsingResult
	Results []*ParsingResult
}
