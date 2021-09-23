import styled from "styled-components"

const ContentWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-template-rows: 44px 1fr;
  grid-template-areas: 
  "header content"
  "side content";
  background: lightcoral;
  height: 100vh;
  padding: 5px;
`
const Header = styled.div`
grid-area: header;
`
const Side = styled.div`
grid-area: side;
`

const ChatContainer = styled.div`
background: lightcyan;
  grid-area: content;
`

export {
    ContentWrapper,
    ChatContainer,
    Header,
    Side
}