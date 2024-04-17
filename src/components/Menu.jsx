// Menu.jsx
import React, { useState } from 'react';
import '../styles/Menu.css';

const menuItems = [
  {
    id: 1,
    name: 'Kids Menu',
    imageUrl: 'https://i.pinimg.com/564x/c9/80/f5/c980f546d6d1f0a62ff5dfc0e749f5a9.jpg',
  },
  {
    id: 2,
    name: 'Chai Menu',
    imageUrl: 'https://i.pinimg.com/564x/06/2b/58/062b5866a4127608c226575cc1edd847.jpg',
  },
  {
    id: 3,
    name: 'Ramen Menu',
    imageUrl: 'https://i.pinimg.com/564x/33/31/75/333175e4b42ce76e9134b7a18b97acbf.jpg',
  },
  {
    id: 4,
    name: 'Kebab Menu',
    imageUrl: 'https://i.pinimg.com/564x/67/bb/a3/67bba30c8111b9338eb1a689096ac2a5.jpg',
  },
  {
    id: 5,
    name: 'Ice-cream Menu',
    imageUrl: 'https://i.pinimg.com/564x/f2/bb/f8/f2bbf8c44da298c12d960c7c15d8e952.jpg',
  },
  {
    id: 6,
    name: 'South Indian Menu',
    imageUrl: 'https://i.pinimg.com/564x/fe/b7/b5/feb7b5de0a132fd446d73852438bdf3d.jpg',
  },
  {
    id: 7,
    name: 'Thai Cuisine Menu',
    imageUrl: 'https://i.pinimg.com/236x/10/3a/c0/103ac0966f62b27daff5fd56c4192c07.jpg',
  },
  // Add more menu items as needed
];

const Menu = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setExpandedCard(cardId === expandedCard ? null : cardId);
  };

  return (
    <div className="menu-container">
      {menuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          className={`menu-card ${expandedCard === menuItem.id ? 'expanded' : ''}`}
          onClick={() => handleCardClick(menuItem.id)}
        >
          <img
            src={menuItem.imageUrl}
            alt={menuItem.name}
            className="menu-image"
          />
          <p className="menu-name">{menuItem.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
