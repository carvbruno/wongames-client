import { Story, Meta } from '@storybook/react/types-6-0'
import { Email } from 'styled-icons/material-outlined'

import TextField, { TextFieldProps } from '.'

export default {
	title: 'Form/TextField',
	component: TextField,
	args: {
		label: 'E-mail',
		labelFor: 'Email',
		icon: <Email />,
		id: 'Email',
		initialValue: '',
		placeholder: 'john.cage@gmail.com'
	},
	argTypes: {
		onInput: { action: 'changed' },
		icon: { type: '' }
	}
} as unknown as Meta

export const Default: Story<TextFieldProps> = (args) => (
	<div style={{ maxWidth: 300, padding: 15 }}>
		<TextField {...args} />
	</div>
)

export const WithError: Story<TextFieldProps> = (args) => (
	<div style={{ maxWidth: 300, padding: 15 }}>
		<TextField {...args} />
	</div>
)

WithError.args = {
	error: 'Ops... something is wrong'
}
