import { screen } from '@testing-library/react'
import 'jest-styled-components'

import { renderWithTheme } from '../../utils/tests/helpers'
import Logo from '.'

describe('<Logo />', () => {
	it('it should render a white label by default', () => {
		renderWithTheme(<Logo />)

		expect(screen.getByLabelText(/Wongames/i).parentElement).toHaveStyle({
			color: '#FAFAFA'
		})
	})

	it('it should render a black label by default', () => {
		renderWithTheme(<Logo color="black" />)

		expect(screen.getByLabelText(/Wongames/i).parentElement).toHaveStyle({
			color: '#030517'
		})
	})

	it('it should render a bigger logo', () => {
		renderWithTheme(<Logo size="large" />)

		expect(screen.getByLabelText(/Wongames/i).parentElement).toHaveStyle({
			width: '20rem'
		})
	})

	it('it should render a normal logo', () => {
		renderWithTheme(<Logo />)

		expect(screen.getByLabelText(/Wongames/i).parentElement).toHaveStyle({
			width: '11rem'
		})
	})

	it('it should render a bigger logo without text if hideOnMobile', () => {
		renderWithTheme(<Logo hideOnMobile />)

		expect(screen.getByLabelText(/Wongames/i).parentElement).toHaveStyleRule(
			'width',
			'5.8rem',
			{
				media: '(max-width: 768px)'
			}
		)
	})
})
