const express = require('express')
const Days = require('../models/days.js')
const router = express.Router()

router.get('/new', (req,res)=> {
    // Days.create(
    //     [
    //         {
    //             name: 'w01d01',
    //             summary: 'Introduction to SEIR, Terminal, intro to JS, Conditionals, Booleans, Loops, install Node, data types.',
    //             description: 'The first day. On this day the first thing we went through was a basic orientation and what was expected of us as our morning exercise. This orientation was full of really great advice as well as a lot of tips and tricks about the best ways to learn and how to succeed in the course that can be found in the "instructor notes" section of the w01d01 file in the repo. Next, we went over the terminal, how to navigate it, and how to install Node JS in our morning lesson. It was then that we learned the basics of the terminal and common commands like how to list directories, create directories, move directories, move into directories, etc., and common shortcuts. Finally, in the afternoon lesson, we went over JavaScript data types and learned how to create conditionals as well as "for" and "while" loops.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w01d01',
    //             recording: 'https://generalassembly.zoom.us/rec/share/Ngy8MVseoqbz-z6NgB4wdnRyziodlxwwvDF_QZKx-1Z5c90_R8qCtHedI8dQzq61.oiKjMUFPuu7ZWRXU',
    //             week: 1,
    //             day: 1
    //         },
    //         {
    //             name:'w01d02',
    //             summary: 'More tips and tricks, Git and GitHub, CSS, SSH keys.',
    //             description: 'The first thing we went over this day was tips and tricks in the morning exercise. This was about what you would expect it to be. We went over more shortcuts, an app called Rectangle for screen management, some VS code shortcuts, how to install extensions and comment out code, and proper indentation of code. Then, in the morning lesson, we went over the basics of Git, Github, and how to set everything up on those fronts. We learned how to set up an SSH key and use it on your GitHub account, create repositories, clone repositories, push, pull, stage, and commit files to make changes to repositiories, and creating branches and assing them to a repo. In the afternoon, we were given a run down on CSS. We were mostly just shown proper syntax for CSS, how to import fonts, and some of the more common styling options.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w01d02',
    //             recording: `Morning Lecture (There was no afternoon recording uploaded) --> https://generalassembly.zoom.us/rec/share/vnfowq9VS3rz_Mg4K9I--H-HNElwGWg1KXE9yzhGaG67M9zdrqyBLOFlWDqckciD.-5B4YWdnB4gKuz6E`,
    //             week: 1,
    //             day: 2
    //         },
    //         {
    //             name: 'w01d03',
    //             summary: '"git pull upstream master", Math Methods, Control Flow, Control Flow with Loops, Arrays and iteration, Array Methods',
    //             description: 'On this day we did our first of many "git pull upstream master"\'s. In our morning exercise we learned how to make our first pull from the GA class repo. Next, as part of our morning lesson, we learned about the many Math methods in JavaScript. These methods are used to generate or manipulate numbers using commands like Math.random, Math.floor, Math.round, etc.. We also went over control flow and control flow with loops. Control flow is essentially just the order in which pieces of code are executed. We discussed how to understand control flow, especially with more tricky JS topics like loops. Finally, in the afternoon, we went over Array Iteration and Array Methods. We went over how to use loops to iterate over an array and access the values within as well as the common array methods such as indexOf, push, pop, reverse, shift, splice, sort, etc.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w01d03',
    //             recording: 'https://generalassembly.zoom.us/rec/share/9D4S55P0--7BzxUOpZpmjSXX9Fvq-1lF-agmbucGarya-WEX6ZQ-1hc1vIpZ7x_m.O3edZHUNcC182Z5A',
    //             week: 1,
    //             day: 3
    //         },
    //         {
    //             name: 'w01d04', 
    //             summary: 'HTML Mockup Pt.1 (designing HTML for a website based off an image), JavaScript Functions, Scoping, const and let variables.',
    //             description: 'The first thing we did on this day was our HTML mockup for our morning exercise. We were givin and image of a webpage and asked to design the HTML for it in our own file. Following this, in the morning lesson, we went over functions in our morning lesson. Functions are a very large topic and they\'re incredibly useful in JS. We learned how to write them, name them, call them, and set parameters for them. Later on, in the afternoon lesson, we went over scope. Scope is essentially where you can access variables in your JavaScript. Javascript as some set limitations to where certain vairables can be used depending on where they are declared so this is something we went over in this lesson. We also learned the difference between "const" and "let" variables and how to use each.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w01d04',
    //             recording: 'https://generalassembly.zoom.us/rec/share/QCnhj1DuF3YogLIUpUnhUhb_rqvTWK9irXfgKaZg-ndJF5W1lzeZGvZrzl4fFZbZ.b486qeRHcoIeyRRh',
    //             week: 1,
    //             day: 4
    //         },
    //         {
    //             name: 'w01d05',
    //             summary: 'HTML Mockup Pt.2 (adding CSS to our Pt.1 mockup based off an image of a webpage), Psuedo code, Execute JS in a webpage, Browser Alerts, Browser Prompts, Nested Functions, Loops and Functions, Sequence of Execution, When to use a Function, Objects, Object Properties',
    //             description: 'There is a lot to unpack in this day. It all starts with a morning exercise of HTML Mockup Pt.2. In this exercise we simply added CSS to our existing HTML that we made in the previous part on the day before. Then, we got into "Program Design." This morning lecture gave us a massive overview of Psuedo code, JavaScript, how to use and execute JavaScript in a browser, browser alerts, browser prompts, nested functions, reset state, sequence of execution, loops and functions, and why to use Javascript. So, in short, we essentially went over JavaScript and why we use it in more detail, how to interact with users in the browser, functions nested inside of other functions, and how loops and functions interact with each other. In the afternoon, we were introduced to objects. We learned the difference between objects and arrays and why we would use one or the other. We also discusses how to use objects, manipulate objects, and add/change object properties.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w01d05',
    //             recording: 'https://generalassembly.zoom.us/rec/share/4I2JQyPZsXQuCGIZRxGbaXekcnCwikrZrAP7AgJo1ybA2K7qoL-z5TZKvwX5B2le.Kmhi7bb7hUt8y_fi',
    //             week: 1,
    //             day: 5
    //         },
    //         {
    //             name: 'w02d01',
    //             summary: 'Beginner\'s Guide to UX/UI, Object-ception (the different datatypes in objects), Combining Datatypes',
    //             description: 'This lesson was very focused on objects and arrays. First, in the morning exercise, we went over UX/UI (User experience and User Interactions). This was a fairly brief exercise where we went over the basics of how to enhance the user experience of our apps and what cluttered bad UX looked like. Next, in the morning lesson, we went over "Object-ception." Essentially, we discussed how to use different datatypes like arrays and functions inside of an object. We went over how to properly nest them, how to access them, how to iterate over arrays in objects, how to iterate over objects inside an object, how to use an object within an array, and just how to combine objects, arrays, and functions overall. Next, in the afternoon, our lesson discussed looping with nexted arrays/objects and combining objects, arrays, and functions more than one level deep. This covered things like how to access specific items in objects or arrays returned from functions.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w02d01',
    //             recording: 'https://generalassembly.zoom.us/rec/share/FPQdmvdSp1_mRgdy2zkVeCWFcjYCVg1COoQAjih9iWMTZs7HtVjfeTqpo5zSigHB.tiKqoEZEWXHUsLyM',
    //             week: 2,
    //             day: 1
    //         },
    //         {
    //             name: 'w02d02', 
    //             summary: 'Intro to Flexbox, Callbacks, Array Methods with Callbacks, Debugger, setTimeout',
    //             description: 'First, our morning exercise, flexbox. We basically just learned about flexbox and the commands it had to potentially make our CSS easier. Next, in the morning lesson, we went over quite a bit. We discussed higher order functions, callback functions, how to use the two together, setTimeout and how to use it, how to use Debugger both in the browser and in node, how to read errors, proper indentation, and just overall best practices with naming our code and making it readable. So, we essentially went over callback functions and how to properly organize code and name variables within it. Next, in the afternoon, we went over the many different array methods and how to use callbacks within them. This helped give us a better understanding of array methods and the best ways to use them to solve simple problems in our code.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w02d02',
    //             recording: 'https://generalassembly.zoom.us/rec/share/j8jlbNaEy9vqq1UxoTz7I0UH33LcCJUAgDT3Ctu5_DmQPgkCS_sUU0PrjngWlyo9.sQWtUvW793gwN95k',
    //             week: 2,
    //             day: 2
    //         },
    //         {
    //             name: 'w02d03',
    //             summary: 'VSSL Mockup Pt. 1, Object Oriented Programming (OOP), Classes, Factories',
    //             description: 'This lesson was focused on classes and different methods to go along with them. But, to start, we went over a VSSL mockup where much like the other mockup we did, starts with us creating the html for a webpage based on an image. Following this, in our morning lesson, we discussed classes, what they are, and why we need them. We also went over "this" and what it does as well as how to add methods to a class to use for a multitude of things. In the afternoon, we once again went over subjects that were related to classes but a specific one in particular. We discussed factories and how they\'re used to produce many objects all with similar blueprints. We also discussed inheritence and how to "extend" classes.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w02d03',
    //             recording: 'https://generalassembly.zoom.us/rec/share/PWQWIa0NzfbAWe7VMLDsOfBuk2Xf2Um4M5_l7j3c7FfS7K2PrVHjTnb1g7jNcD_J.QIhUplP6kJfjUb-K',
    //             week: 2,
    //             day: 3
    //         },
    //         {
    //             name: 'w02d04',
    //             summary: 'VSSL Mockup Pt. 2, Spacebattle',
    //             description: 'We start off this day by finishing our VSSL mockup by adding some CSS to it. Nothing out of the ordinary with this excerise, the same thing we normally do for mockups. However, for both the morning and the afternoon we did one big lesson/lab. Every student was tasked with building a browser game where you battled alien space ships. This game, spacebattle, involved you, the player, deciding if you wanted to attack or retreat every turn. If you choose to attack, you attack the alien ship, followed by it attacking you, and this goes on until one or the other dies. Every alien ship had a random number of health, damage, and accuracy and you yourself had a set number of health, accuracy, and damage.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w02d04',
    //             recording: 'There is no recording for this day',
    //             week: 2,
    //             day: 4
    //         },
    //         {
    //             name: 'w02d05',
    //             summary: 'Supply Mockup, DOM intro, jQuery',
    //             description: 'Today started off much like the previous days with another mockup. Our morning exercise consisted of us writing both the HTML and CSS for a website based on an image we were given. Following this, in our morning lesson, we were introduced to the DOM (Document Object Model) in our browser. We learned some DOM commands to interact with the page even though it may only be temporary. Next, in the afternoon, we learned how to link jQuery to our HTML files and use it for user interactivity. We also went over a few basic commands in jQuery to get a feel for it\'s use case.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w02d05',
    //             recording: 'https://generalassembly.zoom.us/rec/share/fnNcxeNQwhmraJi68g9UjFW4lqpRG2hOj00lNBwrU2YCvjeKqwNSaeEE9Hun2xAy.Upxl0mzsPCL2BgOB',
    //             week: 2,
    //             day: 5
    //         },
    //         {
    //             name: 'w03d01',
    //             summary: 'Intro to Media Queries, DOM Manipulation with Functions and Loops, Populating the DOM, DOM events',
    //             description: 'In this lesson we really focused on the DOM and how to manipulate it. But, before that happened, we went over media queries in our morning exercise. We essentially just went over the basics on how to change our formatting depending on the size of the screen. Then, in the morning lesson, we started to dig into the DOM. We learned how jQuery and JavaScript tie together to add data to the DOM and display it on the webpage. We also learned how to do this with loops and function to make many elements in the DOM at once. Then, in the afternoon lesson, we discussed what browser events are and how to add event listeners to listen for things like click events.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w03d01',
    //             recording: 'https://generalassembly.zoom.us/rec/share/KV63RjZ1gdYGSXkdKbUTCLMcxnq52fRl6_oR09af8ASllQd7PD2uYvbgkUSs-YpK.kudmVNV4pffULZjq',
    //             week: 3,
    //             day: 1
    //         },
    //         {
    //             name: 'w03d02',
    //             summary: 'Modals, Event Bubbling, DOM capturing input, Iteration, Targets',
    //             description: 'Our morning exercise to start the day was an introduction to modals. We learned how to build out modals and the use cases for them. Next up, in the morning lesson, we went over the event parameter in jQuery. jQuery has event listeners and when that event occurs, the passes the event parameter into the listener. With this we can access things like event.currentTarget to find the specific item that the event was preformed upon. This can be useful for clicking on an image for example. It allows you to target that specific image in your event handler. Then, in the afternoon we went over how to capture user input through things like a form. Using jQuery, we an target specific pieces of a webpage for users to interact with and use that interaction to add or remove data.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w03d02',
    //             recording: 'https://generalassembly.zoom.us/rec/share/uwnj-BwmIaeDQPNIp3B30L83Ke7iZkPUutrNXK57RDmiRpKK0KTe6SRbLNDFbr8.t2Ve20l5FzQD-04u',
    //             week: 3,
    //             day: 2
    //         },
    //         {
    //             name: 'w03d03',
    //             summary: 'DOM, DOM Events in a Loop',
    //             description: 'For the morning exercise on this day we mostly just played around with the DOM and discussed slightly more about how it works I believe. Following this, in our mornign lesson, we began discussing DOM events inside a loop. We were shown how to do this using an example where we generated 150 squares and were tasked to give each square it\'s own click listener. In the afternoon we did what was essentially the same thing but instead of adding click listeners to each square we added 1000 squares with a mouseover listener that would color them.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w03d03',
    //             recording: 'https://generalassembly.zoom.us/rec/share/c5bPztf_esGQ3uGiJ6NCPy2Bz4YFW3APr1UUE5VICRioAgResdBOMVnQMb5cIv-4.EBYFuVWApQeOyAqj',
    //             week: 3,
    //             day: 3
    //         },
    //         {
    //             name: 'w03d04',
    //             summary: 'Flying Newspaper (CSS transitions/animations), AJAX, APIs, Code Organization',
    //             description: 'We start off this day with an introduction to CSS animations. The task was to make a newspaper spin and increase in size over the course of a few seconds and this was done using keyframes. Next up, in the morning lesson, we learned about APIs and how to pull from them. We learned the syntax for an API pull using AJAX as well as how t ouse parameters to get the data we needed. From there, we could input it into the DOM or do really whatever we wanted with the data. Then, in the afternoon, we were given some code organization tips. Just some basic ideas to help keep things tidy like storing all of your global variables in an object instead of having them all hanging around. Finally, after all of this, we were introduced to Project 1.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w03d04',
    //             recording: 'https://generalassembly.zoom.us/rec/share/a7dzmyusbNjpYT9yLeAEv_hTlsN2DSEeimKeDQG6DAnVq8_9txrheqHF2oHvm9BA.jztqJKRJKtB28N45',
    //             week: 3,
    //             day: 4
    //         },
    //         {
    //             name: 'w03d05',
    //             summary: 'Deploying to Github Pages',
    //             description: 'There wasn\'t much to do on this day seeing as projects were coming up so all we had was a lesson on how to deploy our projects to Github Pages and then we went into project approvals to get our ideas approved and move into making them. There are no notes on it or recordings so there isn\'t too much to take away from this day.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w03d05',
    //             recording: 'There was no recording for this day.',
    //             week: 3,
    //             day: 5
    //         },
    //         {
    //             name: 'Week 4',
    //             summary: 'Project week. No classes, just working on projects and doing daily check-ins to make sure we were making ample progress',
    //             description: '.',
    //             lessonNotes: '.',
    //             recording: '.',
    //             week: 4,
    //             day: 1
    //         },
    //         {
    //             name: 'w05d01',
    //             summary: 'Bootstrap, Intro to Express/Params and Routing, installing NPM (Node package manager), setting up Nodemon, Back End',
    //             description: 'With project 1 under our belts, there was a lot to unpack moving into the next section of the program. We were now into the "full stack" development section where we had to learn some back end principles to build servers and make our web applications more viable. But, before we did any of that, we learned about bootstrap in our morning exercise. It\'s a simple CSS framework to help with styling and making things look a little prettier. Then, moving on from that, we learned about how to install NPM, Express, and how to use express in the morning lesson. We began to setup server and build routes using Node Package Manager and any packages we might need, such as express, to handle our requests. Next, in the afternoon, we learned how to read URL parameters and how to properly route through the internet. We learned about URL parameters and queries that are used to make web results more specific and route the user to the correct webpage for their usecase.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/2_full_stack_dev/w05d01',
    //             recording: 'https://generalassembly.zoom.us/rec/share/NVeQRFUFybtIVpcEwp1DrepOl361Wm-rOy59wa_y-IuoKvY97_-hG2WZaU6Wcge9.18Uu_FqJb_sUIDT8',
    //             week: 5,
    //             day: 1
    //         },
    //         {
    //             name: 'w05d02',
    //             summary: 'Word Frequency, REST: Index, Show, MVC (Models Views Controllers), EJS',
    //             description: 'This day started out with a JavaScript warm up called Word Frequency. Essntially, we were tasked to make a function that, when given a string, would return and object that displays each work as the key and how many times it was said in that sentence as the value. Later on, in the morning lesson, we learned about REST and RESTful routing. This taught us the 7 RESTful routes and the proper paramters and actions to have for each. This is the basis for how to create proper, readable servers with intuitive routes. That being said, we focused on the index and show routes in this lesson. The index route lists all the elements in your givin dataset in a more general, summarized form whereas the show route shows an individual element in much more detail. Moving on to the afternoon, we learned about MVC or Models, Views, and Controllers. MVC is essentially an explanation to keep track of what things are and what they do. Your models are the blueprints and structures for each piece of data being added to the database, your controllers are the collections of all the routes and they handle of all the different requests to make sure they are sent to the right places, and your views are the different pages you built out for the viewer specifically using the .ejs file type rather than .html. We use .ejs because ejs files allow us to integrate JavaaScript directly into our webpages along side our HTML. Anytime there is a page or something for the user to actually see, that goes into the views folder. Essentially, these tips are mostly for organization and readability for other developers.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/2_full_stack_dev/w05d02',
    //             recording: 'https://generalassembly.zoom.us/rec/share/OodZkKMpxnYOy19BwozdYYUi1Raz_c9HrVV7b-fZkTAL5ny_XdiWlJix6dranAw9.BBup0c9fdDox6OjY',
    //             week: 5,
    //             day: 2
    //         },
    //         {
    //             name: 'w05d03',
    //             summary: 'REST: New and Create routes, cURL, Postman, and Static Assets',
    //             description: 'On this day there actually was no morning exercise, we simply did our outcomes homework instead. However, once we got into the morning lesson, we learned about two more RESTful routes, new and create. These two routes are essentially exactly what you would expect, they allow you to add another element to your database. This ties into the index and show routes we used before as the index would include this new route and the show would, well, show it. We learned how to use a form on our new route\'s webpage to collect this new data and input it into our existing data. Finally, we also learned how to redirect the user after they submit something through the form. In the afternoon, we learned about cURL and Postman. Both curl and postman are used to test our route and see the functionality without having to use a browser to prompt certain requests. The notes only go over curl but postman does essentially the same thing and is a free, easy to use, seperate application. We also learned how to setup a public "static" folder to house our assets such as CSS and JavaScript. The way express and servers in general interpret files makes it so that we cannot just simply have CSS or JavaScript files to use in our ejs pages lying around. We need to add them to a seperate folder and tell the server that those are static assets to be used throughout to use them properly.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/2_full_stack_dev/w05d03',
    //             recording: 'https://generalassembly.zoom.us/rec/share/658CCn4puacptMpb1ibfEn2FZsQoXZQWd5UhOnL524898y9-aZdn1NpthZOCLJex.P2nXfzLHCqqx-Z9T',
    //             week: 5,
    //             day: 3
    //         },
    //         {
    //             name: 'w05d04',
    //             summary: 'C.R.A.P., REST: Delete, Edit, and Update routes, Method Override',
    //             description: 'On this day we explored the last 3 routes in RESTful routing. But, before this, we went over C.R.A.P. in our morning exercise. C.R.A.P. stands for Contrast, Repetition, Alignment, and Proximity. Essentially, it is an acronym to help us remember essential styling methods to make intuitive, effective styles to please the user. Then, in our morning lesson, we learned how to create a delete route. We had to learn method how to install and use the package method-override to send a delete request off of a form. Then, in the afternoon, we learned about making the edit and update routes were we used a form to select a specific element in the database and change as many aspects as we would like.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/2_full_stack_dev/w05d04',
    //             recording: 'https://generalassembly.zoom.us/rec/share/yp5GsCz6WMoOgIAlJGf86s2SPlyLVYp4DKoXCCD_jJPxLjH8DRo3FznEeSrs__ru.egFMQ_HtXEKSmjUm',
    //             week: 5,
    //             day: 4
    //         },
    //         {
    //             name: 'w05d05',
    //             summary: 'Forms, MongoDB, Mongoose, Schemas, ODM (Object Document Model)',
    //             description: 'The first thing we went over on this day was an in-depth dive of forms. We learned the different between the "value" and the "placeholder" attributes and how to go about fixating text areas to a certain size. Following this, we learned how to install mongo, a resource for building out local databases. Then, in the morning lesson we went over what mongo was, how to get it up and running, how to properly use it and a few commands it has, how to insert databases, collections, and new documents into your database, and a few other basic uses for MongoDB. Then, in the afternoon lesson, we discussed Mongoose. In this lesson we went what ODM is, how to install the mongoose package, how to use it as a dependancy, how to make a schema for your data to follow along with, and how to use mongoose to run similar commands to those you would run in the MongoDB shell to find and manipulate data.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/2_full_stack_dev/w05d05',
    //             recording: 'https://generalassembly.zoom.us/rec/share/YhdsQJqh5uacX_86KGQxl-Xeo7qIDj5PH7_Wt0SpNFko_x0sd0OfwmL1DEyCTCHW.jHooGRN9sI6UL-NO',
    //             week: 5,
    //             day: 5
    //         },
    //         {
    //             name: 'w06d01',
    //             summary: 'Loop the Loop, Greatest Sum Function, Build and Express App, Connect Express to MongoDB, How to Make Index, Show, and Create routes with Mongoose',
    //             description: 'The main thing we went over on this day was how to bring it all together and make a proper Express App using MongoDB as our database instead of a client side array. But, before any of this, we went over a common interview question in our morning exercise. We were tasked to loop through embeded arrays and find the largest sum of the row, column, or diagonal. This was a difficult one but the solution is in the notes. From there, in the morning lesson, we went over how to set up create, new, show, and index routes using our database rather than our client side data. Then, later on, we learned how to "seed" given data into a database so we wouldn\'t have to hit the create route for each piece of data.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/2_full_stack_dev/w06d01',
    //             recording: 'https://generalassembly.zoom.us/rec/share/TZ3ImlmIcz62PbKRjgzmHeJsDNbQeuwU2OmBaw-wsgPs-NhIC0a0PnV7y9-2H7v3.yD84Hq0dOkVr-gRn',
    //             week: 6,
    //             day: 1
    //         },
    //         {
    //             name: 'w06d02',
    //             summary: 'EJS Partials, C.R.U.D. (Create, Read, Update, Destroy) App, How to Make Delete and Update Routes with Mongoose, Controllers, Express.Router',
    //             description: 'The morning exercise for this day was EJS partials. We learned how to write partials and how to call them in other EJS files to make certain parts of our webpages consistent throughout our entire app and keep our code DRY. Then, in the morning lesson, we learned the last few pieces to our CRUD (Create, Read, Update, Destroy) app using RESTful routes. We learned the edit and delete routes and how the interact with our database to remove or update data. Later, in the afternoon, we learned about express.router and how to use it to add our routes to our controllers folder rather than including them all in our server file. This helped keep things clean and organized for anyone who may need to update the code in the future.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/2_full_stack_dev/w06d02',
    //             recording: 'https://generalassembly.zoom.us/rec/share/mazlC-lfduvktjJD_mLptBZriQ4xdn4I_wyscD3TBvQR62nzobJjc_cNBfUYK6Bo.0onXv1tO8yaeeiFg ',
    //             week: 6,
    //             day: 2
    //         },
    //         {
    //             name: 'w06d03',
    //             summary: 'Sessions, Authentification, User Login, Bcrypt',
    //             description: 'We didn\'t have a morning exercise on this day because it was a Wednesday and we decided to work on Outcomes work instead in that time gap. However, in our morning lesson, we learned about sessions, how to encrypt users passwords, and what environment vairables are. There was a lot of good information about how to properly setup sessions and encrpytion on user passwords here so this information is good to know. We learned how to create a session and how to destroy one when the user logs back out of their account. We also learned how to update user information. There was no afternoon lesson on this day because we were introduced to Project 2.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/2_full_stack_dev/w06d03',
    //             recording: 'https://generalassembly.zoom.us/rec/share/c9g7inr-5AST4g1k4jfvtRIZUyeJC1-A76OwSqLtGmao4I7dUtsmRd4vlqgA46EF.FckRARBAArIVoxH- ',
    //             week: 6,
    //             day: 3
    //         },
    //         {
    //             name: 'w06d04',
    //             summary: 'Heroku, Relational Data',
    //             description: 'This day was fairly short because we were about to begin our project work. The only thing we went over on this day was how to deploy our server to Heroku. This was a little complicated but if you follow the steps we went through in the lesson you should be alright.',
    //             lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/2_full_stack_dev/w06d04',
    //             recording: 'https://generalassembly.zoom.us/rec/share/GQLnFYy2C2u7NPLpEk51RISl7H48jFS3A53221Ke-Df2rH6KykCx4A17i4r301HD.13VlyDWa09vS9Hni',
    //             week: 6,
    //             day: 4
    //         },
    //         {
    //             name: 'w06d05',
    //             summary: 'Project 2',
    //             description: 'There was no class on this day, we just had to work on our projects.',
    //             lessonNotes: 'None',
    //             recording: 'None',
    //             week: 6,
    //             day: 5
    //         },
    //         {
    //             name: 'Week 7',
    //             summary: 'Project 2',
    //             description: '.',
    //             lessonNotes: '.',
    //             recording: '.',
    //             week: 7,
    //             day: 1
    //         },

        // ], (err, createdData) => {
        //     console.log(Days)
            res.redirect('/')
        // }
    // )
})

module.exports = router