fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

### buildReleaseApk

```sh
[bundle exec] fastlane buildReleaseApk
```

Build the Android application Release APK.

### buildDebugApk

```sh
[bundle exec] fastlane buildDebugApk
```

Build the Android application Debug APK. 

### buildReleaseInstall

```sh
[bundle exec] fastlane buildReleaseInstall
```

Build & install the Android Release APK in android/app/build/outputs/apk/release

### buildDebugInstall

```sh
[bundle exec] fastlane buildDebugInstall
```

Build & install the Android application. in android/app/build/outputs/apk/debug

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
