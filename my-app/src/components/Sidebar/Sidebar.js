import React, { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Drawer, AppBar, Toolbar, Typography, IconButton, Card, CardContent } from "@mui/material";
import { AddBox, Delete } from "@mui/icons-material";
import "./Sidebar.css";

const drawerWidth = 240;

const Sidebar = () => {
  const [services, setServices] = useState([
    {
      name: "Compute Service",
      subservices: [
        { title: "Virtual Machine", description: `Name: VM1\n Region: India` },
        { title: "Kubernetes engines", description: `Name: KE1\n Region: Russia` },
        { title: "Kubernetes engines", description: `Name: KE1\n Region: Russia` },
        { title: "Kubernetes engines", description: `Name: KE1\n Region: Russia` },
        { title: "Kubernetes engines", description: `Name: KE1\n Region: Russia` },
        { title: "Kubernetes engines", description: `Name: KE1\n Region: Russia` },
      ]
    },
    {
      name: "Networking",
      subservices: [
        { title: "VPC", description: "This is VPC" },
        { title: "Subservice 2B", description: "This is Subservice 2B" },
        { title: "Subservice 2B", description: "This is Subservice 2B" },
        { title: "Subservice 2B", description: "This is Subservice 2B" },
        { title: "Subservice 2B", description: "This is Subservice 2B" },
        { title: "Subservice 2B", description: "This is Subservice 2B" },
      ]
    },
    {
      name: "Storage Services",
      subservices: [
        { title: "Object Storage", description: "This is Subservice 3A" },
        { title: "File Storage", description: "This is Subservice 3B" },
        { title: "File Storage", description: "This is Subservice 3B" },
        { title: "File Storage", description: "This is Subservice 3B" },
        { title: "File Storage", description: "This is Subservice 3B" },
        { title: "File Storage", description: "This is Subservice 3B" },
      ]
    },
    {
      name: "Big Data",
      subservices: [
        { title: "Subservice 4A", description: "This is Subservice 4A" },
        { title: "Subservice 4B", description: "This is Subservice 4B" },
        { title: "Subservice 4B", description: "This is Subservice 4B" },
        { title: "Subservice 4B", description: "This is Subservice 4B" },
        { title: "Subservice 4B", description: "This is Subservice 4B" },
        { title: "Subservice 4B", description: "This is Subservice 4B" },
      ]
    },
    {
      name: "Security and Identity Management",
      subservices: [
        { title: "Subservice 5A", description: "This is Subservice 5A" },
        { title: "Subservice 5B", description: "This is Subservice 5B" },
        { title: "Subservice 5B", description: "This is Subservice 5B" },
        { title: "Subservice 5B", description: "This is Subservice 5B" },
        { title: "Subservice 5B", description: "This is Subservice 5B" },
        { title: "Subservice 5B", description: "This is Subservice 5B" },
      ]
    },
    {
      name: "Operations Tools",
      subservices: [
        { title: "Subservice 6A", description: "This is Subservice 6A" },
        { title: "Subservice 6B", description: "This is Subservice 6B" },
        { title: "Subservice 6B", description: "This is Subservice 6B" },
        { title: "Subservice 6B", description: "This is Subservice 6B" },
        { title: "Subservice 6B", description: "This is Subservice 6B" },
        { title: "Subservice 6B", description: "This is Subservice 6B" },
      ]
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
            <IconButton
                color="secondary"
                className="button"
                onClick={handleDeleteService}
                disabled={services.length === 1}
            >
              <Delete />
            </IconButton>
          </div>
        </Drawer>
        <div className="content">
          <div className="cardContainer">
            {services[selectedServiceIndex].subservices.map((subservice, index) => (
                <Card key={index} className="card">
                  <CardContent>
                    <Typography variant="h6">{subservice.title}</Typography>
                    <br/>
                    <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>{subservice.description}</Typography>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </div>
  );
};
export default Sidebar;
