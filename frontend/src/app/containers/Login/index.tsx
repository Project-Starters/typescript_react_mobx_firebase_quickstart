import * as React from 'react';
import { AUTH_STORE } from 'app/constants';
import { observer, inject } from 'mobx-react';
import AuthStore from 'app/stores/AuthStore';


export interface Props {
    authstore: AuthStore

}

export interface State {
    error: string
}


@inject(AUTH_STORE)
@observer
export class Login extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {
            error: ''
        };
    }
    handleSignIn = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            this.props.authstore.handleUserSignIn(email.value, password.value).then(() => [
                this.props.history.push("/")
            ]).catch((error_msg) => {
                console.log(error_msg)
                this.setState({ error: error_msg })
            })
        } catch (error) {
            alert(error);
        }
    };

    render() {
        return (
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.handleSignIn}>
                    <label>
                        Email
            <input name="email" type="email" placeholder="Email" />
                    </label>
                    <label>
                        Password
            <input name="password" type="password" placeholder="Password" />
                    </label>
                    <button type="submit">Log In</button>
                </form>
                <p>
                    {this.state.error}
                </p>

            </div>
        );
    }
}
