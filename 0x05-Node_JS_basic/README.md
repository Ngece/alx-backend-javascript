0-console.js                Contains a function named displayMessage that prints in STDOUT the string argument.




1-stdin.js                  Program executed through command line:

    It displays the message Welcome to Holberton School, what is your name? (followed by a new line)
    The user is able to input their name on a new line
    The program displays Your name is: INPUT
    When the user ends the program, it displays This important software is now closing (followed by a new line)




2-read_file.js              Uses the database database.csv
    Contains a function named countStudents that accepts a path in argument
    The script attempts to read the database file synchronously
    If the database is not available, it throws an error with the text Cannot load the database
    If the database is available, it logs the following message to the console 'Number of students: NUMBER_OF_STUDENTS'
    It logs the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES




3-read_file_async.js        Using the database database.csv
    Contains a function named countStudents that accepts a path in argument (same as in 2-read_file.js)
    The script attempts to read the database file asynchronously
    The function returns a Promise
    If the database is not available, it throws an error with the text Cannot load the database
    If the database is available, it should log the following message to the console 'Number of students: NUMBER_OF_STUDENTS'
    It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES




4-http.js                   Contains a small HTTP server using the http module:
    It is assigned to the variable app and is exported
    HTTP server listens on port 1245
    Displays Hello Holberton School! in the page body for any endpoint as plain text




5-http.js                   Contains a small HTTP server using the http module:
    It is assigned to the variable app and is exported
    HTTP server listens on port 1245
    Returns plain text
    When the URL path is /, it should display Hello Holberton School! in the page body
    When the URL path is /students, it should display This is the list of our students followed by the same content as the file 3-read_file_async.js (with and without the database) - the name of the database must be passed as argument of the file
   



6-http_express.js              Contains a small HTTP server using Express module:
    It is assigned to the variable app and is exported
    HTTP server listens on port 1245
    Displays Hello Holberton School! in the page body for the endpoint /




7-http_express.j                recreate the small HTTP server using Express:
    It is assigned to the variable app and is exported
    HTTP server listens on port 1245
    It returns plain text
    When the URL path is /, it should display Hello Holberton School! in the page body
    When the URL path is /students, it should display This is the list of our students followed by the same content as the file 3-read_file_async.js (with and without the database) - the name of the database must be passed as argument of the file




Organize a complex HTTP server using Express 
Contains a full server in a directory named full_server
    8.1 Organize the structure of the server

    Create 2 directories within:
        controllers
        routes
    Create a file full_server/utils.js, in the file create a function named readDatabase that accepts a file path as argument:
        It should read the database asynchronously
        It should return a promise
        When the file is not accessible, it should reject the promise with the error
        When the file can be read, it should return an object of arrays of the firstname of students per fields

8.2 Write the App controller

Inside the file full_server/controllers/AppController.js:

    Create a class named AppController. Add a static method named getHomepage
    The method accepts request and response as argument. It returns a 200 status and the message Hello Holberton School!

8.3 Write the Students controller

Inside the file full_server/controllers/StudentsController.js, create a class named StudentsController. Add two static methods:

The first one is getAllStudents:

    The method accepts request and response as argument
    It should return a status 200
    It calls the function readDatabase from the utils file, and display in the page:
        First line: This is the list of our students
        And for each field (order by alphabetic order case insensitive), a line that displays the number of students in the field, and the list of first names (ordered by appearance in the database file) with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
    If the database is not available, it should return a status 500 and the error message Cannot load the database

The second one is getAllStudentsByMajor:

    The method accepts request and response as argument
    It should return a status 200
    It uses a parameter that the user can pass to the browser major. The major can only be CS or SWE. If the user is passing another parameter, the server should return a 500 and the error Major parameter must be CS or SWE
    It calls the function readDatabase from the utils file, and display in the page the list of first names for the students (ordered by appearance in the database file) in the specified field List: LIST_OF_FIRSTNAMES_IN_THE_FIELD
    If the database is not available, it should return a status 500 and the error message Cannot load the database

8.4 Write the routes

Inside the file full_server/routes/index.js:

    Link the route / to the AppController
    Link the route /students and /students/:majorto the StudentsController

8.5 Write the server reusing everything you created

Inside the file named full_server/server.js, create a small Express server:

    It should use the routes defined in full_server/routes/index.js
    It should use the port 1245
