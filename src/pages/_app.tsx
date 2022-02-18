import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>Wongames</title>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
