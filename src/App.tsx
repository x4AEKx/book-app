import React, {useEffect, useState} from "react";
import styles from "./App.module.css";
import {Input} from "./components/Input/Input";
import {Button} from "./components/Button/Button";
import {Modal} from "./components/Modal/Modal";
import {Card} from "./components/Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {getBooksThunk} from "./redux/reducers/booksReducer";
import {getBooksSelector} from "./redux/selectors/booksSelectors";
import {getSearchSelector} from "./redux/selectors/searchSelectors";

function App() {
		const dispatch = useDispatch()

		const search = useSelector(getSearchSelector)
		const books = useSelector(getBooksSelector)

		const [cover, setCover] = useState<number>(0)
		const [title, setTitle] = useState<string>("")
		const [authors, setAuthors] = useState<Array<string>>([])
		const [publishDates, setPublishDates] = useState<Array<string>>([])
		const [publishers, setPublishers] = useState<Array<string>>([])
		const [isbn, setIsbn] = useState<Array<string>>([])

		const [isModal, setModal] = useState(false)

		const onClose = () => setModal(false)

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

		const setParamsForModal = (coverId: number, bookTitle: string, modalVisible: boolean, authorsNames: Array<string>, publishDates: Array<string>, publishers: Array<string>, isbn: Array<string>) => {
				setCover(coverId)
				setTitle(bookTitle)
				setModal(modalVisible)
				setAuthors(authorsNames)
				setPublishDates(publishDates)
				setPublishers(publishers)
				setIsbn(isbn)
		}

		return (
				<div className={styles.wrapper}>
						<div className={styles.container}>
								<Input placeholder={"Type for search"}/>
								<Button label={"Search"}/>
						</div>

						<Modal
								visible={isModal}
								title={title}
								coverId={cover}
								authors={authors}
								publishDates={publishDates}
								publishers={publishers}
								isbn={isbn}
								onClickCallback={onClose}
						/>
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
				</div>
		);
}

export default App;
