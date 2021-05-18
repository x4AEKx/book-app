import React from "react";
import styles from "./Modal.module.css"
import {Button} from "../Button/Button";

export type ModalPropsType =
		{
				authors?: Array<string>
				coverId?: number
				visible?: boolean
				title?: string
				publishDates?: Array<string>
				publishers?: Array<string>
				isbn?: Array<string>
				onClickCallback?: () => void
		}

export const Modal = React.memo(function ({
																							coverId,
																							authors,
																							visible = false,
																							title,
																							publishDates,
																							publishers,
																							isbn,
																							onClickCallback,
																							...props
																					}: ModalPropsType) {
		if (!visible) return null

		return (
				<div data-testid="modal" className={styles.modal} onClick={onClickCallback}>
						<div className={styles.dialog} onClick={e => e.stopPropagation()}>
								<div className={styles.header}>
										<h3 className={styles.title}>{title ? title : ""}</h3>
										<Button label={"X"} onClickCallback={onClickCallback}/>
								</div>
								<div className={styles.body}>
										<div className={styles.content}>
												{coverId
														? <img src={`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`} alt={title}/>
														: <img src={"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"}
																	 alt={title}/>}

												{authors && <p>Author`s: {authors.join(", ")}</p>}
												{publishers && <p>Publisher`s: {publishers.join(", ")}</p>}
												{publishDates && <p>Publish Date`s: {publishDates.join("; ")}</p>}
												{isbn && <p>Isbn: {isbn.join(", ")}</p>}
										</div>
								</div>
						</div>
				</div>
		)
})