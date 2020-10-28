import React, {useState, useEffect} from 'react';
import PropTypes, { element, object } from 'prop-types';
import styles from './Edition.module.scss';
import Button from '../Button/Button';

const REST_SRV_ADR='http://localhost:5644';

const Edition = (props) => {

  const [imgs, setimgs] = useState([]);

  useEffect(() => {
    
      fetch(REST_SRV_ADR + '/imgs').then(f=>f.json()).then(o=>setimgs(o))
    
  }, [1])

  return (
  <div className={styles.Edition} data-testid="Edition">
  {JSON.stringify(imgs)}
    <div style={{ textAlign: 'center' }}>Image :<br />
      <select value={props.meme.imgId} onChange={(evt)=>{
        const idImageSelected = Number(evt.target.value);
        const imgFound = imgs.find((elementImage)=>elementImage.id===idImageSelected);
        props.onChangeMeme({...props.meme, imgId:idImageSelected, img:imgFound})
        
        }}>
        {imgs.map((elem,index)=>{
          return <option value={elem.id} key={`img-${index}`}>{elem.url}</option>
        })}
      </select>
    </div>

    <div style={{ textAlign: 'center' }}>
      Coordonnées<br />
      <div className={styles.coord} >
       x<br />
        <input type="number" min="0" step="1" value={props.meme.text.x} onChange={evt=>{
        props.onChangeMeme({...props.meme, text:{...props.meme.text, x:Number(evt.target.value) }})
        
        }}/>
      </div>

      <div className={styles.coord}>
      y: <br />
        <input type="number" min="0" step="1" value={props.meme.text.y} onChange={evt=>{
        props.onChangeMeme({...props.meme, text:{...props.meme.text, y:Number(evt.target.value) }})
        
        }}/>
      </div>

    </div>
    <div className="text" style={{ textAlign: 'center' }}>
      text :
    <textarea className="blabla" value={props.meme.value}  onChange={evt=>{
        props.onChangeMeme({...props.meme, text:{...props.meme.text, value:evt.target.value }})
        
        }}></textarea>
    </div>
    <hr />
    <div style={{ textAlign: 'center' }}>
      Text :<br />
      <textarea></textarea>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Button text="Reset" backgroundColor="tomato"></Button>
      <Button text="Save" backgroundColor="skyblue"></Button>
    </div>
  </div>
)};

Edition.propTypes = {
  meme:PropTypes.object.isRequired,
  onChangeMeme:PropTypes.func.isRequired
};

Edition.defaultProps = {
  onChangeMeme:()=>{}
};

export default Edition;
