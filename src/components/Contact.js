

const Contact = ({id, img, name, text, findContact}) => {
    
    return (
        <section className="contacts-container" onClick={(e) => findContact(id, e.target)}> 
            {/* función para encontrar el contacto */}
            <article className="contacts-article">

                <div className="article-img-container">
                    <img src={img} className="img-article" alt="avatar" />
                </div>

                <div className="article-info">
                    <h3>{name}</h3>
                    <p>{text[text.length - 1].message.length > 25 ? '.......' : text[text.length - 1].message}</p>
                </div>

                <div className="article-time-container">
                    <p>{text[text.length - 1].time}</p>
                    {/* la hora del último mensaje */}
                </div>
            </article>
        </section>
    )
}

export default Contact;