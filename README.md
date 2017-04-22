<h4> Tools Used </h4>
 
 <h6><b>React</b></h6>
 
 <p>A javascript view library that is used for front end development</p>
 
  <h6><b>Redux</b></h6>
 
 <p>An application state management library that helps with updates to data passed around in the application and maintaing the state with the help of reducers.</p>
 
  <h6><b>Bootstrap</b></h6>
  
  <p> Used to style a web application </p>
  
<h4> Application Structure </h4>
  <p> React - Contains all reusable components - Memorials in the Memorials folder, Memorial list item and NavBar in them. </p>
  <p> State changes take place in the reducer affecting the entire application and the state of the Memorials component contains the state of the toggle buttons - Tried to avoid using component state as much as possible. </p>
  <p> The reducer is pure because in this case an API is being used and in order for the code to possibly be scalable and potentially have aync calls, the reducer should be pure. Made the business logic for the redux state changes in the actions </p>
  
 <h4> Setup </h4>
 <p>git clone (repo) </p>
 <p>npm install </p>
 <p> npm start </p>
 <p>Go to localhost:8080 in browser </p>
