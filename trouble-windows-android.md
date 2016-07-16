# Troubleshooting, Android on windows

Note that not all these steps may be necessary for you. But highlights the issues we saw and how to fix them.

* Errors referencing *HAXM* (intel)
    1. Check that you have installed `Intel HAXM` from the sdk-manager
    2. If it's still not working you may need to enable it in your computers BIOS.
   
* Environment variables
    1. Add the environment variable `ANDROID_HOME`, pointing to where your android sdk is installed
    2. Add `%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools` to your `PATH` varible

* Android tools
    1. SDK Manager, `$ANDROID_HOME/tools/android`
    2. AVD Manager, `$ANDROID_HOME/tools/android avd`
    
* Npm install issues
    1. MSBUILD : error MSB3428: Could not load the Visual C++ component "VCBuild.exe".
        To fix this, [download Microsoft Visual Studio](http://www.visualstudio.com/en-us/downloads/download-visual-studio-vs#DownloadFamilies_2)
            1) install the .NET Framework 2.0 SDK, 
            2) install Microsoft Visual Studio 2005 or 
            3) add the location of the component to the system path if it is installed elsewhere.
    2. Emepty `node_modules` after install
        Something is wrong with your node/npm setup. Try removing node/npm and installing it again. (How to completely remove node.js from Windows)[http://stackoverflow.com/questions/20711240/how-to-completely-remove-node-js-from-windows]
    3. Could not find WindowsSDKDir variable from the registry
        This is most likely an issue with the Visual Studio install, try reinstalling it. For further debugging try `npm install node-gyp`
        If you are persistently seeing errors from `node-gyp`, check that this file `C:\Program Files (x86)\MSBuild\Microsoft.Cpp\v4.0\Microsoft.CppBuild.targets` exists. A potential fix for this: http://stackoverflow.com/questions/32091593/cannot-install-windows-sdk-7-1-on-windows-10

* App not updating
    1. Remember to start the packager, since it is not automatically started on windows. Run `react-native start`
    
* `react-native run-android` fails
    1. Try running the gradle task manually. `cd android && gradlew.bat installDebug`