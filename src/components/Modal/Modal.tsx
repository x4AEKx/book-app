import React from "react";
import {useDispatch, useSelector} from "react-redux";

import styles from "./Modal.module.css"
import {Button} from "../Button/Button";
import {
		getAuthors,
		getCoverId, getIsbn,
		getPublishDates,
		getPublishers,
		getTitle,
		getVisible
} from "../../redux/selectors/modalSelectors";
import {actions} from "../../redux/reducers/modalReducer";

export const Modal = React.memo(function () {
		const coverId = useSelector(getCoverId)
		const title = useSelector(getTitle)
		const visible = useSelector(getVisible)
		const authors = useSelector(getAuthors)
		const publishDates = useSelector(getPublishDates)
		const publishers = useSelector(getPublishers)
		const isbn = useSelector(getIsbn)

		const dispatch = useDispatch()

		const onClose = () => {
				dispatch(actions.toggleVisible(false))
		}

		if (!visible) return null

		return (
				<div data-testid="modal" className={styles.modal} onClick={onClose}>
						<div className={styles.dialog} onClick={e => e.stopPropagation()}>
								<div className={styles.header}>
										<h3 className={styles.title}>{title ? title : ""}</h3>
										<Button label={"X"} onClickCallback={onClose}/>
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