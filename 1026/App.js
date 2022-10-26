import React from 'react';
import PropTypes from 'prop-types';



function Music({name, picture, rating}){
  //console.log(props); // consol = 프로그래밍에서 문제 있는지 확인하는 창
  return(
  <div> 
    <h2> Music name:({name}) </h2>;
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div> // 핵심적인 부분
  );  
}

const MusicIlike = [
  {
    id:1,
    name: 'N.EX.T 1집 <HOME>',
    image: 'https://w.namu.la/s/cb6c248f4495a2314da8cb24303219fa415eeec07f788180e03fb243ebad95826e34a5fb7ec4f1f5f58e111f12427c8ae4c51fb8f1d18480e7b3356ede0f5c20582b5ea84556253a806ff30aafd8165ca3f5776eda128cba965fb25737076b43e8fd60689b6d74c7b24000eae7160eeb',
    rating: 5,
  },
  {
    id:2,
    name: 'Stairway to heven',
    image: 'https://w.namu.la/s/5dfd98d1329b3189d23030ce617f4f2d204bb5e7243cbaf7298f403e1353b5b287d6f399747bc13771a6097479f21ccf066e800853f4693b4f22cee16a23fcc7a49e312a5c3f7cdc1681d0c2a86c8e45519b42d343196e36df713e2154ea44f080573192c7656c46f341f35d47fec9c1',
    rating: 5,
  },
];



function App() {
  return (
  <div>
    <h1>Crom's Music collect</h1>
    {MusicIlike.map(disk => (<Music keyname={disk.id} name={disk.name} picture={disk.image} rating={disk.rating}/>))}
  </div>
  ); // <div> ~~~~ </div>; <>부터 </>까지를 나타낸다.
} // <h1> ~ <h6>까지 있다. 점점 크기 작아짐

Music.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;

