package main

import (
	"fmt"
	"net/http"

	"ecom/handler"
	"ecom/product"
	"ecom/voucher"
)

func main() {
	products := []product.Product{
		{ID: 1, Name: "Shirt", Price: 2000000.0},
		{ID: 2, Name: "Pants", Price: 3000000.0},
		{ID: 3, Name: "Shoes", Price: 5000000.0},
	}

	voucher := voucher.Voucher{
		Code:     "DISCOUNT50",
		Discount: 50.0,
		IsActive: true,
	}

	// Create a handler function that captures products and voucher
	checkoutHandler := func(w http.ResponseWriter, r *http.Request) {
		handler.CheckoutHandler(w, r, products, voucher)
	}

	http.HandleFunc("/checkout", checkoutHandler)

	fmt.Println("Server running on port 8080")
	http.ListenAndServe(":8080", nil)
}
