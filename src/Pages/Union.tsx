import { useState } from 'react';
import { Button, Dropdown, Table } from 'semantic-ui-react';
import data from '../files/p3Data.json'
import '.././App.css'

function Union() 
{
  const [tableData, setTableData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  function testUnion(t1: any, t2: any)
  {
    var set: any[]= [];
    let result = [...t1, ...t2];
    result = result.filter(car => Object.keys(car).length>1);
    console.log(result)
    set.push(result[0])
    let flag = true
    for (var k = 1; k < result.length; k++) 
    {
      set.map((line,index)=>{
        if(result[k].name === line.name)
        {
          flag = false
          set[index] = {...line, ...result[k]}
          for(var i =0; i< Object.keys(result[k]).length; i++) //2
          {
            for(var j =0; j< Object.keys(line).length; j++) //4
            {
              if(Object.keys(result[k])[i] === Object.keys(line)[j] && Object.keys(result[k])[i] !== "name") 
              {
                var added = Object.values(result[k])[i] as string + Object.values(line)[j];
                set[index][Object.keys(result[k])[i]] = added;
              }
            }
          }
        }
      })
      if(flag)
        set.push(result[k])      
      else 
        flag = true
    }
    console.log(set)
    return set
  }

  function populateTable()
  {
      setTableData(testUnion(data.testSet1, data.testSet2))
      setLoading(false)
  }

    return (     
      <>
        {loading ?
         <div className="button1">
        <Button onClick={() => populateTable()}>
            Return Union 
        </Button></div>
        : ( 
          <>
         <div className="button1">
          <Button onClick={() => setLoading(true)}>
            Return Union 
          </Button></div>
          <div className="unionDown">
          <Table color={'black'} key={'black'}  textAlign="center" inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={2}>Name</Table.HeaderCell>
              <Table.HeaderCell width={2}>Fields</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>      
            {Object.values(tableData).map((product:any, i:number) => {
              let set = []
              let str = ""
              for(var x =1;  x < Object.keys(product).length; x++)
              {
                str = Object.keys(product)[x] + ': ' + Object.values(product)[x];
                set.push({ key: str, text: str, value: str})
              }
               return (             
              <Table.Row  key={i}>
                <Table.Cell>
                  {product['name']}            
                </Table.Cell>
                <Table.Cell>
                <Dropdown 
                    placeholder='Fields'
                    name="subject"
                    selection 
                    required
                    options={set}
                  />         
                </Table.Cell>
              </Table.Row>)
              })}
          </Table.Body>
        </Table> 
        </div>
        </>)} 
      </>
      )
    }
  
export default Union