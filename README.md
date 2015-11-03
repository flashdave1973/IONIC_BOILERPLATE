The best place to start with Ionic is their [documentation page](http://ionicframework.com/docs/).

Ionic currently best supports iOS 7+ and Android 4.1+.


# What is Ionic?
Ionic is the open source HTML5 Mobile Framework for building amazing, cross-platform hybrid native apps with HTML, JavaScript, and CSS.

We built Ionic because we wanted a framework that focused on building hybrid native apps, rather than mobile websites. We wanted this framework to be obsessive about great design and performance. A framework that left the past behind and focused on the future where mobile devices could make HTML5 feel native.


Install Instructions
=================

### Prerequisites

Install [NodeJs](https://nodejs.org/)

Install Bower ```npm install -g bower``` (if you have permission errors on OSX, ```sudo ```!!)

### Installation

Clone the repo - use directions in stash



```
cd <project-name>
```

You'll then use npm to install Cordova and Ionic globally.

```bash
$ npm install -g cordova ionic
```

### Commands

##### Use npm to install dependencies locally (on OSX, use ```sudo ```!!)

```bash
$ npm install
```

##### Next you will need to Bower install additional components locally (on OSX, use ```sudo ```!!)

```bash
$ bower install
```

##### Gulp Commands

* `gulp` or `gulp dev` - run a Dev Build (see below for details)
* `gulp prod` - run a Prod Build (see below for details)
* `gulp test` - run all Karma tests using karma.conf.js
* `gulp halftest` - run a Dev Build, then run all Karma tests using karma.conf.js
* `gulp fulltest` - run a Prod Build, then run all Karma tests using karma.conf.js
* `gulp jsdoc` - compile JavaScript documentation from the ./app directory


### Additional Commands

* `ionic serve` to start the ionic server
* `ionic platform add <platform_type>` to add the appropriate files for an "android" app or an "ios" app
* `ionic build <platform_type>` to build the code into a 
* `ionic emulate <platform_type>` to start an emulator for the the app
* `cordova plugin add <plugin-name>` to add a cordova plugin to the build


#### Dev Build

* Create a config module with environment variables targeting DEVELOPMENT environment
* Copy static assets such as fonts, icons, images, etc to the ./www directory
* Concatenate application JS files and copy to the ./www directory
* Concatenate SASS/LESS/CSS files and copy to the ./www directory
* Convert HTML files to JS and seed Angular's $templateCache with them and copy to the ./www directory
* Concatenate JS and CSS dependencies and copy to the ./www directory
* Clean up any temporary directories created during the build
* Launch browser for cross browser/device bugging
* Launch watch tasks to automatically build and reload application when source files are changed


#### Prod Build

* Clean the ./www directory
* Create a config module with environment variables targeting PRODUCTION environment
* Copy static assets such as fonts, icons, images, etc to the ./www directory
* Concatenate application JS files and copy to the ./www directory
* Concatenate SASS/LESS/CSS files and copy to the ./www directory
* Convert HTML files to JS and seed Angular's $templateCache with them and copy to the ./www directory
* Concatenate JS and CSS dependencies and copy to the ./www directory
* Clean up any temporary directories created during the build
* Minify any CSS or JS output files from previous steps -------- NOT WORKING

#### Gulp Config File

There are a number of configurable options located in ./gulp/config.js

* config.server: configuration for browserSync instance
* config.clean: configuration for clean and post-clean tasks
* config.dist: The output directory for the build files
* config.ENV: Environment variable configuration, the key:value pairs entered here will be included in the config module as constants for use throughout the application
* config.styles: configuration for the various css build tasks available
* config.scripts: configuration for script build tasks
* config.content: configuration for copying of static assets to build output directory
* config.templates: configuration for creationg of Angular $templateCache
* config.test: karma config file, testFiles for array of files to run tests against
* config.dependencies: arrays for 3rd party JS and CSS files to include in app-dependencies.js and app-dependencies.css, respectively.


#### JSDoc Tasks

Documentation for the application can be generated based on the JSDoc style comments included in the source code.  In order to generate these docs you
will need to run the follow gulp tasks in order:

* `gulp jsdoc`
* `gulp docServer`
* `gulp openDocs`