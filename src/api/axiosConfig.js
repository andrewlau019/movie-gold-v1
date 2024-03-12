import axios from 'axios';

export default axios.create({
    //ngrok is a simplified API-first ingress-as-a-service that adds connectivity, security, and observability to your apps in one line
    baseURL: 'http://localhost:8080',
    timeout: 20000,
    headers: {"Content-type": "application/json"}
});