This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

React Native White Labelling

List of Unique Characteristics targeted for White labelling:

- [x] App Name, Bundle Identifier (Info.plist, AndroidManfiest.xml)
- [x] App ID
- [x] Localized Strings
- [x] API Keys (Firebase, Mixpanel, Bugsnag, CodePush, Facebook ID, etc.)
- [x] App ID for Code Push
- [x] Deep-linking Scheme
- [x] Base API URL (the same except for or QA environment)
- [x] Unique Whitelabel ID (to distinguish between each app)
- [x] Other potential unique configs
- [x] App Icon
- [x] Image Assets
- [x] Splash
- [x] Push Notification Certificates / APNS key
- [x] Provisioning Profile (iOS)
- [x] Github template hook for creating clones

Tools

1. npm i -g react-native-cli
2. npm i react-native-config
3. Setup react-native config refer https://github.com/lugg/react-native-config/tree/master
   1. Create .env file in root directory and add all dynamic constants as belowAPP_ID="com.whitelabelapp" #unique identifier. Identifies the app within the appstore/google playstoreAPP_NAME="WhiteLabelApp" #The name of the app as appears under the iconUNIQUE_BUNDLE_ID="com.whitelabelapp.WhiteLabelApp" #a unique id differentiating each appAPI_BASE_URL="https://myapi.com" #Base url used for making api requestsGOOGLE_MAPS_API_KEY="abcdefgh" #used for google maps api calls on AndroidANDROID_VERSION_CODE=1 #Android version codeANDROID_VERSION_NAME="1.0" #Android version NameTHEME_COLOR="#2d93e8" #App Theme colorDEEPLINK_SCHEME="<deeplink_scheme>" #the deeplink URL prefix ex: myappscheme://FIREBASE_DEEPLINK_URL="<firebase_deeplink_url>" #for deeplinkingANDROID_GEO_API_KEY="<Google Maps Android API Key>" #used for google maps api calls on AndroidIOS_GEO_API_KEY="<Google Maps IOS API Key>" #google maps api calls on iOSMIXPANEL_PROJECT_TOKEN="<mixpanel_project_token>" #sending analytic eventsBUGSNAG_NOTIFIER_API_KEY="<bugsnag_api_key>" #reporting crashes to bugsnagCodePushDeploymentKey="<android_codepush_api_key>" #iOS code push deployment keyCodePushDeploymentKey_iOS="<ios_codepush_api_key>" #Android code push deployment key
   2. Link react-native config in native and Add its dependency.
   3. Sync the project and rebuild
   4. Replace all project specific constants(AppId, AppName etc) from .env file of react-native config
   5. Use .env constants as & where required
4. Integrate Fastlane

   1. sudo gem install fastlane --verbose
   2. gem cleanup # optional recommended
      OR
   3. brew install fastlane
   4. sudo gem install dotenv
   5. fastlane add_plugin versioning_android
   6. Create fastlane folder in root directory
   7. Create fastlane file inside fastlane folder
   8. Add FastLane prepare build scripts in fastlane filelane :prepare_build do |options| puts "options is":options setup_env(options[:unique_whitelabel_id]) configure_androidend
   9. Add fast lane ruby scripts for android build and APK generation desc 'Generate the Android application Release APK in android/app/build/outputs/apk/release'
      lane :buildReleaseApk do
      gradle(task: 'clean', project_dir: 'android/')
      gradle(task: 'assemble', build_type: 'Release', project_dir: 'android/')
      end

      desc 'Generate the Android application Debug APK in android/app/build/outputs/apk/debug'
      lane :buildDebugApk do
      gradle(task: 'clean', project_dir: 'android/')
      gradle(task: 'assemble', build_type: 'Debug', project_dir: 'android/')
      end

      desc 'Build & install the Android Release APK'
      lane :buildReleaseInstall do
      gradle(task: 'clean', project_dir: 'android/')
      gradle(task: 'install', build_type: 'Release', project_dir: 'android/')
      end

      desc 'Build & install the Android Debug APK'
      lane :buildDebugInstall do
      gradle(task: 'clean', project_dir: 'android/')
      gradle(task: 'install', build_type: 'Debug', project_dir: 'android/')
      end

Steps to build iOS for WhiteLabling:

1. Execute fastlane prepare_build command - fastlane prepare_build unique_whitelabel_id:<UNIQUE_BUNDLE_ID>
2. In project directory run command - yarn start --reset-cache
3. Xcode > Products > Clean Build Folder
4. Xcode > Products > Build

Steps to build android for WhiteLabling:

1. Execute fastlane prepare_build command - fastlane prepare_build unique_whitelabel_id:<UNIQUE_BUNDLE_ID>
2. In project directory run command - yarn start --reset-cache
3. Android studio >sync project
   Android studio > run project
4. Articles to read
   1. Whitelabel a React-Native Expo app - https://medium.com/@o.stenqvist/whitelabel-a-react-native-expo-app-b74aa4a319e2
   2. A React Native white labeling journey - https://yehudacohen.medium.com/a-react-native-white-labeling-journey-587469ee7e12#8a6f
      - One app to rule them all — Building a white-label application with React Native
      - React Native White Label: 101
      - Whitelabel apps on Bitrise
      - How Fastlane Saved Us from Deployment Hell \* Soluto Engineering Blog
      1.
   3. Shipping React Native apps with Fastlane - https://carloscuesta.me/blog/shipping-react-native-apps-with-fastlane
   4. FastLane - https://docs.fastlane.tools/
   5. React Native App : White Label 101 - https://medium.com/@najera.sean/react-native-white-label-101-163c1967c12a
