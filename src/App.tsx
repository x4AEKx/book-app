import React, {ChangeEvent, useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import {bookType} from "./type/book";

type ModalPropsType =
		{
				authors: Array<string> | null
				cover: null | number
				visible: boolean
				title: null | string
				onClose: () => void
		}

const Modal = React.memo(function ({
																			 cover,
																			 authors,
																			 visible = false,
																			 title,
																			 onClose,
																	 }: ModalPropsType) {

		if (!visible) return null

		return (
				<div className="modal" onClick={onClose}>
						<div className="modal-dialog" onClick={e => e.stopPropagation()}>
								<div className="modal-header">
										<h3 className="modal-title">{title}</h3>
										<span className="modal-close" onClick={onClose}>
            &times;
          </span>
								</div>
								<div className="modal-body">
										<div className="modal-content">
												<div style={{
														width: "100%",
														height: "370px",
														marginTop: "10px",
														background: `url(https://covers.openlibrary.org/b/id/${cover}-L.jpg) center / contain no-repeat`
												}}/>
												{authors && authors.map(author => <div>{author}</div>)}
										</div>
								</div>
						</div>
				</div>
		)
})

function App() {
		const [inputValue, setInputValue] = useState("")

		const [books, setBooks] = useState<Array<bookType>>([])

		const [cover, setCover] = useState<number | null>(null)
		const [title, setTitle] = useState<string | null>(null)
		const [authors, setAuthors] = useState<Array<string> | null>(null)

		const getBooks = async (value: string) => {
				const {data} = await axios.get(`https://openlibrary.org/search.json?title=${value}`)
				return data.docs
		}

		useEffect(() => {

				const timeout = setTimeout(async () => {
						const data = await getBooks(inputValue)
						setBooks(data)
						console.log("timeout start")
				}, 1000)


				return () => {
						clearTimeout(timeout)
						console.log("timeout break")
				}
		}, [inputValue])

		console.log(books)

		const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
				setInputValue(e.currentTarget.value)
		}

		const [isModal, setModal] = useState(false)
		const onClose = () => setModal(false)

		return (
				<div className="App">
						<div style={{marginTop: "10px"}}>
								<input type="text" value={inputValue} onChange={handleOnChange}/>
								<button style={{marginLeft: "5px"}}>search</button>
						</div>

						<Modal
								visible={isModal}
								title={title}
								cover={cover}
								authors={authors}
								onClose={onClose}
						/>

						<div style={{
								display: "flex",
								justifyContent: "space-around",
								alignItems: "center",
								flexWrap: "wrap",
								marginTop: "10px"
						}}>
								{books.map(book => (
												<div onClick={() => {
														setCover(book.cover_i)
														setTitle(book.title)
														setModal(true)
														setAuthors(book.author_name)
												}} key={book.key} style={{
														display: "flex",
														flexDirection: "column",
														alignItems: "center",
														justifyContent: "space-between",
														width: "33.3333%",
														outline: "1px solid black",
														cursor: "pointer"
												}}>

														{book.cover_i ? <div style={{
																width: "100%",
																height: "280px",
																marginTop: "10px",
																background: `url(https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg) center / contain no-repeat`
														}}/> : <div style={{
																width: "100%",
																height: "280px",
																marginTop: "10px",
																backgroundColor: "black",
																color: "white"
														}}>No Image</div>}
														<h3>{book.title}</h3>
														{book.author_name && book.author_name.length > 0
																? (<p>Author: {book.author_name.map(name => <span>{name}</span>)}</p>)
																: (<p>Author: -</p>)
														}

												</div>
										)
								)}
						</div>
				</div>
		);
}

export default App;
