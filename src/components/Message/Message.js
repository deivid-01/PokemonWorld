import React from 'react'

function Message({msg})
{
    return (<div
                className="center-item"
                >
                    <p>{msg}</p>
                    <br></br>
                </div>)
}

export default Message;