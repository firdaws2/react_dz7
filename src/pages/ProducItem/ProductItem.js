import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setBusket} from "../../redux/basketSlice";
import Button from "@mui/material/Button";
import Swal from 'sweetalert2';
import styles from './product.module.css'


const ProductItem = ({i}) => {
    const dispatch = useDispatch()
    const [buttonClicked, setButtonClicked] = useState(false)

    const addProducts = () => {
        if (!buttonClicked) {
            dispatch(setBusket(i));
            setButtonClicked(true);
        } else {
            alert('tovar uzhe v korzine')
        }
    }

    return (
        <li>
            <div className={styles.container}>
                <div style={{overflow: 'hidden'}}>
                    <img className='img' src={i.picture}/>
                </div>
                <div className={styles.comment}>
                    <h2>{i.name}</h2>
                    <h3>Price: {i.price}</h3>
                    <Button  className={styles.button} variant='contained' onClick={addProducts}>Busket</Button>
                </div>
            </div>
        </li>
    )
}
export default ProductItem;