package config

import (
	"encoding/json"
	"io/ioutil"
	"log"

	"github.com/janusz-chludzinski/pricer/types"
)

func ReadConfig(configPath string) []types.ProductRequest {
	config, err := ioutil.ReadFile(configPath)

	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}

	var products []types.ProductRequest
	err = json.Unmarshal([]byte(config), &products)

	if err != nil {
		log.Fatal("Error parsing json: ", err)
	}

	log.Printf("%v", products)
	return products
}
