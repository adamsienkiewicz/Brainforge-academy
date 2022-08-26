
 

async function getResponse() {
    const myJson = JSON.stringify({
        "title": text.value,
        "body": bodyText.value,
        "postArea": idNumber.value 
      },)
    
	const response = await fetch(
		'https://jsonplaceholder.typicode.com/posts',
		{
			method: 'post',
			body: myJson,
		}
	);
    console.log(response)
}

const text = document.getElementById('title')

const bodyText = document.getElementById('body')

const idNumber = document.getElementById("postArea")


document.getElementById("send", "display"), document.getElementById("display").addEventListener("click", function(e) {
    e.preventDefault();
   
    // alert("Hello World!");
    if (title.value.length >= 3) {
        alert("DOBRA ROBOTA!")
        
    } else {
        
        alert("Przyjacielu musisz tu coś napisać!!!");
    }
    
    getResponse()
    console.log(text.value, bodyText.value, idNumber.value)

    text.value = '';
    bodyText.value = '';

    document.getElementById("postArea").innerHTML = idNumber
  })

 









// fetch('https://jsonplaceholder.typicode.com/posts/:id', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


  
