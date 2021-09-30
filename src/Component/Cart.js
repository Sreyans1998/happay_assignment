import React from 'react'
import NavBar from '../Utility/NavBar'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import OrderSummary from '../Utility/orderSummary';

const Cart = () => {
    return(
        <>
            <NavBar class="d-none" shadow="shadow navbar navbar-expand-lg navbar-light bg-light"/>
            <div className="container mt-5">
                <a href="/" className="text-decoration-none d-flex text-center w-25 text-secondary fw-bold">
                    <ArrowBackRoundedIcon />
                    <p className="ms-2 ">Back to Home</p>
                </a>
                <h4 className="fw-bolder">Order Summary (3 Item)</h4>
                <div className="row mt-1 d-flex justify-content-between">
                    <OrderSummary />
                </div>
            </div>
        </>
    )
}

export default Cart