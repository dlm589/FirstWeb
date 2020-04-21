console.log("This js file is working!");
fetch("Age_Male_DA.json")
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
    data.forEach((item, i) => {
      console.log(data);
    });
  });
