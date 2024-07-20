import React from "react"
import { useEffect, useState } from "react"
import './App.css'







function App () {
  const [user, setUser] = useState()
  
  useEffect(() => {
    fetch('https://api.github.com/users/Fabrasss')
    .then((res) => res.json())
    .then((json) => setUser(json))
  }, [])


  return (<div>
    <p>Oi</p>
      {user && (
        <div>
          <h1>Nome: {user.login}</h1>
          {/* Exemplo de exibição de outros dados do usuário */}
          <p>Repositórios públicos: {user.public_repos}</p>
          <p>Seguidores: {user.followers}</p>
          <p>Localização: {user.location}</p>
        </div>
      )}
    </div>
  )
}

export default App



  






