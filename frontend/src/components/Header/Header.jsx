import React from 'react'
import {Link} from 'react-router-dom'
import Search from '../Search/Search'
import logo from '../../assets/logo.jpg'

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

      <div className='header'>
        <div className='container flex items-center justify-between'>
          <div className='col1 w-[25%]'>
            <Link to={'/'}> <img src={logo} alt="Logo" /> </Link>
          </div>

          <div className='col2 w-[45%]'>
            <Search/>
          </div>
          
          <div className='col3 w-[30%]'></div>
        </div>
      </div>

    </header>
  )
}

export default Header
