// import React, { useState } from 'react';
// import { Card, CardContent } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import AddSubServiceForm from "./addSubServicesForm";
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import './subservice.css'

// function ServiceDetails({ serviceName }) {
//     const [subServices, setSubServices] = useState([]);
//     const [open, setOpen] = useState(false);

//     const handleAddSubService = (name, description) => {
//         setSubServices([...subServices, { name, description }]);
//         setOpen(false);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     return (
//         <div>
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', position: 'relative' }}>
//                 <Button variant="contained" sx={{ position: 'absolute', top: 0, right: 0 }} onClick={handleOpen}>Add Sub Service</Button>
//                 {subServices.length > 0 ? (
//                     subServices.map(subService => (
//                         <div className='cards'>
//                         <Card key={subService.name} sx={{ minWidth: 275, m: 2 }}>
//                             <CardContent>
//                                 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                                     {subService.name}
//                                 </Typography>
//                                 <Typography variant="body2" component="p">
//                                     {subService.description}
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                         </div>
//                     ))
//                 ) : (
//                     <Typography className='message' variant="body1">Add Sub Services to display them</Typography>
//                 )}
//             </Box>
//             <Dialog open={open} onClose={handleClose}>
//                 <DialogTitle>Add Sub Service</DialogTitle>
//                 <DialogContent>
//                     <AddSubServiceForm open={open} handleClose={handleClose} onAddSubService={handleAddSubService} />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClose}>Cancel</Button>
//                     <Button onClick={handleClose}>Save</Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// }
// export default ServiceDetails;

import React, { useState } from 'react';
import { Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddSubServiceForm from "./addSubServicesForm";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import './subservice.css'

function ServiceDetails({ serviceName, subServices, onAddSubService }) {
    const [open, setOpen] = useState(false);

    const handleAddSubService = (name, description, id) => {
        onAddSubService(name, description, id);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', position: 'relative' }}>
                <Button variant="contained" sx={{ position: 'absolute', top: 0, right: 0 }} onClick={handleOpen}>Add Sub Service</Button>
                {subServices.length > 0 ? (
                    subServices.map(subService => (
                        <div className='cards'>
                            <Card key={subService.name} sx={{ minWidth: 275, m: 2 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {subService.name}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {subService.description}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {subService.id}
                                    </Typography>
                                    
                                </CardContent>
                            </Card>
                        </div>
                    ))
                ) : (
                    <Typography className='message' variant="body1">Add Sub Services to display them</Typography>
                )}
            </Box>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Sub Service</DialogTitle>
                <DialogContent>
                    <AddSubServiceForm open={open} handleClose={handleClose} onAddSubService={handleAddSubService} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ServiceDetails;
