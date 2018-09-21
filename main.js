let tasks = [
    { node: 'spells', depends: ['scour cauldron', 'write spells'] },
    { node: 'scour cauldron', depends: ['sweep', 'dinner'] },
    { node: 'write spells', depends: ['blood moon committee', 'dinner']},
    { node: 'sweep', depends: []},
    { node: 'dinner', depends: []},
    { node: 'blood moon committee', depends: []}
  ]

  //I'm new to this magic thing, how do I put this in a spell?