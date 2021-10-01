import { Button, ButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, removeItem, addItem } from "../Action/Action";


const HomeContent = (props) => {
    const { name } = useSelector((state) => state.changeTheQuantity.Items)
    const dispatch = useDispatch();
    const [incDecState, setIncDecState] = useState(false)
    const [addButton, setAddButton] = useState(true)

    const clickHandle = async (value, item, Qty) => {
        if(value === "changeIncDec"){
            if(Qty === 0){
                setIncDecState(false);
                setAddButton(true);
                console.log(item);
                dispatch(removeItem(item));
            }
            else{
                dispatch(decNumber(item))
            }
            console.log("Increment wala button")
        }
        else if(value === "changeAdd"){
            setAddButton(false);
            setIncDecState(true);
            await dispatch(addItem(item))
            console.log(name)
        }
        else{
            console.log("error");
        }
    }
    return(
        <>  
            <div className="col-12 col-lg-4 col-xl-4 col-md-5 gy-5">
                    <img src={props.img_url} className="my-shadow img-fluid col-12" alt=" "  />
                    <div className="card-body w-100 mt-4">
                        <div className="card-title d-flex justify-content-between">
                            <h6 className="text-capitalize w-25 fw-bold">{props.name}</h6>
                            <p className="d-flex">
                                <h6 className="text-capitalize fw-bold text-muted text-decoration-line-through">{props.original_price}</h6>
                                <h5 className="fw-bolder ms-2">{props.final_price}</h5>
                            </p>
                        </div>
                        <div className="card-text w-75">
                            <p className="fs-6 text-muted">{props.description}</p>
                        </div>
                    </div>
                <div className={addButton ? "d-flex justify-content-center" : "d-none"} id="addCart">
                    <Button variant="outlined" sx={{ width:"75%", fontWeight: 'bold' }} onClick={() => clickHandle("changeAdd", props.id)}>
                        Add to cart
                    </Button>
                </div>
                <div className={incDecState ? "d-flex justify-content-center" : "d-none"} id="addCart">
                    <ButtonGroup variant="contained" sx={{width: "50%"}} aria-label="outlined primary button group">
                        <Button startIcon={<RemoveIcon />} 
                            onClick={() => clickHandle("changeIncDec", props.id, 0)}></Button>
                        <h5 className="d-flex justify-content-center text-primary my-auto w-50">0</h5>
                        <Button startIcon={<AddOutlinedIcon />} 
                            onClick={() => dispatch(incNumber(props.id)) }></Button>
                    </ButtonGroup>
                </div>
            </div>
        </>
    )
}

export default HomeContent