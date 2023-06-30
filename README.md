# Sprint 7 project
Project Name: hm07-qa-us

Description of the Project:

This project is used to run several test scripts for the API Server "Urban Grocers"

Methods Used were "GET" "POST" "PUT" and "DELETE" Requests that pull the API server URL.

There were 2 tests for each method. One to test the status code, and the second to parse and check the response Body.

The tests are written in javascript

///

Instructions on how to run the test:

Clone repository to local directory in terminal

run $npm install within the local directory 

Start the Practicum API server

Copy and Add the Server Address into the config.js file in the API_URL field and save

Use command npx jest tests/(Insert specific test here. Example: deleteHandlers.test.js)

Execute command and run all tests (GET, POST, PUT, and DELETE) tests

///

Code Style Used:

camelCase is used for all variable names

Variables names clearly desribe what they are for/what is stored in them

Nouns or verbs are used for variables names only

All functional names start with a verb

All variables that may change later in the tests are declared with "let"; ones that will not change are declared with "const"

Each test has a description above it to describe what it does/what it is for