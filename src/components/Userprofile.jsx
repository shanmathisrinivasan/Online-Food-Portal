import React, { useState } from 'react';
import { Button, Container, Typography, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/Userprofile.css';

const Userprofile = () => {
  const user = {
    username: 'Shanmathi Srinivasan',
    email: 'shanmathi@gmail.com',
    // Add more user information as needed
  };

  const orderHistory = [
    {
      orderId: '1',
      date: '2023-01-01',
      totalAmount: '$30.00',
      items: ['Pizza', 'Pasta'],
    },
    {
      orderId: '2',
      date: '2023-02-15',
      totalAmount: '$25.00',
      items: ['Sushi', 'Ramen'],
    },
    // Add more order history entries as needed
  ];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div className="user-page">
      <Container className="user-profile-container" style={{width:'500px'}}>
        <div className="user-info">
          <Typography variant="h5" style={{ fontFamily: 'monospace', fontSize: '22px', fontWeight: 'bold' }}>
            Username: {user.username}
          </Typography>
          <Typography variant="h5" style={{ fontFamily: 'monospace', fontSize: '22px', fontWeight: 'bold' }}>
            Email: {user.email}
          </Typography>
          {/* Add more user information display as needed */}
        </div>
        <div className="order-history" style={{ fontFamily: 'monospace' }}>
          <Button
            variant="contained"
            onClick={handleOpenMenu}
            style={{ width: '300px', fontFamily: 'monospace', fontSize: '20px' }}
          >
            Show Order History
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography variant="h4" className="order-history-title" style={{ fontSize: '26px', fontFamily: 'monospace', fontWeight: 'bold' }}>
              Order History
            </Typography>
            {orderHistory.map((order) => (
              <MenuItem key={order.orderId} className="order-entry">
                <Typography variant="h6">Order ID: {order.orderId}</Typography>
                <Typography variant="subtitle1">Date: {order.date}</Typography>
                <Typography variant="subtitle1">Total Amount: {order.totalAmount}</Typography>
                <Typography variant="subtitle1">Items: {order.items.join(', ')}</Typography>
                {/* Add more order details display as needed */}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <br></br>
        <Button variant="contained" component={Link} to="/login" className="logout-button">
          Logout
        </Button>
      </Container>
    </div>
  );
};

export default Userprofile;
