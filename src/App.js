import './App.css';
import ChatSearch from "./components/ChatUsers/ChatSearch";
import ChatList from "./components/ChatUsers/ChatList";
import ContextProvider from "./components/context/ContextProvider";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Routes from "./components/Routes";

function App() {
  return (
      <Router>
          <ContextProvider>
              <div>
                  <ChatSearch/>
                  <ChatList/>
                  <Routes/>
              </div>
          </ContextProvider>
      </Router>
  );
}

export default App;
