# ROCK PAPER SCISSORS

## How It Works?

The name of this game is Rock Paper Scissors. This game requires two players, Player One and The Computer.
Player One is given three options to make their play from and the computer will generate a random choice from these options.
Each Player will only be required to make one choice per game round.
The game options are Rock, Paper and Scissors. The first player to score 5 wins wins the over all game.

![responsive-img.png](doc/screenshots/responsive-img.png)

## What I was able to accomplish using JavaScript
For this project, instead of creating multiple html pages to display the different pages of the game, I created different sections
in one html file and used CSS and Javascript to make them hidden and/or reappear by the click of a button. This was achieved by using
EventListeners in Javascript to 'listen' for the assigned button click to revealed each appropriate section. Javascript allowed me to
create functions. I was able to call these functions throughout my application allowing them to execute the code written within.
Using Javascript I was able to generate a random number from 0-2 and use these values to allow the computer to make plays against the player.
This gaves the player the feel of playing with a real life user adding excitement since you dont know what the player will chose.
Using Javascript I was able to increase the scores of each player and the Rounds as the game is played. I enjoyed creating this project and using Javascript.

## Targeted Audience
- Adults and children of all ages
- People who like to try their luck and might be feeling lucky
- Persons who may not have another person to play with
- Persons looking for a simple yet exciting game to play

## User Stories
- Provides an exciting way to pass the time
- Allows players to keep track of scores
- Gives the user a target score, this gives the player a final score to play towards and not play aimlessly without any objective
- Displays buttons on each page to easily navigate throughout the game
- Allows the user the option to reset the game and the option to play again once the game is over
- Provides information on who won each round and what play each player chose
- Displays to the user what round they are currently playing and the next round thats coming up


##  Site Aims
- Provide a fun and interactive game for All ages
- To keep track of the current game scores
- To inform users of who won the over all match
- A simple and easy-to-find set of instructions
- Provide an easy self-explanatory way to navigate through the different screens
- To give the user feedback on wins, losses, and draws during rounds

## How Can This Be Achieved
- Create a family friendly game that persons of all ages can play
- Increase each players scores when they win a match
- Display winning and losing results throughout the game
- Keeping the design simple and not over-load with much unnecessary information

## Features

When you first visit the site you are taken to the Introduction Screen.
This Screen Welcomes you to the game and clearly displays the name of the game. 
An image of two hands playing Rock, Paper, Scissors helps give you an indication of 
the games nature. Two buttons are below this image. These will take you to the 
'How to play' screen with instructions and rules on the game. The 'Start' button
will take you to the game page where you can start playing the game.

![intro-page.png](doc/screenshots/intro-page.png)

## How To Play Screen

This screen has a simple layout which explains how to play the game and gives you the rules of the game. There is a 'Back' button that takes
you back to the Home screen.

![how-to-play-screen.png](doc/screenshots/how-to-play-screen.png)

## The Game Screen

![game-screen.png](doc/screenshots/game-screen.png)

This is where the game is played. The name of the Game is shown to the top of the page and three buttons labeled Rock Paper and Scissors are displayed below. These are the choices given to the player to play the game.

Below this, a box displays the Rounds and the choices that were chosen by both the player and computer.

As the game is played the round will continue to show the current round that is being played and the round that will be played next.

![round-box.png](doc/screenshots/round-box.png)

Both the user and computer scores are tracked and displayed for the user.

![score-img.png](doc/screenshots/score-img.png)

The reset button allows the user the reset the game and bring all scores to 0 and rounds back to Round 1. (This can only be used if a player has not yet
scored 5 wins.

The Home button takes you back to the Home Screen. This button will also reset all scores returning them to their original state.

![home-and-reset-btn.png](doc/screenshots/home-and-reset-btn.png)

After a player reaches 5 wins the play Buttons: Rock paper and Scissors will become disabled. Text will appear announcing the Winner of the match
in the rounds box.

At this time they're two buttons enabled, the Home Button and the Play Again Button. These buttons will both reset the game
However, the Home button will take you to the home screen and the Play again button will allow the user to remain on the game screen
as to start a new game.

![winner-page-display.png](doc/screenshots/winner-page-display.png)

### Coding Languages Used
HTML, CSS and JavaScript.

### Frameworks, Libraries & Programs Used

sketch.com - Used to create wireframes.

Git - For version control.

Github/PHP Code Editor - To save and store the code files for the website.

[Google Fonts](https://fonts.google.com/)- To choose and import my desired fonts.

[imageresizer](https://imageresizer.com/) - For resizing images

[Readme.so](https://readme.so/) - To be able to write and preview the Read me at the same time.

[Stack Overflow](https://stackoverflow.com/) - For more javascript information.

[W3Schools](https://www.w3schools.com/) - For more javascript information.

[Am I Responsive?](https://ui.dev/amiresponsive) - To show the website on a range of different devices.

Wave Accessibility checker - To check the site is accessible to visually impaired Persons.

Google Dev Tools - This helped with responsive design and troubleshooting.

### Future Implementations
In the future I would like to add the following features:

- Add a 2 player option so users can play with a friend
- Allow the option for the user to enter their own name and replace 'You'

## Testing

Testing was performed with the following devices/browsers:

- Desktop computer: (2560 x 1440) display
- Google Chrome
- Firefox
- Microsoft Edge
- MacBook Pro: 13.3-inch (2560 × 1600) display
- Google Chrome
- iPad Pro: (2732 x 2048) display
- iOS Safari
- iPhone Xr: 828 x 1792 display
- iOS Safari

I also utilised the Chrome and Firefox developer tools to
simulate the display on other devices and test the responsiveness of the site.

## Deployment


- The site was deployed to GitHub pages. the steps to deploy are as follows:
    - In the GitHub repository, navigate to the settings tab
    - Select the pages link from the setting menu on the left hand side
    - Under the GitHub Pages from the source section drop-down menu, select the master branch
    - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
    - The live link can be found here - [Rock-Paper-Scissors Live Site](https://ayishasandiford.github.io/rock-paper-scissors-pp2/)


## Solved Bugs / Fixes
1) I tried calling the play function directly when either the Rock, Paper or Scissors buttons were pressed. 
However, the play method takes a parameter which is 0, 1 or 2 depending on if the player choose Rock, Paper or Scissors respectively.
So instead of using the play function for each button’s event listener, I instead used a separate and unique function for each 
event listener and from that function, I called the play button with the appropriate parameter value depending on which button was pressed.
I knew which button was pressed based on the function that responded to the event.

2) I received an error after trying to use a variable before it was declared. I then made sure I declared all of my variables before using them.

3) I placed some of my code into functions so to reuse it in different areas of my application 


## Styles and Features
- I chose a background color of lightblue because I thought the color went back nicely with the game.
- I played around with different fonts at first. I was looking for a playful type of font and I chose playfair Display font to give this effect


## Credits

## General reference:

I relied upon [W3schools](https://www.w3schools.com/), and stack overflow for general references throughout this project.
I also got a additional information on Javascript from [Youtube - simpleDev](https://www.youtube.com/watch?v=Bcz3zVogiI0&t=31s)

### Honorable Mentions

This project could not have happened without the support of the following people listed in no particular order:

- David Bowers - My Mentor. I couldn't have been paired with a better Mentor! I am forever thankful for your guidance and support.
- Kyle Skeete - Provided feedback on the project. Big thanks!
- Omar Fitzpatrick - Who gave constructive criticism and help point out thing that I might had over-looked
- Code Institute - For giving me this opportunity and providing me with unlimited resources, step by step videos and tons of support!
- The Code Institute Slack community where I was able to find answers to problems in JavaScript
- And my amazing Fiancé Steven Rawlins who has been my rock and my biggest cheer leader from day one. Thank you for your continuous support every step of the way!

## Media

- Image from [FreePik](https://www.freepik.com/): By Upklyak  - Intro Page Image
- Favicon from [Flaticon](https://www.flaticon.com): Favicon


## Validator Testing

#### HTML

No errors were returned when passing through the official W3C Validator.

![HTML Validator](doc/screenshots/html-validator.png)

#### CSS

No errors were returned when passing through the official (Jigsaw) Validator [CSS Results](https://jigsaw.w3.org/css-validator/validator)

![CSS Validator](doc/screenshots/css-validator.png)

## Lighthouse

I generated a lighthouse report on both desktop and mobile view. Both results were good.
![Lighthouse generated](doc/screenshots/lighthouse-generated.png)

## Jshint

No errors were found when Javascript was checked using [Jshint](https://jshint.com/)

Pesticide was also used to ensure proper structured layout. These results all came back good!




