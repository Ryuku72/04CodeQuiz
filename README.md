![GitHub last commit](https://img.shields.io/github/last-commit/Ryuku72/04CodeQuiz?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Ryuku72/04CodeQuiz?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/Ryuku72/04CodeQuiz?style=for-the-badge)

# Code Quiz
__PROJECT04: 11/03/2020__
<br>
https://ryuku72.github.io/04CodeQuiz/

## Aim // Introduction
This week we looked at how to manipulate the DOM to target, create and manipulate Elements through examples of shopping lists, timers, form applications and targetting exerciese. This assignments aim was to utilize theese leasons coupled with our Google-Fu to find the best means of creating the quiz app that included multiple choice, a timer, a page reset and points allocation.

### Key Concepts of Week 4
* Javascript 
* Targetting the DOM 
* Using QuerySelector and getElementbyID
* setAttribute
* Append
* Intervals
* Local Storage
* Calculations
* Click, Submit, Key events
* eventListener
* stopPropagation for onclick
* match 
* preventDefault for events
* Create display: block
* add, remove Dom classes
* innerHtml, innerText, textContent
* return
* Json.Stringify or GetItem

##  Table of Content
* [Building the Quiz Application](#quiz)
* [Impletement Score and Timer](#time)
* [Adding the HighScore Page](#score)
* [Extra functions, theories and remaining issues](#extra)
* [Additional Information](#ref)

<a name="quiz">

### Building the Quiz Application
Previously in Week 3 we utilized loops to manipulate an array then create a number or symbol. This week we will be creating an Array of Questions for the quiz then using innerText to populate the page and buttons. After watching a number of tutorial on the subject I implemented an array of questions based on Japanese horror cinema which would then populate buttons that were hidden to create my page. 

This issue of populating was not the problem but what objects were hidden and which were generated through createElement. Whilst there is no solid answer on this, from a design prospect its easier to style elements that are hidden then generated. For this reasons I tried to keep generated elements to a minimum. The only problems really began when considering how the start button began the game and how that played with the look of the page. 

I did find an interesting system for CSS and Javascript based on hue's assigning colour to wrong and right answers but this became a big problem later in the process.

I did try use %, vw and vh for the CSS to make the website more responsive. I did how not correctly impletement media queries

<a name="time">

### Implementing Score and Time

This was the first major issue. As stated I had adopted the framework of a premade Quiz and whilst I understood the Javascript of why certain functions were important I didn't realise a singe function should only do a single job. Due how the hue system works and reads the data-set, look at setStatusClass, clearStatusClass and selectAnswer, I thought it could also assign points. It was not till after 2 days of bashing out a solution I realised a new function needed to be implemented just to record points (poinsAndTime function). 

Before correctly implementing the wrong = time reduction feature I had to first install a timer. This wasn't too difficult as I merely had to set a time, assign an interval, target a element and add a trigger. The issue however, unlike score the timer is moving and after constantly experimenting I am still unsure how to reduce the time.

Theory: to minus off time you would need to first pause the timer, save the amount as a variable, apply the penality, start the timer again. I didn't have time to implement this theory.

There was a bug I did create. As the next button does not pull the last Quiz question to the ShowScore page the actual score does not update correctly.

Note: Fixed timer. Issue was that the timer was not global. Once fixed I could minus time from countdown! Works!

<a name="score">

### Adding the HighScore page

Time to use localStorage. After referencing previous activities and changing around the information to match the requirements. This took a little bit to master but there are obvious concepts at play.
* Don't use a create element for your 'localStoary.getItem' then use an existing item as the heading. This creates a weird bug of doubling the results. 
* Be careful of naming variables, there are a couple in play when making your JSON, your Object and your Array
* Make sure if you hide an element on one page that its not needed on another eg. Question Containers and buttons. There was a lot of cleaning up around this

I did run out time to restrict how many characters in the username, the amount of saved usernames and correctly style things

Adding the page reset via window.location.reload function was nice.

<a name="extra">

### Extra functions, theories and remaining issues

Besides implementing a Hue system I did also use a time displaced called wait function which caused an interesting error. 

Currently, the following issues exists
* High Score page needs to be restricted to 5 and styles applied
* FIXED: Need to still implement a function that reduces the timer by 5 seconds when an answer is wrong
* Need to clean up my code
* Need to make the website responsive
* Make the last quiz question update the score before jumping to the showScore function.
* Move the showScore function to the next button and move it away from the last quiz answer.
* Move the Javascript into separate files. Its too big now and should  be separated into Quiz Controls (buttons, timer, points), Quiz main (Questions and body), Save function. Not familiar with multiple scripts. 

<a name="ref">

##### Additional references
W3 Schools
Developer.mozilla.org
Getbootstrap.com
Stackoverflow.com
Resources provided in Slack
Youtube tutorials

## Technology
* HyperText Markup Language
* Cascading Style Sheets
* Visual Studio Code ver 1.42.0
* GitHub
* Google Chrome ver 79.0.3945.130

## Source
Code was originally supplied in the WAUS-CRAW-FSF-PT-02-2020-U-C-MW / Week 4 / Day1 / Homework repository on GitLab (https://waustralia.bootcampcontent.com/the-university-of-western-australia/WAUS-CRAW-FSF-PT-02-2020-U-C-MW/tree/master/Week%204/Day%201)

## Contributor
Joshua K Bader





