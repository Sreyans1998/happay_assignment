import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Button, ButtonGroup } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveIcon from '@mui/icons-material/Remove';

const OrderSummary = () => {
    return(
        <>
            <div className="col-11 mt-5 mb-5 mx-auto col-lg-7 col-xl-7 text-secondary bg-white card">
                <div className="card-body">
                    <div className="card-title mx-5 d-flex justify-content-between">
                        <h6 className="fw-bold">S.NO</h6>
                        <h6 className="fw-bold">ITEMS</h6>
                        <h6 className="fw-bold">QTY</h6>
                    </div>
                    <hr />
                    <div className="card-text col-10 my-5 mx-auto d-flex justify-content-between">
                        <h6 className="ms-4">1.</h6>
                        <h6 className="ms-5">Food Card</h6>
                        <ButtonGroup variant="contained" sx={{width: "20%"}} aria-label="outlined text.secondary button group">
                            <Button startIcon={<RemoveIcon />} sx={{bgcolor:"text.secondary"}}></Button>
                            <h5 className="d-flex justify-content-center text-secondary w-100 my-auto">2</h5>
                            <Button startIcon={<AddOutlinedIcon />} sx={{bgcolor:"text.secondary"}}></Button>
                        </ButtonGroup>
                    </div>
                    <div className="card-text col-10 my-5 mx-auto d-flex justify-content-between">
                        <h6 className="ms-4">1.</h6>
                        <h6 className="ms-5">Food Card</h6>
                        <ButtonGroup variant="contained" sx={{width: "20%"}} aria-label="outlined text.secondary button group">
                            <Button startIcon={<RemoveIcon />} sx={{bgcolor:"text.secondary"}}></Button>
                            <h5 className="d-flex justify-content-center text-secondary w-100 my-auto">2</h5>
                            <Button startIcon={<AddOutlinedIcon />} sx={{bgcolor:"text.secondary"}}></Button>
                        </ButtonGroup>
                    </div>
                    <div className="card-text col-10 my-5 mx-auto d-flex justify-content-between">
                        <h6 className="ms-4">1.</h6>
                        <h6 className="ms-5">Food Card</h6>
                        <ButtonGroup variant="contained" sx={{width: "20%"}} aria-label="outlined text.secondary button group">
                            <Button startIcon={<RemoveIcon />} sx={{bgcolor:"text.secondary"}}></Button>
                            <h5 className="d-flex justify-content-center text-secondary w-100 my-auto">2</h5>
                            <Button startIcon={<AddOutlinedIcon />} sx={{bgcolor:"text.secondary"}}></Button>
                        </ButtonGroup>
                    </div>
                    <hr />
                    <a href="/" className="d-flex justify-content-evenly text-decoration-none w-25">
                        <AddOutlinedIcon color="primary" sx={{ml:1}} /><h6 className="text-primary">Add more items</h6>
                    </a>
                </div>
            </div>
            <div className="col-11 mb-5 mx-auto col-lg-4 col-xl-4 mt-5 bg-light card">
                <div className="card-body">
                    <h6 className="card-title fw-bold ms-4">
                        Price Details
                    </h6>
                    <hr />
                    <div className="card-text text-secondary">
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between my-5 col-10 mx-auto">
                                <h6>2 X $ 21.00</h6>
                                <h6>$ 42.00</h6>
                            </li>
                            <li className="d-flex justify-content-between my-5 col-10 mx-auto">
                                <h6>2 X $ 21.00</h6>
                                <h6>$ 42.00</h6>
                            </li>
                            <li className="d-flex justify-content-between my-5 col-10 mx-auto">
                                <h6>2 X $ 21.00</h6>
                                <h6>$ 42.00</h6>
                            </li>
                        </ul>
                        <hr />
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between my-4 col-10 mx-auto">
                                <h6>Total savings</h6>
                                <h6>-$ 18.00</h6>
                            </li>
                            <li className="d-flex justify-content-between my-4 col-10 mx-auto">
                                <h6>Delivery Fee</h6>
                                <h6>$ 5.00</h6>
                            </li>
                            <li className="d-flex justify-content-between my-4 col-10 mx-auto">
                                <h6>Taxes and Charges 
                                    <ErrorOutlineIcon sx={{width:20, height:20}} />
                                </h6>
                                <h6>$ 2.00</h6>
                            </li>
                        </ul>
                        <hr />
                        <div className="d-flex justify-content-between my-4 col-10 mx-auto">
                            <h6 className="text-dark fw-bolder">To Pay</h6>
                            <h4 className="text-dark fw-bolder">$ 91</h4>
                        </div>
                    </div>
                </div>
                <Button variant="contained" sx={{ mb:7, height:50, mx:"auto", fontWeight: 'bold',fontSize: 'h6.fontSize', width:'80%' }}>
                    PLACE ORDER
                </Button>
            </div>
        </>
    )
}

export default OrderSummary