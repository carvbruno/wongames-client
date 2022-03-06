import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import Radio from '.'

describe('<Radio />', () => {
	it('should render with label (white)', () => {
		renderWithTheme(<Radio label="Radio" labelFor="check" value="anyValue" />)

		expect(screen.getByText('Radio')).toBeInTheDocument()
		expect(screen.getByText('Radio')).toHaveStyle({ color: theme.colors.white })
	})

	it('should render with label (black)', () => {
		renderWithTheme(<Radio label="Radio" labelColor="black" />)

		expect(screen.getByText('Radio')).toBeInTheDocument()
		expect(screen.getByText('Radio')).toHaveStyle({ color: theme.colors.black })
	})

	it('should render without label', () => {
		renderWithTheme(<Radio />)

		expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument()
	})

	it('should dispatch onCheck when label status changes', async () => {
		const onCheck = jest.fn()
		renderWithTheme(
			<Radio
				label="Radio"
				labelFor="Radio"
				onCheck={onCheck}
				value="anyValue"
			/>
		)

		expect(onCheck).not.toHaveBeenCalled()

		userEvent.click(screen.getByLabelText('Radio'))
		await waitFor(() => {
			expect(onCheck).toHaveBeenCalledTimes(1)
		})
		expect(onCheck).toHaveBeenCalledWith('anyValue')
	})

	it('Should be accessible with tab', () => {
		renderWithTheme(<Radio label="Radio" labelFor="Radio" />)

		expect(document.body).toHaveFocus()

		userEvent.tab()

		expect(screen.getByLabelText('Radio')).toHaveFocus()
	})
})
