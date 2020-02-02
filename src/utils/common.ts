import axios from 'axios'
import { BASE_URL, SITE_ID } from '../constants/configs'

export async function get(url: string) {
	return axios
		.get(`${BASE_URL}${SITE_ID}/${url}`)
		.then((response) => response.data)
		.catch((error) => {
            // Log Error
			console.log(error)
			console.log('An Error Occurred')
		})
}

// export function transitTo(url: string) {
// 	browserHistory.
// }

// static/term-product/src/api/main.ts
