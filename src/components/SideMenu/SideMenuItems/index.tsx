import React from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Link from 'next/link';
import styles from './index.module.scss';
type Props = {
  children: React.ReactNode;
  text: string;
};
const MenuItems = ({ children, text }: Props) => {
  return (
    <div>
      <List>
        <Link href={`/${text}`} className={styles.listItem}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{children}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );
};
export default MenuItems;
