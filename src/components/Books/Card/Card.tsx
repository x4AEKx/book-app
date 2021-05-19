import React from "react";
import styles from "./Card.module.css";

export type CardPropsType = {
		title?: string
		coverId?: number
		authorsNames?: Array<string>
		onClickCallback?: () => void
}

export const Card = React.memo(function ({
																						 title,
																						 coverId,
																						 authorsNames,
																						 onClickCallback,
																						 ...props
																				 }: CardPropsType) {
		return (
				<div className={styles.card} onClick={onClickCallback}>
						{coverId
								? <div className={styles.image}
											 style={{backgroundImage: `url(https://covers.openlibrary.org/b/id/${coverId}-L.jpg)`}}></div>
								: <div className={styles.image}
											 style={{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg)`}}></div>
						}

						<div className={styles.content}>
								{title && <div className={styles.title}>{title}</div>}
								{authorsNames && <p className={styles.text}>Authors: {authorsNames.join(", ")}</p>}
						</div>
				</div>
		)
})