# Final-Project-Rickroll

Project description:
A simple payment app allowing users to register and make payment(cash payment/credit card payment).
Meanwhile, the users can also track their payment history.

Backend: Java + Spark
- Run the SparkDemo.java which will use the port 1234. If port is already in used, change the 1234 to other numbers.

Frontend: React
- Run command 'npm start' ('npm install' for first time use) to host a website in localhost:3000 

Database: MongoDB
- The database stores username, password, and amount for each user, under Collection 'Users'
- The database stores username and transaction history, under Collection 'Transactions'.

Step to Run the Project

1. Install MongoDB, and 'npm install' React package in frontend directory.
2. Under Database 'MyDatabase', create collection 'Users' and 'Transcations'.
3. Enable the backend by running SparkDemo.java, Enable the frontend by running 'npm start' in frontend directory.


