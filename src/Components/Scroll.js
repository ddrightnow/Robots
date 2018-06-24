import React from 'react';

const Scroll =(props)=>{
console.log(props)
return (

<div style ={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
{props.children}
</div>
	);



//<hi> jas</hi>
};




export default Scroll;