import React,{useState,useEffect} from 'react';

function Services() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data/services.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[]);
  console.log(data);
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
  