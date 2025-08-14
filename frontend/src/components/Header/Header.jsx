import React from 'react'
import {Link} from 'react-router-dom'
import Search from '../Search/Search'
import logo from '../../assets/logo.jpg'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation/Navigation';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  return (
    <header>
      <div className='top-strip py-2 border-t-1 border-b-1 border-gray-300'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <div className='col1 w-[50%]'>
                    <p className='text-[12 px] font-[500]'>
                        Get up to 50% off new season styles, limited time only
                    </p>
                </div>

                <div className='cols2 flex items-center justify-end'>
                    <ul className='flex items-center gap-2'>
                        <li className='list-none'>
                            <Link to='/help-center' className='text-[13px] link font-[500] transition'>Help Center</Link>
                        </li>
                        <li>|</li>
                        <li>
                            <Link to='/order-tracking' className='text-[13px] link font-[500] transition'>Order Tracking</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>

      <div className='header py-4 border-b-1 border-gray-300'>
        <div className='container pt-3 flex items-center justify-between'>
          <div className='col1 w-[25%]'>
            <Link to={'/'}> <img src={logo} alt="Logo" /> </Link>
          </div>

          <div className='col2 w-[45%]'>
            <Search/>
          </div>
          
          <div className='col3 w-[30%] flex items-center'>
            <ul className='flex items-center gap-3 pl-5 w-full justify-end'>
              <li className='list-none'>
                <Link to='/login' className='link transition text-[15px] font-[500]'>Login</Link> / <Link to='/register' className='link transition text-[15px] font-[500]'>Register</Link> 
              </li>
              <li>
                 <Tooltip title="compare">
                <IconButton aria-label="compare">
                <StyledBadge badgeContent={4} color="secondary">
                <IoIosGitCompare  />
                </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="wishlist">
                <IconButton aria-label="wishlist">
                <StyledBadge badgeContent={4} color="secondary">
                <FaRegHeart  />
                </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="cart">
                <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                <MdOutlineShoppingCart />
                </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation/>

    </header>
  )
}

export default Header
