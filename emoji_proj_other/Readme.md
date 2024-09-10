# Emoji Search and Display

## Overview
This project is a simple web application that allows users to search for and display emojis based on their description or category. It also includes functionality for copying emojis to the clipboard by clicking on them.

## Features
Search Functionality: Filter emojis by description or category using a search input.
Display Emojis: Show a list of emojis that match the search criteria.
Copy to Clipboard: Click on an emoji to copy it to the clipboard.
Category Filtering: Use predefined buttons to filter emojis by category.
Technologies
HTML: Structure of the webpage.
CSS: Basic styling (if applicable).
JavaScript: Handling of emoji filtering, display, and clipboard copying.
Setup


## Usage
- **Search for Emojis:**

Type a keyword related to the emoji's description or category in the search input box.
The displayed list of emojis will update based on the search term.
- **Filter by Category:**

Click on buttons in the button group to filter emojis by specific categories.
- **Copy an Emoji:**

Click on any emoji displayed in the list to copy it to the clipboard.

Code Structure
index.html: Contains the structure of the webpage, including search input, emoji display area, and button group.
styles.css: (Optional) Styles for the webpage.
script.js: Contains JavaScript code for filtering and displaying emojis, handling search input, and clipboard functionality.

## JavaScript Functions
displayEmoji(searchedData): Filters and displays emojis based on the search input or button value.
search.addEventListener('keyup', function()): Updates the emoji display based on user input.
window.addEventListener('load', function()): Initializes the emoji display on page load.
buttongroup.addEventListener('click', function()): Filters emojis based on category buttons.
Example
Here's a brief example of how the functionality works:

If you enter "smile" in the search box, it will display all emojis related to smiles.
Clicking on a smiley emoji will copy it to the clipboard.
Clicking a category button, such as "Animals", will filter the emojis to show only those in the "Animals" category.
Contributing
Feel free to open issues or submit pull requests to contribute to this project. Suggestions and improvements are welcome!

## Demo
Check out the live version of the project here: [Hosted Link](https://shivamnamdev0007.github.io/JS-assign-20-21/emoji_proj_other/).
