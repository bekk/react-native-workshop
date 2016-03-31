#React Native Workshop

##Setup

To setup your environment, follow the steps [here](setup.md). 

## Links
* [Slides](https://bekk.github.io/react-native-workshop/slides)
* [React native documentation](https://facebook.github.io/react-native/docs/getting-started.html)
* [Material UI for reactnative](https://github.com/xinthink/react-native-material-kit)
* [Image picker](https://github.com/marcshilling/react-native-image-picker)
* [Redux documentation](http://redux.js.org/)
* [A complete guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

##Debugging options
* Open developer menu: cmd+d (iOS), F2(Android)
* Enable "Debug in Chrome" to set breakpoints, log to Chrome console, pause on caught exceptions, etc.
* "Enable Live Reload" will live reload code on save
* "Enable Hot Reloading" will immidiately reload code while also maintaining application state. __NB:__ Added to the latest RN version so it might be buggy
* Run on device: [iOS](https://facebook.github.io/react-native/docs/running-on-device-ios.html#content) / [Android](https://facebook.github.io/react-native/docs/running-on-device-android.html#content)

##1. Create a New Message View

Your first task is to create a view in which the user can input a username and a message. The screenshots below show roughly how your app should look like after completing this task. Focus on functionality in a)-c). In d) you'll improve the design. 

  <img src="https://raw.githubusercontent.com/bekk/react-native-workshop/master/screenshots/ios-new-message.png" alt="Image of IOS new message screen" width="350" />
  <img src="https://raw.githubusercontent.com/bekk/react-native-workshop/master/screenshots/android-new-message-error.png" alt="Image of Android new message screen" width="350" /> 

a) __Input fields.__ You'll find a `NewMessage` (`app/components/new-message.js`) component in your project. The component is already mounted in the default view, but it renders nothing. Implement the render function of `NewMessage` so the resulting view contains two input fields – one for the username and one for the message.

b) __Send button.__ Input fields without any action are of no use. Create a send button. (Hint: Buttons in React Native are implemented via the `Touchable*` components)

c) __Hook everything up.__ Make the send button actually post the message to the server. The `NewMessage` component recieves three functions as props, `setNewMessageText(message)`, `setUsername(username)`, and `postMessage()`. The first two will update the global state, and the latter will use the `message` and the `username` property from the global state and post the message to the server.

If you've hooked everything up correctly, your message should appear on the big screen (or at http://mobile-course.herokuapp.com) when you hit the send button. Well done! :punch: Now, let's make it beautiful too!

d) __Make it look sexy.__ At this point we won't kill you if your new message view looks like shit! Anyway, now you get the chance to pimp it up a bit. Experiment with different Flexbox properties. Have a look at the screenshots above for some inspiration.

Tip on working with styling: In the docs, the `style` prop of each component shows a complete list of styles supported by that   component: Example: http://facebook.github.io/react-native/docs/view.html#style

##2. Show messages

The second task is to show all the messages in a scrollable list. We will for now ignore the newly created new message component and focus on displaying messages. It will all be connected in assignment 3.

<img src="https://raw.githubusercontent.com/bekk/react-native-workshop/master/screenshots/ios-listview.png" alt="Image of IOS list messages screen" width="350" />
<img src="https://raw.githubusercontent.com/bekk/react-native-workshop/master/screenshots/android-listview.png" alt="Image of Android list message screen" width="350" /> 

Let's have a look at the app architecture for handling rendering the messages:

- `MessageListContainer` - controls the different network states (fetching, refreshing, error), and passes the data to the children, who render the data.
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

React Native has no component or API for taking pictures on the fly or picking an image from the camera roll. That's where third-party npm modules come in handy. We'll use the [react-native-image-picker](https://github.com/marcshilling/react-native-image-picker) module, which allows for both taking new pictures and picking from the camera roll. It's implemented by bridging to the pure native image picker and picture taking apps. 

The module is already installed in the project. We've also created an action, `openImagePicker()`, which opens the native image picker and saves the captured image to the global state.

a) __Button.__ We need a button for launching the image picker.

b) __Pick it.__ Hook the button up to the image picker by firing the `openImagePicker()` action when the button is pressed.

c) __Show it.__ Display the image in the `NewMessage`component. Allow it to use all available space, but make sure it's good lookin' by maintaining _dat_ aspect ratio.

d) __Send it.__ If you've hooked everything up correctly, `postMessage()` should already support posting messages with images to the server. Try it out. Works? Good!

e) __Clear it.__ Currently, the image is never cleared from the global state. This will cause `NewMessage` to display the previous picked image in a couple of cases:
  * When you've sent a message containing an image
  * When you pick an image -> navigate back to `MessageList` -> navigate to `NewMessage`

Use `clearImage()` to clear the globally stored image such that the above mentioned scenarios no longer occur.

##5. Additional assignments

React Native has plenty of issues up for grabs: https://github.com/facebook/react-native/issues

Just kidding.. 

Here's a few interesting tasks for you choose from:
* Show images in full screen when pressed
* Edit messages by reusing the `NewMessage` component
* Delete messages:
  - iOS: Listen for swipe gesture on the messages. Use the native list view handling like the standard Mail app. Create a action and reducer for deletion.
  - Android: Long press to delete
* __Advanced:__ Bidge a component from Android/iOS to React Native. We suggest Toasts for Android or Alert for iOS. They're already implemented in RN, but might be good subjects for practice (and you can peak the RN source code for tips).
* Or anything else you want to try out :-)
