import React from 'react'
import {Link} from 'react-router-dom'
import classes from './Modal.module.css'

const ModalCard = ({img,mssg,route,to}) => {
    return (
        <div className={classes.modal__container}>
            <h3>{mssg}</h3>
            <img src={img} alt={mssg}/>
            <Link to={route}>
                <button className={classes.button} id="card" name="card-button">
                    {to}
                </button>
            </Link>
        </div>
    )
}

export default ModalCard
