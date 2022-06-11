import React, { useState } from 'react';

// router
import { withRouter } from 'react-router-dom';

// styling
import './Menu.css';

const Menu = props => {
    // conditionally render dropdown affect based on this boolean
    const [openMenu, setOpenMenu] = useState(false)

    // parameter num corresponds to .open-# classes
    // is assigned when Menu clicked triggering animated dropdown
    const setClassNames = num => {
        const classArr = ["m-item"];
        if (openMenu) classArr.push(`open-${num}`)
        return classArr.join(' ')
    }

    // takes route string as parameter
    const pushToRoute = route => {
        props.history.push(route)
        setOpenMenu(false)
    }

    return (
        <div className="Menu">
            <div className={"m-item m-logo"}
                onClick={() => setOpenMenu(!openMenu)}>
                Menu
            </div>
            <div className={setClassNames(1)}
                onClick={() => pushToRoute("/people")}>
                People
            </div>
            <div className={setClassNames(2)}
                onClick={() => pushToRoute("/planets")}>
                Planets
            </div>
            <div className={setClassNames(3)}
                onClick={() => pushToRoute("/films")}>
                Films
            </div>
            <div className={setClassNames(4)}
                onClick={() => pushToRoute("/starships")}>
                Starships
            </div>
            <div className={setClassNames(5)}
                onClick={() => pushToRoute("/vehicles")}>
                Vehicles
            </div>
            <div className={setClassNames(6)}
                onClick={() => pushToRoute("/species")}>
                Species
            </div>
            <div className={setClassNames(7)}
                onClick={() => pushToRoute("/")}>
                Sign out
            </div>
        </div>
  );
}

export default withRouter(Menu);