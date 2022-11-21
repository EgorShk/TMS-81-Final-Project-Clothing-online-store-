import React from 'react';
import './Header.css'
import'../../App.css'

/*import imgLogo from '../../images/headerLogo.jpg'*/
import {Link} from 'react-router-dom'


 const Header = () => {
    return (<div>
      <div className='header' >
        <div className='containerHeader' > 
          <div className='headerLogo' > 
          <Link to='/'><img className='' src='./images/headerLogo.jpg'/></Link>
          </div>
          <div className='headerNav'> 
            <ul>
              <li><Link to='/' className='headerLink' >ГЛАВНАЯ</Link></li>
              <li><Link to='/productCategories' className='headerLink' >КАТАЛОГ</Link></li>
              <li><Link to='/contacts' className='headerLink' >КОНТАКТЫ</Link></li>
              <li><Link to='/cart'><img id='cartImg' src='./icons/shoppingCart.png'/></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }

  export default Header
  
 