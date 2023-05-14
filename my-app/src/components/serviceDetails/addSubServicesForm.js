import {TextField, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import './subservice.css'

function AddSubServiceForm({ open, handleClose, onAddSubService }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddSubService(name, description);
        handleClose();
        setName("");
        setDescription("");
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Sub Service</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <TextField className='subservice-textfield' label="Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
                    <TextField label="Description" fullWidth value={description} onChange={(e) => setDescription(e.target.value)} />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddSubServiceForm;
