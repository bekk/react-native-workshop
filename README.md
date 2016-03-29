#React Native Workshop

##Setup

To setup your environment, follow the steps [here](setup.md). 

##Introduction
- TODO: Introduction to application (Redux, Navigation, etc.)
- TODO: Useful links
- TODO: Debugging: Developer menu, debug in chrome, run on device
- Working with styling: In the docs, the `style` prop of each component shows a complete list of styles supported by that component: Example: http://facebook.github.io/react-native/docs/view.html#style

##1. Create a New Message View

Your first task is to create a view in which the user can input a username and a message.

  <img src="https://raw.githubusercontent.com/bekk/react-native-workshop/master/screenshots/ios-new-message.png" alt="Image of IOS new message screen" width="350" />
  <img src="https://raw.githubusercontent.com/bekk/react-native-workshop/master/screenshots/android-new-message-error.png" alt="Image of Android new message screen" width="350" /> 

a) __Input fields.__ You'll find a `NewMessage` (`new-message.js`) component in your project. The component is already mounted in the default view, but it renders nothing. Implement the render function of `NewMessage` such that the view contains two input fields – one for the username and one for the message.

b) __Send button.__ Input fields without any action are of no use. Create a send button. (Hint: Buttons in React Native are implemented via the `Touchable*` components)

c) __Hook everything up.__ Make the send button actually post the message to the server. The `NewMessage` component recieves three functions as props, `setNewMessage(message)`, `setUsername(username)`, and `postMessage()`. The first two will update the global state, and the latter will use the `message` and `username` property from the global state and post the message to the server.

If you've hooked everything up correctly your message should appear on the big screen (or at http://mobile-course.herokuapp.com) when you hit the send button. Well done! :punch: Now, let's make it beautiful too!

d) __Make it look sexy.__ At this point we won't kill you if your new message view looks like shit. Anyway, now you get the chance to pimp it up a bit. Experiment with different Flexbox properties. Have a look at the screenshots below for some inspiration:

(Screenshots – platform specific design)

##2. Show messages

The second task will be to show all the messages in a scrollable list. We will for now ignore the newly created new message component and focus on displaying messages. It will all be connected in assignment 3.

(Screenshot of what the view should look like after completing this task)

Let's have a look at the app architecture for handling rendering the messages:

- `MessageListContainer` - controls the different network states (fetching, refreshing, error), and passes the data to the children, who renders the data.
- `MessageList` - renders each message

a) __Navigator.__ You'll find a `MessageListContainer` (`messages-list-container.js`) component in your project. The component is not in use right now and you need to start using it by hooking it up in the navigator. Find the render method for the `CustomNavigator` (`navigation/navigator.js`), change initialRoute to `MessageListContainer` (`messages-list-container.js`).

b) __Listing messages.__ Edit `MessageList` (`message-list.js`) component to show messages. The `MessageList` receives an array of messages as prop. Click here to see the format of messages:
http://mobile-course.herokuapp.com/message

c) __Show messages with images.__ Some messages contain a link to a image. Your task now is to show images for messages with image.

d) __Pull to refresh.__ Add pull to refresh. Hint: Look at what ListView can do for you

##3. Navigate to New Message

As promised in the previous task, we now shift our attention back to the `NewMessage`component. Right now it's unreachable for the user, so we need to implement a transition to it.

Before you dive back into your code, let's take a closer look at how navigation is set up in the application. We use the `Navigator`component of React Native, wrapped in a custom component that handles some boilerplate code – like how transitions between routes are animated and how the navigation bar is configured. `Navigator` is basically a stack – you push a view to it to transition to that view, and you pop to go back to previous view.

a) __Button.__ We need a button to initiate a transition to `NewMessage`. To ensure a great native look in our app, we'll implement the button platform specific:
 * __Android:__ Implement the button as a floating button contained in the list view (TODO: mer info om react-native-material-kit)
 * __iOS:__  Implement the button as a +-button contained in the navigation bar

(Screenshots of the two buttons in action)

b) __Push it.__ Make sure that a press on the button you created, transitions to the `NewMessage` view.
 * __iOS:__ Hide the +-button when current route is `NewMessage`

Now, try sending a message to ensure that `NewMessage` is still functional. After pressing send, you'll need to manually navigate back to check if your message appears. We'll change that now:

c) __Pop it.__ Ensure that the user is taken back to the message list when send is pressed.

Well done! This starts to look like a complete application!

##4. Add image to new messages

A message consisting of text only is quite boring these days. Also, a picture says more than a thousand words... So, let's add functionality to allow the user to add an image to new messages.

React Native has no component or API for taking pictures on the fly or picking an image from the camera roll. That's where third-party npm modules come in handy. We'll use the react-native-image-picker module (link), which allows for both taking new pictures and picking from the camera roll. It's implemented by bridging to the pure native image picker and picture taking apps.

We've already added the module to the project, and wrapped it in a promise. Have a look at `camera.js`. You need to use the  `pickImage()` function of `camera.js` and handle the promise. You can also tweak and experiment with the image picker configuration, also found in `camera.js`.

a) __Button.__ We need a button for launching the image picker.

b) __Pick it.__ Hook the button up to the image picker. To open the image picker, you're not rendering a component, but simply calling a JavaScript function that further calls some native, platform specific code. Hence, the handling of opening the picker is better implemented by an action than a component. So, create an action that opens the image picker, and hook it up to the button.

c) __Save it.__ Make sure your action saves it to the Redux store. Hint: Use `setImage()` in `actions.js`

c) __Show it.__ After successfully picking an image, display the image in the `NewMessage`component. Allow it to use all available space, but make sure it stays good lookin' by maintaining its aspect ratio.

d) __Send it.__ If you've added the image to the Redux state, `postMessage()` should already support posting messages with image to the server. Works? Good! (Kanskje deltakerene bør utvide postMessage selv? Men da bør de kanskje også lage action setImage selv + håndtere den i reduceren. Kan bli litt mye?)
