let orderTasks = tasks => {
  let orderedTasks = [];
  tasks.forEach(task => {
    let index = orderedTasks.indexOf(task.node);
    if (index === -1) {
      orderedTasks.push(task.node);
    }
    console.log(orderedTasks);
    //terminal logs three different arrays: 
    //[ 'spells' ],
    //[ 'write spells', 'scour cauldron', 'spells' ]
    //[ 'dinner', 'sweep', 'write spells', 'scour cauldron', 'spells' ],
    //then proceeds to log the output of line 33
    //this happens because of the way the program loops and logs (lol's?) for every object in our "tasks" array
    index = orderedTasks.indexOf(task.node);
    task.depends.forEach(dependTask => { 
      let dependTaskIndex = orderedTasks.indexOf(dependTask);
      if (dependTaskIndex === -1) { 
        orderedTasks.unshift(dependTask); //this is where you append to the beginning of the orderedTasks array
      }
      if (dependTaskIndex > index) { //this comparison works because index will always be zero
        orderedTasks.splice(dependTaskIndex, 1); 
        orderedTasks.unshift(dependTask);
      }
    })
  })
  return orderedTasks;
}

let tasks = [

    { node: 'sweep', depends: []},
    { node: 'dinner', depends: []},
    { node: 'blood moon committee', depends: []},
    { node: 'scour cauldron', depends: ['sweep', 'dinner'] },
    { node: 'write spells', depends: ['blood moon committee', 'dinner']},
    { node: 'cast spells', depends: ['scour cauldron', 'write spells'] }

  ]

console.log(orderTasks(tasks));