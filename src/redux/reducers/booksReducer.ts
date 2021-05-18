import {BaseThunkType, InferActionsTypes} from "../store"
import {bookType} from "../../type/book";
import {booksAPI} from "../../api/api";

let initialState = {
		books: [] as Array<bookType>
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const booksReducer = (state = initialState, action: ActionsType): InitialStateType => {
		switch (action.type) {
				case "BOOKS/SET_BOOKS":
						return {
								...state,
								books: action.books,
						}
				default:
						return state
		}
}

export const actions = {
		setBooks: (books: Array<bookType>) => ({type: "BOOKS/SET_BOOKS", books} as const),
}

export const getBooksThunk = (search: string): ThunkType => {
		return async (dispatch) => {
				const {docs} = await booksAPI.getBooks(search)

				dispatch(actions.setBooks(docs))
		}
}

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

export default booksReducer