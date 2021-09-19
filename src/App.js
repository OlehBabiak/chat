import './App.css';
import ChatSearch from "./components/ChatUsers/ChatSearch";
import ChatList from "./components/ChatUsers/ChatList";
import Chat from "./components/Chat/Chat";
import ContextProvider from "./components/context/ContextProvider";

function App() {
  return (
      <ContextProvider>
          <div>
              <ChatSearch/>
              <ChatList/>
              <Chat/>
          </div>
      </ContextProvider>
  );
}

export default App;
