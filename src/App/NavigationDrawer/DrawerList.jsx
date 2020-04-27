import React from 'react';
import {NavLink} from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Routes } from '../Routes';

export default function ListWithLinks(){
  return (
    <div>
      <List>
        {Object.keys(Routes).map((text, idx) => (
          <NavLink key={idx} to={`/${text}`}>
            <ListItem button key={text}>
              <ListItemIcon>{Routes[text].icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );
}