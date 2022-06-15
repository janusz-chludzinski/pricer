package main

import "github.com/janusz-chludzinski/pricer/server"

type someType struct {
	Name string
	Age  int
}

func main() {
	server.Start()
}
