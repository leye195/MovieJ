import React from 'react';
import * as services from '../services/posts'; 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import '../style/Recommendation.css';
class Recommendation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            recommendations:[]
        }
    }
    componentDidMount(){
        this.getRecommendations();
    }
    getRecommendations=async()=>{
        const{id,lan}=this.props;
        const list=await services.getRecommendations(id,lan);
        this.setState({
            recommendations:list.data.results
        });
    }
    render(){
        const{recommendations}=this.state;
        const{lan}=this.props;
        let rr=recommendations.slice(0,10);
        const data_list=rr.map((item)=>{
            return <Card key={item.id}>
                    <div className="recommendation_wrapper" key={item.id} onClick={()=>{}}>
                        <CardContent>
                        <a href={`/movie_detail/`+item.id+"/"+lan}>
                            <img alt={item.title} src={"https://image.tmdb.org/t/p/w500"+item.poster_path}></img>
                            <p>{item.title}</p>
                        </a>
                        </CardContent>
                    </div>
                   </Card>
        })
        return(
            <div className="recommendation">
                <div className="menu">
                    <h3>{lan!=="ko-KR"?"Recommendations":"추천 영화"}</h3>
                </div>
                <div className="recommendation_container">
                    {rr.length===0?(lan!=="ko-KR"?"No recommendation":"추천 영화가 없습니다."):data_list}
                </div>
            </div>
        )
    }
}
export default Recommendation;