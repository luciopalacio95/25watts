import info from './data/details.json';

function Details() {
  const detalles = info.[0].details;

    return (
      <div className="container-fluid contenedores details" id="details">
      <div className="row rowse">
        <div className="col-md-12">
          <h1 className="title__general title__details">{info.[0].title}</h1>
          <p className="subtitle__general subtitle__details">{info.[0].subtitle}</p>
        </div>
      </div>
      <div className="row rowse" id="content__details">
        {detalles.map((item, i) => 
          <div className="col-md-6 content__details__list" key={i}>
              <img src={item.icon_src} className="icon__details" alt="25watts"/>
              <p className="text__details">{item.text}</p>
          </div>
        )}
      </div>
    </div>
    );
  }
  
  export default Details;
  