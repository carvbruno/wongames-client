import { screen } from '@testing-library/react'
import { AddShoppingCart } from 'styled-icons/material-outlined'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
	it('should render the medium sizer by default', () => {
		expect(renderWithTheme(<Button>Buy now</Button>))

		expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
			height: '4rem',
			padding: '0.8rem 3.2rem',
			'font-size': '1.4rem'
		})
	})

	it('should render the small size', () => {
		expect(renderWithTheme(<Button size="small">Buy now</Button>))

		expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
			height: '3rem',
			'font-size': '1.2rem'
		})
	})

	it('should render the large size', () => {
		expect(renderWithTheme(<Button size="large">Buy now</Button>))

		expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
			height: '5rem',
			padding: '0.8rem 4.8rem',
			'font-size': '1.6rem'
		})
	})

	it('should render the fullWidth versaion', () => {
		expect(renderWithTheme(<Button fullWidth>Buy now</Button>))

		expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
			width: '100%'
		})
	})

	it('should render withicon version', () => {
		expect(
			renderWithTheme(
				<Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
			)
		)

		expect(screen.getByText(/Buy now/i)).toBeInTheDocument()
		expect(screen.getByTestId('icon')).toBeInTheDocument()
	})

	it('should render Button as a link', () => {
		renderWithTheme(
			<Button as="a" href="/link">
				Buy now
			</Button>
		)

		expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
			'href',
			'/link'
		)
	})
})
