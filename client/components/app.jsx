import React from 'react';
import Header from './Header';
import ProductList from './product-list';
import ProductDetails from './product-details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: { name: 'catalog', params: {} } };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({ view: { name, params } });
  }

  render() {
    let viewElem;
    if (this.state.view.name === 'catalog') {
      viewElem = (<ProductList setView={this.setView}/>);
    } else { viewElem = (<ProductDetails params={this.state.view.params} setView={this.setView}/>); }
    return (
      <div className='app'>
        <Header title='Wicked Sales'/>
        <div className='container'>{viewElem}</div>
      </div>
    );
  }
}

export default App;
