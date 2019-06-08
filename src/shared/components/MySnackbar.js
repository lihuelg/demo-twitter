import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
import MySnackbarContentWrapper from './MySnackbarContentWrapper';

function MySnackbar({ mustOpen, variant, message }) {
  const [open, setOpen] = useState(mustOpen);
  
  useEffect(() => {
    setOpen(mustOpen);
  }, [mustOpen]);

  function handleClose(e, reason) {
    if (reason === 'clickaway') return;

    setOpen(false);
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <MySnackbarContentWrapper
        onClose={handleClose}
        variant={variant}
        message={message}
      />
    </Snackbar>
  );
}

MySnackbar.propTypes = {
  mustOpen: PropTypes.bool,
  message: PropTypes.node,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

export default MySnackbar;
