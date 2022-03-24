const Header = () =>{
  return(
    <div className = 'header'>
      <div className='title'>
        <h1>Lab 6 React: Memoria</h1>
      </div>
    </div>
  )
}

const Card = ({url, click, rotation}) =>{

  return(
    <div className = 'cardcontainer' style = {{transform:rotation}}>
      <div onClick = {click} className='card' style = {{backgroundImage: `url(${url})`}}></div>
    </div>
  )
}



const Winnn = ({refrescar}) =>{
  const winmage = './regular.jpg'
  return(
      <div className = 'modal-container' style = {{backgroundImage: winmage}}>
        <div className = 'modal-content'>
          <div className = 'winner'>¡Has Ganado!</div>
          <button className = 'restart' onClick = {refrescar}>Reiniciar</button>
        </div>
      </div>
  )
}

const Board = ({images}) =>{
  const backy = './backk.jpg'
  const touches = React.useRef(0)
  const last = React.useRef(null)
  const secondtolast = React.useRef(null)
  const wincondition =React.useRef(0)
  const [i1, seti1] = React.useState(0)
  const [i2, seti2]= React.useState(0)
  const win = React.useRef(false)
  const counter = React.useRef(0)
  const [modal, setModal] = React.useState(false)
  const [tempo, setTempo] = React.useState(false)

  const ToggleModal = () =>{
    setModal(!modal)
  }

  const [flipped, setFlipped] = React.useState(images.map(() =>false))

  const refresh = () =>{
    window.location.reload(false)
  }

  const clickManger = (i) =>{
    if(touches.current<=2 && flipped[i]===false &&!tempo){
      const newstates = [...flipped]
      newstates[i] = true
      setFlipped(newstates)
      touches.current = touches.current+1
      if(touches.current === 1){
        last.current = images[i]
        seti1(i)
      }
      if(touches.current === 2){
        secondtolast.current = last.current
        last.current = images[i]
        if(last.current === secondtolast.current){
          wincondition.current = wincondition.current+1
          touches.current = 0
          counter.current = counter.current+1
          if(wincondition.current === 8){
            ToggleModal()
          }
        }else{
          setTempo(true)
          setTimeout(()=>{
            touches.current = 0
            setFlipped(([...oldState]) =>{
              oldState[i1] = false
              oldState[i] = false
              counter.current = counter.current+1
              last.current, secondtolast.current = null
              setTempo(false)
              return oldState
            })
          }, 1000)
        }
      }
    }
  }
  return(
    modal ? <Winnn refrescar = {refresh}/> :
    <div className='divtainer'>
      <div className='options'>
        <div className='restart' onClick = {() => refresh()}>
          Reiniciar
        </div>
        <div>
          Total de intentos:{counter.current}
        </div>
      </div>
      <div className = 'board'>
        {images.map((url, i) => <Card rotation = {flipped[i] ? 'rotateY(180deg)' : 'rotateY(0deg)'} url = {flipped[i] ? url : backy} key = {i} click = {() => clickManger(i)}/>)}
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