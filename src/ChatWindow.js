import React, { Component } from 'react';


// definit l'affichage du meesage et de la date dans l'historique des messages
class ChatMessage extends Component {
    render() {
       return(
          <p style={{
            // backgroundColor:'#F2F2F2',
            backgroundColor:'rgb(77, 175, 111)',
            borderRadius: '5px',
            boxShadow:'0 0 6px #B2B2B2',
            display: 'inline-block',
            padding: '10px 18px',
            position: 'relative',
            verticalAlign: 'top',
            marginBottom: '0'
            }}>{this.props.message}
        </p>
       );
    }
 };


// definit l'affichage de l'ensemble de l'historique 
 class ChatMessageHistory extends Component {
    render() {      
       var createMessage = function(message, index) {
          
            // Détermine le style de la liste des messages envoyés
            var liStyles = {
                backgroundColor: '#E2E2E4',
                // backgroundColor: ( index % 2 === 1 ) ? '#ddd' : '#efefef',
                padding: '1rem',
                // borderBottom: '1px solid #ddd',                  
            };
          
          return <li style={liStyles}><ChatMessage message={message.message}  /></li>
       };
          
        var ulStyles = {
            listStyle: 'none',
            margin: 0,
            padding: 0,
           
        };
        
       return <ul style={ulStyles}>{this.props.messages.map(createMessage)}</ul>;
    }
 };   
    
 var MESSAGES = [
    { message: 'Hi Josh'},
    { message: 'How are you?'}                                    
 ];

// fonction à voir pour permettre de maintenir la scroll bar en position basse  
 function updateScroll(){
    var element = document.getElementById("box");
    element.scrollTop = element.scrollHeight;
    }
                                            
 class ChatWindow extends Component {
    constructor(props){
        super(props);
    
    this.state = {
          messages: MESSAGES,
          inputText: '', 
       }; 
    }
    
    

    handleSubmit = (e) => {
        e.preventDefault();
        var nextMessages = this.state.messages.concat([{ message: this.state.inputText, timestamp: 'Thursday' }]);
        var nextInputText = '';
       
        this.setState({ messages: nextMessages, inputText: nextInputText}, );
    }
    
    onChange = (e) => {
       this.setState({inputText: e.target.value});
    }

    render() {
       var windowStyles = {  
        maxHeight: '30em',
        maxWidth: '40em',
        margin: '1rem auto',
        overflow: 'scroll',
       };
       
       var formStyles = {
          display: 'flex',
          margin: '1rem auto',
          maxWidth: '40em' 
       };
       
        var inputStyles = {
            height: '30px',
            width: '270px',
            flex: '1 auto',
            boxSizing: 'border-box',  
        };
       
        var btnStyles = {
            backgroundColor: 'rgb(77, 175, 111)',
            border: 'none',
            width: '150px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontWeight: 'bold',
            fontSize: '0.8em'
        };
       
       return (
        <div>
            <div id="box">
                <div style={windowStyles}>
                    <ChatMessageHistory messages={this.state.messages} />
                </div>
            </div>

            <form style={formStyles} onSubmit={this.handleSubmit}>
                <input style={inputStyles} type="text" onChange={this.onChange} value={this.state.inputText} />
                <button style={btnStyles}>Send</button>
            </form>
        
        </div>
       );
    }
 };

 export default ChatWindow;
 
