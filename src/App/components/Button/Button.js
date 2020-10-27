import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './Button.css'

function Button(props) {
    //console.log(props);
    const [clicked, setclicked] = useState();
    <Button text="Voici le corps du bouton" backgroundColor="green" color="white" />
    return <div className={'Button'+((clicked)?' clicked':'')} style={{ backgroundColor: props.backgroundColor, color: props.color }} onClick={
        ()=> {
            setclicked(true);
            setTimeout(()=>{setclicked(false)},500)
            props.onClick();
        }
    }>
    {props.text}</div>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

Button.defaultProps={
    backgroundColor:"tomato",
    color:"white",
    onClick:() => {alert('ne plus cliquer ici')}
}

export default Button
