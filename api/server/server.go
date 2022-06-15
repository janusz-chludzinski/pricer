package server

import (
	"net/http"

	"github.com/gin-gonic/gin"
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
			ctx.JSON(200, gin.H{"prod": "hello, this is a lamp!"})
		})
	}

	router.NoRoute(func(ctx *gin.Context) { ctx.JSON(http.StatusNotFound, gin.H{}) })

	return router
}
