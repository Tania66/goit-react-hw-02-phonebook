import React from 'react';
import shortid from 'shortid';
import ContactForm from './phonebook/ContactForm/ContactForm';
import Filter from './phonebook/Filter/Filter';
import ContactList from './phonebook/ContactList/ContactList ';
import {Container, MainTitle, Title} from './phonebook/Global.styled'


class App extends React.Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
  };



  addContact = ({name, number}) =>{
const contact = {
  id:shortid.generate(),
  name:name,
  number:number
};

const saveContact = this.state.contacts.some(contact =>
  contact.name.toLowerCase() === name.toLowerCase())

  if (saveContact) {
    alert(`${contact.name} is already in contacts`)
    return
  }

  const saveNumber = this.state.contacts.some(contact =>
    contact.number === number)

    if (saveNumber) {
      alert(`${contact.number} is already in contacts`)
      return
    }

this.setState(prevState => ({
  contacts: [contact, ...prevState.contacts],
}))

  }


onChangeFilter = (event) => {
this.setState({filter:event.currentTarget.value})
}

// getFilterName = () => {
//   const normalizeNameFilter = this.state.filter.toLowerCase();
//   return this.state.contacts.filter(contact => 
//     contact.name.toLowerCase().includes(normalizeNameFilter))
// }

deleteContact = contactId =>{
this.setState(prevState => ({
  contacts: prevState.contacts.filter(contact => contact.id !== contactId)
}))
}


  render() {

const normalizeNameFilter = this.state.filter.toLowerCase();

const filterContacts = this.state.contacts.filter(contact => 
  contact.name.toLowerCase().includes(normalizeNameFilter))



    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm  onSubmit={this.addContact}/>

        <Title>Contacts</Title>
        <Filter value={this.state.filter} onChange={this.onChangeFilter}/>
        <ContactList contacts={filterContacts}  onDeleteContact={this.deleteContact}/>
      </Container>
    );
  }
}

export default App;
