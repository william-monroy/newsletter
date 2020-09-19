import { Button, createMuiTheme } from '@material-ui/core';
import React from 'react';
import '../css/Login.css';
import { auth, provider } from '../js/firebase';
import { actionTypes } from "../js/reducer";
import { useStateValue} from "../js/StateProvider"


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { ThemeProvider } from "@material-ui/core/styles";

function Login() {
    const [state, dispatch] = useStateValue();
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const darkTheme = createMuiTheme({
        palette: {
          type: 'dark',
        },
    });

    const signIn = () => {
        //Sign In...
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                if (state.user==null) {
                    handleOpen();
                }
                console.log(result.user);
        }).catch(error => alert(error.message));
    }

    return (
        <ThemeProvider theme={darkTheme}>
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

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                
            >
                <DialogTitle id="alert-dialog-title">{"SAITC"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Para poder ingresar tienes que usar tu correo Institucional.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="info" id="boton" autoFocus>
                    Entendido
                </Button>
                </DialogActions>
            </Dialog>
        </div>
        </ThemeProvider>
    )
}

export default Login
