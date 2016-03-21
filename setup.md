# React-native setup

Developing React Native projects requires Git and NPM3

## Android
Development for android devices requires the Android SDK, [download Android Studio or the Android SDK](http://developer.android.com/sdk/index.html)
As an alternative you can also use the Genymotion emulator (skip step 1 and 2). 

In general the Genymotion emulator has better performance then the one provided by the Android SDK and it is easier to set up.
It does however integrate differently with the Android Device Bridge (ADB), and therefore requires some extra set up to get live-reloading.

The setup for windows was more tedious than on OSX, it is therefore recommended to use OSX if possible.
Notes from troubleshooting during the setup-process on windows and OSX can be found here;

* [Windows](trouble-windows-android.md)
* [OSX](trouble-osx-android.md)

1. Ensure that you got the Android SDK installed and ANDROID_HOME pointing to the SDK.
2. Configure the SDK, download these packages with API-level 23 or higher;
    * Android SDK tools
    * Android SDK Platform-tools
    * Android SDK Build-tools
    * SDK Platform
    * Intel x86 Atom_64 System Image
    * Intel x86 Atom System Image
    * Local Maven repository for Support Libraries
3. Configure a emulator image
4. Start the emulator
5. Clone the repository; `git clone git@github.com:bekk/react-native-workshop.git`
6. Run `npm install && npm install react-native -g` to install dependencies

### Windows
1. Run `react-native start`
2. Run `react-native run-android` in another shell, if this fails try `cd android && ./gradlew installDebug`

If you have any trouble check [this](trouble-windows-android.md)

### OSX
1. Run `bash android/run.sh`, this checks your configuration and starts react-native

If you have any trouble check [this](trouble-osx-android.md)

## IOS
Devlopment for IOS devices requires XCode (>7.x.x) to be installed, find it in the App Store.

1. Clone the repository; `git clone git@github.com:bekk/react-native-workshop.git`
2. Run `npm install && npm install react-native -g` to install dependencies
3. Open XCode with the ios/ directory
4. Start emulator 
5. Run `react-native run-ios`
