import Cards from './components/Cards/Cards'
import './App.css'
import SidePanel from './components/sidePanel/sidePanel'
import { useState } from 'react'

function App() {
  const [hourRemaining,setHourRemaining]= useState(20);
  const [totalCredit, setTotalCredit]= useState(0);
  const [courseList,setCourseList]=useState([])
  const[totalPrice, setTotalPrice] = useState(0)
  
  const handleBtn =(card) =>{
    const newTotalPrice = totalPrice + card.price;
      
    const newHourRemaining= hourRemaining - card.credit;

     // total credit hour calculating
    const newTotalCredit = totalCredit + card.credit;
    if(hourRemaining < 0){
      // alert('You reached the credit hour limit')
      setHourRemaining(0)
    }
    
    else if(newHourRemaining >= 0 && newHourRemaining <= 20){
      if (!courseList.includes(card.title)) {
        const newCourseList = [...courseList, card.title];
        setCourseList(newCourseList);
        setHourRemaining(newHourRemaining);
        setTotalCredit(newTotalCredit);
        setTotalPrice(newTotalPrice);
        }
        
        else {
        alert('already added to the course list.');
      }
    }
    else if(totalCredit > 20){
        alert('You reached the limit again')
        setTotalCredit(20)
      }
    else{
      alert('you reached the limit bro')
    }

    // else if(totalCredit > 20){
    //   alert('You reached the limit again')
    //   setTotalCredit(20)
    // }
    
  };


    // total price 
    
    
  

  
  return (
    <>
      <div className='max-w-[1380px]	 mx-auto '>
        <div className='my-8' >
          <h1 className='text-[32px] text-black font-bold text-center'>Course Registration</h1>
        </div>
        <div className='flex gap-6'>
          <div className='w-[75%]'>
              <Cards handleBtn={handleBtn}></Cards>
          </div>
          <div className='w-[25%]'>
              <SidePanel totalPrice={totalPrice} totalCredit={totalCredit} courseList={courseList} hourRemaining={hourRemaining}></SidePanel>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
