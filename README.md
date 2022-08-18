# Infinite scroll demonstration to ditch pagination in your next project!

Pagination becomes a necessary thing in a web application when the amount of data is huge. Traditional pagination seperates the data in number of pages, so that the user toggles through the pages to vie the fetched data. The user falls into a loophole of clicking a button after viewing 10-20 data. Traditional pagination hugely affect the **user ecperience** and increases clicks by a huge margin.

The modern way of handling large number of data is `INFINITE LOADING` , everytime the user reaches the end of the previously loaded data client side *javascript* requests the next set of data from the server and thus eliminates clicks and loads data as long the user scrolls in the web application.

The best thing about this demonstration is that it can be integrated in any project and you can use any **back-end language of your choice!**
It uses `client side javascript` to do all the calculations necessary thus removing the dependency on server side languages. 

## Tech-stack
Vanilla javascript, Mustache.js and AJAX.  **That's it! Nothing more than that.** <br/>
(In my case I used nodeJs as my server side language but you can use any backend language of your choice as long as you are sending **JSON** response). <br/>

## How to Use the Project?
**Step - 1**  Clone the project using ```git -clone https://github.com/srijitasd/infinite-scroll.git```. <br/>
**Step - 2** Open command prompt in the project directory and run ```npm install``` to install all the dependencies required to run the project. <br/>
**Step - 3** In the command prompt run ```npm run dev``` to start the development server. <br/>
**Step - 4** Open your browser and visit ```localhost:3000/```. That's it! <br/>
