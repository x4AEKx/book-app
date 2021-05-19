import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import styles from "./Input.module.css"
import {actions} from "../../redux/reducers/searchReducer";
import {getSearchSelector} from "../../redux/selectors/searchSelectors";
import {getBooksThunk} from "../../redux/reducers/booksReducer";

export type InputPropsType = {
		placeholder: string
}

export const Input = React.memo(function ({placeholder, ...props}: InputPropsType) {
		const [input, setInput] = useState("")
		const search = useSelector(getSearchSelector)

		const dispatch = useDispatch()

		const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
				setInput(e.currentTarget.value)
				dispatch(actions.setSearch(e.currentTarget.value))
		}

		useEffect(() => {
				let timeout: ReturnType<typeof setTimeout>

				if (search) {
						timeout = setTimeout(async () => {
								dispatch(getBooksThunk(search))
						}, 1000)
				}

				return () => {
						clearTimeout(timeout)
				}
		}, [search, dispatch])

		return (
				<input type="text" placeholder={placeholder} className={styles.input} value={input}
							 onChange={handleOnChange} {...props}/>
		)
})