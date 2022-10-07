import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
  }

	html {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;
	}

	body {
		background-color: #E5E5E5;
	}

  button {
    cursor: pointer;
  }
`
