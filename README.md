# Interactive Rating Component - Frontend Mentor Challenge
This program allows the user to submit a review between 0 and 5, with a thank you page popping up after submission. This is a challenge from Frontend Mentor.io, where the style and functionality is already layed out. You just need to implement the code to achieve the given style and functionality.

This project turned out to be way harder than I initally expected it to be, or my brain wasn't working (one of the two). I really got stuck on the logic of going from a click event on one of the five rating buttons, to submission with the value of the rating stored. 

One problem I had was figuring out how to make it so that if one button was clicked, and then another button was clicked, the first button would go back to normal. I swear I looked through all of the pseudoclasses and didn't find anything, assuming it must be a Javascript problem. It took me way too long to find the :focus pseudoclass...

Another problem I had was figuring out how to capture the rating value. Really, the whole time I had the answer, but I was defining the ratingValue variable from within the scope of the event listener for the ratings, and I couldn't figure out how to enable that value to be taken and used in the submit event listener. After a decent amount of research and trial and error with different methods I found that you could just declare the variable in global scope, set the value within the rating map event listener, and then the submit event listener would have access to the variable and the value assigned to it.
