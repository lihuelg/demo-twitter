export const authenticate = (data) => fetch('https://reqres.in/api/login', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(data)
}).then(response => {
  if(response.status !== 200) throw new Error(response.error)
  return response
})
.then(response => response.json());

export const register = (data) => fetch('https://reqres.in/api/register', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(data)
}).then(response => {
  if(response.status !== 200) throw new Error(response.error)
  return response
})
.then(response => response.json());