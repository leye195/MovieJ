import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../style/Loading.css';

class Loading extends React.Component{
    render(){
        const{value,load}=this.props;
        //console.log(value);
        return(
            <div>
                {
                value<100||load===false?
                <div id="loading_wrapper">
                    <CircularProgress  color="secondary" value={this.props.value} variant="determinate"></CircularProgress>
                </div>:<div></div>
                }
            </div>
        )
    }
}
export default Loading;