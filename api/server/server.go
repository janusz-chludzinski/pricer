package server

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/janusz-chludzinski/pricer/config"
	"github.com/janusz-chludzinski/pricer/parser"
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
			ctx.JSON(200, gin.H{"products": parsedProducts})
		})
	}

	router.NoRoute(func(ctx *gin.Context) { ctx.JSON(http.StatusNotFound, gin.H{}) })

	return router
}
