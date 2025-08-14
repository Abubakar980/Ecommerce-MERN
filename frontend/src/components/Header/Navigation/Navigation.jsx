import Button from "@mui/material/Button";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import {GoRocket} from "react-icons/go";
import CategoryPanel from "./CategoryPanel";

import './Navigation.css'; // Assuming you have a CSS file for styles

const Navigation = () => {

    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel=()=>{
        setIsOpenCatPanel(true)
    }

  return (
    <>
    <nav className="py-2">
      <div className="container flex items-center justify-between">
        <div className="col_1 w-[20%]">
          <Button className="!text-black gap-2 font-bold w-full" onClick={openCategoryPanel}>
            <RiMenu2Fill className="text-[18px]" /> 
            <p className="font-bold">Shop By Categories{" "}</p>
            <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
          </Button>
        </div>

        <div className="col_2 w-[65%]">
            <ul className="flex items-center gap-4">
                <li className="list-none">
                    <Link className="link transition text-[14px] font-[500]">Home</Link>
                </li> |
                <li className="list-none">
                    <Link className="link transition text-[14px] font-[500]">Fashion</Link>
                </li> |
                <li className="list-none">
                    <Link className="link transition text-[14px] font-[500]">Electronics</Link>
                </li> |
                <li className="list-none">
                    <Link className="link transition text-[14px] font-[500]">Bags</Link>
                </li> |
                <li className="list-none">
                    <Link className="link transition text-[14px] font-[500]">Footwear</Link>
                </li> |
                <li className="list-none">
                    <Link className="link transition text-[14px] font-[500]">Groceries</Link>
                </li> |
                <li className="list-none">
                    <Link className="link transition text-[14px] font-[500]">Beauty</Link>
                </li> |
                <li className="list-none">
                    <Link className="link transition text-[14px] font-[500]">Wellness</Link>
                </li> |
                <li className="list-none">
                    <Link className="link transition text-[14px] font-[500]">Jewellery</Link>
                </li> 
            </ul>
        </div>

        <div className="col_3 w-[15%]">
            <p className="text-[13px] font-[500] flex items-center gap-3 mb-0 mt-0">
                <GoRocket className="text-[18px]"/>Free International Delivery</p>
        </div>
      </div>
    </nav>



    <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel}/>
    </>
  );
};

export default Navigation;


