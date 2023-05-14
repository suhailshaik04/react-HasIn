import {Card, CardContent, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useState} from "react";

function AddSubServiceForm({ onAddSubService }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddSubService(name, description);
        setName('');
        setDescription('');
    };

    return (
        <Card sx={{ minWidth: 275, m: 2 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    + Add Sub Service
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="Description"
                        fullWidth
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Button type="submit">Add</Button>
                </form>
            </CardContent>
        </Card>
    );
}
export default AddSubServiceForm;

