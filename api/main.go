package main

import (

	// "github.com/janusz-chludzinski/pricer/server"
	"github.com/janusz-chludzinski/pricer/config"
)

func main() {
	// server.Start()
	products := config.ReadConfig("./config.json")
}
