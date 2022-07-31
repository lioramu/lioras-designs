import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCart from './ShoppingCart';
import styles from '../styles/Home.module.css';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import { red } from '@mui/material/colors';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (top, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [top]: open });
  };

  const list = (top) => (
    <Box
      sx={{ width: top === 'top' || top === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(top, false)}
      onKeyDown={toggleDrawer(top, false)}
    >
      <Divider />
      <List>
        {['השארת פרטים לחזרה'].map((text, index) => (
          <ListItem key={text} disablePadding>
      
            <ListItemButton >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <span className={styles.drawer}>
      {['top'].map((top) => (
        <React.Fragment key={top}>
          <Button onClick={toggleDrawer(top, true)}>
            {<LocalMallSharpIcon sx={{ fontSize: 38, color: red[800] }} />}
          </Button>
          <Drawer
            anchor={'top'}
            open={state[top]}
            onClose={toggleDrawer(top, false)}
          >
            {list(top)}
            <ShoppingCart />
          </Drawer>
        </React.Fragment>
      ))}
    </span>
  );
}
