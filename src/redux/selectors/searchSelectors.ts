import { AppStateType } from "../store"

export const getSearchSelector = (state: AppStateType) => {
	return state.search.search
}
