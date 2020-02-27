import * as React from 'react';
import * as style from './style.scss';
import { firebaseFunctions } from 'app/firebase/base';


export interface HomeProps{
}
export interface HomeState {
}


export class Home extends React.Component<HomeProps, HomeState> {

  constructor(props: HomeProps, context: any) {
    super(props, context);

    // const testFunc = firebaseFunctions.httpsCallable("testFunc")
    // testFunc({hello: "world"})
    
    this.state = {
    };
  }
  render() {
    return (
      <div
        className={style.normal}
      >
      Home
      </div>
    );
  }
}
