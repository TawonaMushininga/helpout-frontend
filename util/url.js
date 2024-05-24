const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL ;
export default BackendUrl;

const Token = 'Bearer ' + 'eyJhY2Nlc3MtdG9rZW4iOiJodUxuYUctNzR2YVdWY1VTLW9kVEJnIiwidG9rZW4tdHlwZSI6IkJlYXJlciIsImNsaWVudCI6InVKN01sQlJ5MjJhdnZHY2E2Ni1NQmciLCJleHBpcnkiOiIxNzc5MzgyNzM3IiwidWlkIjoiZ2VvcmdlQG1haWwuY29tIn0=';
export { Token };

let headers = {};
if (typeof sessionStorage !== 'undefined') {
    headers = {
        "ngrok-skip-browser-warning": "69420",
        "access-token": sessionStorage.getItem('access-token'),
        "client": sessionStorage.getItem('client'),
        "expiry": sessionStorage.getItem('expiry'),
        "uid": sessionStorage.getItem('uid'),
        "token-type": sessionStorage.getItem('token-type')
    };
}

const Headers = [{ headers }];
export { Headers };
