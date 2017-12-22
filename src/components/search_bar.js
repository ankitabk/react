import React, {Component}from 'react';

class SearchBar extends Component{
   constructor(props){
        super(props);
        this.state= {

            term: ''
        };
        props.onSearchTermChange(this.state.term);

        }

    onInputChange(term){
        console.log(term);
        this.setState({term :term});
         this.props.onSearchTermChange(term);

    }
    render(){
        return(
          <div>
              <input value={this.state.term}placeholder={"search..."}
              onChange={(event) =>this.onInputChange(event.target.value)} style={{width:"80%", height:40}}/>
          </div>
        );
    }

}
export default SearchBar;