import axios from "axios"

export const booksAPI = {
		async getBooks(value: string) {
				const res = await axios.get(`https://openlibrary.org/search.json?title=${value}`)
				return res.data
		},
}