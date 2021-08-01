
async function request(){
  let url = new URL("https://raw.githubusercontent.com/luciopalacio95/25watts/main/src/components/data/services.json");
  await fetch(url)
  .then(res=>res.json())
.then(function(res) {
console.log(res);
}).catch(function(error) {
  
  });
}

function Services() {
    
    const datos = request();
    console.log(datos);
    return (
      <div className="container-fluid contenedores Services" id="services">
        <div className="row">
          <div className="col-md-12">
            <h1 className="title__general title__services">Services</h1>
            <p className="subtitle__general subtitle__services">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida felis, id tempor ex. Suspendisse <br></br> congue purus eu neque auctor, eget dictum ipsum facilisis. Sed scelerisque sodales lorem,</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">

          </div>
        </div>
      </div>
    );
  }
  
  export default Services;
  