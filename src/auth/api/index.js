export const authenticate = (data) => fetch('https://reqres.in/api/login', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(data)
}).then(response => response.json())
.then(response => {
  if(response.status !== 200) throw new Error(response.error)
  return response;
});