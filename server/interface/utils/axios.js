import axios from 'axios'

console.log('axios端口',process.env.PORT)
const instance = axios.create({
	baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 9528}`,
	timeout: 3000,
	headers: {}
})

export default instance