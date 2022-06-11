import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const {state} = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.divContainer}>
      <nav className={styles.Nav}>
        <img src={menu.src} alt="menu" className={styles.menu} />
        <div className={styles['navbar-left']}>
          <Link href="/">
            <Image src={logo} alt="logo" className={styles['nav-logo']} />
          </Link>
          
          <ul>
            <li>
              <Link href="/">All</Link>
            </li>
            <li>
              <Link href="/">Clothes</Link>
            </li>
            <li>
              <Link href="/">Electronics</Link>
            </li>
            <li>
              <Link href="/">Furnitures</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li className={styles['navbar-email']} aria-hidden="true" onClick={handleToggle} onKeyDown={handleToggle}>
              platzi@example.com
            </li>
            <li 
              className={styles['navbar-shopping-cart']}
              aria-hidden="true"
              onClick={() => setToggleOrders(!toggleOrders)}
              onKeyDown={() => setToggleOrders(!toggleOrders)}
            >
              <Image src={shoppingCart} alt="shopping cart" className={styles.imgShopingCart}/>
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
            </li>
          </ul>
        </div>
        
        {toggleOrders && <MyOrder toggleOrders = {toggleOrders} setToggleOrders = {setToggleOrders} />}
        {toggle && <Menu />}
        
      </nav>
    </div>
  );
};

export default Header;
