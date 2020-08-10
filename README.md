# ReactWordsFrequencyCounter
A React application that shows the top n words with high frequency in a text file.

Technologies used:
1. ReactJS
2. Redux 
3. ExpressJS
4. NodeJS
5. Axios
6. Hosting on firebase

** Redux and Express are not necessary for these little projects, but I've used those libraries here to display my knowledge in these techologies. **

Word Counter is built on ReactJS and its all the other friend libraries. 
I've followed Atomic way of building component trying to make most of the possible components independent of the other. and by reducing the dependency on other components will make the application more stable and easy to develop.

A beautiful UI from scratch has been designed by me. Complete front end with static data has been created.
First we will initialize the application with "#yarn dev" so that it concurrently initiates both "#yarn start" and "#node server.js".
Then, once the application is rendered, one of the component will use "useEffect" from react hooks to perform an fetch funtion through an end point in express server.
Redux store and and a reducer is created to store the processed data so that it reduces the need to fetch the same data again and again.

** I've implemented till here **

Further down the road-map, according to the plan, once the data has been fetched a function that will count the frequecy of all the words in the data. And then it is sorted and stored in the Redux. So when ever N is entered, we will fetch the n top words from the redux store and will display as a list.
