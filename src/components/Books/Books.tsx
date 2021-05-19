import React from "react";
import {useDispatch, useSelector} from "react-redux";

import styles from "./Books.module.css";
import {Card} from "./Card/Card";
import {actions} from "../../redux/reducers/modalReducer";
import {getBooksSelector} from "../../redux/selectors/booksSelectors";

export const Books = React.memo(function () {
		const books = useSelector(getBooksSelector)

		const dispatch = useDispatch()

		const setParamsForModal = (coverId: number, title: string, visible: boolean, authors: Array<string>, publishDates: Array<string>, publishers: Array<string>, isbn: Array<string>) => {
				const params = {coverId, title, visible, authors, publishDates, publishers, isbn}

				dispatch(actions.setModalParams(params))
		}

		return (
				<ul className={styles.cards}>
						{books.map((book) => (
										<li key={book.key} className={styles.cardsItem}>
												<Card
														onClickCallback={() => setParamsForModal(book.cover_i, book.title, true, book.author_name, book.publish_date, book.publisher, book.isbn)}
														title={book.title}
														coverId={book.cover_i}
														authorsNames={book.author_name}
												/>
										</li>
								)
						)}
				</ul>
		)
})