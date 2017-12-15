import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';


class Tagword extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            tags: [{ id: 1, text: "Thailand" }, { id: 2, text: "India" }],
            suggestions: Countries
            
        };
        
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        
    }


    handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
    }
 
    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});
    }
 
    

    render() {
        const { tags, suggestions } = this.state;
    
        return (
            <div>
                <ReactTags tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition} />
            </div>
        )
    }
};

export default Tagword;