import React,{ useState} from 'react';
const myBioData = [
    {
        id: 0, myName: 'Raja', age: 29
    },
    {
        id: 1, myName: 'Ram', age: 27
    },
    {
        id: 2, myName: 'Ganesh', age: 20
    }
]



const Todolist = () => {
   
const [value, setvalue] = useState(myBioData)
const changeHandler = () =>{
    setvalue([])
};

const remover = (id) =>{
   const newArray = value.filter((el =>{
       return(
           el.id !==id
       )
      
   }))
   setvalue(newArray);
}
    
    return (
        <div>
            {
                value.map( (el) => <h1 key={el.id}>My name is : {el.myName} and age is : {el.age} <button onClick ={ () =>remover(el.id)}>remove</button></h1>)
            }
            <button onClick={changeHandler}>click me</button>
        </div>
    )
}

export default Todolist;
