package checkout

import (
	"ecom/product"
	"ecom/voucher"
)

type Checkout struct {
	Items   []product.Product `json:"items"`
	Voucher *voucher.Voucher  `json:"voucher"`
}

func CalculateTotalPrice(items []product.Product) float64 {
	total := 0.0
	for _, item := range items {
		total += item.Price
	}
	return total
}

func ApplyVoucher(checkout *Checkout) (float64, float64) {
	totalPrice := CalculateTotalPrice(checkout.Items)
	if checkout.Voucher != nil && checkout.Voucher.IsActive {
		discountAmount := totalPrice * (checkout.Voucher.Discount / 100)
		finalPrice := totalPrice - discountAmount
		points := discountAmount * 0.02 // 2% of the used voucher value
		return finalPrice, points
	}
	return totalPrice, 0.0
}
