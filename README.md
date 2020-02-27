# RideshareApp
## Goal
to develop a rideshare app

## Install
### to install the needed dependencies 
```
cd ./frontend; npm i && cd ../functions; npm i 
```


## Deploy

### Firebase Project Setup
```
1. setup a firebase project 
2. go to settings
3. create new web app
4. copy the config into frontend/src/app/config/index.ts
```

### install firebase-tools globally
```
npm i -g firebase-tools
```

### login to firebase
```
firebase login
```
### set the newly created firebase project to be used in this project
```
firebase use {PROJECT_ID} 
```
