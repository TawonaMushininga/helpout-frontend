import axios from 'axios';
import BackendUrl from '../util/url';

// Create an Axios instance
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token');
        const client = localStorage.getItem('client');
        const expiry = localStorage.getItem('expiry');
        const uid = localStorage.getItem('uid');
        const token_type = localStorage.getItem('token-type');

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
            localStorage.setItem('access-token', token);
            localStorage.setItem('client', client);
            localStorage.setItem('expiry', expiry);
            localStorage.setItem('uid', uid);
            localStorage.setItem('token-type', token_type);
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
  "access-token": localStorage.getItem('access-token'),
  "client": localStorage.getItem('client'),
  "expiry": localStorage.getItem('expiry'),
  "uid": localStorage.getItem('uid'),
  "token-type": localStorage.getItem('token-type')
}

//  export the headers
export default headers;
