import { AppStateType } from "../store"

export const getBooksSelector = (state: AppStateType) => {
	return state.books.books
}
