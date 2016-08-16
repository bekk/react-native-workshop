# Troubleshooting, Android on OSX

Note that not all these steps may be necessary for you. But highlights the issues we saw and how to fix them. 

* Ensure that watchman is updated. `brew uninstall --force watchman && brew install --HEAD watchman`

* Permissions to LaunchAgents.
    1. `ls -la /Users/{$USER}/Library | grep LaunchAgents`
    2. If your user does not own the directory, take control over using `sudo chown {$USER} /Users/{$USER}/Library/LaunchAgents` 

* If your username (`$USER`) contains spaces you may see some errors. `ln -s /Users/{$USER}/Library/Android/sdk ANDROID_HOME` creates a symlink to mitigate this issue.

* The environment variable `ANDROID_HOME` is needed. Adding it to your .bashrc is a easy fix.
    1. If you have created the symlink described in the previous section add `export ANDROID_HOME=~/ANDROID_HOME` Otherwise add the ful path to the android SDK.
    2. Add `export PATH=$ANDROID_HOME/platform-tools:$PATH`
    3. Add `export PATH=$ANDROID_HOME/tools:$PATH`


* Start the Android SDK manager: `./$ANDROID_HOME/tools/android` and install the SDK and systemimages you need.
* Start the Android Virtual Device Manager: `./$ANDROID_HOME/tools/android avd` and create an emulator