CPSC-473-Project-1

Christian Medina christian.medina@csu.fullerton.edu

Erik Lienhard elienhard@csu.fullerton.edu

Ruth Madrid ruthm11@csu.fullerton.edu

Nguyen Tran ntran272@csu.fullerton.edu

SangYong Jin sangyongjin@csu.fullerton.edu

# Overview of the Project

1. Project Scope

2. Installation and Configuration

3. User Documentation

4. Technology We Used

5. Reference Links

# Project Scope

+ Project scope

Nowadays, everything you work or you do in your life are related with the Law. Everyone must obey the Law.
Sometimes you have legal issues that you don't know how to solve. You can have advice from friends or family,
but it does not constitue legal advice. True legal advice forms an agreement between an attorney and you
based on a particular legal matter you are experiencing. As a non profit organization, we make a website to answer 
your legal matter that you need to solve. We devote our time to help you get a better answer for your legal issues. 

+ Project functionality

Our website provides answers to everyone who has problems with law and legal issues.
1. Users have the ability to ask questions including details and type of laws by filling out the
online submission form.
2. In addition, we have some functions for lawyers. Lawyers have the ability to see all questions that users have sent. Clicking the Read button displays the question details and generates a reply button that, upon clicking, populates a draft on an email application on the users system which allows for the lawyer to reply.
To ensure the privacy, lawyers have to create an account and login before accessing the page. They also have the ability to 
delete email that they don't want to answer.


# Installation and Configuration

1. The website can be run on Windows/Mac/Linux

+ Acquire the files
Download all the files from https://github.com/Christian-Medina/CPSC-473-Project-1

+ Use the following commands into command prompt or the console to create a Deployd application and open the dashboard:
> $dpd create \<folder name\>

> $cd \<folder name\>

> $dpd -d

>>OR

>> $dpd --mongod \<path to mongod.exe\>

> $dpd dashboard


2. Move all contents of the github downloaded project's public and resources folders to the corresponding public and resource folders generated by the dpd create
3. Refresh your browser which should be on localhost:2403/dashboard (this will now show the users and questionstore databases).
4. Change the url to: localhost:2403/login/register.html
5. Register a new username and password
6. Navigate to: localhost:2403/index.html
User End:
7. Click Start Here
8. Enter the fields in the question form
9. For testing purposes, repeat the two above steps to add a few questions.
Lawyer End:
7. Click Login
8. Enter username and password
9. You are redirected to localhost:2403/login/welcome.html
10. If there are questions in the dpd database (if you completed user end steps, there will be), the questions will be populated in a user friendly table
11. Click Read to display the question details
12. Click Reply to open the email application on your Operating system that displays the contents of the question.
13. Click X to hide the message details.
14. Click Delete to delete any message you are done with.
15. Click Logout to logout

# User Documentation

For Users:

Home page
+ Button Start to redirect to question page.
+ Button About Us

Question Page
+ Filling Question
+ Filling detail
+ Choosing type of law
+ Choosing State
+ Filling email
+ Filling name
+ Submit redirect user to the thankyou page.

Thankyou Page
+ Button home to redirect to homepage.

For Lawyers:

+ Login Button at the Top

Login Page
+ Sign In
+ Sign Out
+ Submit and redirect to welcome page

Register Page
+ Create username and password
+ Submit Redirect user to the login page

Welcome Page
+ Able to sign Out
+ Able to read the message
+ Able to delete the message
+ Able to hide the message
+ Able to reply the message via email application


# Technology We Used

Languages
+ HTML5
+ Javascript
+ CSS3

Front-End
+ Bootstrap 3.3.7
+ Google Font APIs

Back-End
+ Ajax
+ Deployd
+ MongoDB
+ NodeJs

Development Tools
+ Atom

# Reference Link

+ http://docs.deployd.com/docs/collections/reference/dpd-js.html
+ https://www.w3schools.com/css/


