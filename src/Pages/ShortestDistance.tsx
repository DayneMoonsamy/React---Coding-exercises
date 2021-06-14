import React, {useState} from 'react'
import file from '../files/geo.json'
import data from '../files/data.json'
import { Button, Input, Table } from 'semantic-ui-react';

function ShortestDistance() 
{

  const [tableData, setTableData] = useState({});
  const [loading, setLoading] = useState(true);
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);

  function logCoordinates(x2: number, y2: number) {
    let tempFile = file
    tempFile.sort(function(a, b) {
      let ax = parseFloat(a['geo'].split(',')[0])
      let ay = parseFloat(a['geo'].split(',')[1])
      let bx = parseFloat(b['geo'].split(',')[0])
      let by = parseFloat(b['geo'].split(',')[1])
      let dist = Math.sqrt((ax - x2) ** 2 + (ay - y2) ** 2)
      let dist2 = Math.sqrt((bx - x2) ** 2 + (by - y2) ** 2)
      return dist - dist2;
    }); 
    let match = tempFile.slice(0, 10)
    let arr = []
      for(let i=0; i<10;i++)
      {
        var __FOUND = data.find(function(post) {
          if((post.meta).includes(match[i]["ipv4"]))
            return true;
        });
        arr.push(__FOUND)
      }
      setTableData(arr)
  }
  
  function populateTable()
  {
    logCoordinates(lat, long)
    setLoading(false)
  }

  const handleLat = (e: any) => 
  {
    setLat(parseFloat(e.target.value))
  }

  const handleL = (e: any) => 
  {
    setLong(parseFloat(e.target.value))
  }

  return(
    <div>
      <div className="cont">
        <div className="center">
        <Input focus placeholder='Enter Longitude' onChange={handleL}/><br/><br/>
        <Input focus placeholder='Enter Latitude' onChange={handleLat}/><br/><br/>
        <Button onClick={() => populateTable()}>
          Generate Table
        </Button>
        </div>
      </div>
      {loading ? (
        <div>
          
        </div>
      ) : ( 
        <div className ="back">
        <Table color={'black'} key={'black'}  textAlign="center" inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={2}>Active</Table.HeaderCell>
            <Table.HeaderCell width={2}>Asn</Table.HeaderCell>
            <Table.HeaderCell width={2}>CountryCode</Table.HeaderCell>
            <Table.HeaderCell width={2}>ID</Table.HeaderCell>
            <Table.HeaderCell width={2}>Statecode</Table.HeaderCell>
            <Table.HeaderCell >Meta</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>      
          {Object.values(tableData).map((product:any, i:number) => {
             return (
            <Table.Row>
              <Table.Cell>
                {product['active']}            
              </Table.Cell>
              <Table.Cell>
                {product['asn']}            
              </Table.Cell>
              <Table.Cell>
                {product['countrycode']}            
              </Table.Cell>
              <Table.Cell>
                {product['id']}            
              </Table.Cell>
              <Table.Cell>
                {product['statecode'] ? product['statecode']: "Unknown"}            
              </Table.Cell>
              <Table.Cell>
                {product['meta']}            
              </Table.Cell>
            </Table.Row>)
            })}
        </Table.Body>
      </Table></div>
      )}      
    </div>
  )
}

export default ShortestDistance