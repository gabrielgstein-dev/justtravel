import { createGlobalStyle } from 'styled-components'

import { fontFamily } from './fontFamily'

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'CircularStd-Book';
        src: url(${fontFamily.circularStd.book}),
          url(${fontFamily.circularStd.medium}),
          url(${fontFamily.circularStd.bold});
        font-weight: 300;
        font-style: normal;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-family: CircularStd-Book, 'Times New Roman', Times, serif;
        font-size: 14px;

        &::before,
        &::after {
          box-sizing: inherit;
        }
      }

      html,
      body {
        height: 100%;
        width: 100%;
      }

      footer {
        width: 100%;
        position: absolute;
        bottom: 0;
        padding-bottom: 2.5rem;
        background-color: #fff;
      }

      #root {
        height: 100%;
      }

`
