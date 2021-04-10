import { Link } from 'react-router-dom'
export function ContactPreview ({contact}) {
  // const random = Math.floor(Math.random() *100);
  console.log('contact', contact);
    return (
      <Link to={'/contacts/' + contact._id}>
        <li className="contact" style={{backgroundImage: `url(${contact.img})`}}>
          <div className="details-container">
            <div className="item name">Name: <h5>{contact.name}</h5></div>
            <div className="item email">Email: <h5>{contact.email}</h5></div>
            <div className="item phone">Phone: <h5>{contact.phone}</h5></div>
          </div>
        </li>
      </Link>
    )
  }
