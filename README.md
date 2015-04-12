####Part 1: Optimize PageSpeed Insights score for index.html

I used ngrok to test the PageSpeed score of index.html

To increase the score to at least 90, I made the following changes:
* decreased size and quality of pizzeria.jpg
* inlined CSS in style.css
* moved inline Google Analytics script and related script (http://www.google-analytics.com/analytics.js) to just above closing body tag
* implemented script to load Google font after initial painting of page
* minified print.css
* created .htaccess file and set expiration dates for static resources

####Part 2: Optimize Frames per Second in pizza.html

To reach a frame rate of 60 fps when scrolling, I made the following changes:
* created "scroll" variable (var scroll = (document.body.scrollTop / 1250))
* decreased number of pizzas created on page from 200 to 30

To make time to resize pizzas less than 5ms, I made the following changes:
* in function changePizzaSizes, replaced "querySelectorAll" method with "getElementsByClassName"
* in the same function, moved variable declarations for 'dx' and 'newwidth' outside 'for' loop
