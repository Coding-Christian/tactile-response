import React from 'react';
import Header from './Header';
import ProductList from './product-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: { name: 'catalog', params: {} } };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({ name, params });
  }

  render() {
    return (
      <div className='app'>
        <Header title='Wicked Sales'/>
        <div className='container'>
          <ProductList setView={this.setView}/>
        </div>
      </div>
    );
  }
}

export default App;
