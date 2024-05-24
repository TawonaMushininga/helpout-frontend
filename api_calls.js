import axios from 'axios';
import BackendUrl from '../util/url';

// Create an Axios instance
axios.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('access-token');
        const client = sessionStorage.getItem('client');
        const expiry = sessionStorage.getItem('expiry');
        const uid = sessionStorage.getItem('uid');
        const token_type = sessionStorage.getItem('token-type');

        console.log('Token: ', token)

        if (token) {
            console.log('Adding headers to request')
            config.headers['access-token'] = token;
            config.headers['client'] = client;
            config.headers['expiry'] = expiry;
            config.headers['uid'] = uid;
            config.headers['token-type'] = token_type;
        }

        return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
}
);

axios.interceptors.response.use(function (response) {
    const token = response.headers['access-token'];
        const client = response.headers['client'];
        const expiry = response.headers['expiry'];
        const uid = response.headers['uid'];
        const token_type = response.headers['token-type'];

        if (token) {
            sessionStorage.setItem('access-token', token);
            sessionStorage.setItem('client', client);
            sessionStorage.setItem('expiry', expiry);
            sessionStorage.setItem('uid', uid);
            sessionStorage.setItem('token-type', token_type);
        }

        return response;
},
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
)


// Function to get job details
export const getJob = async (id, setLoading, setJob) => {
  const url = `${BackendUrl}/api/v1/jobs/${id}`;
  setLoading(true);
  console.log(url)
  try {
    const response = await axios.get(url);
    console.log(response.data);
    setJob(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};


// Headers
// Headers
const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Access-Control-Allow-Origin": "*",
  "ngrok-skip-browser-warning": "69420",
  "access-token": sessionStorage.getItem('access-token'),
  "client": sessionStorage.getItem('client'),
  "expiry": sessionStorage.getItem('expiry'),
  "uid": sessionStorage.getItem('uid'),
  "token-type": sessionStorage.getItem('token-type')
}

//  export the headers
export default headers;
