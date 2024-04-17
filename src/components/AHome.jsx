import React, { useState, useEffect, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, AppBar, Toolbar, Container, Typography, Card, CardContent } from '@mui/material';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../App.css';

// Theme Context
const ThemeContext = createContext();

const AHome = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [cardsData, setCardsData] = useState([
    {
      title: 'Italiano',
      content: 'Pizza and Pasta',
      image: 'https://i.pinimg.com/564x/37/83/1b/37831bbf0e27cdf2992cd8730b6bfcf6.jpg',
      favorite: false,
    },
    {
      title: 'Japanese Cuisine',
      content: 'Sushi and Ramen',
      image: 'https://i.pinimg.com/564x/e7/f5/00/e7f5002a3ab0b3bdb174ce2a8b53b869.jpg',
      favorite: false,
    },
    {
      title: 'Thai Cuisine',
      content: 'Various(Asian)',
      image: 'https://i.pinimg.com/564x/28/37/96/283796edefa0722ff0a98ec9bc63d89a.jpg',
      favorite: false,
    },
    {
      title: 'Kebab and Grill',
      content: 'Middle-eastern Food',
      image: 'https://i.pinimg.com/564x/2a/03/8e/2a038e4d8ac5ec20a35cda6254e68ec3.jpg',
      favorite: false,
    },
    {
      title: 'Desserts',
      content: 'Cakes, Icecream, Milkshakes',
      image: 'https://i.pinimg.com/564x/73/5d/4d/735d4d489efd59876bd1a65f4d9f3902.jpg',
      favorite: false,
    },
    {
      title: 'Snacks and Chaat',
      content: 'Various(Indian)',
      image: 'https://i.pinimg.com/564x/34/a2/8c/34a28cbd784e4284d18c456a1aa43c27.jpg',
      favorite: false,
    },
    // Add more card data as needed
  ]);
// ... (your card data)
 

  const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Fetch initial data using Axios when the component mounts
    // Example URL, replace it with your actual API endpoint
    axios
      .get('https://api.example.com/food')
      .then((response) => {
        setCardsData(response.data.map((card) => ({ ...card, favorite: false })));
      })
      .catch((error) => {
        console.error('Error fetching initial data:', error);
      });
  }, []);

  const handleSearch = () => {
    // Use Axios to fetch search results based on the searchQuery
    // Example URL, replace it with your actual API endpoint for search
    axios
      .get(`https://api.example.com/food/search?query=${searchQuery}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
      });
  };

  const handleFavoriteToggle = (index) => {
    setCardsData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index].favorite = !updatedData[index].favorite;
      return updatedData;
    });

    // Add/remove from favoriteRestaurants
    setFavoriteRestaurants((prevFavorites) => {
      const updatedFavorites = [...prevFavorites];
      if (updatedFavorites.includes(index)) {
        updatedFavorites.splice(updatedFavorites.indexOf(index), 1);
      } else {
        updatedFavorites.push(index);
      }
      return updatedFavorites;
    });
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <AppBar position="static" className="app-bar" style={{ backgroundColor: theme === 'light' ? 'tan' : 'darkslategray', marginBottom: '10px' }}>
          <Toolbar style={{ justifyContent: 'space-around' }}>
            <Typography variant="dense" className="navbar-title">
              <h2> FoodTrap: Everything and Everywhere</h2>
            </Typography>
            <div className="app-bar-search">
              <input
                type="text"
                placeholder="Search for favourites..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              &nbsp;&nbsp;
              <Button variant="contained" onClick={handleSearch} className="search-button" style={{ backgroundColor: 'black', width: '35px' }}>
                Search
              </Button>
            </div>
            <div className="app-bar-buttons">
              <Button color="inherit" className="app-bar-button" onClick={() => console.log('Add to favorites clicked')}>
                <FavoriteIcon style={{ color: 'red' }} />
              </Button>
              {/* Theme toggle button */}
              <Button color="inherit" className="app-bar-button" onClick={toggleTheme}>
                Theme
              </Button>
              <Button color="inherit" component={Link} to="/login" className="app-bar-button">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
              <Button color="inherit" component={Link} to="/menu">
                Menu
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                Contact
              </Button>
              <Button color="inherit" component={Link} to="/about">
                ABOUT US
              </Button>
              <Button color="inherit" component={Link} to="/user-profile" className="app-bar-button">
                <AccountCircleIcon />
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <Container className="home-background">
          <div className="card-container">
            {(searchQuery !== '' ? searchResults : cardsData).map((card, index) => (
              <CustomCard key={index} {...card} onFavoriteToggle={() => handleFavoriteToggle(index)} />
            ))}
          </div>
        </Container>
        {/* Display favorite restaurants */}
        <div className="favorite-restaurants" style={{ fontSize: '26px' }}>
          <h3>Your Favourites!</h3>
          <ul>
            {favoriteRestaurants.map((index) => (
              <li
                key={index}
                style={{
                  fontFamily: 'monospace',
                  fontSize: '22px', // You can adjust the font size as needed
                  marginBottom: '8px', // You can adjust the margin as needed
                }}
              >
                {cardsData[index].title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

const CustomCard = ({ title, content, image, favorite, onFavoriteToggle }) => {
  return (
    <div className="custom-card">
      <img src={image} alt={title} className="card-image" />
      <CardContent>
        <Typography variant="h5" component="div" style={{ fontFamily: 'monospace' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'sans-serif', color: 'black' }}>
          {content}
        </Typography>
        <Button variant="contained" style={{ backgroundColor: 'black', color: 'white' }} className="order-button">
          Order Now
        </Button>
        <Button onClick={onFavoriteToggle} style={{ color: favorite ? 'red' : 'black' }}>
          <FavoriteIcon />
        </Button>
      </CardContent>
    </div>
  );
};

export default AHome