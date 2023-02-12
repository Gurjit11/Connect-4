import React, { useEffect, useState } from "react";
import Gamecircle from "./Gamecircle";
import "../Game.css";
import Header from "./Header";
import Footer from "./Footer";
import {isWinner,isDraw,getComputerMove} from "../helper";
import {PLAYER_1,PLAYER_2,no_player,game_playing,no_circles,game_win, game_draw,game_idle} from "../Constants";

const Gameboard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(no_player));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [gameState, setGameState] = useState(game_idle);
    const [winPlayer, setWinPlayer] = useState(no_player);

    console.log(gameBoard);

    useEffect(()=>{
        initGame();
    },[]);

    const initGame = () => {
        console.log('initGame');
        setGameBoard(Array(16).fill(no_player));
        setCurrentPlayer(PLAYER_1);
        setGameState(game_playing);
    }

    const initBoard = () => {
        const circles = [];
        for(let i=0;i<no_circles;i++)
        circles.push(renderCircle(i));
        return circles;
    }

    const suggestMove = () => {
        console.log('suggestMove');
        circleClicked(getComputerMove(gameBoard));
    }


const circleClicked = (id) => {
    console.log("onCircleClick: " + id);

    if(gameBoard[id] !== no_player) return;
        if(gameState !== game_playing) return;

        if(isWinner(gameBoard,id,currentPlayer)){
            setGameState(game_win);
            setWinPlayer(currentPlayer);
        }
        
        
        // const board = [...gameBoard];
        // board[id] = currentPlayer;
        // setGameBoard(board);
        setGameBoard(prev =>{
            return prev.map((circle,pos) => {
                if(pos === id) return currentPlayer;
                return circle;
            })
        })

        setCurrentPlayer(currentPlayer===PLAYER_1 ? PLAYER_2:PLAYER_1);

        console.log(gameBoard);
        
        if(isDraw(gameBoard,id,currentPlayer)){
            setGameState(game_draw);
        }
}

    const renderCircle = id => {
        return <Gamecircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClicked = {circleClicked}/>
    }

    return ( 
        <div className="main">
        <Header gameState={gameState} player={currentPlayer} winPlayer={winPlayer}/>
        <div className='gameBoard' >
            {initBoard()}
        </div>
        <Footer gameState={gameState} onClickFooter ={initGame} onClickSuggest = {suggestMove} />
        </div>
    )
}

export default Gameboard;