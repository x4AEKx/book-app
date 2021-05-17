import React from "react";
import styles from './Button.module.css'

export type ButtonPropsType = {
		label: string
		onClickCallback?: () => void
}

export function Button({label, onClickCallback, ...props} : ButtonPropsType) {
		const handleOnClick = () => {
				onClickCallback && onClickCallback()
		}

		return (
				<button className={styles.button} onClick={handleOnClick} {...props}>{label}</button>
		)
}