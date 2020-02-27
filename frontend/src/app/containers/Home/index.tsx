import * as React from 'react';
import * as style from './style.scss';
import { firebaseFunctions } from 'app/firebase/base';
import { GLOBAL_STATE } from 'app/constants';
import { inject, observer } from 'mobx-react'

interface Props{
}
interface State {
}

@inject(GLOBAL_STATE)
@observer
export class Home extends React.Component<Props, State> {

  constructor(props: Props, context: any) {
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
