import React from 'react'

function Message({img, mensaje, time}) {
   
    return (
            <div className="chat-container">
                <div className="chat-img-container">
                    <img src={img} alt="avatar" className="chat-img" />
                </div>
                <div className="chat-text-container">
                    <p>{mensaje}</p>
                    <div className="time-container">
                        <p>{time}</p>
                    </div>
                </div>
            </div>
    )
}

export default Message
