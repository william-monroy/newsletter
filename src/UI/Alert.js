import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog() {
 
  const [open, setOpen] = React.useState(false);

    setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };
  
  
  return (
    <div>
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
          <Button onClick={handleClose} color="primary" autoFocus>
            Entendido!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
