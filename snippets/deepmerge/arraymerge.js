const list1 = [];
const list2 = [];
const list3 = [];
list1[2] = {id: 1}
list2[3] = {id: 2}
list3[4] = {id: 3}

const list = [...list1, ...list2, ...list3]
console.log('List')
console.dir(list)
