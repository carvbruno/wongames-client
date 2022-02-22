import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
	return <Home {...props} />
}

// getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time
// getServerSideProps => gerar via ssr a cada request
// getInitialProps => gerar via ssr a cada request
export function getServerSideProps() {
	return {
		props: {
			banners: bannersMock,
			newGames: gamesMock,
			mostPopularHighlight: highlightMock,
			mostPopularGames: gamesMock,
			upcommingGames: gamesMock,
			upcommingHighligth: highlightMock,
			upcommingMoreGames: gamesMock,
			freeGames: gamesMock,
			freeHighligth: highlightMock
		}
	}
}
