import React, { Component } from 'react';

import './App.css';
import Layout from './components/Layout'
import Header from './components/Header'
import Title from './components/Title';
import GetStarted from './components/GetStarted';

class App extends Component {
    render() {
        return (
          <Layout>
              <Header slot="header" connector={(store) => ""}>
                  <Title slot="default">Fucking Slots</Title>
              </Header>
              <GetStarted />
              <p slot="footers">Footer</p>
          </Layout>
        )
    }
}

export default App;
