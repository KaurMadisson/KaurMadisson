const offersArray=[["Crossroad Gardens","88"],["Strawberry Mountain Lands","57"],["Weeping Willow Acres","39"],["Pinewood Meadow","05"],["Broken Cart Orchard","31"],["Rattlesnake Ranch","47"],["Shadow Ridge Vineyard","96"],["Peach Tree Range","50"],["Elysian Orchard","19"],["Crown Meadow Fields","63"],["Mooseridge Meadow","40"],["Eastwood Orchard","90"],["Poison Ivy Gardens","48"],["Crescent Canyon Ranch","36"],["Cranberry Estate","41"],["Lone Pine Farm","49"],["Whispering Willow Range","82"],["Spring Blossom Ranch","66"],["Hollow Point Estate","27"],["Little Acorn Meadow","20"],["New Morning Pastures","79"],["Oak Wood Ranch","53"],["Crescent Canyon Orchard","56"],["Grassy Knoll Fields","07"],["Moonlight Gardens","73"],["Lucky Paws Estate","08"],["Crooked Creek Nursery","21"],["Small World Pastures","51"],["Crooked Creek Acres","45"],["Red Mountain Farmstead","78"],["Blueberry Basket Farms","60"],["Maple Springs Acres","54"],["Lucky Paws Farmstead","84"],["Wild Horse Pastures","55"]];
var sortedArray = offersArray.sort(function(a, b) {
  return a[1] - b[1];
});
console.log(sortedArray)

for(let i=0;i<offersArray.length; i++){
    console.log(offersArray[i][0])
}

for(let i=0;i<offersObjects.length; i++){// i on riiuli number, "hind" on silt riiulis oleval karbil
    console.log(offersObjects[i]["pakkuja"])
}
//JSON - JavaScript Object Notation

var sortedArray = offersObjects.sort(function(a, b) {
    return a["hind"] - b["hind"];
  });
  for(let i=0;i<sortedArray.length; i++){
      console.log(sortedArray[i]["hind"])
  }

  //for(let a in arr) võtab indexid
  //for(let a of arr) võtab asjad array sees
