#React Native Workshop

##Setup

##Introduction
- TODO: Introduction to application (Redux, Navigation, etc.)
- TODO: Useful links
- TODO: Debugging: Developer menu, debug in chrome, run on device
- Working with styling: In the docs, the `style` prop of each component shows a complete list of styles supported by that component: Example: http://facebook.github.io/react-native/docs/view.html#style

##1. Create a New Message View

Your first task is to create a view in which the user can input a username and a message.

(Screenshot of what the view should look like after completing this task)

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

- MessageListContainer - controls the different network states (fetching, refreshing, error), and passes the data to the children, who renders the data.
- MessageList - renders each message

a) __Navigator.__ You'll find a `MessageListContainer` (`messages-list-container.js`) component in your project. The component is not in use right now and you need to start using it by hooking it up in the navigator. Find the render method for the `CustomNavigator` (`navigation/navigator.js`), change initialRoute to `MessageListContainer` (`messages-list-container.js`).

b) __Listing messages.__ Edit `MessageList` (`message-list.js`) component to show messages. The `MessageList` receives an array of messages as prop. Click here to see the format of messages:
http://mobile-course.herokuapp.com/message

c) __Show messages with images.__ Some messages contain a link to a image. Your task now is to show images for messages with image.

d) __Pull to refresh.__ Add pull to refresh. Hint: Look at what ListView can do for you
