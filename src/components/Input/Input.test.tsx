import {Input} from "./Input";
import {fireEvent, render} from "@testing-library/react";

describe('Input component: ', () => {
		test('input should be in Document', () => {
				const { getByRole } = render(<Input placeholder={'Type for search'} />)
				const input = getByRole('textbox')

				expect(input).toBeInTheDocument()
		})

		test("should change value when onChange() event", () => {
				const { getByRole } = render(<Input placeholder={'Type for search'} />)
				const input = getByRole('textbox')
				expect(input).toHaveValue("")

				fireEvent.change(input, { target: { value: "lord" } })
				expect(input).toHaveValue("lord")
		})

		test("should called fn when onChange() event", () => {
				const callback =  jest.fn()
				const { getByRole } = render(<Input placeholder={'Type for search'} changeValueCallback={callback}/>)
				const input = getByRole('textbox')

				fireEvent.change(input, { target: { value: "lord" } })
				expect(callback).toHaveBeenCalled()
		})
})