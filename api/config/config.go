package config

import (
	"encoding/json"
	"io/ioutil"
	"log"

	"github.com/janusz-chludzinski/pricer/types"
)

func ReadConfig(configPath string) []types.ProductRequestInfo {
	config, err := ioutil.ReadFile(configPath)

	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}

	var products []types.ProductRequestInfo
	err = json.Unmarshal([]byte(config), &products)

	if err != nil {
		log.Fatal("Error parsing json: ", err)
	}
	return products
}
