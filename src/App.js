import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Composant permettant d'afficher sur la page les phrases saisies sous forme de liste 
import List from './List';

// module 'react-tag-input' pour tagger les mots 
import { WithContext as ReactTags } from 'react-tag-input';

// Feuille de style associée au module 'react-tag-input' 
import './react-tags.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

// Valeur de départ permettant l'ajout de phrases et le stockage de celles ci 
//sous forme de liste 
      term: '',   //   term to store what we passing as a value to our input
      items: [],   //   items to store every value which we passing to our todo list
      
// Valeurs par défault du champs permettant l'ajout de tags 
      tags: [{ id: 1, text: "Thailand" }, { id: 2, text: "India" }] 
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);

  }

///////// Evenements associés au champs input pour l'ajout de phrases //////////

  // Stocke la valeur saisie par l'utilisateur dans 'term'
  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  // Lors de la soumission, affiche la phrase saisie sous forme 
  // de liste sous le champs input
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
    console.log("toto");
    console.log([this.state.items[1], this.state.items[2]]);
  }


///////// Evenements associés au module react-tag-input //////////

  // Suppresion de tags
  handleDelete(i) {
    let tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({ tags: tags });
  }

  // Ajout de tags
  handleAddition(tag) {
    let tags = this.state.tags;
    tags.push({
      id: tags.length + 1,
      text: tag
    });
    this.setState({ tags: tags });
  }

  // Déplacement de tags
  handleDrag(tag, currPos, newPos) {
    let tags = this.state.tags;

    // mutate array 
    tags.splice(currPos, 1);
    tags.splice(newPos, 0, tag);

    // re-render 
    this.setState({ tags: tags });
  }


  render() {
    const { tags, suggestions } = this.state;
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


          {/* CAHMPS INPUT POUR LA SAISIE DE PHRASES */}
          <input value={this.state.term} onChange={this.onChange} />
          
          <button>Submit</button>
        </form>

        {/* CHAMPS INPUT POUR AJOUTER DES TAGS  */}
        <ReactTags  tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag} />
        
        <ReactTags  tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag} />
        
        {/* COMPOSANT QUI AFFICHE LES PHRASES SAISIES SOUS FORME DE LISTE SOUS LE CHAMPS INPUT  */}
        <List items={this.state.items} />

      </div>
    )
  }
}

export default App;
