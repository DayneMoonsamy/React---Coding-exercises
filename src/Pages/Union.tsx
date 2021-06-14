import { lchmodSync } from 'fs';
import { resourceLimits } from 'worker_threads';
import data from '../files/p3Data.json'

function Union() {

  function testUnion()
  {
    var set: any[] = [];
    let t1= (data.testSet1)
    let t2= (data.testSet2)
    let x = { "name": "obj7", "r": 2 }
    let t = { "name": "obj7", "d": 1 , "e": 33, "r": 2}
    let test = [{ "name": "obj7", "d": 1 , "e": 33, "r": 2}]
    
    // find keys 
    let keyObj1 = Object.keys(x); 
    let keyObj2 = Object.keys(t); 
    console.log({...x, ...t})
    

    set.push(t1[0])
    let result = [...t1, ...t2];
    console.log(result)
    result.map((line) =>{
        //console.log(Object.keys(line))
        set.map((setLine) =>{
          if(line.name == setLine.name)
          {
              Object.entries(line).forEach((key, index) =>{
                  
              })         
          }
        })
    })
    console.log(result)
    // for(var j =0; j< result.length; j++)
    // {  
    //   set.map((line, index) =>{
    //     if(result[j].name == line.name)
    //     {
    //         for(var q in Object.keys(result[j]))    
    //         {
    //           for(var l in Object.keys(line))
    //           {
    //             if(q ==l)
    //             {
    //             }
    //           }
    //         }
    //     }
    //   })
    // }
    
    return
    }


    return (
      <>
        {testUnion()}
      </>)
    }

export default Union