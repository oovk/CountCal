package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

//golang does not understand json cuz its javascript based that's why we use `` these
//we use marshelling and unmarshelling to convert json to struct and struct to json

type Entry struct { //struct is your own datatype
	ID         primitive.ObjectID `bson:"id"`   //id is created by golanf
	Dish       *string            `json:"dish"` //we are passing the dish that's why we are using reference
	Fat        *float64           `json:"fat"`
	Ingredient *string            `json:"ingredients"`
	Calories   *string            `json:"calories"`
}
