import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {busketSelect, changePrice, minPrice, removeFromBasket} from "../../redux/basketSlice";
import styles from './busket.module.css'
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';

const Busket = () => {
    const {busket} = useSelector(busketSelect);
    const dispatch = useDispatch();
    const [count, setCount] = useState(busket.map(item => ({id: item._id, count: 0, price:item.price})))

    const increment = (price) => {
        setCount(count.map(item => {
            if (item.id === price) {
                return {
                    ...item, count: item.count + 1
                }
            }
            return item
        }))
        dispatch(changePrice(price))
    }


    const decrement = (price) => {
        setCount(count.map(item => {
            if (item.id === price && item.count > 0) {
                return {
                    ...item, count: item.count - 1,
                }
            }
            return item
        }))
        dispatch(minPrice(price))
    }

    const handleRemove = (item) => {
        dispatch(removeFromBasket(item))
    }

    const getCount = (price) => {
        const item = count.find(item => item.id === price)
        return item ? item.count : 0
    }

console.log(busket)
    return (
        <div className="container">
            {
                busket.map((item, index) => <li key={index} style={{listStyle: 'none'}}>
                    <div className={styles.busket}>
                        <div>
                            <img src={item?.picture} alt={item?.name}/>
                        </div>
                        <h4>{item?.name}</h4>
                        <h6>Price: {item?.price}</h6>
                        <div className={styles.count}>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => decrement(item._id)}>-</Button>
                            <h2>{getCount(item._id)}</h2>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={() => increment(item._id)}
                            >+</Button>
                            <IconButton color="gray" onClick={() => handleRemove(item)}>
                                <DeleteIcon/>
                            </IconButton>
                        </div>
                    </div>
                </li>)
            }
        </div>
    );
};

export default Busket;
