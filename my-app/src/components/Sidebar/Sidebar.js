import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

import './Sidebar.css'
import { TextField } from "@mui/material";
import ServiceDetails from "../serviceDetails/serviceDetails";

const drawerWidth = 240;

function ClippedDrawer() {
    const [open, setOpen] = React.useState(false);
    const [listItems, setListItems] = React.useState([]);
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [newItemName, setNewItemName] = React.useState('');

    const handleListItemClick = (index) => {
        setSelectedItem(index);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        if (newItemName !== '') {
            setListItems([...listItems, newItemName]);
        }
        setOpen(false);
        setNewItemName('');
    };

    const handleDelete = () => {
        const newListItems = [...listItems];
        newListItems.splice(selectedItem, 1);
        setListItems(newListItems);
        setSelectedItem(null);
    };

    return (
        <Box className='Sidebar' sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {listItems.map((text, index) => (
                            <ListItem key={text} disablePadding onClick={() => handleListItemClick(index)}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SettingsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                    <ListItemIcon>
                                        <DeleteIcon onClick={(event) => {
                                            event.stopPropagation();
                                            setSelectedItem(index);
                                            handleDelete();
                                        }} />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Button variant="contained" onClick={() => setOpen(true)}>Add a new Service</Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Add a new Service</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Service Name"
                                fullWidth
                                value={newItemName}
                                onChange={(e) => setNewItemName(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleSave}>Save</Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {selectedItem !== null && (
                    <div>
                        {selectedItem !== null && <ServiceDetails serviceName={listItems[selectedItem]} />}
                    </div>
                )}
            </Box>
        </Box>
    );
}
export default ClippedDrawer
