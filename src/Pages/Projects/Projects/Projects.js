import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Projects = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch ('https://portfolio-server-topaz-ten.vercel.app')
        .then(res => res.json())
        .then(data =>setServices(data))
    },[])
    return (
       
     <div className="pt-24">
       
       <h2 className='text-3xl text-center text-gray-100 font-bold sm:text-4xl py-6'><span className='text'>Some of My </span>Projects</h2>
          <div className='py-15  flex flex-wrap gap-14 justify-center'>
            
            {
                services.map(service =><Card
                key={service._id}
                  service={service}
                ></Card>

                )
            }
           </div>
           </div>
    );
};

export default Projects;