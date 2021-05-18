import {Input} from "./Input";
import {fireEvent, render} from "@testing-library/react";
import {AnyAction, createStore} from "redux";
import {Provider, useDispatch} from "react-redux";
import reducer from "../../redux/reducers/searchReducer"

describe("Input component: ", () => {
		const renderWithRedux = (
				component: JSX.Element,
				{store = createStore(reducer)} = {}
		) => {
				return {
						...render(
								<Provider store={store}>{component}</Provider>
						),
						store,
				}
		}

		test("input should be in Document", () => {
				const {getByRole} = renderWithRedux(<Input placeholder={"Type for search"}/>)
				const input = getByRole("textbox")

				expect(input).toBeInTheDocument()
		})

		test("should change value when onChange() event", () => {
				const {getByRole} = renderWithRedux(<Input placeholder={"Type for search"}/>)
				const input = getByRole("textbox")
				expect(input).toHaveValue("")

				fireEvent.change(input, {target: {value: "lord"}})
				expect(input).toHaveValue("lord")
		})
})