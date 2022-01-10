import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import{Link as RouterLink, useParams} from 'react-router-dom';
import {Breadcrumbs, Link} from '@material-ui/core';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name Breadcrumb with the name for the new component.
function Breadcrumb(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');
  const params=useParams();

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
      <Link
          underline="hover"
          color="inherit"
          href="inventory#/inventory"
        >
          Inventory
        </Link>
         
        
        <Link
          underline="hover"
          color="inherit"
          href= {`inventory#/inventory/${params.seed_id}/${params.catagory}`}
        >
          {params.catagory}
        </Link>
        <Link
          underline="hover"
          color="textPrimary"
          href={`/inventory#/seedinfo/${params.seed_id}/${params.catagory}/${props.seedInfo.id}`}
          aria-current="page"
        >
          {props.seedInfo.name}
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;
