import {useState, useEffect} from 'react';

const useFetch = (url = '', options: object | undefined = undefined) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
            if (data.status === 'failed') {
                window.location.pathname = '/accounts';
            } else {
                setData(data);
                setError(null);
            }
            
        }
      })
      .catch(err => {
        if (isMounted) {
            setData(null);
            setError(err);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false
    };
  }, [url, options]);

  return {loading, error, data};
};

export default useFetch;