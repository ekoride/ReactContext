import React,{useState} from "react";
import PackageContext from "./context"

const Provider = (props) => {
    const [mission, setMission] = useState({
        mname : "Learn React Context",
        time : "30 days",
        accept: "Not accepted"
    })
    return(
        <PackageContext.Provider
        value={{
            data: mission,
            isMissionAccepted: () => {
                setMission({...mission, accept: "ACCEPTED"})
            }
        }}
        >
            {props.children}
        </PackageContext.Provider>
    )
}

export default Provider;