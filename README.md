# whiskey-journal
An app where users can record their personal reviews of various whiskeys they've tried.

# User Stories
AS a user I want be able to review different types of whisky.
WHEN I log in 
I WANT to access a form through which I can submit details about the whisky I want to review
which will generate a flavor wheel, along with other info in an object in a database for each individual entry
eventually I WANT others to upload their personal reviews.
SO THAT I can publish in a forum type of format, alongside pictures and links of recommended brands.


# models list
User model, to allow individual users to log-in and see their own private content. 
Distillery model, to connect individual whiskies with the same distiller. 
Expression model, for the specific variations on a given brand. 
Journal entry model, for all of the user's individual entries into their journal (to be added each time the user tries a new whisky). 