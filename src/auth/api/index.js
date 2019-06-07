export const authenticate = (data) => fetch('https://reqres.in/api/login', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(data)
});