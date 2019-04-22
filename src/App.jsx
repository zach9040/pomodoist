import React from 'react';
import Timer from './components/Timer';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import ClearButton from './components/ClearButton';
import EmptyState from './components/EmptyState';

import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.clearCompletedItems = this.clearCompletedItems.bind(this);
    this.startSession = this.startSession.bind(this);
    this.increaseSessionsCompleted = this.increaseSessionsCompleted.bind(this);
    this.toggleItemIsCompleted = this.toggleItemIsCompleted.bind(this);

    this.state = {
      // TODO 1
      items : [],
      nextItemId : 0,
      sessionIsRunning : false,
      itemIdRunning : null
    };
  }


  addItem(description) {
    const { nextItemId } = this.state;
    const newItem = {
      // TODO 2: initialize new item object
      id : this.state.nextItemId,
      description : description,
      sessionsCompleted : 0,
      isCompleted : false
    };
    this.setState((prevState => ({
      // TODO 2: append new items to list and increase nextItemId by 1
      items : prevState.items.concat([newItem]),
      nextItemId : prevState.nextItemId + 1
    })));
  }

  clearCompletedItems() {
    // TODO 6
    const check = this.state.items.filter(item => item.isCompleted === true);
    this.setState({items : check});
  }

  increaseSessionsCompleted(itemId) {
    // TODO 5
    let check = this.state.items;
    for (let a = 0; a < this.state.items.length; a += 1) {
      if (check[a].id === itemId) {
        check.sessionsCompleted += 1;
        this.setState({items : check});
      }
    }
  }

  toggleItemIsCompleted(itemId) {
    // TODO 6
    let check = this.state.items;
    for (let a = 0; a < this.state.items.length; a += 1) {
      if (check[a].id === itemId) {
        check[a].isCompleted = !check[a].isCompleted;
        this.setState({item : check});
      }
    }
  }

  startSession(id) {
    // TODO 4
    this.setState((prevState => ({
      sessionIsRunning : true,
      itemIdRunning : id
    })))

  }

  checkComplete() {
    let check = this.state.items;
    for (let a = 0; a < this.state.items.length; a += 1) {
      if (check[a].isCompleted) {
        return true;
      }
    }
    return false;
  }

  render() {
    const {
      items,
      sessionIsRunning,
      itemIdRunning,
      areItemsMarkedAsCompleted = this.checkComplete()
    } = this.state;
    return (
      <div className="flex-wrapper">
        <div className="container">
          <header>
            <h1 className="heading">Today</h1>
            {areItemsMarkedAsCompleted && <ClearButton onClick={this.clearCompletedItems} />}
          </header>
          {this.state.items.length === 0 && <EmptyState /> }
            {this.state.sessionIsRunning === true && <Timer
              mode="WORK"
              onSessionComplete={() => this.increaseSessionsCompleted(itemIdRunning)}
              autoPlays
              key={this.state.itemIDRunning}
            />}
            <div className="items-container">
              {this.state.items.map((item) => ( <TodoItem description={item.description} sessionsCompleted={this.state.sessionsCompleted}
                                                          startSession={() => this.startSession(item.id)}
                                                          toggleIsCompleted={() => this.toggleItemIsCompleted(item.id)}
                                                          key={item.id}/> ))}
            </div>
        </div>
        <footer>
          <TodoInput addItem={this.addItem} />
        </footer>
      </div>
    );
  }
}

export default App;
