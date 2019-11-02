import React from 'react';
import * as services from '../services/posts'; 
import '../style/SearchBar.css';
class SearchBar extends React.Component{
    state={
        focused:false,
        keyword:'',
        results:[],
    }
    componentDidMount() {
        this.input.addEventListener('focus', this.focus);
        this.input.addEventListener('blur', this.focus);
    }
    doSearch=async(key,lan="ko-KR")=>{
        const search=await services.getSearch(key,lan);
        this.setState({
            //keyword:key,
            results:search.data.results
        })
        console.log(this.state.results);
    }
    handleChange=(e)=>{
        const{value}=e.target;
        console.log(value);
        this.setState({
            keyword:value
        })
        let search_list=document.querySelector(".search-animation-container");
        if(value===""){
            let n=search_list.className.split(" ");
            n[1]="search_hide";
            search_list.className=n.join(" ");
        }else{
            this.doSearch(value);
            let n=search_list.className.split(" ");
            n[1]="search_active";
            search_list.className=n.join(" ");
        }

    }
    handleClick=()=>{
        const{keyword}=this.state;
        console.log("keyword: "+keyword);
        window.location.assign('/search?p='+keyword);
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
        const{results}=this.state;
        const result=results.map((item)=>{
            return <li key={item.id} id={item.id}><a href={"/search?p="+encodeURI(item.title)}>{item.title}</a></li>
        })
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
                <div className="search-animation-container search_hide">
                    <h3>{"Keyword Searches"}</h3>
                    <div className="search-list-container">
                        <ul>
                           {result}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default SearchBar;