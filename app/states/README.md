The `app/states` directory is where all of our application's states are defined.

This folder contains a hierarchy of all application UI states. Each state's module and configuration definition can be 
found here within a directory structure that mirrors the state chart mapping of the application.  However, if an application is small in size, you can utilize the 
`app.states.js` file to handle all of the `ui.router` state configuration.

A state corresponds to a "place" in the application in terms of the overall UI and navigation. 
A state describes (via the controller/template and view properties) what the UI looks like and does at that place. 
Your application UI can transition from one state to another when certain event is triggered. 
UI can be in only one state at a time (a.k.a current state), but child state still activates its parents. 

Any developer, looking inside the states/ directory should get a clear idea what UI states your application supports.