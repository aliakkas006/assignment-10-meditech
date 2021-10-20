
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';

const Servicing = () => {
    const { id } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/doctorsData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    
    const exactItem = services.find(service => service.id === id);

    return (
        <div className="text-center text-2xl text-danger mx-16">
            <h2>This is servicing id: {id} </h2>
            <img src={exactItem?.img} alt="" />
            <h2>Name: {exactItem?.name} </h2>
            <p>Description: {exactItem?.description} </p>
        </div>
    );
};

export default Servicing;