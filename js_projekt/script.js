
 

async function getResponse() {
    const myJson = JSON.stringify({
        "title": text.value,
        "body": bodyText.value,
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


document.getElementById("send").addEventListener("click", function(e) {
    e.preventDefault();
   
    // alert("Hello World!");
    if (title.value.length >= 3) {
        alert("DOBRA ROBOTA")
        
    } else {
        
        alert("Przyjacielu musisz coś do nas napisać!!!");
    }
    form.reset();
    getResponse()
    console.log(text.value, bodyText.value)
  })

//   const form = document.getElementById('create-post-form');

//   form.addEventListener('submit', function handleSubmit(event) {
//     event.preventDefault();
  
//     // 👇️ Send data to server here

//     // 👇️ Reset form here
//     form.reset();
// //   });
  

  

