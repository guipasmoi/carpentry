import React, { Component } from 'react';

import { setRegistry } from './lib/registry';
import './App.css';
import Layout from './components/Layout'
import Header from './components/Header'
import Title from './components/Title';
import GetStarted from './components/GetStarted';

setRegistry({
    Header: {
        default: <Title slot="default">Fucking Slots</Title>
    }
})

class App extends Component {
    render() {
        return (
          <Layout>
              <GetStarted />
              <p slot="footer">Footer</p>
              <Header slot="header" />
              <Header slot="headers">
                  <Title slot="default">Fucking Slots 2</Title>
              </Header>
          </Layout>
        )
    }
}

export default App;
