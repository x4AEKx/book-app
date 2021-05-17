import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import {bookType} from "./type/book";
import {Input} from "./components/Input/Input";
import {Button} from "./components/Button/Button";
import {Modal} from "./components/Modal/Modal";

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
		console.log(books)
		return (
				<div className="App">
						<div style={{marginTop: "1.2rem", display: "flex"}}>
								<Input placeholder={"Type for search"} changeValueCallback={setSearch}/>
								<div style={{marginLeft: "0.2rem"}}></div>
								<Button label={"Search"}/>
						</div>

						<Modal
								visible={isModal}
								title={title}
								cover={cover}
								authors={authors}
								publishDates={publishDates}
								publishers={publishers}
								isbn={isbn}
								onClickCallback={onClose}
						/>
						<div style={{
								display: "flex",
								alignItems: "stretch",
								flexWrap: "wrap",
								marginTop: "10px"
						}}>
								{books.map(book => (
												<div onClick={() => {
														setCover(book.cover_i)
														setTitle(book.title)
														setModal(true)
														setAuthors(book.author_name)
														setPublishDates(book.publish_date)
														setPublishers(book.publisher)
														setIsbn(book.isbn)
												}} key={book.key} style={{
														width: "33.3333%",
														outline: "1px solid black",
														cursor: "pointer"
												}}>

														{book.cover_i
																? <div style={{
																		width: "100%",
																		height: "400px",
																		background: `url(https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg) center / cover no-repeat`
																}}></div>
																: <div style={{
																		width: "100%",
																		height: "400px",
																		background: `url(https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg) center / cover no-repeat`
																}}/>}
														<h4 style={{wordBreak: "break-word"}}>{book.title}</h4>
														{book.author_name && <p>Authors: {book.author_name.join(", ")}</p>}
												</div>
										)
								)}
						</div>
				</div>
		);
}

export default App;
