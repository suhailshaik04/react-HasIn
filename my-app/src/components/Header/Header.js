import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import hashedinlogo from './hashedinlogo.png';
import './Header.css';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    // perform search or filtering logic here
  };
  return (
    <AppBar className='header'>
      <Toolbar>
      <div className="header-logo">
          <img src={hashedinlogo} alt="My Logo" />
        </div>
        <div className="header-search">
          <div className="header-search-icon">
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="header-profile">
          <AccountCircleIcon />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
