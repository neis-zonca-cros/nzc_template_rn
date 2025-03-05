# NZC React Native Template

Welcome to the starter kit for [React Native](https://reactnative.dev/) apps.  
This custom one is built upon the **0.76 version of RN** with **typescript**.

## Quick start

Run this command in your favorite terminal :

`npx @react-native-community/cli@latest init MyApp --template https://github.com/neis-zonca-cros/nzc_template_rn.git`

## 🔑 Getting Started & Dependency Updates

1. Run `nvm install`
2. Run `rbenv install` (or install Ruby version specified in `.ruby-version` if you don't have rbenv)
3. Run `cd ci`
4. Run `yarn`
5. Run `bundle install`
6. Run `bundle exec "cd ../ios/ && pod install --repo-update"`
7. Run `yarn ios:dev:debug` or `yarn android:dev:debug`
