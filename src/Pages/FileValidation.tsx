import React, { useState } from 'react'
import { Button, Dropdown } from 'semantic-ui-react'
import file from '../files/data.json'
import geo from '../files/geo.json'
import '.././App.css'; 

function FileValidation() {

  const [validity, setValidity] = useState(true)
  const [data, setData] = useState(Object)
  const [process, setProcess] = useState(false)

  function isJsonString(data: {}[]) 
  {
    setValidity(true)
    let arrLabel: string[] = []
    let arrType: string[] = []
    const len = Object.keys(data[0]).length
    for(var i=0; i< len; i++)
    {
      arrLabel.push(String(typeof(Object.values(data[0])[i]))) // data types: string, int etc.
      arrType.push((Object.keys(data[0])[i])) // active, asn
    }

    // data is in key value pair format
    // properties are the same across all fields
    // fields are same type consistently 

    data.map((form: { [s: string]: unknown; } | ArrayLike<unknown>, index: any) =>{
      if(Object.values(form).length !== Object.keys(form).length || Object.values(form).length !== len)
      {
        setValidity(false)
      }
      for(var i=0; i< len; i++)
      {
        if((arrLabel[i] !== typeof(Object.values(form)[i]) && Object.values(form)[i] != null  && arrLabel[i] !== "object") || arrType[i] !== Object.keys(form)[i])
        {
          setValidity(false)
        }
      }
    })
    
}

function handleCall()
{
  setProcess(false)
  if(Object.keys(data).length === 0)
    alert("Please choose an option")
  else
  {  
    isJsonString(data)
    setProcess(true)
  }
}

function handleChange(e: any, {value}: any)
{
  if(value === "file"){
    setData(file)
  }
  else if(value === "geo")
  setData(geo)
}

  const subjects= [
    {text: 'data.json',value: 'file'},
    {text: 'geo.json', value: 'geo'},
  ]
  return (
    <>      
    <div className="button1"><Dropdown 
      placeholder='Select Subject'
      name="subject"
      onChange={handleChange}
      selection 
      required
      options={subjects} 
    /></div>
    <Button onClick={() => handleCall()} >
        Check File Validity
      </Button>
    <br/><br/>
    {process 
    ?<div>
      {validity 
      ? <p style={{color: "lightgreen"}}>Check complete: File Valid</p>
      : <p style={{color: "red"}}>Check complete: File Invalid</p>}</div>
    : <p style={{color: "red"}}>Choose a file to begin validation</p>}
   </>
  )
}

export default FileValidation