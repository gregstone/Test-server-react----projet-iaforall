import React, { Component } from 'react';
//var Linkify = require('react-linkify');

class TagReact extends React.Component {
    constructor(props){
        super(props);
        //this.state = {value: ''};
        this.state = {
            term: '',   //   term to store what we passing as a value to our input
            items: []   //   items to store every value which we passing to our todo list
          };
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    onChange = (event) => {
        this.setState({term: event.target.value});
      }
   
    

    handleChange(event) {
        this.setState({value: event.target.value});
    }

   


    render() {
        return (
            
            // <form onSubmit={this.handleSubmit}>
            //     {/* <input type="text" value={this.state.value} onChange={this.handleChange}/> */}
            //     {/* <p>{this.state.value}</p> */}
            //     <button type="submit">Submit</button> 
            //     
            // </form>
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
            
        )
    }




}

export default TagReact;


// {
//     addTodo(title: string) : void {
//         this.todos = [{
//             id: 0,
//             title: title,
//             completed: false
//         }, ...this.todos]
//     }
// }