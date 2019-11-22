import React from 'react';
import * as services from '../services/posts'; 
import '../style/SearchBar.css';
import {connect} from 'react-redux';  
import * as actions from '../actions';
class SearchBar extends React.Component{
    componentDidMount() {}

    /*** 
     *  Function: doSearch(key,lan)
     *  ajax 통신을 통해 api에서 데이터를 가져옴  
     ***/
    doSearch=async(keyword,lan="ko-KR")=>{
        const search=await services.getSearch(keyword,lan);
        //this.setState({results:search.data.results})
        this.props.handleSearch(search.data.results);
    }
    handleChange=(e)=>{
        const{value}=e.target;
        const{lan}=this.props;
        //this.setState({keyword:value})
        this.props.handleInput(value);
        let search_list=document.querySelector(".search-animation-container");
        if(value===""){
            let n=search_list.className.split(" ");
            n[1]="search_hide";
            search_list.className=n.join(" ");
        }else{
            this.doSearch(value,lan);
            let n=search_list.className.split(" ");
            n[1]="search_active";
            search_list.className=n.join(" ");
        }
    }
    handleClick=()=>{
        const{keyword,lan}=this.props;
        //console.log("keyword: "+keyword);
        window.location.assign('/MovieJ/search?p='+keyword+"&language="+lan);
    }
    handleEnter=(e)=>{
        if(e.charCode===13){this.handleClick()}
    }
    render(){
        const results=this.props.results;
        const result=results.map((item)=>{
           return <li key={item.id} id={item.id}><a href={"/search?p="+encodeURI(item.title)}>{item.title}</a></li>
        })
        return(
            <div className="search_bar">
                <section className="search">
                    <div className="sub">
                        <input ref={input => this.input = input} type="text" placeholder="Movie Title"
                            className={'input'}
                            onChange={this.handleChange} value={this.props.keyword} 
                            onKeyPress={this.handleEnter}
                        />
                    </div>
                </section>
                <div className="search-animation-container search_hide">
                    <h3>{"Keyword Searches"}</h3>
                    <div className="search-list-container">
                        <ul>
                           {results.length>0?result:" No result"}
                        </ul>
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