import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../style/Loading.css';

class Loading extends React.Component{
    render(){
        const{value}=this.props;
        return(
            <div>
                {value<100?
                <div id="loading_wrapper">
                    <CircularProgress  color="secondary" value={this.props.value} variant="determinate"></CircularProgress>
                </div>:<div></div>}
            </div>
        )
    }
}
export default Loading;