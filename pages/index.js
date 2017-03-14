import React from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Pictures from '../components/Pictures'
import Contact from '../components/Contact'
import Map from '../components/Map'

class Home extends React.Component {
  // static getInitialProps ({}) {
  // }

  state = {
    status: 'available',
    name: 'Nome',
    email: 'E-mail',
    comment: 'Deixe seu comentário.',
    menu: false,
  }

  handleChange = (name, value) => {
    const change = {};
    change[name] = value;
    this.setState(change);
  }

  handleSubmit = async () => {
    event.preventDefault();
    const { name, email, comment } = this.state;
    this.setState({ status: 'pending' });


    try {
      let response = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        comment: comment,
      })});

      let responseJson = await response.json();

      console.log(responseJson);
      if (responseJson == 'success') {
        alert('Mensagem enviada com sucesso! Em breve entraremos em contato.')
      } else {
        alert(responseJson);
      }

    } catch(error) {
      // console.log(error);
      alert(error);
    }
  }
  
  toggleMenu = () => {
    this.setState({
      menu: !this.state.menu,
    })
  }

  render() {
    const { menu } = this.state;
    return (
      <div>
        <Navbar toggle={this.toggleMenu} open={menu} />
        <Hero />
        <About />
        <Services />
        <Pictures />
        <Contact handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...this.state} />
        <Map />
      </div>
    )
  }
}

export default Home;