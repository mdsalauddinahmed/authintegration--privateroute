/*
Basic context api setup:
-----------------------
1.Context Api:share auth state with other components (across the application)
2.create an UserContext
3.ContextProvider with passed children
4.set the UserContert in the index.js
5.To consume the context:export the AuthContext form UserContext
6.Now at Header or Home or anywhere else:use useContext hook to get the info anywhere.
*/
/*
Auth Integration:
---------------- 
1.use get Auth by passing the app form firebase config.

 */