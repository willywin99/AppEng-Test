package handler

import (
	"encoding/json"
	"net/http"

	"ecom/checkout"
	"ecom/product"
	"ecom/voucher"
)

func CheckoutHandler(w http.ResponseWriter, r *http.Request, products []product.Product, voucher voucher.Voucher) {
	if r.Method == http.MethodPost {
		var chkout checkout.Checkout
		err := json.NewDecoder(r.Body).Decode(&chkout)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		// Override items and voucher with the ones passed from main
		chkout.Items = products
		chkout.Voucher = &voucher

		finalPrice, points := checkout.ApplyVoucher(&chkout)

		response := map[string]interface{}{
			"final_price":   finalPrice,
			"points_earned": points,
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(response)
	} else {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}
