# Single Malt Whiskyy Journal
An app where users can record their reviews, tasting notes, and any other information of Single Malt Scotch Whiskies that they have tried.

## Deployed Application
[Deployed Application](https://whisky-journal.herokuapp.com/)

## Preview Image
![Application Preview Image](... link to image.gif)

## Description 
The purpose of this app is designed to help Single Malt Scotch Whisky lovers around the world record their impressons of whichever whiskey they are enjoying. Through a combination of pre-provided data, like the distillery, unique whisky release, barrel-type, alcohol-by-volume (ABV), and the location of the distillery, as well as user-provided data, like their own tasting notes and color description, the Single Malt Scotch Whisky Journal is a unique, fun, and easy way to maintain a personalized list of your whisky memories.

## Table of Contents

- [Usage](#usage)  
- [Contributors](#contributors)  
- [License](#license)  
- [Technology](#technology)
- [Model List](#models)

## Usage

* Log into the Scotch Whisky Journal with your uniqe User ID and Password.  
* Click 'New Entry'  
* Select from a pre-seeded drop-down list of Scotch Whisky Distilleries.  
* Select from a pre-seeded drop-down list of unique expressions that has been loaded from the users selection of distillery.  
* Select the color of the whisky you are tasting from a generally accepted set of colors.  
* Use eight sliders to assign your unique impression of the flavor of the whisky based on generally accepted flavor profiles on a scale of 1 - 10 (1 being weakest, 10 being strongest).  
* Fill in any additional notes you might have of the whisky.  
* Assign a 1 - 5 star rating of the whisky according to your unique impression.
* Once you click the 'submit' button, you can then view your list of whiskies on your private account.
## Contributors
Andres Covas  
Andrew Ensor  
Casey Robison  
Robert Bishop
## License
<p>
MIT License

Copyright 2022 &copy; Robert Bishop, Andrew Ensor, Andres Covas, and Casey Robison.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</p>

## Technology

## Model List
User Model -- Allows individual users to log into the application and view their own personal Scotch Whisky journals.  
Distillery Model -- To connect individual distilleries with the unique expressions of Scotch Whisky they produce.
Expression Model -- Contains information about each unique distillery expression. Specifically: Name, Age, ABV, and barrel type.
Journal Entry Model -- Which contains all the information provided by both the user and the models.


