import '../../../.jest/match-media-mock'
import { render, screen } from '@testing-library/react'

import BannerSlider from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import items from './mock'

describe('<BannerSlider />', () => {
	it('should to render vertical slider', () => {
		const { container } = renderWithTheme(<BannerSlider items={items} />)

		expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
	})

	it('should to render one active item', () => {
		const { container } = renderWithTheme(<BannerSlider items={items} />)

		expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

		expect(
			screen.getByRole('heading', { name: /defy death 1/i, hidden: false })
		).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: /defy death 2/i, hidden: true })
		).toBeInTheDocument()
	})
})
