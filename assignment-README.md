# MVP (Solo) Project

### Objective: Build a full-stack MVP from scratch in under 2 Days

## Basic Requirements

The goal of this project is learning what it takes to go from a blank page to a functional web application. You will create all the parts of the app: the database, server, client, and everything in between.

Work to complete the requirements listed below. Although the Help Desk is available for small technical challenges, it is up to you to code this project on your own. You may rely any public online materials or code from past sprints if you wish - as long as you are learning and not copy/pasting!

The following requirements are divided up into the 3 main pillars of an application - the database, server and client. How you choose to implement these requirements is up to you but guidelines are provided below.

### Housekeeping
##### Complete by Day 1, 12:30pm 

- Brainstorm an idea (implement a technology, build a product, make art, etc).
- Wireframe the idea (draw out what the finished product would look like).
- Determine what portion of this could be done in 24 hours.
- Make a list of features and cut the scope down to only the most essential. 
- Cut the above scope in half again.
- Determine what technology makes sense for your project 
- Make sure you have all the necessary global tools installed
  - These include but are not limited to:
  - Node and npm
  - nodemon
  - git
  - Webpack (for React builds)
- Initialize a git repo with `$ git init` (remember to commit often!)
- Add and update the `.gitignore` file if necessary (you will want to ignore config files)
- Create the `package.json` file and add any necessary dependencies as you work through the project.
  - Don't forget to add any npm scripts you might need. _hint_: Maybe a script to start your server?
- **Do not forgo good planning. Planning is half the battle.**

### Data Persistence _(Optional; recommended if applicable)_
##### Complete by Day 1, 3:30pm

- Consider what your app needs to store with an MVP-first mindset
  - A single table/collection might be all you need
  - Use knex/mongoose to connect to your Database
  - Use knex/mongoose to build your table(s)/schema
  - In a `models` directory, create your model(s) with methods to
    - `fetchAll` from a table/collection and
    - `addOne` to that table/collection
    - etc.
- Consider using Firebase, an online NoSQL database that you can use from the front-end directly (via a library)

### The Server
##### Complete by Day 1, 7:00pm 

The server should provide static-file serving and a RESTful API which can be used by the client-side code. Node 6+ supports most [common ES6 features](http://kangax.github.io/compat-table/es6/#node6). Consider writing your back-end code in ES6.

- In your entry point (index.js), complete a server that accepts HTTP requests
- Create a router
  - The handlers should make use of your models
- Test your server in Postman if necessary

### The Client
##### Complete by Day 2, 2:30pm

The client application should be a single page application, served via the server's static file service. It comprises code that's necessary to interact with the API through a user interface.

For this portion, although you could use any front-end technology, most people prefer Angular. 

### Deployment
##### Complete by Day 2, 5:30pm

- Deploy the app! (Be warned, Heroku does not play nice with SQLite. What would it take to use a different database in your production environment?)
- Make sure you create necessary files like the Procfile, and add any environment variables you might need. 

## Extra Credit

- Add Authentication to your app. Try using JWT in your implementation.
- **Have fun with CSS**. A lot of developers have (somewhat) unfounded fears of making things look good but it's a necessary skill.
- Write a couple of tests. Emulate past sprints.

## **Prepare to pitch / demo your project, tomorrow @ 6:30pm.**

## Resources

### Inspiration

- [Trees in Santa Monica MVP](https://pure-brook-58155.herokuapp.com/)
- [Energy Consumption MVP](http://mtham8.github.io/DVUSEnergy/#panel2)
- [Facial Recognition MVP](http://www.dmusicb.com/)
- [Subway Metro Map MVP](http://metrom8.colinzarnegar.com/map)
- [Connect Five MVP](https://aqueous-island-89621.herokuapp.com/#/play)
- [Flash Cards](https://flashyourself.firebaseapp.com/)

### APIs

- [Open Weather API](http://openweathermap.org/api)
- [SoundCloud API](https://developers.soundcloud.com/docs/api/guide)
- [Nutrition API](https://developer.nutritionix.com/v1_1/quick-start/upc-scan)
- [Pokemon API](http://pokeapi.co/)
- [List of Public APIs (100+)](https://github.com/toddmotto/public-apis)
- [Getty Images](http://developers.gettyimages.com/en/)
