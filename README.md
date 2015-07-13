#Getting Started With Node.js

This is a seed repo for anyone interested in building or experimenting with a Node.js server.

##What's Included:

1. Twitter Bootstrap
2. jQuery
3. Twitter Bootstrap JS
4. Underscore JS
5. Custom JS
6. Twitter Bootstrap CSS
7. Custom CSS
8. Node.js
9. Express
10. Body Parser
11. MongoDB

##If you're not already set up to play around with a Node server, you may have to take a few initial steps:

1. Install Homebrew and Node

  * Install Homebrew from the Command Line:

  `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master`

  * Install Node from the Command Line:

  `brew install node`

2. After you're done getting your environment ready to experiment with node, fork and clone this repo to your computer:

  * From the Command Line, cd into the directory where you'd like to save your Node.js project.

  * Clone this repo:

  `git clone https://github.com/bgamwell/nodejs-seed.git`

  * cd into the **nodejs-seed** directory

  * Install all included modules from the Command Line:

  `npm install`

  * Start your server from the Command Line using nodemon:

  `nodemon`

  * If you haven't installed nodemon, you can do so from the Command Line:

  `npm install -g nodemon`

  3. Finally, to access this repo's database functionality, make sure you have MongoDB installed on your computer:

   * Update your brew packages using from the Command Line:

   `brew update`

   * Install MongoDB from the Command Line:

   `brew install mongodb`

   * Create a directory for MongoDB to save data:

   `sudo mkdir -p /data/db`

   * Ensure you have permission to read and write from this directory:

   `sudo chown -R $USER /data/db`

   * You can start your server with the **mongod** command, and begin interacting with it using the **mongo** command. Note that you will need to open multiple tabs in your Terminal to run Node and Mongo servers at the same time.

  4. Now, you're ready to get started!!!
