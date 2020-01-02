import React from 'react';
import * as services from '../services/posts'; 
import '../style/SearchBar.css';
import {connect} from 'react-redux';  
import * as actions from '../actions';
class SearchBar extends React.Component{
    componentDidMount() {}
    /*** 
     *  Function: doSearch(keyword,lan)
     * @param keyword  Search keyword
     * @param lan  language
     *  ajax 통신을 통해 api에서 데이터를 가져옴  
     ***/
    doSearch=async(keyword,lan="ko-KR")=>{
        const search=await services.getSearch(keyword,lan);
        this.props.handleSearch(search.data.results);
    }
    handleChange=(e)=>{
        const{value}=e.target;
        const{lan}=this.props;
        this.props.handleInput(value);
        let search_list=document.querySelector(".search-animation-container");
        if(value===""){
            const hasClass=search_list.classList.contains("search_active");
            if(hasClass)
                search_list.classList.remove("search_active");
            search_list.classList.add("search_hide");
            
        }else{
            this.doSearch(value,lan);
            const hasClass=search_list.classList.contains("search_hide");
            if(hasClass)
                search_list.classList.remove("search_hide");
            search_list.classList.add("search_active");
        }
    };
    handleClick=()=>{
        const{keyword,lan}=this.props;
        window.location.assign('/search?p='+keyword+"&language="+lan);
    }
    handleEnter=(e)=>{
        if(e.charCode===13){this.handleClick()}
    };
    render(){
        const results=this.props.results;
        const result=results.map((item)=>{
           return <li className="search_item" key={item.id} id={item.id}><a href={"/search?p="+encodeURI(item.title)}>{item.title}</a></li>
        })
        return(
            <div className="search_bar">
                <section className="search">
                    <div className="sub">
                        <input ref={input => this.input = input} type="text" placeholder="Movie Title"
                            className={'input'} onChange={this.handleChange} value={this.props.keyword} 
                            onKeyPress={this.handleEnter}/>
                    </div>
                </section>
                <div className="search-animation-container search_hide">
                    <h3>{"Keyword Searches"}</h3>
                    <div className="search-list-container">
                        <ul >{results.length>0?result:" No result"}</ul>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        keyword:state.search.keyword,
        results:state.search.results
    };
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleInput:(keyword)=>{dispatch(actions.get_keyword(keyword))},
        handleSearch:(results)=>{dispatch(actions.search(results))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);