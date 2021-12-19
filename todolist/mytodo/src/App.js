
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';


const glocalData =()=>{
  return JSON.parse(localStorage.getItem('loclname'));
}

function App() {
   
  const [inputData, setinputData] = useState('');
  const [item, setItem] = useState(glocalData);

  const addItem = ()=>{
     setItem([...item,inputData]);
     setinputData('');
   }

//deletetodo 
const deletetodo =(did)=>{
    const deletedData = item.filter((deleditem, dkey)=>{
        return (dkey !== did);
    })
    setItem(deletedData);
}
//to store the local data

 useEffect(()=>{
  const ldata =   localStorage.setItem('loclname', JSON.stringify(item))
  console.log(ldata);
 },[item])
 
 
   //end localdata set and then get 
  return (
    <div className="App">
      <header className="App-header">
        <div className="additem">
            <input type="text" placeholder='✍ Enter Item.....' value={inputData} onChange={(e)=>{setinputData(e.target.value)}} />
            <FontAwesomeIcon icon={faPlus} size="xs" className='iconp' onClick={addItem}/>
        </div>
        <div className="mainshow">
          {
            item.map((resp, ind)=>{
              return(
                <>
                <div className="showitem mt-1 mb-2" key={ind}>
                <h4>{resp}</h4>
                <FontAwesomeIcon icon={faTrash} size="xs" className='iconp' onClick={()=>{deletetodo(ind)}} />
                </div>
                </>
              )
            })
          }
            
        </div>
       <button type='submit' className='btn btn-info'>Submit</button>
      </header>
    </div>
  );
}

export default App;
