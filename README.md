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

### firebase oncall function
```js
import { firebaseFunctions } from 'app/firebase/base';

const testFunc = firebaseFunctions.httpsCallable("testFunc")
testFunc({hello: "world"})
```

## Mobx

### inject mobx into a class
```js
import * as React from 'react';
import { GLOBAL_STATE } from 'app/constants';
import { inject, observer } from 'mobx-react'


@inject(GLOBAL_STATE)
@observer
export class Home extends React.Component{
  render() {
    return (
      <div>
      {this.props[GLOBAL_STATE].VALUEWITHINMOBXSTORE}
      </div>
    );
  }
}

```