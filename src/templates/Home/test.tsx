import '../../../.jest/match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
	banners: bannersMock,
	newGames: [gamesMock[0]],
	mostPopularHighlight: highlightMock,
	mostPopularGames: [gamesMock[0]],
	upcommingGames: [gamesMock[0]],
	upcommingHighligth: highlightMock,
	upcommingMoreGames: [gamesMock[0]],
	freeGames: [gamesMock[0]],
	freeHighligth: highlightMock
}

describe('<Home />', () => {
	it('should render menu and footer', () => {
		renderWithTheme(<Home {...props} />)

		expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
		expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()
	})

	it('should render sections', () => {
		renderWithTheme(<Home {...props} />)

		expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /most popular/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /upcoming/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /free games/i })
		).toBeInTheDocument()
	})
})
