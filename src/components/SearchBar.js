import React from 'react';
import * as services from '../services/posts'; 
import '../style/SearchBar.css';
class SearchBar extends React.Component{
    state={
        focused:false,
        keyword:'',
        results:[]
    }
    componentDidMount() {
        this.input.addEventListener('focus', this.focus);
        this.input.addEventListener('blur', this.focus);
    }
    doSearch=async(key,lan="ko-KR")=>{
        const search=await services.getSearch(key,lan);
        this.setState({
            results:search.data.results
        })
        console.log(this.state.results);
    }
    handleChange=(e)=>{
        const{value}=e.target;
        this.setState({
            keyword:value
        });
        this.doSearch(value);
    }
    handleClick=()=>{
        const{keyword}=this.state;
        console.log("keyword: "+keyword);
        this.doSearch(keyword);
    }
    handleEnter=(e)=>{
        if(e.charCode===13){
            this.handleClick()
        }
    }
    focus=()=>{
        this.setState((state) => ({ focused: !state.focused }))
    }
    render(){
        return(
            <div className="search_bar">
                <section className="search">
                    <div className="sub">
                        
                        <input ref={input => this.input = input} type="text" placeholder="Movie Title"
                            className={['input', this.state.focused && 'input-focused'].join(' ')}
                            onChange={this.handleChange} value={this.state.keyword} 
                            onKeyPress={this.handleEnter}
                        />
                    </div>
                </section>
                <div className="search-animation-container">
                    <div className="search-list-container">
                        <ul>
                           <li>11111</li>
                           <li>22222</li>
                           <li>33333</li>
                           <li>44444</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default SearchBar;