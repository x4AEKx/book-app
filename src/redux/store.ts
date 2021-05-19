import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import booksReducer from "./reducers/booksReducer";
import searchReducer from "./reducers/searchReducer";
import modalReducer from "./reducers/modalReducer";

let rootReducer = combineReducers({
		books: booksReducer,
		search: searchReducer,
		modal: modalReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U }
		? U
		: never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R,
		AppStateType,
		unknown,
		A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store