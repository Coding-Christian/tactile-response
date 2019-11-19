import React from 'react';
import Header from './Header';
import ProductList from './product-list';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header title='Wicked Sales'/>
        <div className='container'>
          <ProductList/>
        </div>
      </div>
    );
  }
}

export default App;
