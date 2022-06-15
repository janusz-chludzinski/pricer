package main

import (

	// "github.com/janusz-chludzinski/pricer/server"
	"fmt"

	"github.com/janusz-chludzinski/pricer/config"
	"github.com/janusz-chludzinski/pricer/parser"
	"github.com/janusz-chludzinski/pricer/types"
)

func main() {
	// server.Start()
	products := config.ReadConfig("./config/config.json")

	parsedResults := parser.Parse(products)
	printResults(parsedResults)

}

func printResults(results []*types.ParsingResult) {
	for _, res := range results {
		fmt.Println(*res)
	}
}
