import React from 'react';
import './contacts.scss';

import Contact from '../contact/Contact';

const contacts = [
  {
    firstName: 'Барней',
    lastName: 'Стинсовський',
    phone: '+380956319521',
    gender: 'male',
  },
  {
    firstName: 'Робін',
    lastName: 'Щербатська',
    phone: '+380931460123',
    gender: 'female',
  },
  {
    firstName: 'Анонімний',
    lastName: 'Анонімус',
    phone: '+380666666666',
  },
  {
    firstName: 'Лілія',
    lastName: 'Олдровна',
    phone: '+380504691254',
    gender: 'female',
  },
  {
    firstName: 'Маршен',
    lastName: 'Еріксонян',
    phone: '+380739432123',
    gender: 'male',
  },
  {
    firstName: 'Теодор',
    lastName: 'Мотсбес',
    phone: '+380966319521',
    gender: 'male',
  },
];

class Contacts extends React.Component {
  state = {
    contacts: contacts,
    search: '',
  };

  handleSearchChange = (e) => {
    const filteredList = contacts.filter(
      (contact) =>
        `${contact.firstName} ${contact.lastName}`
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        contact.phone.includes(e.target.value)
    );
    this.setState({ contacts: filteredList });
    this.setState({ search: e.target.value });
  };
  render() {
    return (
      <div className="contacts">
        <h1>Контакти</h1>
        <input
          type="text"
          placeholder={'Кого бажаєте знайти'}
          onChange={this.handleSearchChange}
          value={this.state.search}
        />
        {this.state.contacts.map((contact, i) => {
          return <Contact {...contact} key={contact.phone} />;
        })}
      </div>
    );
  }
}

export default Contacts;
