package main

import (
	"github.com/janusz-chludzinski/pricer/router"
)

func main() {
	apiRouter := router.InitRoutes()
	apiRouter.Run()
}
