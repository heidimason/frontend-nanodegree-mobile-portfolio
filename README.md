####Part 1: Optimize PageSpeed Insights score for index.html

I used ngrok to test the PageSpeed score of index.html

To increase the score to at least 90, I made the following changes:
* Decreased size and quality of pizzeria.jpg
* Inlined CSS in style.css
* Moved inline Google Analytics script and related script (http://www.google-analytics.com/analytics.js) to just above closing body tag
* Implemented script to load Google font after initial painting of page
* Minified print.css
* Created .htaccess file and set expiration dates for static resources

####Part 2: Optimize Frames per Second in pizza.html

To reach a frame rate of 60 fps when scrolling, I made the following changes:
* Created "scroll" variable ( var scroll = (document.body.scrollTop / 1250) )
* Decreased number of pizzas created on page from 200 to 30

To make time to resize pizzas less than 5ms, I made the following changes:
* In function changePizzaSizes, replaced "querySelectorAll" method with "getElementsByClassName"
* In the same function, moved variable declarations for 'dx' and 'newwidth' outside 'for' loop
