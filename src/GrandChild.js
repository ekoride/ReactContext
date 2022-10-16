import React, { Fragment } from "react";
import Provider from "./Provider";
import Context from "./context"
const GrandChild = () => {
    return(
        <Context.Consumer>
            
            {
                (context) => (
                    <Fragment>
                        <h2 align="center">From GrandChild</h2>
                        <h3>Task Information</h3>
                        <p>Mission Name: {context.data.mname}</p>
                        <p>Time required: {context.data.time}</p>
                        <h4>Task Status: {context.data.accept}</h4>
                        <button onClick={context.isMissionAccepted}>Accept Task</button>
                    </Fragment>
                )
            }
        </Context.Consumer>
    )
}

export default GrandChild;