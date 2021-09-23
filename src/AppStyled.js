import styled from "styled-components"

const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-template-rows: 110px 1fr;
  grid-template-areas: 
  "search content"
  "side content";
  height: 100vh;
  padding: 5px;
  border: 2px solid lightgray;
  overflow-x:hidden;
  @media (max-device-width: 1030px) {
    display: flex;
    flex-direction: column;
  }
`
const Search = styled.div`
  grid-area: search;
  background: #eeeaea;
`
const Side = styled.div`
grid-area: side;
`

const ChatContainer = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 80px;
`

export {
    ContentWrapper,
    ChatContainer,
    Search,
    Side
}