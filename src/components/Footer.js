import React from 'react'

    const Footer = ({gameState,onClickFooter,onClickSuggest}) => {
  return (
    <div className='panel Footer'>
    <button className='footer-text' onClick ={onClickFooter} >{(gameState === 1)?'New Game':'Start'}</button>
    {
      gameState === 1 &&
    <button className='footer-text' onClick ={onClickSuggest}>Computer</button>
    }
    </div>
  )
}

export default Footer;