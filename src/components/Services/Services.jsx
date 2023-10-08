import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = ({services}) => {

    return (
        <div className='md:py-10'>
           <div className=' py-10'>
           <h3 data-aos="fade-right" className='font-semibold text-xl md:text-2xl text-center underline text-pink-500'>Services We Provide</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                services.map(service=><ServiceCard key={service.id} service={service}></ServiceCard>)
            }
           </div>
        </div>
    );
};

export default Services;