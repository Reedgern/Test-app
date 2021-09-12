import React from "react";
import preloader from '../../../assets/images/loadingIcon.gif';

const Preloader = (props) => {
    return (
        <div style={{'display': 'flex', 'box-sizing': 'border-box', 'justify-content': 'center'}}>
            <img style={{'max-width': '150px', 'max-height': '150px', 'flex': '1 1 auto'}} src={preloader} alt={'preloader'}/>
        </div>
    );
};

export default Preloader