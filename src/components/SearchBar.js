import React from 'react';
import '../style/SearchBar.css';
class SearchBar extends React.Component{
    state={
        focused:false
    }
    componentDidMount() {
        this.input.addEventListener('focus', this.focus);
        this.input.addEventListener('blur', this.focus);
    }
    focus=()=>{
        this.setState((state) => ({ focused: !state.focused }))
    }
    render(){
        return(
            <div className="search_bar">
                <section className="search">
                    <div className="sub">
                        <span>
                            <i className="material-icons">Search</i>
                        </span>
                        <input ref={input => this.input = input} type="text" placeholder="Movie Title"
                            className={['input', this.state.focused && 'input-focused'].join(' ')}
                        />
                    </div>
                </section>
            </div>
        )
    }
}
export default SearchBar;