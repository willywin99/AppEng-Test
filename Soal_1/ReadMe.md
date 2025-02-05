# How to run

1. Clone this repository.
2. Make sure you are in "ecom" directory.
3. Execute this command to run the program in terminal.
   > go run main.go
4. Open Postman to test call POST method on localhost:8080/checkout.
5. In the Request Body section fill this data :

```{
  "items": [
    {"id": 1, "name": "Baju", "price": 2000000},
    {"id": 2, "name": "Celana", "price": 3000000},
    {"id": 3, "name": "Sepatu", "price": 5000000}
  ],
  "voucher": {
    "code": "DISKON50",
    "discount": 50.0,
    "is_active": true
  }
}
```

6. Click Send Button for sending POST request.
   ![Image](https://github.com/user-attachments/assets/cd02fa3e-5895-4d76-95a5-2f744017bb9d)
