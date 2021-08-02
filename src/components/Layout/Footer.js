import React from 'react';
import info from '../data/footer.json';
import { Link} from "react-scroll";
function Footer() {
  const social = info[0].social;
  const navegations = info[0].navegation;
    return (
      <div className="container-fluid contenedores footer">
          <div className="row rowse">
            <div className="col-md-3">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={200}
              >
                <img src={info[0].logo} className="img__footer" alt="25watts"/>
              </Link>
              <p className="coopiright__footer">{info[0].coopiright}</p>
            </div>
            <div className="col-md-4">
              <div className="row rowse">
              {navegations.map((item, i) => 
                <div className="col-md-6" key={i}>
                  <Link
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={200}
                      className="links__footer"
                    >
                      {item.section}
                  </Link>
                </div>
                )}
              </div>
            </div>
            <div className="col-md-5">
              <h2 className="follow__footer">{info[0].text_social}</h2>
              <div className="content__social">
              {social.map((item, i) => 
                <a href={item.link} rel="noreferrer" target="_blank" key={i}>
                  <img src={item.icon_src} className="icon__social" alt="25watts redes"/>
                </a>
                )}
              </div>
            </div>
          </div>
      </div>
    );
  }
  
export default Footer;
  