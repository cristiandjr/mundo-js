

const consumoApi =  async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  const info = data.map(item => {
    return {
      identificadoUsuario: item.id,
      titulo: item.title,
      mensaje: item.body
    }
  })
  return console.log(info)
}


consumoApi()