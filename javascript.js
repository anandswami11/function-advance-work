console.log('anand')

//function boynow(){
// console.log('click now function running')
//document.write('thank you for buying t shirt') 


//}
//console.log('boynow')
//document.querySelector('#boy-now').addEventListener('click', function(){
// boynow()
//})
document.querySelector('#country').addEventListener('change', function () {


  let selectedcountry = document.querySelector('#country').value



  if (selectedcountry === 'India') {
    document.querySelector('.result').innerHTML = `
  <h1>India</h1>
  <img src="img/Flag_India.webp">
  `
  }

  if (selectedcountry === 'Aus') {
    document.querySelector('.result').innerHTML = `
  <h1>Aus</h1>
  <img src="img/Flag_India.webp">
  `
  }

  if (selectedcountry === 'Usa') {
    document.querySelector('.result').innerHTML = `
  <h1>Usa</h1>
  <img src="img/Flag_India.webp">
  `
  }

  if (selectedcountry === 'Canada') {
    document.querySelector('.result').innerHTML = `
  <h1>Canada</h1>
  <img src="img/Flag_India.webp">
  `
  }


}) 