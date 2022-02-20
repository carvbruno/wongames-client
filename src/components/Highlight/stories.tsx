import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighLightProps } from '.'

export default {
	title: 'Highlight',
	component: Highlight,
	args: {
		title: `Red Dead it's back`,
		subtitle: `Come see John's adventures`,
		buttonLabel: 'Buy now',
		buttonLink: 'url',
		backgroundImage: '/img/red-dead-img.jpg'
	}
} as Meta

export const Basic: Story<HighLightProps> = (args) => (
	<div style={{ maxWidth: '140rem' }}>
		<Highlight {...args} />
	</div>
)

export const WithFloatImage: Story<HighLightProps> = (args) => (
	<div style={{ maxWidth: '140rem' }}>
		<Highlight {...args} />
	</div>
)

WithFloatImage.args = {
	floatImage: '/img/red-dead-float.png'
}
