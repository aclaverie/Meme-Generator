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
    const [topText, setInputTop] = useState(0);
    const [botText, setInputBottom] = useState(0);
    const [allMemesData, setAllMemesData] = useState(MemesData);
    const [userMEME, setUserMEME] = useState([{
      toptext: "",
      bottomtext: "",
      image: 'https://i.imgflip.com/1g8my4.jpg'
}]);
   
    function getSelectedObj(e){
        e.preventDefault();
        let tTEXT = topText;
        let bTEXT = botText;
        // console.log(tTEXT+" "+bTEXT)
        
        setAllMemesData(MemesData);

        //Get list of ids alone
        const memeArray = new Array(
          allMemesData.data.memes.map((meme) => {
            return ( meme.id )
          })
        );        
        //Get number of objects in memes array
        const arraylength = allMemesData.data.memes.length
          
        //Get random number based on length of array
        let randNum = Math.floor(Math.random() * arraylength);
      
        //Select the Id for the object from memes
        let selectedID = memeArray[0][randNum];
        
        //Extract meme object based on Id and return
        allMemesData.data.memes.map((meme) => {
          if(meme.id === selectedID){
            setMeme(meme);
          }
          return memeSelect;
        });
        let iTEXT = memeSelect.url;

        setUserMEME(
          {
            toptext: tTEXT,
            bottomtext: bTEXT,
            image: iTEXT
        });
        
    }
    
    return(
        <div className="main-user">
            <div className="form">
                <input  
                id='top' 
                type='text'  
                className="user-input" 
                placeholder='Enter top word/s'
                onChange={e => setInputTop(e.target.value)} />
                <input  
                id='bot' 
                type='text'  
                className="user-input" 
                placeholder='Enter bottom word/s'
                onChange={e => setInputBottom(e.target.value)} />                
                <Button className='user-btn' variant="contained" onClick={getSelectedObj} >Generate A New Meme Image</Button>
            </div>
            <div className="user-display">
              {console.log(userMEME.image)}
                <img src={userMEME.image} alt={userMEME.image} className='user-image'/>
            </div>
        </div>
    );
}

export default MainUserInput;