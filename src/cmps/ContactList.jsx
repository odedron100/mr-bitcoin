import  {ContactPreview}  from '../cmps/ContactPreview.jsx';

export function ContactList({contacts,onSelectedContact}) {
    return (
        <ul className="contact-list">
            {contacts.map((contact) => <ContactPreview onSelectedContact={onSelectedContact} contact={contact} key={contact._id}/>)}
        </ul>
    )
  }
