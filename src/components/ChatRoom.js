import Header from "./Header";
import Message from './Message';


const ChatRoom = ({contact}) => {
    
    return (
        <div className="chatroom">
        <Header contact={contact} />
            <div className="chatroom-container">
            {/* Chat component */}

                {contact.text.map((mensaje, i) => <Message key={i} img={contact.img} mensaje={mensaje.message} time={mensaje.time}/>)}
           
            </div>
        </div>
    )
}

export default ChatRoom;