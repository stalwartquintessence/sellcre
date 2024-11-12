import React, { useState } from 'react';

interface DrawerMenuProps {
    isOpen: boolean;
    toggleDrawer: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ isOpen, toggleDrawer }) => {
    const [touchStartX, setTouchStartX] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const touchEndX = e.changedTouches[0].clientX;
        const swipeDistance = touchEndX - touchStartX;

        if (swipeDistance > 100) {
            toggleDrawer();
        }
    };

    return (
        <div
            className={`drawer ${isOpen ? 'open' : ''}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="drawer-content">
                <img src="/assets/logo.svg" alt="SellCRE.ai" className="logo" />
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#"><img src="assets/lock.svg" alt="Lock icon" />Login</a></li>
                </ul>
                <button className="drawer-try-btn">Try For Free</button>
            </div>
        </div>
    );
};

export default DrawerMenu;