import {InferActionsTypes} from "../store"

let initialState = {
		coverId: 0,
		title: "",
		visible: false,
		authors: [] as Array<string>,
		publishDates: [] as Array<string>,
		publishers: [] as Array<string>,
		isbn: [] as Array<string>
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const modalReducer = (state = initialState, action: ActionsType): InitialStateType => {
		switch (action.type) {
				case "MODAL/SET_PARAMS":
						const {coverId, title, visible, authors, publishDates, publishers, isbn} = action.params
						return {
								...state,
								coverId,
								title,
								visible,
								authors,
								publishDates,
								publishers,
								isbn
						}
				case "MODAL/TOGGLE_VISIBLE":
						return {
								...state,
								visible: action.value
						}
				default:
						return state
		}
}

export const actions = {
		setModalParams: (params: typeof initialState) => ({type: "MODAL/SET_PARAMS", params} as const),
		toggleVisible: (value: boolean) => ({type: "MODAL/TOGGLE_VISIBLE", value} as const)
}

export default modalReducer