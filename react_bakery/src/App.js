import React, { Component } from 'react';
import './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pay from './Component/Pay';
import List from './Component/List';
import Add from './Component/Add';
import Button from './Component/Core/Button';
import RCSlider from 'rc-slider';




class App extends Component {
  constructor() {
    super();
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);

    this.state = {
      activeTab: 'add',
      items: [],
    }

    this.state = {
      input: '',
      price: 1

    }
    addItem(itemName, price) {
      console.log('methode addItems', itemName, price);

      let newItems= this.state.items
      newItems Push({
        itemName: itemName,
        price: price
      })
    }
    
this.setState({
    items: newItems
})
  
  onClickTabAdd() {
    console.log('tab add click')
    this.setState({
      activeTab: 'add'
    })
  }
  onClickTabList() {
    console.log('tab  list click')
    this.setState({
      activeTab: 'list'
    })
  }
  onClickTabPay() {
    console.log('tab pay click')
    this.setState({
      activeTab: 'pay'
    })
  }
  renderContent() {
    switch (this.state.activeTab) {
      case 'add':
        return <Add></Add>;
      case 'list':
        return <List></List>;
      case 'pay':
        return <Pay></Pay>;
      default:
        return (<h1>Error</h1>)
    }

  }
  render() {
    return (
      <div className="App">
        <Button isSelected={this.state.activeTab === 'add'} onClick={this.onClickTabAdd}>
          Add
        </Button>
        <Button isSelected={this.state.activeTab === 'list'} onClick={this.onClickTabList}>
          List
        </Button>
        <Button isSelected={this.state.activeTab === 'pay'} onClick={this.onClickTabPay}>
          Pay
        </Button>
        {this.state.activeTab === 'add' && <Add addItemFn={this.addItem}> </Add>
        {this.state.activeTab === 'list' && <List addItemFn={this.addItem}> </List>
        {this.state.activeTab === 'pay' && <Pay addItemFn={this.addItem}></Pay>
      
        <RCSlider></RCSlider>
        </div>
        );
      }
    }
       // {this.renderContent()}
       // {/* {this.state.activeTab === 'add' ? <Add></Add>: (this.state.activeTab === 'list' ? <List></List> : <Pay></Pay>)} */}
       
     




export default App;
