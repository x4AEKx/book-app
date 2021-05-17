import {Button} from "./Button";
import {fireEvent, render} from "@testing-library/react";

describe('Button component: ', () => {
		test('button should be in Document', () => {
				const { getByRole } = render(<Button label={'Search'} />)
				const button = getByRole('button')

				expect(button).toBeInTheDocument()
		})

		test("should called fn when onClick() event", () => {
				const callback =  jest.fn()
				const { getByRole } = render(<Button label={'Search'} onClickCallback={callback}/>)
				const button = getByRole('button')

				fireEvent.click(button)
				expect(callback).toHaveBeenCalled()
		})
})