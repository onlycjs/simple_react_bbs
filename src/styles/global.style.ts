import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap');
html, body {-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; -webkit-text-size-adjust: none;}
html, body, div, span, applet, object, iframe, p, blockquote, pre, a, button, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, main, nav, output, ruby, section, summary, time, mark, audio, video, input, textarea, select, svg {margin: 0; padding: 0; font: inherit; color: inherit; vertical-align: baseline; box-sizing: border-box; touch-action: manipulation;}
*::before, *::after {box-sizing: border-box;}
h1, h2, h3, h4, h5, h6 {margin: 0; padding: 0; vertical-align: baseline; box-sizing: border-box; touch-action: manipulation;}
main, header, nav, section, footer, menu, article, aside, details, figcaption, figure, hgroup {display: block;}
address, cite, code, em {font-style: inherit; font-weight: inherit;}
fieldset {border: 0;}
ol, ul {list-style: none;}
strong {font-weight: bold; font-weight: 700;}
blockquote, q {quotes: none;}
blockquote::before, blockquote::after, q::before, q::after {content: ""; content: none;}
legend {position: absolute; margin: -1px; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0);}
table {width: 100%;border-collapse: collapse; border-spacing: 0; table-layout: fixed;}
caption {position: absolute; margin: -1px; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0);}
th, td {line-height: 1.5; vertical-align: middle; word-break: break-all; text-overflow: ellipsis; word-wrap: break-word;}
img {border: 0; vertical-align: middle;}
button {cursor: pointer; vertical-align: middle; line-height: normal; border: 0; background: transparent; text-transform: none; overflow: visible; -webkit-appearance: button;}
button[disabled] {cursor: default; opacity: 0.5;}
a {color: inherit; text-decoration: none; -webkit-text-decoration-skip: objects;}
a:active, a:hover {outline: 0;}
video {display: block; width: 100%;}
label {vertical-align: middle;}
input, textarea { width: 100%; height: 50px; vertical-align: middle; line-height: normal; border-radius: 6px; border: 1px solid #e2e2e2; background-color: #fff; -webkit-touch-callout: default !important; -webkit-user-select: text !important;}
input[type="text"], input[type="password"], input[type="number"], input[type="email"], input[type="tel"], input[type="url"], input[type="search"], input[type="time"], input[type="file"], input[type="date"], textarea {padding: 0 10px; border: 1px solid #ddd; -webkit-appearance: none; appearance: none;}
input[type="password"] {font-family: sans-serif !important;}
input[type="checkbox"], input[type="radio"] {width: auto; border: none;}
input[type="button"], input[type="reset"], input[type="submit"] {cursor: pointer; -webkit-appearance: button;}
input:-webkit-autofill {-webkit-box-shadow: 0 0 0px 1000px #fff inset;}
input::-webkit-input-placeholder{color: #999 !important;}
input:-moz-placeholder{color: #999 !important; opacity: 1 !important;}
input::-moz-placeholder{color: #999 !important; opacity: 1 !important;}
input:-ms-input-placeholder{color: #999 !important;}
textarea {padding: 10px; width: 100%; height: auto; line-height: 1.8; resize: none;}
textarea::-webkit-input-placeholder{color: #999 !important;}
textarea:-moz-placeholder{color: #999 !important; opacity: 1 !important;}
textarea::-moz-placeholder{color: #999 !important; opacity: 1 !important;}
textarea:-ms-input-placeholder{color: #999 !important;}
input[type="text"][readonly], input[type="password"][readonly], input[type="email"][readonly], input[type="tel"][readonly], input[type="search"][readonly], input[type="text"][disabled], input[type="password"][disabled], input[type="email"][disabled], input[type="tel"][disabled], input[type="search"][disabled], textarea[readonly], textarea[disabled], select[disabled] {color: #666; background: #eaeaea; border-color: #c0c0c0;}
input[readonly], textarea[readonly] {cursor: default;}
select {padding: 0 30px; width: 100%; height: 50px; color: #555; border: 1px solid #e2e2e2; border-radius: 6px; background: #f7f7f7 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='48' width='48' fill='%23000000'%3E%3Cpath d='m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z'/%3E%3C/svg%3E") no-repeat 98% center / 24px; text-align: center; -webkit-appearance: none; -moz-appearance: none; appearance: none;}
select:focus {background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='48' width='48' fill='%23000000'%3E%3Cpath d='M14.15 30.15 12 28l12-12 12 12-2.15 2.15L24 20.3Z'/%3E%3C/svg%3E");}
select::-ms-expand {display: none;}
select[disabled] {color: #999;}
::selection {color: #000; background: rgba(255, 238, 51, 0.99);}
a, button, label, input, select, textarea {-webkit-tap-highlight-color: transparent;}

:focus-visible {box-shadow: 0 0 0 3px #fff, 0 0 0 5px #222; border-radius: 2px; outline: 0; transition: none !important;}

::-webkit-scrollbar {width: 12px; height: 12px;}
::-webkit-scrollbar-thumb {border: 2px solid rgba(0, 0, 0, 0); border-radius: 10px; background-color: #a6a6a6; background-clip: padding-box;}
::-webkit-scrollbar-thumb:hover {background-color: #808080;}
`;
