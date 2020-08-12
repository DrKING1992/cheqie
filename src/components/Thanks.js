import React, {useState} from "react";
import { useParams, useHistory } from "react-router-dom";

const Thanks = () => {

    const history = useHistory();
    const { name } = useParams();

    console.log(history);

    return (
        <React.Fragment>
            <div className="thanks">
                <p>Thanks <strong>{name}!!</strong></p>
                <p>You joined <strong>{history.location.state}</strong></p>

                <hr/>

                <strong>Dit is een bedank bericht title</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
        </React.Fragment>
    )
}

export default Thanks;