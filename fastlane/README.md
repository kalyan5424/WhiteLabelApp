fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

### prepare_build

```sh
[bundle exec] fastlane prepare_build
```

Prepare Lane by pointing custom .env file

### buildReleaseApk

```sh
[bundle exec] fastlane buildReleaseApk
```

Generate the Android application Release APK in android/app/build/outputs/apk/release

### buildDebugApk

```sh
[bundle exec] fastlane buildDebugApk
```

Generate the Android application Debug APK in android/app/build/outputs/apk/debug

### buildReleaseInstall

```sh
[bundle exec] fastlane buildReleaseInstall
```

Build & install the Android Release APK

### buildDebugInstall

```sh
[bundle exec] fastlane buildDebugInstall
```

Build & install the Android Debug APK

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
