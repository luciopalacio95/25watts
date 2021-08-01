import info from './data/about.json';

function About() {
    return (
      <div className="container-fluid contenedores about" id="about">
        <div className="line__about"></div>
        <div className="row rowse">
          <div className="col-md-6">
            <img src={info.[0].img_src} className="img__about" alt="25watts"/>
          </div>
          <div className="col-md-6">
            <h1 className="title__general title__about">{info.[0].title}</h1>
            <h1 className="title__general title__about title__color">{info.[0].subtitle}</h1>
            <p className="subtitle__general subtitle__about">{info.[0].descpription}</p>
            <button className="btn__general">{info.[0].btn_text}</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  