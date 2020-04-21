console.log("This js file is working!");
fetch("Age_Male_DA.json")
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
    data.forEach((item, i) => {
      if (data[i]['DAUID']==10010797)
      {
        console.log(data[i]['10 to 14 years']);
      }
    });
  });
console.log("Hello");
