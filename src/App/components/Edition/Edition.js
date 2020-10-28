import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Edition.module.scss';
import Button from '../Button/Button';

const Edition = (props) => {
  const [textState, setTextState] = useState(props.meme.text);

  return (
  <div className={styles.Edition} data-testid="Edition">
  {JSON.stringify(textState)}
    <div style={{ textAlign: 'center' }}>Image :<br />
      <select></select>
    </div>

    <div style={{ textAlign: 'center' }}>
      Coordonnées<br />
      <div className={styles.coord} onChange={evt=>{setTextState({...textState, x:Number(evt.target.value)})}}>
      {textState.x} <br />
        <input type="number" min="0" step="1" value={props.meme.text.x} />
      </div>

      <div className={styles.coord} onChange={evt=>{setTextState({...textState, y:Number(evt.target.value)})}}>
      {textState.y} <br />
        <input type="number" min="0" step="1" value={props.meme.text.y} />
      </div>

    </div>
    <div className="text" style={{ textAlign: 'center' }}>
      text :
    <textarea className="blabla" value={textState.value}  onChange={evt=>{setTextState({...textState, value:evt.target.value})}}></textarea>
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

Edition.propTypes = {};

Edition.defaultProps = {};

export default Edition;
