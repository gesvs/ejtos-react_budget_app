import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
// import "./StyleCurrency.css" ;

const Currency = () => {
  const {dispatch } = useContext(AppContext);

	const changeCurrency = (val)=>{
			dispatch({
				type: 'CHG_CURRENCY',
				payload: val,
			})
	}

    /*const styles={
        hover: { backgroundcolor: 'red', border:'1px solid red' }
    }*/

    // .hover_color:hover { background-color: red; border:1px solid red }

    

    
	
   return (
		<div className='alert alert-secondary'>
        <label style={{marginLeft: '1rem' , backgroundColor:'#059900', color:'white'}} >Currency
        <select name='hover_color'id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{ marginLeft: '1rem' , backgroundColor:'#059900', color:'white'}}>
        <option style={{color:'white'}} value="£">£ Pound</option>
        <option style={{color:'white'}} value="$">$ Dollar</option>
        <option style={{color:'white'}} value="€">€ Euro</option>
        <option style={{color:'white'}} value="₹">₹ Rupee</option>
      </select>	
      </label>
      	
    </div>
	);
};

export default Currency;