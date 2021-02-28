# hackaton
This is the README for Programista's HackAUBG 3.0 project - Udoma. 

Udoma is a lightweight web app that uses big data to propose home energy efficiency improvements based on user input.
We just NodeJS on our back-end and React on our front-end.

In order to run the server side project:
1) Clone the repository
2) Use NVM 14.15 by typing nvm use 14.15.0
3) Install all neccessary dependencies by using npm install
4) Just type npm start and the server will start at localhost:4200

In order to run the client side:
1) Clone the repository
2) Use NVM 14.15 by typing nvm use 14.15.0
3) Install all neccessary dependencies by using npm install
4) Just type npm start and the server will start at localhost:3000

Concerning the front-end side - we focused on creating a smoother experience but that turned out to be a wrong decision for such a short period
of time especially when none of us are designers. On the server-side - I think we decided to pursue a complex solution that again would take a lot more time to optimize.

We chose NodeJs and React since most of us had experience with it. We do believe that JS is a great technology for startups that need to create quickly an MVP.
At the end of the day we decided to strip down and leave only what is totally necessary for our project. We do feel that we overestimated what we could do over these 2 days with
so little real practical experience which is a great learning opportunity for future hackatons. 

When it comes to scaling - we'd focus on several key aspects:
1) Data security and privacy and implementing some form of encryption infrastructure becase we will be dealing with user data
2) Improve drastically our UX/UI and move it to both mobile environments.
3) Implement a secutre billing environment via Stripe.
4) Totally rehaul our recommendation algorithm based on more research and proposals.
5) Create our own way of crunching data and extracting results from it by using Python. 
