import React, {ChangeEvent, useState} from "react";
import styles from "./Input.module.css"

export type InputPropsType = {
		placeholder: string
		changeValueCallback?: (e: string) => void
}

export const Input = React.memo(function ({placeholder, changeValueCallback, ...props}: InputPropsType) {
		const [input, setInput] = useState("")

		const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
				setInput(e.currentTarget.value)
				changeValueCallback && changeValueCallback(e.currentTarget.value)
		}

		return (
				<input type="text" placeholder={placeholder} className={styles.input} value={input}
							 onChange={handleOnChange} {...props}/>
		)
})