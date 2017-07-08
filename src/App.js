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
              <Header slot="header">
                  <Title slot="default">Fucking Slots</Title>
              </Header>
              <Header slot="header">
                  <Title slot="default">Fucking Slots 2</Title>
              </Header>
              <GetStarted />
              <p slot="footer">Footer</p>
          </Layout>
        )
    }
}

export default App;
