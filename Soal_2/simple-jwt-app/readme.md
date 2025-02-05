# How to run

1. Clone this repository.
2. Make sure you are in "simple-jwt-app" directory.
3. Install dependecies from package.json by run this command :
   > npm install
4. Execute this command to run the program in terminal.
   > node app.js
5. Open Postman to testing. Call POST method on localhost:3000/login for login feature.
6. In the Request Body section fill this data :

```
{
    "username" : "admin",
    "password" : "password"
}
```

7. Click Send Button for sending POST request to log in.
   ![Image](https://github.com/user-attachments/assets/1f9df52c-403c-4f76-a226-7edc20a1c5b1)

8. Check Cookies section on Postman and make sure jwt token is automatically appeared.
   ![Image](https://github.com/user-attachments/assets/11c04e15-0c49-4907-8fce-e7be9943c712)

9. Call GET method on localhost:3000/api/protected for getting user context.
   ![Image](https://github.com/user-attachments/assets/dea55aef-ea69-498a-abbc-e164cb968f71)
   If you try this endpoint before <i>login</i> or after <i>logout</i> you'll get response : 401 Unauthorized.
   ![Image](https://github.com/user-attachments/assets/d8c5526c-5959-44dc-86bd-7b47405f744e)

10. Call POST method on localhost:3000/logout for logout.
    ![Image](https://github.com/user-attachments/assets/12e9a13f-a7e3-4e96-a457-1a49a5b271e2)
