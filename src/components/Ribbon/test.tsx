import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
	it('should to render text correctly', () => {
		renderWithTheme(<Ribbon>Best Seller</Ribbon>)

		expect(screen.getByText(/best seller/i)).toBeInTheDocument()
	})

	it('should to render with primary color', () => {
		renderWithTheme(<Ribbon>Best Seller</Ribbon>)

		expect(screen.getByText(/best seller/i)).toHaveStyle({
			backgroundColor: '#F231A5'
		})
	})

	it('should to render with secondary color', () => {
		renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)

		expect(screen.getByText(/best seller/i)).toHaveStyle({
			backgroundColor: '#3CD3C1'
		})
	})

	it('should to render with the normal size as default', () => {
		renderWithTheme(<Ribbon>Best Seller</Ribbon>)

		expect(screen.getByText(/best seller/i)).toHaveStyle({
			height: '3.6rem',
			fontSize: '1.4rem'
		})
	})

	it('should to render with the small size', () => {
		renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>)

		expect(screen.getByText(/best seller/i)).toHaveStyle({
			height: '2.6rem',
			fontSize: '1.2rem'
		})
	})
})
