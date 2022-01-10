import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import '../PageHeader/PageHeader.css';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name PageHeader with the name for the new component.
function PageHeader(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  return (
    <div className="pageHeader">
      <img className = "headerImg"  src="/Images/header.jpg" alt={props.name} />
      <div className="centered">{props.name}</div>
    </div>
  );
}

export default PageHeader;
