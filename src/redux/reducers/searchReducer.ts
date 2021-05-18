import {InferActionsTypes} from "../store"

let initialState = {
		search: ""
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const searchReducer = (state = initialState, action: ActionsType): InitialStateType => {
		switch (action.type) {
				case "SEARCH/SET_SEARCH":
						return {
								...state,
								search: action.search,
						}
				default:
						return state
		}
}

export const actions = {
		setSearch: (search: string) => ({type: "SEARCH/SET_SEARCH", search} as const),
}

export default searchReducer