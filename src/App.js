
import ChatRoom from './components/ChatRoom';
import avatar1 from './assets/avatar-1.png';
import avatar2 from './assets/avatar-2.png';
import avatar3 from './assets/avatar-3.png';
import PShLogo from './assets/psh_brand.png';
import Contact from './components/Contact';
import { animateScroll as scroll} from 'react-scroll';  //Libreria para realizar scroll automatico cuando recibe un nuevo chat

import { useState }  from 'react';

function App() {
    
  
  const getCurrentTime = () => {
    return `${new Date().getHours()}:${new Date().getMinutes()}` //función para obtener el tiempo cuando se envia un mensaje
  }

  const [time, setTime] = useState(getCurrentTime()); //set de estado del tiempo
  
  const [database, setDatabase] = useState([{
    id: 1,
    img: avatar1,
    name: 'Luciana Gutierrez',
    position: 'Marketing Manager',
    text: [{message: "Hi!", time: getCurrentTime()}],
    // time: `${new Date().getHours()}:${new Date().getMinutes()}pm`
  },

  {
    id: 2,
    img: avatar2,
    name: 'Micaela Alvarez',
    position: 'Backend Developer',
    text: [{message: "Hi!", time: getCurrentTime()}],
    
  },

  {
    id: 3,
    img: avatar3,
    name: 'Manuel Hoffmann',
    position: 'Frontend Developer',
    text: [{message: "Hi!", time: getCurrentTime()}],
   
  }]) //database default


  const [contact, setContact] = useState(database[0]); //Arranca siempre por el primer contacto
  const [text, setText] = useState(''); //texto a enviar
  const [show, setShow] = useState(true); //mostrar y ocultar el menu de contactos


  const findContact = (id, e) => {
    let contact =  database.find(user => user.id === id);
    setContact(contact);
  } //Función para seleccionar el contacto que haga click el usuario y renderizar

  const addtext = (e) => {
    e.preventDefault();
    setText(text)
    setTime(getCurrentTime())
    const newMessage = {message: text, time: time}
    contact.text.push(newMessage);
    console.log(contact.text);
    setText('')
  } //Creo un objeto con el mensaje que se ingreso en el input, y cuando se envió. Luego lo pusheo al array y seteo el texto nuevamente en ' '.

  const onClickDown = () => {
    scroll.scrollToBottom();
  } //función para bajar
  

  return (
    <div className="app-container">
      <div className="App">

        <div className="button-menu">
          <button className="menu" onClick={(e) => setShow(!show)}>CONTACTS</button>
        </div>

        { show ? <div className="container">
                  <div className="sidebar">
                  <div className="sidebar-nav">
                      <img src={PShLogo} className="img-sidebar" alt=".." />
                      <h1>React Chat</h1>
                  </div>

                  <div className="sidebar-contacts" onClick={(e) => setShow(!show)} >
                      { database.map(user => <Contact key={user.id} {...user} findContact={(id, e) => findContact(user.id, e)} /> )}
                  </div>
                  <div className="create-new">
                      <p> + Create New </p>
                  </div>
              </div>
            </div> : ''}
          

          <main className="main-container">
          <ChatRoom contact={contact}/>
              <div className="form-container">
                  <form className="form" onSubmit={(e) => addtext(e)} >
                    <div className="input-container">
                        <input className="input" placeholder="Ingrese su mensaje..." value={text} onChange={(e) => setText(e.target.value)} />
                      </div>
                      <div className="submit-container">
                        <button className="submit" onClick={() => onClickDown()}>SEND</button>
                      </div>
                  </form>
              </div>
          </main>

      </div>
    </div>
  );
}

export default App;
