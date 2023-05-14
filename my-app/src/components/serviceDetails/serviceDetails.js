import React,{useState} from 'react';
import {Card, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddSubServiceForm from "./addSubServicesForm";
import './subservice.css'

function ServiceDetails({serviceName}) {
    const [subServices, setSubServices] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleAddSubService = (name, description) => {
        setSubServices([...subServices, {name, description}]);
        setShowForm(false); // Hide the form after submission
    };

    return (
        <div>
            <Typography variant="h3">Selected: {serviceName}</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {subServices.length > 0 ? (
                    subServices.map(subService => (
                        <Card key={subService.name} sx={{ minWidth: 275, m: 2 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {subService.name}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {subService.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <Typography variant="body1">Add Sub Services to display them</Typography>
                )}
                {!showForm && (
                    <Button className='subservice-button' variant="contained" onClick={() => setShowForm(true)}>Add Sub Service</Button>
                )}
                {showForm && (
                    <AddSubServiceForm onAddSubService={handleAddSubService} onCancel={() => setShowForm(false)} />
                )}
            </Box>
        </div>
    );
}

export default ServiceDetails;
