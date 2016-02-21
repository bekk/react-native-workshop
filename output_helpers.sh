#!/bin/bash

BLUE="\033[94m"
GREY="\033[90m"
RED="\033[31m"
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

function error {
	echo -e $RED$1$RESET
}

function sjekkLaunchAgentsRettigheterOK {
    info "Har korrekte rettigheter"
}

function sjekkLaunchAgentsRettigheterFail {
    error "Har ikke korrekte rettigheter til LaunchAgents"
}

function sjekkAndroidHomeOK {
    info "ANDROID_HOME satt til $ANDROID_HOME"
}

function sjekkAndroidHomeFail {
    error "ANDROID_HOME miljøvariabel er ikke satt, legg følgende i .bashrc/.bash_profile".
	info "	export ANDROID_HOME=~/ANDROID_HOME"
	info "	export PATH=\$ANDROID_HOME/platform-tools:\$PATH"
	info "	export PATH=\$ANDROID_HOME/tools:\$PATH"
}

function sjekkHarReactNativeOK {
    info "react-native satt opp globalt"
}

function sjekkHarReactNativeFail {
    error "react-native ikke innstallert globale"
}

function sjekkEmulatorKjorerOK {
    info "Fant kjørende device"
}

function sjekkEmulatorKjorerFail {
    error "Fant ingen kjørende device"
}