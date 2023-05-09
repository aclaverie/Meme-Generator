import React from 'react';
import { Button  } from '@mui/material';
import MemesData from './memesData';
import { useState } from 'react';

/*
A simple method was to extract the memes Array by itself
        const memesArray = MemesData.data.memes;
then do the random number generated based on array length
        const rand = Math.floor(Math.random() * memesArray.length);
then simply use that 'rand' as the key in the array to get the object
        const memeObject = memesArray[rand];


function getObjectSimple(){
    const memesArray = MemesData.data.memes;
    const rand = Math.floor(Math.random() * memesArray.length);
    const memeObject = memesArray[rand];
    console.log(memeObject);
}
*/

function MainUserInput(){
    const [memeSelect, setMeme] = useState(0);

    function getSelectedObj(e){
        e.preventDefault();
        //Get list of ids alone
        const memeArray = new Array(
          MemesData.data.memes.map((meme) => {
            return ( meme.id )
          })
        );
        
        //Get number of objects in memes array
        const arraylength = MemesData.data.memes.length
          
        //Get random number based on length of array
        let randNum = Math.floor(Math.random() * arraylength);
      
        //Select the Id for the object from memes
        let selectedID = memeArray[0][randNum];
        
        //Extract meme object and return
        
        MemesData.data.memes.map((meme) => {
          if(meme.id === selectedID){
            setMeme(meme);
          }
          return memeSelect;
        });
    }

    return(
        <div className="main-user">
            <div className="form">
                <input  type='text'  className="user-input" placeholder='Enter top word/s' />
                <input  type='text'  className="user-input" placeholder='Enter bottom word/s'/>                
                <Button className='user-btn' variant="contained" onClick={getSelectedObj} >Generate A New Meme Image</Button>
            </div>
            <div className="user-display">
                <img src={memeSelect.url} alt={memeSelect.name} width="800px"/>
            </div>
        </div>
    );
}

export default MainUserInput;