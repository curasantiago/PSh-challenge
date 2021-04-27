

const Header = ({contact}) => {
    return (
        <div className="header-container">
            
            <div className="header-img-container">
                <img src={contact.img} alt="avatar" className="header-img" />
            </div>

            <div className="header-info-container">
                <h2>{contact.name}</h2>
                <p>{contact.position}</p>
            </div>

        </div>
    )
}

export default Header;