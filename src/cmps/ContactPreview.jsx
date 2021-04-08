import { Link } from 'react-router-dom'
export function ContactPreview ({contact}) {
  // const random = Math.floor(Math.random() *100);
    return (
      <Link to={'/contacts/' + contact._id}>
        <li className="contact">
          {/* <img src={product.ProductImage}/> */}
          <div>Name: <h5>{contact.name}</h5></div>
          <div>Email: <h5>{contact.email}</h5></div>
          <div>divhone: <h5>{contact.phone}</h5></div>
        </li>
      </Link>
    )
  }
