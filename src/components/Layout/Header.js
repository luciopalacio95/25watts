import React, { useState, useEffect } from "react";
import { Link} from "react-scroll";
import { IconContext } from "react-icons/lib";
import { BsList, BsX } from "react-icons/bs";
import info from '../data/header.json';

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavBar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  
  const changeBackground = () => {
    if (window.scrollY >= 0.1) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const navegations = info[0].navegation;
    return (
      <>
        <IconContext.Provider value={{ color: "#373334" }}>
          <div className={`navbar ${navbar && "active"}`}>
            <div className="navbar-container container-fluid">
            <Link
                to="home"
                className="navbar-logo" 
                spy={true}
                smooth={true}
                offset={0}
                duration={200}
              >
                <img src={info[0].logo} className="navbar-logo-icon" alt="25watts"/>
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                {click ? <BsX /> : <BsList />}
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                {navegations.map((item, i) => 
                  <li className="nav-item" key={i}>
                    <Link
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={600}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      {item.section}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </IconContext.Provider>
      </>
    );
  }
  
export default Header;