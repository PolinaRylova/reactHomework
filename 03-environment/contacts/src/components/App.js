import React, { Component } from 'react';
import './App.css';
import Contact from './Contact.js';

const CONTACTS = [
  {
    id: 1,
    name: 'Usagi Tsukino',
    phoneNumber: '+7 10 3 30061978',
    image: './img/moon.jpg',
    transform: 'Sailor Moon',
    power: '"Love and Justice"'
  }, {
    id: 2,
    name: 'Ami Mizuno',
    phoneNumber: '+7 10 3 10091978',
    image: './img/mercury.jpg',
    transform: 'Sailor Mercury',
    power: '"Water and Wisdom"'
  }, {
    id: 3,
    name: 'Rei Hino',
    phoneNumber: '+7 10 3 17041978',
    image: './img/mars.jpg',
    transform: 'Sailor Mars',
    power: '"Fire and Passion"'
  }, {
    id: 4,
    name: 'Makoto Kino',
    phoneNumber: '+7 10 3 05121978',
    image: './img/jupiter.jpg',
    transform: 'Sailor Jupiter',
    power: '"Thunder and Courage"'
  }, {
    id: 5,
    name: 'Minako Aino',
    phoneNumber: '+7 10 3 22101978',
    image: './img/venus.jpg',
    transform: 'Sailor Venus',
    power: '"Love and Beauty"'
  }
];

class App extends Component {

  constructor() {
    super();
    this.state = {
      displayedContacts: CONTACTS,
    };
  }

  handleSearch = (event) => {
    let searchQuery = event.target.value.toLowerCase();
    let displayedContacts = CONTACTS.filter(function (el) {
      let searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({
      displayedContacts: displayedContacts
    });
  };

  render() {
    return (
        <div className="contacts">
          <input className="search__field" type="text" onChange={this.handleSearch}/>
          <ul className="contacts__list">
            {
              this.state.displayedContacts.map(function (el) {
                return <Contact
                    key={el.id}
                    name={el.name}
                    phoneNumber={el.phoneNumber}
                    image={el.image}
                    transform={el.transform}
                    power={el.power}
                />
              })
            }
          </ul>
        </div>
    );
  }
}

export default App;
