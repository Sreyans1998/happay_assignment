import React from 'react'
import NavBar from '../Utility/NavBar'
import cardData from '../Utility/ItemData'
import HomeContent from '../Utility/HomeContent'
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import { Avatar } from '@mui/material';

const Home = () => {
    return(
        <>
            <NavBar class="nav-link" shadow="navbar navbar-expand-lg navbar-light bg-light"/>
            <h3 className="text-dark text-center fw-bolder">
                Most Popular
                <div className="text-primary d-flex mx-auto justify-content-center w-25">
                    <HorizontalRuleRoundedIcon sx={{ fontSize: 60 }} />
                    <Avatar sx={{ fontSize: 50 }}>
                        <StarOutlineRoundedIcon />
                    </Avatar>
                    <HorizontalRuleRoundedIcon sx={{ fontSize: 60 }} />
                </div>
            </h3>
            <div className="row w-75 d-flex justify-content-between mx-auto mt-5">
            {
              cardData.map((val, ind) =>{
                return <HomeContent key={ind}
                img_url={val.img_url}
                name={val.name}
                final_price={val.final_price}
                description={val.description}
                original_price={val.original_price}
                id={val.id} />
              })
            }
          </div>
        </>
    )
}

export default Home