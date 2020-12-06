fetch('https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',{

method : 'POST',
headers :{
    'Content-type':'application/json'
},
Bearer: {Token : "tTU3gFVUdP"},
body: JSON.stringify( { name : 'lokeshbagana@gmail.com'})
}).then(res=> {
    return res.json()
})
.then(res=> console.log(data))
.catch(error => console.log("ERRORE"))