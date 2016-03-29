1. Clone project `git clone git@github.com:bekk/react-native-workshop.git`
2. Sjekk java-installasjon. `javac --version` >= 1.7
3. Last ned Android SDK/Android Studio, `google android sdk` -> C:\Users\Nicklas\AppData\Local\Android\sdk C:\Program Files\Android\Android Studio
4. HAXM feil? Gjør det noe? Jepp, det gjør det. FÅr ikke startet emulator uten. FIX ved å slå på Intel HAXM i BIOS, og installer Intel HAXM fra sdk-manager
5. Setup ANDROID_HOME til C:\Users\Nicklas\AppData\Local\Android\sdk
	5.1 For cygwin export ANDROID_HOME='C:\Users\Nicklas\AppData\Local\Android\sdk'
	5.2 For windows Legg til environment variable (funker også for cygwin brukere, men krever en restart av shell), New ANDROID HOME og %ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools til PATH

6. Start og sjekk android images `cygstart $ANDROID_HOME/tools/android`, for cmd? (samme bat fil, annen start kommando). Innstaller manglende images og HAXM om du har støtte for det
7. Setup emulator `cygstart $ANDROID_HOME/tools/android avd` eller bruk genymotion
8. Kjør `npm install` for å laste alle avhengigheter, og å bruke npm3
	8.1 MSBUILD : error MSB3428: Could not load the Visual C++ component "VCBuild.exe". 
		To fix this, 
			1) install the .NET Framework 2.0 SDK, 
			2) install Microsoft Visual Studio 2005 or 
			3) add the location of the component to the system path if it is installed elsewhere.

		Bare last nest Microsoft Visual Studio: http://www.visualstudio.com/en-us/downloads/download-visual-studio-vs#DownloadFamilies_2
		
	8.2 Oppdater node/npm > 4.x.x https://nodejs.org/en/download/

9. Kjør `npm install react-native-cli -g` for å innstallere react-native globalt. Alternativt, bruk react-native fra node_modules
	9.1 Hvis ingenting havner i `node_modules` så er noe feil med node/npm innstallasjonen. Fjern alt (http://stackoverflow.com/questions/20711240/how-to-completely-remove-node-js-from-windows), og reinnstaller node/npm
	9.2 Bruker x64 av node, og får feilmeldingen "Could not find WindowsSDKDir variable from the registry" mangler du windows SDK for node-gyp: https://www.npmjs.com/package/node-gyp
	9.3 Ved videre feil etter innstallasjonen, sjekk at filen "C;\Program Files (x86)\MSBuild\Microsoft.Cpp\v4.0\Microsoft.CppBuild.targets" finnes, og evt. rediger registert http://stackoverflow.com/questions/32091593/cannot-install-windows-sdk-7-1-on-windows-10 Kan kreve en restart?
	9.4 Ikke bruk windows?

10. HUSK NPM3 IGJEN
11. Trøbbel i cygwin, bruk cmd
12. Start emulator, og sjekk at den funker
13. kjør `react-native start` for å state packager, siden denne ikke blir automatisk startet på windows
14. Kjør `react-native run-android", hvis denne feiler prøv å kjøre `gradlew.bat installDebug` manuelt fra android/ (sannsynligvis feil pathing i gradle script elns)