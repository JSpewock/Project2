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
                recording: 'https://generalassembly.zoom.us/rec/share/Ngy8MVseoqbz-z6NgB4wdnRyziodlxwwvDF_QZKx-1Z5c90_R8qCtHedI8dQzq61.oiKjMUFPuu7ZWRXU'
            },
            {
                day:'w01d02',
                summary: 'More tips and tricks, Git and GitHub, CSS, SSH keys.',
                description: 'The first thing we went over this day was tips and tricks in the morning exercise. This was about what you would expect it to be. We went over more shortcuts, an app called Rectangle for screen management, some VS code shortcuts, how to install extensions and comment out code, and proper indentation of code. Then, in the morning lesson, we went over the basics of Git, Github, and how to set everything up on those fronts. We learned how to set up an SSH key and use it on your GitHub account, create repositories, clone repositories, push, pull, stage, and commit files to make changes to repositiories, and creating branches and assing them to a repo. In the afternoon, we were given a run down on CSS. We were mostly just shown proper syntax for CSS, how to import fonts, and some of the more common styling options.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w01d02',
                recording: `Morning Lecture (There was no afternoon recording uploaded) --> https://generalassembly.zoom.us/rec/share/vnfowq9VS3rz_Mg4K9I--H-HNElwGWg1KXE9yzhGaG67M9zdrqyBLOFlWDqckciD.-5B4YWdnB4gKuz6E`
            },
            {
                day: 'w01d03',
                summary: '"git pull upstream master", Math Methods, Control Flow, Control Flow with Loops, Arrays and iteration, Array Methods',
                description: 'On this day we did our first of many "git pull upstream master"\'s. In our morning exercise we learned how to make our first pull from the GA class repo. Next, as part of our morning lesson, we learned about the many Math methods in JavaScript. These methods are used to generate or manipulate numbers using commands like Math.random, Math.floor, Math.round, etc.. We also went over control flow and control flow with loops. Control flow is essentially just the order in which pieces of code are executed. We discussed how to understand control flow, especially with more tricky JS topics like loops. Finally, in the afternoon, we went over Array Iteration and Array Methods. We went over how to use loops to iterate over an array and access the values within as well as the common array methods such as indexOf, push, pop, reverse, shift, splice, sort, etc.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w01d03',
                recording: 'https://generalassembly.zoom.us/rec/share/9D4S55P0--7BzxUOpZpmjSXX9Fvq-1lF-agmbucGarya-WEX6ZQ-1hc1vIpZ7x_m.O3edZHUNcC182Z5A'
            },
            {
                day: 'w01d04', 
                summary: 'HTML Mockup Pt.1 (designing HTML for a website based off an image), JavaScript Functions, Scoping, const and let variables.',
                description: 'The first thing we did on this day was our HTML mockup for our morning exercise. We were givin and image of a webpage and asked to design the HTML for it in our own file. Following this, in the morning lesson, we went over functions in our morning lesson. Functions are a very large topic and they\'re incredibly useful in JS. We learned how to write them, name them, call them, and set parameters for them. Later on, in the afternoon lesson, we went over scope. Scope is essentially where you can access variables in your JavaScript. Javascript as some set limitations to where certain vairables can be used depending on where they are declared so this is something we went over in this lesson. We also learned the difference between "const" and "let" variables and how to use each.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w01d04',
                recording: 'https://generalassembly.zoom.us/rec/share/QCnhj1DuF3YogLIUpUnhUhb_rqvTWK9irXfgKaZg-ndJF5W1lzeZGvZrzl4fFZbZ.b486qeRHcoIeyRRh',
            },
            {
                day: 'w01d05',
                summary: 'HTML Mockup Pt.2 (adding CSS to our Pt.1 mockup based off an image of a webpage), Psuedo code, Execute JS in a webpage, Browser Alerts, Browser Prompts, Nested Functions, Loops and Functions, Sequence of Execution, When to use a Function, Objects, Object Properties',
                description: 'There is a lot to unpack in this day. It all starts with a morning exercise of HTML Mockup Pt.2. In this exercise we simply added CSS to our existing HTML that we made in the previous part on the day before. Then, we got into "Program Design." This morning lecture gave us a massive overview of Psuedo code, JavaScript, how to use and execute JavaScript in a browser, browser alerts, browser prompts, nested functions, reset state, sequence of execution, loops and functions, and why to use Javascript. So, in short, we essentially went over JavaScript and why we use it in more detail, how to interact with users in the browser, functions nested inside of other functions, and how loops and functions interact with each other. In the afternoon, we were introduced to objects. We learned the difference between objects and arrays and why we would use one or the other. We also discusses how to use objects, manipulate objects, and add/change object properties.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w01d05',
                recording: 'https://generalassembly.zoom.us/rec/share/4I2JQyPZsXQuCGIZRxGbaXekcnCwikrZrAP7AgJo1ybA2K7qoL-z5TZKvwX5B2le.Kmhi7bb7hUt8y_fi'
            },
            {
                day: 'w02d01',
                summary: 'Beginner\'s Guide to UX/UI, Object-ception (the different datatypes in objects), Combining Datatypes',
                description: 'This lesson was very focused on objects and arrays. First, in the morning exercise, we went over UX/UI (User experience and User Interactions). This was a fairly brief exercise where we went over the basics of how to enhance the user experience of our apps and what cluttered bad UX looked like. Next, in the morning lesson, we went over "Object-ception." Essentially, we discussed how to use different datatypes like arrays and functions inside of an object. We went over how to properly nest them, how to access them, how to iterate over arrays in objects, how to iterate over objects inside an object, how to use an object within an array, and just how to combine objects, arrays, and functions overall. Next, in the afternoon, our lesson discussed looping with nexted arrays/objects and combining objects, arrays, and functions more than one level deep. This covered things like how to access specific items in objects or arrays returned from functions.',
                lessonNotes: 'https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w02d01',
                recording: 'https://generalassembly.zoom.us/rec/share/FPQdmvdSp1_mRgdy2zkVeCWFcjYCVg1COoQAjih9iWMTZs7HtVjfeTqpo5zSigHB.tiKqoEZEWXHUsLyM'
            },
            {
                
            }

        ]
    )
})