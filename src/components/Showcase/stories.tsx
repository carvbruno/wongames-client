import { Story, Meta } from '@storybook/react/types-6-0'
import Showcase from '.'

export default {
	title: 'Showcase',
	component: Showcase
} as Meta

export const Basic: Story = () => <Showcase />