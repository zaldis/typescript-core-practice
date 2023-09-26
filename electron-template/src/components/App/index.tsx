import { FC } from "react";

import "./styles"


type ApplicationProps = {
    clickHandler: () => void;
}


const Application: FC<ApplicationProps> = ({clickHandler}) => {
    return (
        <div>
            <h2>React application</h2>
            <button onClick={clickHandler} className="button button-green">Click me!</button>
        </div>
    );
}

export default Application;
