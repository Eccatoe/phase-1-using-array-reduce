const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const reducer=(accumulator, element)=>{ return element+accumulator}

const totalBatteries=batteryBatches.reduce(reducer,0)

