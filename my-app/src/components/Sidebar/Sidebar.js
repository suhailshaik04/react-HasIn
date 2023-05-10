import React, { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Drawer, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { AddBox, Delete } from "@mui/icons-material";
import "./Sidebar.css";

const drawerWidth = 240;

const Sidebar = () => {
  const [services, setServices] = useState([
    {
      name: "Service 1",
      subservices: ["Subservice 1A", "Subservice 1B"]
    },
    {
      name: "Service 2",
      subservices: ["Subservice 2A", "Subservice 2B"]
    },
    {
      name: "Service 3",
      subservices: ["Subservice 3A", "Subservice 3B"]
    },
    {
      name: "Service 4",
      subservices: ["Subservice 4A", "Subservice 4B"]
    },
    {
      name: "Service 5",
      subservices: ["Subservice 5A", "Subservice 5B"]
    },
    {
      name: "Service 6",
      subservices: ["Subservice 6A", "Subservice 6B"]
    }
  ]);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

  const handleServiceClick = (index) => {
    setSelectedServiceIndex(index);
  };

  const handleAddService = () => {
    setServices([
      ...services,
      {
        name: `Service ${services.length + 1}`,
        subservices: []
      }
    ]);
  };

  const handleDeleteService = () => {
    if (services.length > 1) {
      const updatedServices = [...services];
      updatedServices.splice(selectedServiceIndex, 1);
      setServices(updatedServices);
      setSelectedServiceIndex(0);
    }
  };

  return (
    <div className="sidebar">
      <Drawer variant="permanent" className="drawer" classes={{ paper: "drawerPaper" }}>
        <Toolbar />
        <div className="drawerContainer">
          <List>
            {services.map((service, index) => (
              <ListItem button key={index} onClick={() => handleServiceClick(index)} selected={selectedServiceIndex === index}>
                <ListItemText primary={service.name} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className="buttonContainer">
          <IconButton color="primary" className="button" onClick={handleAddService}>
            <AddBox />
          </IconButton>
          <IconButton color="primary" className="button" onClick={handleDeleteService}>
            <Delete />
          </IconButton>
        </div>
      </Drawer>
      <div className="content">
        <Typography variant="h6">{services[selectedServiceIndex].name}</Typography>
        <ul>
          {services[selectedServiceIndex].subservices.map((subservice, index) => (
            <li key={index}>{subservice}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
