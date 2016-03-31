#!/bin/bash

source output_helpers.sh

function sjekkLaunchAgentsRettigheter {
	harKorrekteRettigheter=$(ls -la "${HOME}/Library" | grep LaunchAgents | grep "${USER}")

	if [ -z "$harKorrekteRettigheter" ]; then
		sjekkLaunchAgentsRettigheterFail
		exit 1
	else
		sjekkLaunchAgentsRettigheterOK
	fi
}

function sjekkAndroidHome {
	if [ -z "$ANDROID_HOME" ]; then
		sjekkAndroidHomeFail
		exit 1
	else
		sjekkAndroidHomeOK
	fi
}

function sjekkHarReactNative {
	if [ -z "$(which react-native)" ]; then
		sjekkHarReactNativeFail
		exit 1
	else
		sjekkHarReactNativeOK
	fi
}

function sjekkEmulatorKjorer {
	devices=$(adb devices | wc -l)
	if [[ $devices == *"2"* ]]; then
		sjekkEmulatorKjorerFail
		exit 1
	else
		sjekkEmulatorKjorerOK
	fi
}

header "Sjekker oppsett"
sjekkHarReactNative
sjekkAndroidHome
sjekkLaunchAgentsRettigheter
sjekkEmulatorKjorer
line

header "Starter react native"
react-native run-android
