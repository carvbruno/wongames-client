import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner, { BannerProps } from '.'

const args: BannerProps = {
	img: 'https://source.unplash.com/user/willianjusten/1042x580',
	title: 'Defy death',
	subtitle: '<p>Play the new <strong>Crashlands</strong> season</p>',
	buttonLabel: 'Buy now',
	buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
	it('should to render correctly', () => {
		renderWithTheme(<Banner {...args} />)

		expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /Defy death/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /Play the new Crashlands/i })
		).toBeInTheDocument()
	})

	it('should to render a ribbon', () => {
		renderWithTheme(
			<Banner
				{...args}
				ribbon="My ribbon"
				ribbonSize="small"
				ribbonColor="secondary"
			/>
		)

		const ribbon = screen.getByText(/My ribbon/i)

		expect(ribbon).toBeInTheDocument()
		expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
		expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
	})
})
