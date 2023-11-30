import { useEffect, useState } from 'react'

const useFetch = (service, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {

            setError(null);
            setIsLoading(true);
            const response = await service(query);
            setData(response);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        // retorno todos los estados que estoy escuchando por si los necesito en el componente. Luego
        // en el componente desestructuro los que necesite o vaya a usar, sabiendo que deben tener 
        // ese nombre.
        data,
        isLoading,
        error,
        fetchData,
    };
}

export default useFetch