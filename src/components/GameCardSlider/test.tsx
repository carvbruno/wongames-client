import '../../../.jest/match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCardSlider from '.'

const items = [
	{
		title: 'Defy death 1',
		img: 'https://source.unsplash.com/user/willianjusten/1042x580',
		developer: 'Rockstar Games',
		price: 'R$ 140,00',
		promotionalPrice: 'R$ 100,00'
	},
	{
		title: 'Defy death 2',
		img: 'https://source.unsplash.com/user/willianjusten/1042x580',
		developer: 'Rockstar Games',
		price: 'R$ 140,00',
		promotionalPrice: 'R$ 100,00'
	},
	{
		title: 'Defy death 3',
		img: 'https://source.unsplash.com/user/willianjusten/1042x580',
		developer: 'Rockstar Games',
		price: 'R$ 140,00',
		promotionalPrice: 'R$ 100,00'
	},
	{
		title: 'Defy death 4',
		img: 'https://source.unsplash.com/user/willianjusten/1042x580',
		developer: 'Rockstar Games',
		price: 'R$ 140,00',
		promotionalPrice: 'R$ 100,00'
	},
	{
		title: 'Defy death 5',
		img: 'https://source.unsplash.com/user/willianjusten/1042x580',
		developer: 'Rockstar Games',
		price: 'R$ 140,00',
		promotionalPrice: 'R$ 100,00'
	},
	{
		title: 'Defy death 6',
		img: 'https://source.unsplash.com/user/willianjusten/1042x580',
		developer: 'Rockstar Games',
		price: 'R$ 140,00',
		promotionalPrice: 'R$ 100,00'
	}
]

describe('<GameCardSlider />', () => {
	it('should render with 4 active items', () => {
		const { container } = renderWithTheme(
			<GameCardSlider items={items} color="white" />
		)

		expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
	})

	it('should render white arrows if color passed', () => {
		renderWithTheme(<GameCardSlider items={items} color="white" />)

		expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
			color: '#FAFAFA'
		})
		expect(screen.getByLabelText(/next games/i)).toHaveStyle({
			color: '#FAFAFA'
		})
	})
})
