import React from "react";
import {useSelector} from "react-redux";

import styles from "./App.module.css";
import {Input} from "./components/Input/Input";
import {Button} from "./components/Button/Button";
import {Modal} from "./components/Modal/Modal";
import {getLoading} from "./redux/selectors/booksSelectors";
import {Books} from "./components/Books/Books";

function App() {
		const loading = useSelector(getLoading)

		return (
				<div className={styles.wrapper}>
						<div className={styles.container}>
								<Input placeholder={"Type for search"}/>
								<Button label={"Search"}/>
						</div>

						<Modal/>
						{loading
								? (<div className={styles.center}>
										<div>...Loading</div>
								</div>)
								: <Books/>
						}
				</div>
		);
}

export default App;
