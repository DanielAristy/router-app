import { useLocation, useHistory } from 'react-router-dom';

export default function Categories() {
    const location = useLocation();
    const history = useHistory();

    const query = new URLSearchParams(location.search);
    //Construir consultas a la API
    //Estan declarados con un valores por defecto
    // Se parsean los datos para enviar estos valores al handleNext
    const skip = parseInt(query.get('skip') || 0);
    const limit =  parseInt(query.get('limit') || 15);

    //Evento para cambiar los parametros del query skip && limit
    const handleNext = () => {
        //Valores que queremos cambiar haciendo set
        query.set('skip', skip + limit);
        //query.set('limit',1000);
        //Enviar los datos a los querysParams
        history.push({search: query.toString()});
    }
    return (
        <div>
            <h1>Categories</h1>
            <p>Skip {skip}</p>
            <p>Limit {limit}</p>

            <button onClick={handleNext}>Next</button>
        </div>
    )
}

// http://localhost:3000/categories?skip=10&&limit=20