const apiUrl = 'https://jsonplaceholder.typicode.com/posts';


export const insert = (data) => {
    console.log('call me...');
    fetch(apiUrl, {
        method: 'POST',
        headers: { // Request Headers
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    }).then(response => response.json())
        .then((result) => {
            alert(JSON.stringify(result));
        },
            (error) => {

            })
}




export const insertAsync = async (data) => {
    console.log('call me...');
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { // Request Headers
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    });

    const result = response.json();

    return result;
}

export const getAllAsync = async () => {
    const response = await fetch(apiUrl)
    const result = response.json()
    return result
}
export const removeAsync = async (id) => {
    const response = await fetch(apiUrl + `/${id}`, { method: 'DELETE' })
   if(response.status ==200){
    console.log(true)
       return true
   }

    console.log('response', response)

}