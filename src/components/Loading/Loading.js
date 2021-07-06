import React from "react";
import LinearProgress from '@material-ui/core/LinearProgress';
function Loading()
{
    return (<div className="container" >    
                <LinearProgress variant="indeterminate"  />               
                <br></br>
            </div>)
}
export default Loading;
