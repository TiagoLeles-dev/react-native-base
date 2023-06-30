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

### (BONUS) The Beginner's Guide to React
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

### Part 1 - Create Components
let's dive into some hands-on practice! 💪 We're going to create two components that we can use directly in our App.js file. In the future, we'll create navigation and screens for different parts of the app. The first component will be a header bar, complete with a title . The second component will be a card 🃏, which will have an image , a title , and some text. With these components, we'll be one step closer to building our awesome app! Let's get coding! 💻😄

### Part 2 - Navigation Install and config
Let's dive into one of the most important parts of mobile development: navigation! In React Native, there's no built-in tool for screen navigation, but fear not, the documentation suggests using React Navigation. 🚀

There are three main types of navigation:

Stack: the most common navigation type, where the system keeps track of the navigated screens in a stack.
Drawer: navigation done through a side menu, usually accessed by swiping from the edge.
Bottom Tabs: navigation using visible tabs at the bottom of the screen.

To implement navigation in our project, we'll need to include React Navigation as a dependency and make the necessary configurations. Just follow the instructions in the documentation, and we'll be smoothly navigating between screens in no time! 📚🔍💻
Firts [Instalation](https://reactnavigation.org/docs/getting-started) Docs.

After following all the instalation steps, follow this link [Stack Docs](https://reactnavigation.org/docs/stack-navigator/) to create and config a new Stack for your app.

### Part 3 - List components
When it comes to displaying information, lists are widely used in both web and mobile development. In React Native, there are multiple ways to create a list, but let's focus on two popular approaches.

The first and simplest method is using the .map function to generate a component for each item in an array, wrapped in a ScrollView. This approach works well for small lists with limited data in each item.

For larger lists with more data, React Native provides a native component called FlatList. This component leverages the operating system's capabilities to efficiently manage the list, loading and rendering only the necessary data as it becomes visible. This optimizes performance, allowing the app to handle large lists seamlessly. Check out the documentation here for more details and usage examples. 📜📋✨


### Part 4 - Tab Navigation

Now that we've built our page with FlatList, and we have multiple screens, navigating through links and buttons alone can become more complex and less intuitive. To address this, let's explore another popular navigation pattern in mobile apps: tab navigation.

Tab navigation allows users to switch between different sections or views of the app by tapping on tabs located at the bottom or top of the screen. This type of navigation can be used in conjunction with stack navigation, where each tab can have its own stack of screens, or the tabs can be part of a single stack.

To implement tab navigation, we'll make use of a popular library called React Navigation. This library provides a simple and intuitive way to set up tab navigation in our React Native app. Check out the [React Navigation documentation](https://reactnavigation.org/docs/tab-based-navigation) for more details on how to get started.

Let's enhance our app's navigation and provide a more user-friendly experience with tab navigation! 🚀🔖📲

### Part 5 - Icons

🎨 Icons in React Native
In both web and mobile development, icons play a crucial role in conveying information quickly and efficiently to users. While React Native doesn't come with a built-in icon library, you can leverage community-driven solutions. One of the most popular and widely used libraries is "react-native-vector-icons," available on npm [link](https://www.npmjs.com/package/react-native-vector-icons).

To use this library, you'll need to follow a specific installation process. We'll use the following [tutorial](https://aboutreact.com/react-native-vector-icons/) as a reference: React Native Vector Icons Tutorial

Here are the steps involved:

- Install via npm
- Run Pod install
- Configure Android (add the "apply from ..." line to the gradle file)
- Configure iOS (add the necessary entries to the info.plist file)
- npx react-native start
- npx react-native run-android
    or
- npx react-native run-ios

By following these steps, you'll be able to incorporate a wide range of icons into your React Native projects and enhance the visual appeal and usability of your app. Let's use some icons! [List of icons](https://oblador.github.io/react-native-vector-icons/) 😄🚀

```
// Replace the for the /name of the icon font on the list
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

...
inside the render
...

<MaterialCommunityIcons name={'movie-open'} size={22} color={'blue'} />
```


#### Request an API key
The API is free and available for everyone to use but to make a request you need to create a user account and then [request an API key](https://www.themoviedb.org/settings/api).


| **Adding some spice 🌶️**                                                                                                                                                                                                                                                                                                                                               |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| #### 1. Add more search options Create one seach input to allow the user to search by TV shows, movies, or people using this endpoint: https://developers.themoviedb.org/3/search/multi-search.  After clicking the search button — and if there is something to search for —, the user should be redirected to another page where the search re                      |
| #### 2. TV Show page This is the page for the TV Show. Here you can use the URL params to get the TV show ID and show the following: *  Details: https://developers.themoviedb.org/3/tv/get-tv-details *  Credits: https://developers.themoviedb.org/3/tv-seasons/get-tv-season-aggregate-credits                                                                     |
| #### 3. Movie page Add the credits information to the already built Movie page using the following endpoint: *  Credits: https://developers.themoviedb.org/3/movies/get-movie-credits                                                                                                                                                                                 |
| #### 4. Person page This is the page for a person. Here you can use the URL params to get the person ID and show the following: *  Details https://developers.themoviedb.org/3/people/get-person-details *  TV shows: https://developers.themoviedb.org/3/people/get-person-tv-credits *  Movies: https://developers.themoviedb.org/3/people/get-person-movie-credits |

### 🌟 Bonus
If you found the previous steps too easy and want an extra challenge, why not take it a step further and build and deploy your app? This will give you a chance to showcase your skills and share your creation with others. So go ahead, unleash your creativity, and let your app shine! 🚀


## 🎉 The end
Congratulations! 🎉 You have completed the beginner's guide to React Native. This marks the end of this chapter, but it's just the beginning of your journey with React Native. If you want to continue exploring and learning more, feel free to go back to the start and dive deeper into the world of React Native. Remember, it's a never-ending story, and there's always more to discover! So keep coding and enjoy the journey! 😄👨‍💻🚀