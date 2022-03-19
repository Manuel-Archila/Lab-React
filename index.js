const Header = () =>{
  return(
    <div className = 'header'>
      <div className='title'>
        <h1>Lab 6 React: Memoria</h1>
      </div>
    </div>
  )
}

const Card = ({url, i}) =>{
  return(
    <div>
      <div onClick = {() => console.log('wooooi')} className='card' style = {{backgroundImage: `url(${url})`}}></div>
    </div>
  )

}

const Board = ({images}) =>{
  const backy = './back.png'
  const touches = React.useRef(0)
  const ultima = React.useRef(null)
  const penultima = React.useRef(null)
  const wincondition =React.useRef(0)
  return(
    <div className='divtainer'>
      <div className='options'>
        <div>
          <h1>Reiniciar</h1>
        </div>
        <div>
          <h1>Contador:</h1>
        </div>
      </div>
      <div className = 'board'>
        {images.map((url, i) => <Card url = {url} key = {i}/>)}
      </div>
    </div>
  )
}






const App = () =>{
  const imagenes = ['./anti_pops.png', './benson.png', './death.png', './mordecai.png', './musculoso.png', 'papaleta.png', './rigby.png', './skips.png', './anti_pops.png', './benson.png', './death.png', './mordecai.png', './musculoso.png', 'papaleta.png', './rigby.png', './skips.png'].sort(() =>0.5-Math.random())
  return (
    <div className="container">
      <Header/>
      <Board images = {imagenes}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))