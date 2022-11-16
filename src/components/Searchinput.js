import React  from "react";

 // eslint-disable-next-line no-undef
class SearchInput extends React.Component {
    constructor(props){
        super(props)
        this.state={entry:""}
        this.onFormSubmit=this.onFormSubmit.bind(this)
    }

    onFormSubmit(event){     //or use arrow fun which automatically bind "this". 
        event.preventDefault()
        console.log(this.state.entry)
        this.props.onSearchSubmit(this.state.entry)
    }

    render() {        
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <div className="ui massive icon input">
                            <input type="text" placeholder="Search ..." 
                            onChange={(event)=>this.setState({entry:event.target.value})} 
                            value={this.state.entry}                            
                            />
                            <i className="search icon"></i>
                        </div>                        
                    </div>                    
                </form>
            </div>
        );
    }
}



export default SearchInput;