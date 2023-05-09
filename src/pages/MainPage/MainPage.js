import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts, productsSelect} from "../../redux/productsSlice";
import ProductItem from "../ProducItem/ProductItem";
import {Box, CircularProgress} from "@mui/material";

const MainPage = () => {
    const {products, load} = useSelector(productsSelect)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div>
            <ul className='ul'style={{width: '1300px', margin: '20px auto'}}>
                {
                    !load
                    ?
                        products.map(i => <ProductItem i={i}/>)
                        :
                        <Box>
                            <CircularProgress/>
                        </Box>
                }
            </ul>
        </div>
    );
};

export default MainPage;