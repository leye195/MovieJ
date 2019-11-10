import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import default_movie from '../img/default_movie.png';
import '../style/People.css';
import user from '../img/user.svg'
import * as services from '../services/posts';
class People extends React.Component{
    constructor(props){
        super(props);
        this.state={
            m_credits:[],
            actor_img:user
        };
    }
    componentDidMount(){
        const{match}=this.props;
        this.getMovieCredit(match.params.name);
        this.getImg(match.params.name);
    }
    getMovieCredit=async(id,lan)=>{
        const info=await services.movie_credit(id,lan);
        this.setState({
            m_credits:info.data.cast,
        });
    }
    getImg=async(id)=>{
        const imgs=await services.get_actor_img(id);
        this.setState({
            actor_img:"https://image.tmdb.org/t/p/w500"+imgs.data.profiles[0].file_path
        })
    }
    render(){
        const{m_credits,actor_img}=this.state;
        console.log(m_credits);
        const item_list=m_credits.map((item)=>(
            <div className="m_item" key={item.id} id={item.id}>
                <img src={item.poster_path!==null?"https://image.tmdb.org/t/p/w500"+item.poster_path:default_movie} alt={item.title}/>
                <div>
                    <p>{item.title}</p>
                    <p>{item.character!==""?item.character:"None"}</p>
                </div>
            </div>
        ))
        console.log(actor_img);
        return(
            <div>
                <Header></Header>
                <div className="m_container">
                    <aside className="m_aside">
                        <div>
                            <img src={actor_img} alt="actor"></img>
                            <div>
                                Name
                            </div>
                        </div>
                    </aside>
                    <section className="m_div">
                        <div className="m_wrapper"> 
                            {item_list}
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
export default People; 