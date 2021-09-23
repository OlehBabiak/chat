import './App.css';
import ChatSearch from "./components/UsersChat/ChatSearch";
import UserList from "./components/UsersChat/UserList";
import ContextProvider from "./components/context/ContextProvider";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Routes from "./components/Routes";
import {ChatContainer, ContentWrapper, Header, Side} from "./AppStyled";

function App() {
  return (
      
      <Router>
          <ContextProvider>
              <ContentWrapper>
                  <Header>
                      <ChatSearch/>
                  </Header>
                  <Side>
                      <UserList/>
                  </Side>
                  <ChatContainer>
                      <Routes/>
                  </ChatContainer>
              </ContentWrapper>
          </ContextProvider>
      </Router>
  );
}

export default App;
