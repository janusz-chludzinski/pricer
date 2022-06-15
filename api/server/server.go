package server

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/janusz-chludzinski/pricer/config"
	"github.com/janusz-chludzinski/pricer/parser"
	"github.com/janusz-chludzinski/pricer/types"
)

func Start() {
	router := initRoutes()
	router.Run()
}

func initRoutes() *gin.Engine {
	router := gin.Default()

	api := router.Group("/api")
	{
		api.GET("/products", func(ctx *gin.Context) {
			products := config.ReadConfig("./config/config.json")
			parsedProducts := parser.Parse(products)
			printProducts(parsedProducts)
			ctx.JSON(200, gin.H{"products": parsedProducts})
		})
	}

	router.NoRoute(func(ctx *gin.Context) { ctx.JSON(http.StatusNotFound, gin.H{}) })

	return router
}

func printProducts(results []*types.Product) {
	for _, res := range results {
		fmt.Printf("%#v", res)
	}
}
