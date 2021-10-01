import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Avatar, Badge} from '@mui/material';
import { useSelector } from "react-redux";


const NavBar = (props) => {
    const { No_items } = useSelector((state) => state.changeTheQuantity)
    return(
        <>
        <nav className={props.shadow}>
                <div className="container-fluid">
                    <a className="navbar-brand d-flex ms-5" href="/">
                        <img src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg" alt=" " />
                        <h2 className="m-2 text-primary">Happay</h2>
                    </a>
                    <button className="navbar-toggler" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end me-5" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={props.class} href="/Cart">
                                    <Badge badgeContent={ No_items } color="error">
                                        <ShoppingCartOutlinedIcon sx={{ fontSize: 40 }}/>
                                    </Badge>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <Avatar>
                                        P
                                    </Avatar>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar