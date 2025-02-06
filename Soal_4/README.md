# How to Run these Projects

1. Clone this repository.

## Back End App (user-management-api)

2. Please make sure you are in "user-management-api" directory.
3. Install the dependencies provided in package.json by run this command in terminal:
   ```shell
   npm install
   ```
   <i>Please wait until all dependencies installed.</i>
4. Execute this command to run this project:

   ```
   npm start
   ```

   <i>Please wait until this message is appeared:</i><br/>
   ![Image](https://github.com/user-attachments/assets/f7c9340d-e524-4d14-9232-2c98c0fc4c16)

5. Open Postman to test GET method on localhost:5000/api/users.
   ![Image](https://github.com/user-attachments/assets/a08ef133-f890-4ce5-b14e-b17743ca4d13)

6. Call GET method on localhost:5000/api/users/?results=5&page=2 for getting dynamic result and page response.
   ![Image](https://github.com/user-attachments/assets/7b5366c8-c5b0-41f1-b3bb-c7bac6d9ed25)
   <i>PS: You can try to put different value for results and page.</i>

## Front End App (user-management)

7. Please make sure you are in "user-management" directory.

8. Install the dependencies provided in package.json by run this command in terminal:

   ```shell
   npm install
   ```

9. Execute this command to run this project:

   ```console
   npm start
   ```

   <i>Please wait until this message is appeared:</i><br/>
   ![Image](https://github.com/user-attachments/assets/922d0776-1132-41cb-b183-9202c1e33065)

10. Your Browser will automatically open. If your browser is not automatically open, copy URL from previous step and paste into your browser.

    ```
    http://localhost:3000
    ```

    ![Image](https://github.com/user-attachments/assets/fb7d4052-f093-4d65-8efb-b7c6ef1b923b)

11. For Searching feature, try to input text in the search bar. Everytime you type a character searching process will be triggered.
    ![Image](https://github.com/user-attachments/assets/1c559a82-fe48-4f9c-bba0-e50beb79e911)
