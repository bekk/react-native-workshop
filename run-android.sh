#!/bin/bash

BLUE="\033[94m"
GREY="\033[90m"
RESET="\033[0m"

function separator {
	echo "--------------------------------------------------------------------------------------------------------"
}

function header {
	echo ""
	separator
	echo -e $BLUE$1$RESET
	separator
}

function line {
	echo ""
}

function info {
	echo -e $GREY$1$RESET
}

function sjekkLaunchAgentsRettigheter {
	harKorrekteRettigheter=$(ls -la "/Users/${USER}/Library" | grep LaunchAgents | grep "${USER}")

	if [ -z "$harKorrekteRettigheter" ]; then
		info "Har ikke korrekte rettigheter, prøver å fikse dette"
		exit 1
	else
		info "Har korrekte rettigheter"
	fi
}

function sjekkAndroidHome {
	if [ -z "$ANDROID_HOME" ]; then
		info "ANDROID_HOME miljøvariabel er ikke satt, legg følgende i .bashrc/.bash_profile".
		info "	export ANDROID_HOME=~/ANDROID_HOME"
		info "	export PATH=\$ANDROID_HOME/platform-tools:\$PATH"
		info "	export PATH=\$ANDROID_HOME/tools:\$PATH"
		exit 1
	else
		info "ANDROID_HOME satt til $ANDROID_HOME"
	fi
}

function sjekkHarReactNative {
	if [ -z "$(which react-native)" ]; then
		info "react-native ikke innstallert globale"
		exit 1
	else
		info "react-native satt opp globalt"
	fi
}

header "Sjekker oppsett"
sjekkHarReactNative
sjekkAndroidHome
sjekkLaunchAgentsRettigheter
line

header "Starter react native"
react-native run-android
