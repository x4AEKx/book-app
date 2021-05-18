import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import {bookType} from "./type/book";
import {Input} from "./components/Input/Input";
import {Button} from "./components/Button/Button";
import {Modal} from "./components/Modal/Modal";
import {Card} from "./components/Card/Card";

function App() {
		const [search, setSearch] = useState("")

		const [books, setBooks] = useState<Array<bookType>>([])

		const [cover, setCover] = useState<number>(0)
		const [title, setTitle] = useState<string>("")
		const [authors, setAuthors] = useState<Array<string>>([])
		const [publishDates, setPublishDates] = useState<Array<string>>([])
		const [publishers, setPublishers] = useState<Array<string>>([])
		const [isbn, setIsbn] = useState<Array<string>>([])

		const [isModal, setModal] = useState(false)
		const onClose = () => setModal(false)

		const getBooks = async (value: string) => {
				const {data} = await axios.get(`https://openlibrary.org/search.json?title=${value}`)
				return data.docs
		}

		useEffect(() => {
				const timeout = setTimeout(async () => {
						const data = await getBooks(search)
						setBooks(data)
				}, 1000)
				return () => {
						clearTimeout(timeout)
				}
		}, [search])

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
				<div className="wrapper">
						<div className="container">
								<Input placeholder={"Type for search"} changeValueCallback={setSearch}/>
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

						<ul className="cards">
								{books.map(book => (
												<li key={book.key} className="cards__item">
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
