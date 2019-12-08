import React from 'react';
import './custom-button.scss';

const CustomBtton = ({isGoogleSignIn,inverted,children,...otherProps}) => (
<button className= {`${inverted ? 'inverted' :''} ${isGoogleSignIn ? 'google-sign-in' :''} custom-button`} {...otherProps}>{children}</button>
)
export default CustomBtton;