// helper function to fetch an API and store the result in a state
// and a boolean to tell if we have loaded the data in another state
const fetchData = (url, setState, setLoaded) => {
    fetch(url).then(function(response) {
        // Shorthand to check for an HTTP 2xx response status.
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    }).then(function(response) {
        return response.json();
    }).then(function(json) {
        setState(json);
        setLoaded(true);
    }).catch(function(error) {
        console.error('Request failed:', error.message);
    });
};

export default fetchData;