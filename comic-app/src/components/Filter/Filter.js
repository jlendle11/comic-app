import React from 'react';

function Filter(props) {
    return (
        <div className="form-container">
          <form className='filtery' onSubmit={props.onSubmit}> 
                <input className='inputy' name="value" type="text" value={props.value} onChange={props.change} />
                <button className="btn btn-danger" type="submit"   >Search by year</button>
        </form>
        </div>
    )
}

export default Filter