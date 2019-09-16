## Project Setup

Please do the following to setup the project to run locally:

### Pre-setup
1) Run `npm install` from root of the project to install dependencies
2) Run `npm install -g serve` in order to run the build folder locally later

### Run Options
1) To run the build version please do the following:
    - Run `npm build` to create dist folder
    - Once this is complete run `serve -s build`, this should open a server on port 5000, if this is different
    please run the following `serve -l 5000`
2) To run the development build run `npm start`
3) To run tests run `npm test`


### Configuration

This project uses a config file located under the `/public` folder. Change values in here in order to change what is displayed.

### Folder Structure

The project has been split into the following high level sections under /src:

- Components
- Containers
- Core
- styles

#### Components
This contains all reusable React components for this project, these are the lower level elements.

#### Containers
This is the higher level React components, these would generally be used as route end points or just general pages.

#### Core
Core is where all business logic for the application would be situated. This at the moment only
contains services which are reusable pieces of logic. You could als split this and add folders depending on
the scale for your project (an example would be a utility folder).

#### Styles
These just contain global styles for the entire project.

### Thought Process

- I have decided to make use of styled components library to style my react components. There are some global classes that I make use of, 
however for the most part styling is done through styled components. In term of naming I always append styled to the end of these in order
to create easy to read split between that and a regular react component. These styles generally lie at a higher level of a component depending on
how complex it is and the general structure.

- In the services folder there is a communication layer. There is a general abstraction I make over a library or whatever tool
I use for a project when making http calls. This is just to easily allow for me to swap what I want without affecting the overall API that other 
components or services might be using.

- In the time service there were a couple of decisions I decided to make:
    - I decided not to use a library. Although `interval` timers can sometimes be inaccurate, in this case it seemed to be 
    the most simple solution for the problem.
    
    - I have avoided making use of Redux or any form of state control for this and tried to make it as self handling as possible in
    order to reduce complexity. As such I have not used classes as well and tried to keep it light and functional as I can and only exposing 
    what I need from that module
    
    - To add onto this I could of also used something like Observables/PubSub pattern in order to inform a component that the time has changed,
    However I decided that using a simple callback method which the component decided how to utilize instead of a subscription would be a cleaner and leaner
    solution.
    
    - I made use of session.storage to get around one of the 3 timer situations:
        1) You can pass a number in the config.json i.e. 30
        2) You can pass a date string i.e. "Sat Sep 29 2019 21:04:33 GMT+0100 (British Summer Time)"
        3) You can pass a date number  i.e. 1568837073000
        
    Numbers 2 and 3 you can refresh the page and it will continue where you left it. However with solution 1 it creates a date off of this and when refreshing I store this 
    in session.storage which will then allow it to pick up where it left off and not be an issue if you had to open it on a new tab.
    I have left a clear storage method exposed on the timer.service module, even though I dont use it. This is just there in case lets say you
    had web sockets connected that the client and server used to say the timer has changed you could use clearStorage and then create a new timer.
