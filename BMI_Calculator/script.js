const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const result = document.getElementById("result");
  const weight = parseInt(document.getElementById("weight").value);
  const height = parseInt(document.getElementById("height").value);
  console.log(weight)
  console.log(height)
  if(height==="" || height<=0 || isNaN(height)){
    alert("Enter correct height value")
  }else if(weight==="" || weight<=0 || isNaN(weight)){
    alert("Enter correct weight value")
  }else{
    const bmi =(weight/((height/100)**2)).toFixed(2)
    result.innerHTML=`<span>${bmi}</span>`
  }
});
