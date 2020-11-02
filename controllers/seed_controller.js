const express = require('express')
const Days = require('../models/days.js')
const router = express.router()

router.get('/', (req,res)=> {
    Days.create(
        [
            {
                day: 'w01d01',
                summary: 'Introduction to SEIR, Terminal, intro to JS, Conditionals, Booleans, Loops, install Node, data types.',
                description: 'The first day. On this day the first thing we went through was a basic orientation and what was expected of us as our morning exercise. This orientation was full of really great advice as well as a lot of tips and tricks about the best ways to learn and how to succeed in the course that can be found in the "instructor notes" section of the w01d01 file in the repo. Next, we went over the terminal, how to navigate it, and how to install Node JS in our morning lesson. It was then that we learned the basics of the terminal and common commands like how to list directories, create directories, move directories, move into directories, etc., and common shortcuts. Finally, in the afternoon lesson, we went over JavaScript data types and learned how to create conditionals as well as "for" and "while" loops.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w01d01',
                recording: 'https://generalassembly.zoom.us/rec/share/Ngy8MVseoqbz-z6NgB4wdnRyziodlxwwvDF_QZKx-1Z5c90_R8qCtHedI8dQzq61.oiKjMUFPuu7ZWRXU',
                week: 1
            },
            {
                day:'w01d02',
                summary: 'More tips and tricks, Git and GitHub, CSS, SSH keys.',
                description: 'The first thing we went over this day was tips and tricks in the morning exercise. This was about what you would expect it to be. We went over more shortcuts, an app called Rectangle for screen management, some VS code shortcuts, how to install extensions and comment out code, and proper indentation of code. Then, in the morning lesson, we went over the basics of Git, Github, and how to set everything up on those fronts. We learned how to set up an SSH key and use it on your GitHub account, create repositories, clone repositories, push, pull, stage, and commit files to make changes to repositiories, and creating branches and assing them to a repo. In the afternoon, we were given a run down on CSS. We were mostly just shown proper syntax for CSS, how to import fonts, and some of the more common styling options.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w01d02',
                recording: `Morning Lecture (There was no afternoon recording uploaded) --> https://generalassembly.zoom.us/rec/share/vnfowq9VS3rz_Mg4K9I--H-HNElwGWg1KXE9yzhGaG67M9zdrqyBLOFlWDqckciD.-5B4YWdnB4gKuz6E`,
                week: 1
            },
            {
                day: 'w01d03',
                summary: '"git pull upstream master", Math Methods, Control Flow, Control Flow with Loops, Arrays and iteration, Array Methods',
                description: 'On this day we did our first of many "git pull upstream master"\'s. In our morning exercise we learned how to make our first pull from the GA class repo. Next, as part of our morning lesson, we learned about the many Math methods in JavaScript. These methods are used to generate or manipulate numbers using commands like Math.random, Math.floor, Math.round, etc.. We also went over control flow and control flow with loops. Control flow is essentially just the order in which pieces of code are executed. We discussed how to understand control flow, especially with more tricky JS topics like loops. Finally, in the afternoon, we went over Array Iteration and Array Methods. We went over how to use loops to iterate over an array and access the values within as well as the common array methods such as indexOf, push, pop, reverse, shift, splice, sort, etc.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w01d03',
                recording: 'https://generalassembly.zoom.us/rec/share/9D4S55P0--7BzxUOpZpmjSXX9Fvq-1lF-agmbucGarya-WEX6ZQ-1hc1vIpZ7x_m.O3edZHUNcC182Z5A',
                week: 1
            },
            {
                day: 'w01d04', 
                summary: 'HTML Mockup Pt.1 (designing HTML for a website based off an image), JavaScript Functions, Scoping, const and let variables.',
                description: 'The first thing we did on this day was our HTML mockup for our morning exercise. We were givin and image of a webpage and asked to design the HTML for it in our own file. Following this, in the morning lesson, we went over functions in our morning lesson. Functions are a very large topic and they\'re incredibly useful in JS. We learned how to write them, name them, call them, and set parameters for them. Later on, in the afternoon lesson, we went over scope. Scope is essentially where you can access variables in your JavaScript. Javascript as some set limitations to where certain vairables can be used depending on where they are declared so this is something we went over in this lesson. We also learned the difference between "const" and "let" variables and how to use each.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w01d04',
                recording: 'https://generalassembly.zoom.us/rec/share/QCnhj1DuF3YogLIUpUnhUhb_rqvTWK9irXfgKaZg-ndJF5W1lzeZGvZrzl4fFZbZ.b486qeRHcoIeyRRh',
                week: 1
            },
            {
                day: 'w01d05',
                summary: 'HTML Mockup Pt.2 (adding CSS to our Pt.1 mockup based off an image of a webpage), Psuedo code, Execute JS in a webpage, Browser Alerts, Browser Prompts, Nested Functions, Loops and Functions, Sequence of Execution, When to use a Function, Objects, Object Properties',
                description: 'There is a lot to unpack in this day. It all starts with a morning exercise of HTML Mockup Pt.2. In this exercise we simply added CSS to our existing HTML that we made in the previous part on the day before. Then, we got into "Program Design." This morning lecture gave us a massive overview of Psuedo code, JavaScript, how to use and execute JavaScript in a browser, browser alerts, browser prompts, nested functions, reset state, sequence of execution, loops and functions, and why to use Javascript. So, in short, we essentially went over JavaScript and why we use it in more detail, how to interact with users in the browser, functions nested inside of other functions, and how loops and functions interact with each other. In the afternoon, we were introduced to objects. We learned the difference between objects and arrays and why we would use one or the other. We also discusses how to use objects, manipulate objects, and add/change object properties.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w01d05',
                recording: 'https://generalassembly.zoom.us/rec/share/4I2JQyPZsXQuCGIZRxGbaXekcnCwikrZrAP7AgJo1ybA2K7qoL-z5TZKvwX5B2le.Kmhi7bb7hUt8y_fi',
                week: 1
            },
            {
                day: 'w02d01',
                summary: 'Beginner\'s Guide to UX/UI, Object-ception (the different datatypes in objects), Combining Datatypes',
                description: 'This lesson was very focused on objects and arrays. First, in the morning exercise, we went over UX/UI (User experience and User Interactions). This was a fairly brief exercise where we went over the basics of how to enhance the user experience of our apps and what cluttered bad UX looked like. Next, in the morning lesson, we went over "Object-ception." Essentially, we discussed how to use different datatypes like arrays and functions inside of an object. We went over how to properly nest them, how to access them, how to iterate over arrays in objects, how to iterate over objects inside an object, how to use an object within an array, and just how to combine objects, arrays, and functions overall. Next, in the afternoon, our lesson discussed looping with nexted arrays/objects and combining objects, arrays, and functions more than one level deep. This covered things like how to access specific items in objects or arrays returned from functions.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w02d01',
                recording: 'https://generalassembly.zoom.us/rec/share/FPQdmvdSp1_mRgdy2zkVeCWFcjYCVg1COoQAjih9iWMTZs7HtVjfeTqpo5zSigHB.tiKqoEZEWXHUsLyM',
                week: 2
            },
            {
                day: 'w02d02', 
                summary: 'Intro to Flexbox, Callbacks, Array Methods with Callbacks, Debugger, setTimeout',
                description: 'First, our morning exercise, flexbox. We basically just learned about flexbox and the commands it had to potentially make our CSS easier. Next, in the morning lesson, we went over quite a bit. We discussed higher order functions, callback functions, how to use the two together, setTimeout and how to use it, how to use Debugger both in the browser and in node, how to read errors, proper indentation, and just overall best practices with naming our code and making it readable. So, we essentially went over callback functions and how to properly organize code and name variables within it. Next, in the afternoon, we went over the many different array methods and how to use callbacks within them. This helped give us a better understanding of array methods and the best ways to use them to solve simple problems in our code.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w02d02',
                recording: 'https://generalassembly.zoom.us/rec/share/j8jlbNaEy9vqq1UxoTz7I0UH33LcCJUAgDT3Ctu5_DmQPgkCS_sUU0PrjngWlyo9.sQWtUvW793gwN95k',
                week: 2
            },
            {
                day: 'w02d03',
                summary: 'VSSL Mockup Pt. 1, Object Oriented Programming (OOP), Classes, Factories',
                description: 'This lesson was focused on classes and different methods to go along with them. But, to start, we went over a VSSL mockup where much like the other mockup we did, starts with us creating the html for a webpage based on an image. Following this, in our morning lesson, we discussed classes, what they are, and why we need them. We also went over "this" and what it does as well as how to add methods to a class to use for a multitude of things. In the afternoon, we once again went over subjects that were related to classes but a specific one in particular. We discussed factories and how they\'re used to produce many objects all with similar blueprints. We also discussed inheritence and how to "extend" classes.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w02d03',
                recording: 'https://generalassembly.zoom.us/rec/share/PWQWIa0NzfbAWe7VMLDsOfBuk2Xf2Um4M5_l7j3c7FfS7K2PrVHjTnb1g7jNcD_J.QIhUplP6kJfjUb-K',
                week: 2
            },
            {
                day: 'w02d04',
                summary: 'VSSL Mockup Pt. 2, Spacebattle',
                description: 'We start off this day by finishing our VSSL mockup by adding some CSS to it. Nothing out of the ordinary with this excerise, the same thing we normally do for mockups. However, for both the morning and the afternoon we did one big lesson/lab. Every student was tasked with building a browser game where you battled alien space ships. This game, spacebattle, involved you, the player, deciding if you wanted to attack or retreat every turn. If you choose to attack, you attack the alien ship, followed by it attacking you, and this goes on until one or the other dies. Every alien ship had a random number of health, damage, and accuracy and you yourself had a set number of health, accuracy, and damage.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w02d04',
                recording: 'There is no recording for this day',
                week: 2
            },
            {
                day: 'w02d05',
                summary: 'Supply Mockup, DOM intro, jQuery',
                description: 'Today started off much like the previous days with another mockup. Our morning exercise consisted of us writing both the HTML and CSS for a website based on an image we were given. Following this, in our morning lesson, we were introduced to the DOM (Document Object Model) in our browser. We learned some DOM commands to interact with the page even though it may only be temporary. Next, in the afternoon, we learned how to link jQuery to our HTML files and use it for user interactivity. We also went over a few basic commands in jQuery to get a feel for it\'s use case.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w02d05',
                recording: 'https://generalassembly.zoom.us/rec/share/fnNcxeNQwhmraJi68g9UjFW4lqpRG2hOj00lNBwrU2YCvjeKqwNSaeEE9Hun2xAy.Upxl0mzsPCL2BgOB',
                week: 2
            },
            {
                day: 'w03d01',
                summary: 'Intro to Media Queries, DOM Manipulation with Functions and Loops, Populating the DOM, DOM events',
                description: 'In this lesson we really focused on the DOM and how to manipulate it. But, before that happened, we went over media queries in our morning exercise. We essentially just went over the basics on how to change our formatting depending on the size of the screen. Then, in the morning lesson, we started to dig into the DOM. We learned how jQuery and JavaScript tie together to add data to the DOM and display it on the webpage. We also learned how to do this with loops and function to make many elements in the DOM at once. Then, in the afternoon lesson, we discussed what browser events are and how to add event listeners to listen for things like click events.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w03d01',
                recording: 'https://generalassembly.zoom.us/rec/share/KV63RjZ1gdYGSXkdKbUTCLMcxnq52fRl6_oR09af8ASllQd7PD2uYvbgkUSs-YpK.kudmVNV4pffULZjq',
                week: 3
            },
            {
                day: 'w03d02',
                summary: 'Modals, Event Bubbling, DOM capturing input, Iteration, Targets',
                description: 'Our morning exercise to start the day was an introduction to modals. We learned how to build out modals and the use cases for them. Next up, in the morning lesson, we went over the event parameter in jQuery. jQuery has event listeners and when that event occurs, the passes the event parameter into the listener. With this we can access things like event.currentTarget to find the specific item that the event was preformed upon. This can be useful for clicking on an image for example. It allows you to target that specific image in your event handler. Then, in the afternoon we went over how to capture user input through things like a form. Using jQuery, we an target specific pieces of a webpage for users to interact with and use that interaction to add or remove data.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w03d02',
                recording: 'https://generalassembly.zoom.us/rec/share/uwnj-BwmIaeDQPNIp3B30L83Ke7iZkPUutrNXK57RDmiRpKK0KTe6SRbLNDFbr8.t2Ve20l5FzQD-04u',
                week: 3
            },
            {
                day: 'w03d03',
                summary: 'DOM, DOM Events in a Loop',
                description: 'For the morning exercise on this day we mostly just played around with the DOM and discussed slightly more about how it works I believe. Following this, in our mornign lesson, we began discussing DOM events inside a loop. We were shown how to do this using an example where we generated 150 squares and were tasked to give each square it\'s own click listener. In the afternoon we did what was essentially the same thing but instead of adding click listeners to each square we added 1000 squares with a mouseover listener that would color them.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w03d03',
                recording: 'https://generalassembly.zoom.us/rec/share/c5bPztf_esGQ3uGiJ6NCPy2Bz4YFW3APr1UUE5VICRioAgResdBOMVnQMb5cIv-4.EBYFuVWApQeOyAqj',
                week: 3
            },
            {
                day: 'w03d04',
                summary: 'Flying Newspaper (CSS transitions/animations), AJAX, APIs, Code Organization',
                description: 'We start off this day with an introduction to CSS animations. The task was to make a newspaper spin and increase in size over the course of a few seconds and this was done using keyframes. Next up, in the morning lesson, we learned about APIs and how to pull from them. We learned the syntax for an API pull using AJAX as well as how t ouse parameters to get the data we needed. From there, we could input it into the DOM or do really whatever we wanted with the data. Then, in the afternoon, we were given some code organization tips. Just some basic ideas to help keep things tidy like storing all of your global variables in an object instead of having them all hanging around. Finally, after all of this, we were introduced to Project 1.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w03d04',
                recording: 'https://generalassembly.zoom.us/rec/share/a7dzmyusbNjpYT9yLeAEv_hTlsN2DSEeimKeDQG6DAnVq8_9txrheqHF2oHvm9BA.jztqJKRJKtB28N45',
                week: 3
            },
            {
                day: '',
                summary: '',
                description: '',
                lessonNotes: '',
                recording: '',
                week: 0
            },
            {
                day: '',
                summary: '',
                description: '',
                lessonNotes: '',
                recording: '',
                week: 0
            },

        ]
    )
})