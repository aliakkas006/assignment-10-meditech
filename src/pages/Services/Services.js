import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('doctorsData.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    
    return (
        <div className="my-28 mx-28">
            <h1 className="text-center text-3xl mb-10 text-primary font-medium">Our Dedicated Doctors are</h1>
            <div className="grid grid-cols-3 gap-12">
                {
                    data.map(service => <Service
                        key={service.id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;