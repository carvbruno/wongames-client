import { render, screen } from '@testing-libray/react'

import Logo from '.'

describe('<Logo />', () => {
	const { container } = render(<Logo />)
})