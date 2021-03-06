import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'
import * as S from './styles'

const props = {
	title: 'Heading 1',
	subtitle: 'Heading 2',
	buttonLabel: 'Buy now',
	buttonLink: 'url',
	backgroundImage: '/img/red-dead-img.jpg'
}

describe('<Highlight />', () => {
	it('it should render headings and button', () => {
		renderWithTheme(<Highlight {...props} />)

		expect(
			screen.getByRole('heading', { name: /heading 1/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /heading 2/i })
		).toBeInTheDocument()
		expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
	})

	it('should render background image', () => {
		const { container } = renderWithTheme(<Highlight {...props} />)

		expect(container.firstChild).toHaveStyle({
			backgroundImage: `url(${props.backgroundImage})`
		})
	})

	it('should render a float image', () => {
		renderWithTheme(<Highlight {...props} floatImage="/red-dead-float.png" />)

		expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
			'src',
			'/red-dead-float.png'
		)
	})

	it('should render align right by default', () => {
		const { container } = renderWithTheme(<Highlight {...props} />)

		expect(container.firstChild).toHaveStyleRule(
			'grid-template-areas',
			"'floatImage content'"
		)
		expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
			modifier: `${S.Content}`
		})
	})

	it('should render align left', () => {
		const { container } = renderWithTheme(
			<Highlight {...props} alignment="left" />
		)

		expect(container.firstChild).toHaveStyleRule(
			'grid-template-areas',
			"'content floatImage'"
		)
		expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
			modifier: `${S.Content}`
		})
	})
})
