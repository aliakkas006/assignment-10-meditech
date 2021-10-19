
import { useParams } from 'react-router';

const Servicing = () => {

    const { id } = useParams();
    return (
        <div className="text-center text-2xl text-danger mx-16">
            <h2>This is servicing id: {id} </h2>
        </div>
    );
};

export default Servicing;