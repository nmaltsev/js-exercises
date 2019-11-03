
// Quelle version préférez-vous?
 
function removeArrayItem1(array, item) { 
  let pos = array.length; 

  while((pos = array.lastIndexOf(item, pos)) !== -1) { 
    array.splice(pos, 1); 
  } 

  return array; 
} 

function removeArrayItem2(array, item) { 
  let pos = array.lastIndexOf(item); 

  while (pos !== -1) { 
    array.splice(pos, 1); 
    pos = array.lastIndexOf(item, pos); 
  }  

  return array; 
} 

function removeArrayItem3(array, item) { 
  let pos = array.length; 

  do  { 
    pos = array.lastIndexOf(item, pos); 
    if (pos !== -1) array.splice(pos, 1); 
  } while (pos !== -1) 

  return array; 
} 

function removeArrayItem4(array, item) { 
  return array.filter(currentItem => currentItem !== item); 
} 


module.exports = {
    removeArrayItem1,
    removeArrayItem2,
    removeArrayItem3,
    removeArrayItem4
};
 
