import React from 'react';
import './custom-button.scss';

const CustomBtton = ({children,...otherProps}) => (
<button className="custom-button" {...otherProps}>{children}</button>
)
export default CustomBtton;