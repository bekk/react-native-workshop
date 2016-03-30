#!/bin/bash

source output_helpers.sh

function sjekkLaunchAgentsRettigheter {
	harKorrekteRettigheter=$(ls -la "/Users/${USER}/Library" | grep LaunchAgents | grep "${USER}")

	if [ -z "$harKorrekteRettigheter" ]; then
		sjekkLaunchAgentsRettigheterFail

		info "Prøver å fikse feilen."
		sudo chown "${USER}" "/Users/${USER}/Library/LaunchAgents"
		info "Sjekker på nytt..."
		sjekkLaunchAgentsRettigheter
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

header "Sjekker ANDROID_HOME"
sjekkAndroidHome

header "Starter android avd"
bash "$ANDROID_HOME/tools/android" avd
line
line

header "Avslutter android avd"
