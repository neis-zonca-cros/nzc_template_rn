## Firebase configuration

Most of the Firebase configuration is initialized in the boilerplate, but you have a few steps to do in order to make it work for your project.

- Once you have specified your bundleID you can go to the firebase console an create a new firebase project.
- Inside this firebase project you can create a new Android app and a new iOS app with ou specified `bundleID`.
- You can download both GoogleServices files (.JSON and .plist).
- Place the `google-services.json` file in `android/app/` and in the folder `app`.
- Place the `GoogleServices-Info.plist` file in `ios` and in the folder `Firebase`.

## CI / CD

Part of the CI / CD as been set-up with gitlab_ci and fastlane.
If you want to use it for your project you have to :

- Add the global variables in the file .env.global
- Add the secret variables in your gilab repo
- Update the file `.gitlab-ci.yml` and `Fastile` to fit your requirements.
- If you are using App Center, create your apps (iOS & Android).

## Tests with Maestro

[Tests with Maestro](maestro/README.md)
