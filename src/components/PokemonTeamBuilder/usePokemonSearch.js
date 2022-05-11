import { useEffect, useState } from 'react';
import axios from 'axios';

export default function usePokemonSearch(query, pageNum) {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let cancel;
    axios({
      method:'GET',
      url:`https://pokeapi.co/api/v2/pokemon?${query}`,
      responseType: 'json',
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => console.log(res.data))
    .catch(e => {
      if (axios.isCancel(e)) return;
    })
    return () => cancel();
  },[query,pageNum]);
  return null;
}