import {findByTestId, fireEvent, queryByTestId, render} from "@testing-library/react";
import {Modal} from "./Modal";

describe("Modal component: ", () => {
		test("modal should not to be in Document", () => {
				const {queryByTestId} = render(<Modal/>)
				const modal = queryByTestId("modal")

				expect(modal).not.toBeInTheDocument()
		})

		test("modal should be in Document when visible is true", () => {
				const {getByTestId} = render(<Modal visible={true}/>)
				const modal = getByTestId("modal")

				expect(modal).toBeInTheDocument()
		})

		test("should be called fn when onClick() event", () => {
				const callback = jest.fn()
				const {getByRole} = render(<Modal visible={true} onClickCallback={callback}/>)
				const button = getByRole("button")

				fireEvent.click(button)
				expect(callback).toHaveBeenCalled()
		})
})