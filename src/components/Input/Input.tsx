import React, {ChangeEvent, useState} from "react";
import styles from "./Input.module.css"
import {useDispatch} from "react-redux";
import {actions} from "../../redux/reducers/searchReducer";

export type InputPropsType = {
		placeholder: string
}

export const Input = React.memo(function ({placeholder, ...props}: InputPropsType) {
		const [input, setInput] = useState("")

		const dispatch = useDispatch()

		const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
				setInput(e.currentTarget.value)
				dispatch(actions.setSearch(e.currentTarget.value))
		}

		return (
				<input type="text" placeholder={placeholder} className={styles.input} value={input}
							 onChange={handleOnChange} {...props}/>
		)
})