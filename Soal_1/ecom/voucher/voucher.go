package voucher

type Voucher struct {
	Code     string  `json:"code"`
	Discount float64 `json:"discount"` // Percentage (e.g., 50 for 50%)
	IsActive bool    `json:"is_active"`
}
