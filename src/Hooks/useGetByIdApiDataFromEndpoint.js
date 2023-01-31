import { useEffect, useState } from 'react'
import appService from '../Components/App/Appservices/AppService';

const useGetByIdApiDataFromEndpoint = (endpoint, id, key) => {
    const [state, setState] = useState([]);
    useEffect(() => {
        const renderData = async () => {    
          try {
            const response = await appService.GetDetails(endpoint, id);
            if (response.data) {
              key && setState(response.data[key]);
            }
          } catch (error) {
            console.error(error);
          }
        };
        renderData();
      }, [endpoint, id, key]);
  return {state}
}

export default useGetByIdApiDataFromEndpoint