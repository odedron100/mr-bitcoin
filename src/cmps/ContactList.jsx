import  {ContactPreview}  from '../cmps/ContactPreview.jsx';

export function ContactList({contacts,onSelectedContact,onRemoveContact}) {
    return (
        <ul className="contact-list">
            {contacts.map((contact) => <ContactPreview contact={contact} key={contact._id} onRemoveContact={onRemoveContact}/>)}
        </ul>
    )
  }
