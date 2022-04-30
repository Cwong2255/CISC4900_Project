# CISC4900_Project

The app is running at localhost://3001

The account of MongoDB Atlas is
username: cisc4900webpageproject@gmail.com
gmail password: cisc4900tp

MongoDB Atlas Database
requests: allow to store the student request infomation
students: store the user info for the students who been registered by the Professor

Professor login page is built-in:
Username: cisc4900webdesign
password: spring2022term

The registration form only contain a registration request, like what we have in our current course webpage.

There is a page inside Professor homepage that can show all the registration requests, and also allow the professor to register a student for the class
Another page in Professor home page shows the list of students' info, and allow to update the information on the students form.

Student can only exist to login after professor add it to the course (in database collection Students) (Username: Last Name  Password: EmplID)


Still in challenging:

Send a single line of info and show it in the student home page like "check list" in our current website, can't find anything online to show how to do, I can only print the whole table on the .ejs, but no idea how to print one row.

A submission link on student home page. I tried to make something like what cuny-blackboard works, but unsure how to do it,  maybe it works for have a large enough database to store the files, but that would so expensive. 
The thing I am thinking right now is trying to submit the files and make it as an attachment of an auto email that allow to send to professor's mailbox or a default mailbox, this may works, but I still not trying that.
