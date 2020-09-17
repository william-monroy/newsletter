import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';
import { actionTypes } from "./reducer";
import { useStateValue} from "./StateProvider"



function Login() {
    const [state, dispatch] = useStateValue();
    

    

    const signIn = () => {
        //Sign In...
        auth
            .signInWithPopup(provider)
            .then(result => {
                
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                                
                console.log(result.user);
        }).catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://scontent.faqp2-3.fna.fbcdn.net/v/t1.15752-9/119516377_694918081108477_7111465269959870221_n.png?_nc_cat=103&_nc_sid=b96e70&_nc_ohc=wglo-Lt9RsYAX-pNMHn&_nc_ht=scontent.faqp2-3.fna&oh=7e1ff7f427ffa0b64f0c410318005297&oe=5F8604B7" alt="" />
                    <br/>
                    <h4>Bienvenido</h4>
                    <br/>
                    <p>Ingresa con tu cuenta @itesm.mx</p>
            </div>
            <Button type="submit" onClick={signIn}>Sign In
            </Button>
        </div>
    )
}

export default Login
