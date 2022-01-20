# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a block in Ruby?

  Your answer: In most programming languages, a block is considered to be a structure of source code which is grouped together. The grouping can be contained in curly brackets {}, or the code block can have an be indentation or some type of end block statement; code that is passed to a method. 

  Researched answer: Unlike other programming languages, every thing in Ruby is considered a method; so the blocks are enclosed in a do-end statement 
  or between curly braces {}. The do/end statment used for blocks are betwee brackets {}, and can have multiple argumets, which can be between two pipes characters, |. The do/end statement Ruby blocks are anonymous functions that can be passed into methods, the use of end indicates that the code has been used. 

  cite:
  Jesus Castello, RubyGuides "The Ultimate Guide to Blocks, Procs & Lambdas", https://www.rubyguides.com/2018/10/what-is-ruby-on-rails/. Accessed 17 Jan 2022


2. What is a gem? 

  Your answer: A software package with other data (library) used on the Ruby platform, allowing easy access to Ruby software packages for the system (IOS, Window, Chrome...etc) that is being used.

  Researched answer: A package manager with shared libraries & tools which is structrally formatted to be easly understood. The software package comes with a specification (“.spec”) file that comes with describes dependencies (other required gems) so the code has everything it needs to work. Each gem consists of, code, documentation, and gem specification (Gemspec).

cite:
RubyGuides/Gems, https://guides.rubygems.org/. Accessed 17 Jan 2022

3. What is Ruby on Rails?

  Your answer: Ruby on Rails is an pen-source web application framework, built with the Ruby programming language. Rails can be used to help you build applications, from simple to complex.

  Researched answer: Ruby on Rails (or "Rails") is an open-source web application development framework written in the Ruby programming language. It's one of the most popular Ruby libraries. An open source Ruby framework for developing database-backed web applications, with configuration code with Database Schema. Ruby on Rails requires fewer lines of code than other frameworks. Rails confirguation files in favor 

cite:
  Jesus Castello, RubyGuides, "What is Ruby on Rails & Why Is It Useful?", https://www.rubyguides.com/2018/10/what-is-ruby-on-rails/. Accessed 17 Jan 2022


4. What is a relational database? Are there other kinds of databases? 

  Your answer:
  Works with structured data,and can be used to manage transaction-oriented applications (OLTP); strong use of SQL.
  
  Researched answer:
  A relational database management system is one of four common types of systems you can use to manage business data. Relational database model has started to win over both the network and the hierarchical models because its added flexibility and productivity has become more evident as hardware technology has become faster; works by linking information from multiple tables through the use of “keys.” A key is a unique identifier which can be assigned to a row of data contained within a table. This unique identifier, called a “primary key,” can then be included in a record located in another table when that record has a relationship to the primary record in the main table. When this unique primary key is added to a record in another table, it is called a “foreign key” in the associated table. The connection between the primary and foreign key then creates the “relationship” between records contained across multiple tables.

  Beside relational database, there are three other types of database management systems:

  (1). Hierarchical database systems: A database design that uses a one-to-many relationship for data elements. Hierarchical database models use a tree structure that links a number of disparate elements to one "owner," or "parent," primary record. It is useful for a certain type of data storage, but it is not extremely versatile, it has limitations means that it is confined to some very specific uses.

  (2). Network database systems: A database models also have a hierarchical structure. However, instead of using a single-parent tree hierarchy, this model supports many to many relationships, as child tables can have more than one parent. The network database model allows each record to have multiple parent and multiple child records, which, when visualized, form a web-like structure of networked records. In contrast, a hierarchical model data member can only have a single parent record but can have many child records. This property of having multiple links applies in two ways: the schema and the database itself can be seen as a generalized graph of record types that are connected by relationship types. The main advantage of a network database is that it allows for a more natural modeling of relationships between records or entities, as opposed to the hierarchical model. 

  (3). Object-oriented database systems:
  This database information is represented as objects, with different types of relationships possible between two or more objects. Such databases use an object-oriented programming language for development. Objects, in an object-oriented database, reference the ability to develop a product, then define and name it. The object can then be referenced, or called later, as a unit without having to go into its complexities. This is very similar to objects used in object-oriented programming.
  (1). Hierarchical database systems: A database design that uses a one-to-many relationship for data elements. Hierarchical database models use a tree structure that links a number of disparate elements to one "owner," or "parent," primary record. It is useful for a certain type of data storage, but it is not extremely versatile, it has limitations means that it is confined to some very specific uses.

  (2). Network database systems: A database models also have a hierarchical structure. However, instead of using a single-parent tree hierarchy, this model supports many to many relationships, as child tables can have more than one parent. The network database model allows each record to have multiple parent and multiple child records, which, when visualized, form a web-like structure of networked records. In contrast, a hierarchical model data member can only have a single parent record but can have many child records. This property of having multiple links applies in two ways: the schema and the database itself can be seen as a generalized graph of record types that are connected by relationship types. The main advantage of a network database is that it allows for a more natural modeling of relationships between records or entities, as opposed to the hierarchical model. 

  (3). Object-oriented database systems:
  This database information is represented as objects, with different types of relationships possible between two or more objects. Such databases use an object-oriented programming language for development. Objects, in an object-oriented database, reference the ability to develop a product, then define and name it. The object can then be referenced, or called later, as a unit without having to go into its complexities. This is very similar to objects used in object-oriented programming.

 cite: 
  Tamara Pattinson, Pluralsight "Relational vs. non-relational databases", https://www.pluralsight.com/blog/software-development/relational-vs-non-relational-databases. Accessed 17 Jan 2022


5. What are primary keys? Why are they important?

  Your answer:
  An unique identifier that identifies each record in a table.

  Researched answer: 
  A uniquely identifier on each record in a table, that  must ontain UNIQUE values, and cannot contain NULL values. The table has only one primary key in the table, this primary key can consist of single or multiple columns (fields), linking data included in a record located in another table when that record has a relationship to the primary record in the main table.
  
  w3schools, SQL PRIMARY KEY Constraint, "The Ultimate Guide to Blocks, Procs & Lambdas", https://www.w3schools.com/sql/sql_primarykey.ASP. Accessed 17 Jan 2022 

## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: 
A RESTful (Representational State Transfer) route is a route that provides mapping from HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route depends on the HTTP verb and the URL.  It is a convention for defining routes and when something follows the rest principle it is known as RESTFUL. 

Instead of relying solely on the URL to indicate what site to visit, a RESTful route also depends on the HTTP verb and the URL. This means that when your application receives an HTTP request, it introspects on that request and identifies the HTTP method and URL, connects that with a corresponding controller action that has that method and URL, executes the code in that action, and determines which response gets sent back to the client.

2. JSON: 
JSON stands for JavaScript Object Notation, a plain text format written in JavaScript object notation for storing and transporting data. JSON is "self-describing" and easy to understand, is language independent for code reading, and is used to send data between computers. JSON format is syntactically similar to the code for creating JavaScript objects. Because of this, a JavaScript program can easily convert JSON data into JavaScript objects. JSON.parse(). JavaScript also has a built in function for converting an object into a JSON.stringify().

3. ERB: 
ERB are files contain source code written in a programming language of the same name. The ERB language is essentially a Ruby templating language. ERB files are saved in a plain text format which allows them to be opened in any text editing program. Thus, the file can contain any type of text alongside the ERB source code. Code in other programming languages can also be saved in the ERB file.

Even though files with an ERB extension can contain many different types of text and source code, there is a distinctiveness when it comes to ERB code saved in the file. When run with the so-called ERB template engine, the ERB file can be used to add Ruby ERB source code to another document or website file. Since Ruby ERB is more of a templating language, ERB files are also used as templates to create other files. Mainly, these are web files such as HTML, JS or RB.

Here's a small, but not exhaustive list of programs that can open ERB documents:

Apple TextEdit (Mac)
Microsoft Notepad (Windows)
Panic Coda 2 (Mac)
Any Text Editor

cite: 
ONKINE=CONVERT.COM, "ERB - Ruby ERB Script", https://www.online-convert.com/file-format/erb#:~:text=What%20is%20a%20ERB%20file,in%20any%20text%20editing%20program.,  Accessed 17 Jan 2022

4. Params:
Params is an alias for the parameters method; a method that returns an ActionController::Parameters object, in practice it behaves a lot like a hash. All values inside params are strings. Even if they’ve been submitted as integers.

cite: 
Jesus Castello, RubyGuides, "What Are Rails Parameters & How to Use Them Correctly", https://www.rubyguides.com/2019/06/rails-params/, Accessed 17 Jan 2022

5. API:
API stands for application programming interface, which is a set of definitions and protocols for building and integrating application software. APIs let your product or service communicate with other products and services without having to know how they’re implemented, simplify app development. APIs gives flexibility, simplify design, administration, and use; and provide opportunities for innovation. APIs are sometimes thought of as contracts, with documentation that represents an agreement between parties. APIs are a simplified way to connect infrastructures through cloud-native app development, but they also allow sharing data with customers and other external users. API opens up access to your resources while maintaining security and control

cite: 
RedHat, "What is an API?", https://www.redhat.com/en/topics/api/what-are-application-programming-interfaces,  Accessed 17 Jan 2022
