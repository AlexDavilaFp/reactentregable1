import './App.css'
import QuoteBox from './componentes/QuoteBox '
import Button1 from './componentes/Button1'
import quotes from './quotes.json'
import { useState } from 'react'

function App() {

  const colorData = ["Silver", "red", "blue", "orange", "yellow", "Green", "Teal", "Purple"]

  const quotesRandom = Math.floor(Math.random() * quotes.length)
  const colorRandom = colorData[Math.floor(Math.random() * colorData.length)]

  const [card, SetCard] = useState(quotesRandom)
  const [Color, SetColor] = useState(colorRandom)

  const changeQuotes = () => {
    SetCard(quotesRandom)
    SetColor(colorRandom)
  }

  return (
    <div className="App" style={{ background: Color }}>
      <div className='Card'>
        <QuoteBox ShowQuotes={card} ShowColor={Color} />
        <Button1 changeCard={changeQuotes} ShowColor={Color} />
      </div>
    </div>
  )
}

export default App
