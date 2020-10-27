import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

function Button(props) {
    console.log(props);
    <Button text="Voici le corps du bouton" backgroundColor="green" color="white" />
    return <div className="Button" style={{ backgroundColor: props.backgroundColor, color: props.color }} onClick={props.onClick}>{props.text}</div>
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
