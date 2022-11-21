import React from 'react';
import './Footer.css'

{/*
import facebook from '../../icons/facebook.png'
import instagram from '../../icons/instagram.png'
import telegram from '../../icons/telegram.png'
*/}

const Footer =()=> {
    return (<div className='containerFooter'>
      <div className="aboutStore">
      <h4>О магазине</h4>
            <a className='link' href='#'>Наша команда</a>
            <a className='link' href='#'>Бренды</a>
            <a className='link' href='#'>Работа в QS</a>
            <a className='link' href='#'>Наши партнеры</a>
            <a className='link' href='#'>Сотрудничество</a>
      </div>
      <div className="forCustomers">
        <h4>Покупателям</h4>
            <a className='link' href='#'>Заказы</a>
            <a className='link' href='#'>Доставка</a>
            <a className='link' href='#'>Возврат и обмен товара</a>
            <a className='link' href='#'>Таблица размеров</a>
            <a className='link' href='#'>Дисконтная программа</a>
      </div>
      <div className='contactsAndSocialNetwork'>
        <div className='contactsFooter'>
        <h4>Контакты</h4> 
            <div>
            Минск, пр-т Независимости, 3-2,<br/>
            ТЦ «Столица», помещение 323,<br/>
           нижний уровень<br/>
           ЕЖЕДНЕВНО С  10:00 – 22:00<br/>
           8 (029) 644-52-64
            </div>
        </div>
        <div className='socialNetwork'>
            <a href='#' ><img className='socialNetworkIcon' src='./icons/facebook.png'  alt=''/></a>
            <a href='#' ><img className='socialNetworkIcon' src='./icons/instagram.png' alt=''/></a> 
            <a href='#' ><img className='socialNetworkIcon' src='./icons/telegram.png' alt=''/></a>
        </div>
      </div>
    </div>
    )
  }


  export default Footer;