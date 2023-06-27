# react-native-base

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

<MaterialCommunityIcons name={'movie-open'} size={22} color={'blue'} />```