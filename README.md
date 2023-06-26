# react-native-base

## Table of contents
1. [What is React Native](#atom_symbol-what-is-react-native)   
2. [Getting Started](#rocket-getting-started)
3. [Bonus - React and Hooks](#bonusthe-beginners-guide-to-react)
4. [Important topics](#important-topics-to-have-a-basic-knowledge-of-the-react-native-library)
5. [React Router](#arrow_right_hook-react-router)
6. [Authentication](#lock-authentication)
7. [Build your first app](#technologist-build-your-first-app)

<br/>

## :atom_symbol: What is React native

`React Native` is a tool that lets you build awesome mobile apps using JavaScript and React 😎. It's developed by Facebook, and it's super cool because it allows you to write code once and run it on both iOS and Android 📱. So you don't have to worry about learning different programming languages for each platform.

With React Native, you can take all your web development skills and use them to create mobile apps 🚀. You can reuse components, styles, and even some business logic from your React projects, making development faster and more efficient. Plus, you get the added benefit of native-like performance and access to device features like 📷.

Under the hood, it uses a special bridge to communicate between JavaScript and the native components of your mobile device. This allows your app to look and feel just like a regular native app, with smooth animations and good performance 🎉. It's a fantastic tool that empowers developers to create stunning mobile experiences with ease 👍.

## :rocket: Getting Started

### The official documentation
There is no better way to get started in React native than the official documentation. [Here](https://reactnative.dev/docs/0.71/getting-started) you will find a brief description of the main concepts as well as some examples where you can change the code and see what it does in real-time. The goal here is for you to explore and get into React Native.

### (BONUS)The Beginner's Guide to React
Since React Native is built on top of React JS, it's helpful to have some knowledge of React if you're new to both. Don't worry, though, they're not exactly the same! Here's a free React course that covers essential concepts shared by React and React Native. It's important to note that while they share some similarities, they have distinct differences in their usage and implementation. So, feel free to explore the course to grasp the core concepts, but don't stress about becoming an expert in React if your focus is on React Native. Happy learning! 📚🎓🚀

 [The Beginner's Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-react). It is a 28-part course with short lessons where you'll learn many interesting things like how to:

* What is JSX and how to use it effectively with React
* Create simple and reusable React components
* What are hooks and how to create your own
* Make HTTP requests

## :arrow_right_hook: (BONUS) React Hooks

Hooks are a feature introduced in the React 16.8 version. It provides an alternative to writing class-based components and offers an alternative approach to state management and lifecycle methods.

Since they were already introduced in the [The Beginner's Guide to React](#the-beginners-guide-to-react) we give you two suggestions on how to expand your knowledge in this subject:

1. Go through the [official documentation](https://reactjs.org/docs/hooks-intro.html) for an overview of how the hook work (or experienced React users)
2. Learn how they work in a more in-depth way with the [Build Advanced Components with React Hooks](https://egghead.io/courses/build-advanced-components-with-react-hooks-810906cc) course where you will learn how to:
    * Manage React component state with useState
    * Share values throughout an application with Context
    * Build a React compound component
    * Render multiple pages in a Wizard form
    * Handle complex state updates with useReducer

Here is the [github repo](https://github.com/matiasfha/egghead-build-wizard-with-hooks-collection) for that course.

## Important topics to have a basic knowledge of the React Native library:

- **React Native Basics:** Understand the core concepts of React Native, such as components, JSX syntax, state, and props. [📚 official Docs](https://reactnative.dev/docs/0.71/intro-react-native-components) or  [📺 video exemple](https://youtu.be/obH0Po_RdWk?t=1098) </br></br>

- **Components and UI:** Learn how to create reusable components, handle user input, and manage the UI layout using Flexbox. [📚 official Docs](https://reactnative.dev/docs/0.71/components-and-apis) or  [📺 video exemple](https://youtu.be/obH0Po_RdWk?t=1290) </br></br>

- **Styling and Theming:** Explore different styling approaches in React Native, including inline styles, external stylesheets, and third-party libraries for theming. [📚 official Docs](https://reactnative.dev/docs/0.71/stylesheet) or  [📺 video exemple](https://youtu.be/obH0Po_RdWk?t=1611) </br></br>

- **Navigation:** Understand how to navigate between screens and implement navigation features using React Navigation or other navigation libraries. [📚 official Docs - React Navigation](https://reactnavigation.org/docs/getting-started) or  [📺 video exemple](https://youtu.be/obH0Po_RdWk?t=8786) </br></br>

- **Network Requests:** Learn how to make HTTP requests to APIs, handle responses, and manage data retrieval using libraries like Axios or the built-in fetch API. [📚 official Docs](https://reactnative.dev/docs/0.71/network) or  [📺 video exemple](https://youtu.be/obH0Po_RdWk?t=13657) </br></br>

- **State Management:** Explore state management solutions in React Native, such as React Hooks (e.g., useState, useEffect) or state management libraries like Redux or MobX. [📚 official Docs](https://reactnative.dev/docs/0.71/state) or  [📺 video exemple](https://youtu.be/obH0Po_RdWk?t=11216) </br></br>

- **AsyncStorage and Persistence:** Understand how to store and retrieve data locally on the device using AsyncStorage or other persistence libraries. [📚 official Docs - async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage) or  [📺 video exemple](https://youtu.be/obH0Po_RdWk?t=11216) </br></br>

- **Debugging and Error Handling:** Learn how to effectively debug React Native applications using tools like React Native Debugger or the built-in debugging features in React Native.  [📚 official Docs - async-storage](https://reactnative.dev/docs/0.71/debugging) or  [📺 video exemple](https://youtu.be/obH0Po_RdWk?t=995) </br></br>

- **Cross-Platform Development:** Understand the principles of cross-platform development in React Native and how to write platform-specific code when necessary.  [📚 official Docs](https://reactnative.dev/docs/0.71/platform) </br></br>

## 🧑‍💻 Build your first app 👩‍💻

Now that you've got the hang of React Native, let's dive into creating your first app! We'll be using the [TMDB API](https://www.themoviedb.org/documentation/api) to fetch movie data and display it in our application. Of course, feel free to explore other APIs from the awesome list of [public APIs](https://github.com/public-apis/public-apis) if you prefer something different.

With the TMDB API, we can build a movie database app where users can search for movies, TV shows, and even get information about crew members.

But don't worry, you won't be alone on this journey! Within this repository, you'll find several branches that contain a base project to compare with your progress. Each branch represents a different part of the project, and it evolves as we delve into different topics. Remember, this base project is just a starting point, and you're encouraged to unleash your creativity and go beyond its scope!

Happy coding! 🚀🎬🍿



### Starting with the basics

<s>
#### 1. Request an API key
The API is free and available for everyone to use but to make a request you need to create a user account and then [request an API key](https://www.themoviedb.org/settings/api).

#### 2. Create the home page
This is the first page the user will see in your application. Here you can have show the 5 [most popular movies](https://developers.themoviedb.org/3/movies/get-popular-movies) as well as an input to allow the user to search by movies using this endpoint: [Movie Search](https://developers.themoviedb.org/3/search/search-movies)

After clicking the search button — and if there is something to search for —, the user should be redirected to another page where the search results will appear (5 for each category is enough).

| 💡 **Useful tip** |
|:--|
| At the beginning you can focus on just having a simple input that records the user input and a button that, when clicked, redirects the user to the page `/results?search=user-input`, where you can just show the user input inside a `div`. After that you can increased the complexity by making your requests and showing the results as buttons. That way you can test just the basic structure of your app without having to worry about styles and showing the complete information. |

#### 3. Movie page
This is the page for the movie. Here you can use the URL params to get the movie ID and show the following:
* Details: https://developers.themoviedb.org/3/movies/get-movie-details

#### 4. Connecting everything
Now that we have a specific page for everything we just need to add links so that, in the search results page, when a user clicks a result they are redirected to the specific page.

### Adding some spice 🌶️

#### 1. Add more search options
Update the seach input to allow the user to search by TV shows, movies, or people using this endpoint: https://developers.themoviedb.org/3/search/multi-search.

After clicking the search button — and if there is something to search for —, the user should be redirected to another page where the search results will appear (5 for each category is enough).

#### 2. TV Show page
This is the page for the TV Show. Here you can use the URL params to get the TV show ID and show the following:
* Details: https://developers.themoviedb.org/3/tv/get-tv-details
* Credits: https://developers.themoviedb.org/3/tv-seasons/get-tv-season-aggregate-credits

#### 3. Movie page
Add the credits information to the already built Movie page using the following endpoint:
* Credits: https://developers.themoviedb.org/3/movies/get-movie-credits

#### 4. Person page
This is the page for a person. Here you can use the URL params to get the person ID and show the following:
* Details https://developers.themoviedb.org/3/people/get-person-details
* TV shows: https://developers.themoviedb.org/3/people/get-person-tv-credits
* Movies: https://developers.themoviedb.org/3/people/get-person-movie-credits

### Bonus
<s>As a bonus, and if the rest was too easy for you, you can use the knowledge acquired in the previous steps to deploy your app and show it off.</s> 🚀


## The end

Congratulations! 🎉 You have completed the beginners' guide to React.js. This is the end of this chapter but the beginning of your journey with React.js so feel free to [go back to the start](/README.md) and learn more. After all, it's a never-ending story...