import {AppStateType} from "../store"

export const getCoverId = (state: AppStateType) => {
		return state.modal.coverId
}

export const getTitle = (state: AppStateType) => {
		return state.modal.title
}

export const getVisible = (state: AppStateType) => {
		return state.modal.visible
}

export const getAuthors = (state: AppStateType) => {
		return state.modal.authors
}

export const getPublishDates = (state: AppStateType) => {
		return state.modal.publishDates
}

export const getPublishers = (state: AppStateType) => {
		return state.modal.publishers
}

export const getIsbn = (state: AppStateType) => {
		return state.modal.isbn
}
