import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { startSetActiveNote } from '../../store/journal';

import { TurnedInNot } from '@mui/icons-material';
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

export const SidebarItem = ({ id, title = '', body, date, imagesUrl = [] }) => {
  const dispatch = useDispatch();

  const onClickNote = () => {
    const note = { id, title, body, date, imagesUrl };
    dispatch(startSetActiveNote(note));
  };

  const newTitle = useMemo(() => {
    return title.length > 20 ? title.substring(0, 20) + '...' : title;
  }, [title]);

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText sx={{ width: '100%' }} primary={newTitle} />
          <ListItemText sx={{ width: '100%' }} secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
