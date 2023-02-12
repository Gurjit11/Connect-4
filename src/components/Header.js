import React from 'react';
import {game_idle,game_playing,game_win,game_draw} from '../Constants';

const Header = ({gameState,player,winPlayer}) => {
    const renderLabel = () => {
        switch(gameState) {
            case game_idle:
            return 'press start';
            case game_playing:
            return <div>Player {player} Turn</div>;
            case game_draw:
            return 'Game Draw';
            case game_win:
            return <div>Player {winPlayer} Wins</div>;
            default:
            return 'Press Start';
        }
    }
  return (
    <div className='panel Header'>
        <div className='header-text'>
        {renderLabel()}
        </div>
    </div>
  )
}

export default Header;