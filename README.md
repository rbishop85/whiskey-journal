# Single Malt Whiskyy Journal
An app where users can record their reviews, tasting notes, and any other information of Single Malt Scotch Whiskies that they have tried.

## Deployed Application
[Deployed Application](https://whisky-journal.herokuapp.com/)

## GitHub Repository
[Scotch Whisky Journal Repo](https://github.com/rbishop85/whiskey-journal)
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

MIT License

Copyright 2022 &copy; Robert Bishop, Andrew Ensor, Andres Covas, and Casey Robison.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
## Technology
### NPM Packages
[bcrypt](https://www.npmjs.com/package/bcrypt)  
[chart.js](https://www.npmjs.com/package/chart.js)  
[connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)  
[dotenv](https://www.npmjs.com/package/dotenv)  
[express](https://www.npmjs.com/package/express)  
[handlebars.js](https://www.npmjs.com/package/handlebars)  
[express-session](https://www.npmjs.com/package/express-session)  
[mysql2](https://www.npmjs.com/package/mysql2)  
[sequelize](https://www.npmjs.com/package/sequelize)

### Languages
- [![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)
- [![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.com/)
- [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)

### Libraries

- [![JQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)](https://www.jquery.com/)
- [![Bootstrap CSS](https://img.shields.io/badge/-BOOTSTRAPCSS-orange)](https://www.getbootstrap.com/)
- [![Google Fonts](https://img.shields.io/badge/Google%20FOnts-303030?style=for-the-badge&logo=googlefonts&logoColor=white)](https://www.materializecss.com/)
## Model List
<b>User Model</b> -- Allows individual users to log into the application and view their own personal Scotch Whisky journals.  

<b>Distillery Model</b> -- To connect individual distilleries with the unique expressions of Scotch Whisky they produce.  

<b>Expression Model</b> -- Contains information about each unique distillery expression. Specifically: Name, Age, ABV, and barrel type.  

<b>Journal Entry Model</b> -- Which contains all the information provided by both the user and the models.


