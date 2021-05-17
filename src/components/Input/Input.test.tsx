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
})