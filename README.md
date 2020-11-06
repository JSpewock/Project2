# Project2
Project two, what a wild ride. I made this app using Node.js, Express, Mongoose, EJS, Bcrypt, and Method Override. My idea for this project was I wanted to create a one-stop-shop for GA students when they were looking to review class work. I wanted a place where you could easily find the topics covered on a certain day as well as the notes and the recording for that day all in one place. So, I started off by "seeding" or collecting all the data I needed for every day of class and then I wrote my own description for every day as well for a more in depth refresher. From there, I built the routes for my app with express and built out webpages for viewing, editing, and adding data with EJS. Once I was done with routing I added styles and then finally I added a login system using Bcrypt to make it so that only the admin can make changes to data.

The part that took me the longest was probably collecting all the data and writing in the descriptions. It was a lot of data to sift through and it took me quite some time. The only unsolved problem that I had with my catalog was I never found a solution to making it so that whenever you added data it added them in order of the day rather than simply when they were added. If you added w08d04 first and then w08d03 it would display day 4 before day 3 which would be annoying. That would be a nice thing to add but I'll end up adding more data to it in the future anyway so I might get around to it.


Link to project: 
https://ga-video-collection.herokuapp.com/days
