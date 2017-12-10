import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TagReact from './TagReact';
import List from './List';

class App extends Component {
  constructor(props){
    super(props);
    //this.state = {value: ''};
    this.state = {
        term: '',   //   term to store what we passing as a value to our input
        items: []   //   items to store every value which we passing to our todo list
      };
    }

  onChange = (event) => {
      this.setState({term: event.target.value});
  }
  
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
    console.log("toto");
    console.log([this.state.items[1], this.state.items[2] ]);
  }


render() {
    return (
        
      <div className="App">  
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <form className="App" onSubmit={this.onSubmit}>
            
            {/* onSubmit is a function which does three things:    
                --> Cleans the input field after a submit action is triggered, by resetting 
                term to the initial empty string value
                --> Pushes every term to our array of items after submit
                --> The preventDefault() method stops the default action of an element 
                    from happening. */}
            
            <input value={this.state.term} onChange={this.onChange} />
            {/* value takes what is stored in our state as term */}
            {/* onChange is a function which changes our state depending on the current input 
            value. To change state we need to use the this.setState() method which also triggers 
            UI update. */}
            
            <button>Submit</button>
        </form> 

        <List items={this.state.items}/>


      </div>       
        
    )
}




}  

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
        
        
        
        
//         <TagReact />
//       </div>
//     );
//   }
// }

export default App;
