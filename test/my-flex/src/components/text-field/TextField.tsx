import React from 'react';
import "./TextField.css"


export const TextField = () => {
  return (
    <div className="text-field">
      <input type="text" id="textField" placeholder='Some placeholder'/>
      <label htmlFor="textField">Some placeholder</label>
    </div>
  );
};