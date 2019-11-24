import React from 'react';
import './custom-button.scss';

const CustomBtton = ({isGoogleSignIn,children,...otherProps}) => (
<button className= {`${isGoogleSignIn ? 'google-sign-in' :''} custom-button`} {...otherProps}>{children}</button>
)
export default CustomBtton;