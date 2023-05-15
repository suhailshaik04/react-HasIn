import React, { useState } from 'react';
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
import TextField from '@mui/material/TextField';
import ServiceDetails from "../serviceDetails/serviceDetails";
import './Sidebar.css'

function ClippedDrawer() {
    const [open, setOpen] = useState(false);
    const [listItems, setListItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [newItemName, setNewItemName] = useState('');

    const handleListItemClick = (index) => {
        setSelectedItem(index);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        if (newItemName !== '') {
            const newService = {
                name: newItemName,
                subServices: []
            };
            setListItems([...listItems, newService]);
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

    const handleAddSubService = (name, description, id) => {
        const updatedListItems = [...listItems];
        const selectedService = updatedListItems[selectedItem];
        selectedService.subServices.push({ name, description, id });
        setListItems(updatedListItems);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                className = 'MuiDrawer-paper'
                variant="permanent"
                sx={{
                    width: 240,
                    flexShrink: 0,
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {listItems.map((item, index) => (
                            <ListItem key={item.name} disablePadding onClick={() => handleListItemClick(index)}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SettingsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                    <ListItemIcon>
                                        <DeleteIcon
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                setSelectedItem(index);
                                                handleDelete();
                                            }}
                                        />
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
                        {selectedItem !== null && (
                            <ServiceDetails
                                serviceName={listItems[selectedItem].name}
                                subServices={listItems[selectedItem].subServices}
                                onAddSubService={handleAddSubService}
                            />
                        )}
                    </div>
                )}
            </Box>
        </Box>
    );
}

export default ClippedDrawer;
