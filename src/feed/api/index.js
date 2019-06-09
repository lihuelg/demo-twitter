export const getFeed = (user) => fetch('https://my-json-server.typicode.com/lihuelg/demo-api/posts')
.then(response => {
  if(response.status !== 200) throw new Error(response.error)
  return response
})
.then(response => response.json());

export const sendPost = (data) => fetch('https://my-json-server.typicode.com/lihuelg/demo-api/posts', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(data)
})
.then(response => {
  if(Math.floor(response.status/100) !== 2) throw new Error(response.error)
  return response
})
.then(response => response.json());