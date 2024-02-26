import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';



export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
            <IconButton {...bindTrigger(popupState)}>
          <MenuIcon variant="contained" sx={{color:'white'}}>
          </MenuIcon>
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Flights</MenuItem>
            <MenuItem onClick={popupState.close}>Hotels</MenuItem>
            <MenuItem onClick={popupState.close}>Car Rental</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
