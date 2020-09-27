# TallerGAP
Repository to track the GAP excersises by Felipe Jimenez.

## Python Largest Word Excercise
Python version 3 or higher is required to execute this script. <br /><br />

In order to run the largest word exercise, please enter to the `PythonExercise` folder. <br /><br />

To run the script, enter to cmd on current location, and run command `python3 largestWord.py`. The file in which the 
words are is `wordsFile.txt`, it can be modified or replaced as long as the name and format keeps the same.

To run the script unit tests, enter to cmd on current location, and run command `python3 testLargestWord.py`. These tests 
are suported by data files located on the `testData` folder, these files should not be modified.

## Cypress Shopping Excercise
Node.js version 10 or higher and npm is required to execute this script. <br /><br />

In order to install the framework, please enter to the `ShoppingAutomation` folder, then, run via cmd the command
`npm install`, this will install all required dependencies. <br /><br />

After the framework is propperly installed, the tests may be executed headless using the command `npm run cy:run:headless`, 
also, the tests may be executed headed in chrome using the command `npm run cy:run`. <br /><br />

The tests can also be executed via the Cypress GUI, using the command `npx cypress open`, and selecting the
`shoppingCart` test.