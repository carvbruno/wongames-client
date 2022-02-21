import { Story, Meta } from '@storybook/react/types-6-0'

import { GameCardProps } from 'components/GameCard'
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

export default {
	title: 'GameCardSlider',
	component: GameCardSlider,
	args: { items },
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'dark'
		}
	}
} as Meta

export const Basic: Story<GameCardProps[]> = (args) => (
	<div style={{ maxWidth: '130rem', margin: '0 auto' }}>
		<GameCardSlider items={args} {...args} />
	</div>
)
