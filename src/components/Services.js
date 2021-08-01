import info from './data/services.json';

function Services() {
  const servicios = info.[0].services;
    return (
      <div className="container-fluid contenedores services" id="services">
        <div className="row rowse">
          <div className="col-md-12">
            <h1 className="title__general title__services">{info.[0].title}</h1>
            <p className="subtitle__general subtitle__services">{info.[0].subtitle}</p>
          </div>
        </div>
        <div className="row rowse">
          {servicios.map((item, i) => 
            <div className="col-md-3" key={i}>
                <img src={item.icon_src} className="icon__service" alt="25watts"/>
                <p className="text__service">{item.text}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default Services;
  