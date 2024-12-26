import './App.css';
import ChatWindow from './components/ChatWindow';
import ContactList from './components/ContactList';

function App() {
  return (
    <main className='main'>
      <ContactList />
      <ChatWindow />
    </main>
  )
}

export default App
