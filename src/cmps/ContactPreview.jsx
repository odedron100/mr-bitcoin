export function ContactPreview ({contact,onSelectedContact}) {
  // const random = Math.floor(Math.random() *100);
    return (
      <li className="contact" onClick={() => onSelectedContact(contact._id)}>
        {/* <img src={`https://randomuser.me/api/portraits/men/${random}.jpg`}/> */}
        <p>Name: <h5>{contact.name}</h5></p>
        <p>Email: <h5>{contact.email}</h5></p>
        <p>Phone: <h5>{contact.phone}</h5></p>
      </li>
    )
  }
