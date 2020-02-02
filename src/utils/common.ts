import axios from 'axios'
import { BASE_URL, SITE_ID } from '../constants/configs'
import { IGenericObject } from '../interfaces'
import { useRef, useEffect } from 'react'

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

export function objectToQueryString(query: IGenericObject<string|number>): string {
	return Object.keys(query)
		.map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(query[k])}`)
		.join('&')
}

export function stringifyObjectValues(obj: IGenericObject<any>): IGenericObject<string> {
	return Object.keys(obj).reduce((acc, key) => ({ ...acc, [key]: obj[key] + ''}), {})
}

export function useGetPrevious(value: any): any {
	const ref = useRef()
	useEffect(() => {
	  ref.current = value;
	}, [value])
	return ref.current;
}
