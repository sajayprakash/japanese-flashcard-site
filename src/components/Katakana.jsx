import { useState, useEffect } from 'react'
import Footer from './Footer'

const Katakana = () => {
  const katakana = [
    { romanji: 'a', katakana: 'ア' },
    { romanji: 'i', katakana: 'イ' },
    { romanji: 'u', katakana: 'ウ' },
    { romanji: 'e', katakana: 'エ' },
    { romanji: 'o', katakana: 'オ' },
    { romanji: 'ka', katakana: 'カ' },
    { romanji: 'ki', katakana: 'キ' },
    { romanji: 'ku', katakana: 'ク' },
    { romanji: 'ke', katakana: 'ケ' },
    { romanji: 'ko', katakana: 'コ' },
    { romanji: 'sa', katakana: 'サ' },
    { romanji: 'shi', katakana: 'シ' },
    { romanji: 'su', katakana: 'ス' },
    { romanji: 'se', katakana: 'セ' },
    { romanji: 'so', katakana: 'ソ' },
    { romanji: 'ta', katakana: 'タ' },
    { romanji: 'chi', katakana: 'チ' },
    { romanji: 'tsu', katakana: 'ツ' },
    { romanji: 'te', katakana: 'テ' },
    { romanji: 'to', katakana: 'ト' },
    { romanji: 'na', katakana: 'ナ' },
    { romanji: 'ni', katakana: 'ニ' },
    { romanji: 'nu', katakana: 'ヌ' },
    { romanji: 'ne', katakana: 'ネ' },
    { romanji: 'no', katakana: 'ノ' },
    { romanji: 'ha', katakana: 'ハ' },
    { romanji: 'hi', katakana: 'ヒ' },
    { romanji: 'fu', katakana: 'フ' },
    { romanji: 'he', katakana: 'ヘ' },
    { romanji: 'ho', katakana: 'ホ' },
    { romanji: 'ma', katakana: 'マ' },
    { romanji: 'mi', katakana: 'ミ' },
    { romanji: 'mu', katakana: 'ム' },
    { romanji: 'me', katakana: 'メ' },
    { romanji: 'mo', katakana: 'モ' },
    { romanji: 'ya', katakana: 'ヤ' },
    { romanji: 'yu', katakana: 'ユ' },
    { romanji: 'yo', katakana: 'ヨ' },
    { romanji: 'ra', katakana: 'ラ' },
    { romanji: 'ri', katakana: 'リ' },
    { romanji: 'ru', katakana: 'ル' },
    { romanji: 're', katakana: 'レ' },
    { romanji: 'ro', katakana: 'ロ' },
    { romanji: 'wa', katakana: 'ワ' },
    { romanji: 'wo', katakana: 'ヲ' },
    { romanji: 'n', katakana: 'ン' }
  ]
  const [Katakanainput, setKatakanaInput] = useState('')
  const [current, setCurrent] = useState(0)

  const [Katakanastreak, setKatakanaStreak] = useState(0)
  const [maxKatakanaStreak, setMaxKatakanaStreak] = useState(0)

  const [error, setError] = useState(false)

  const setRandomKatakana = () => {
    const randomIndex = Math.floor(Math.random() * katakana.length)
    setCurrent(randomIndex)
  }

  const handleChange = (e) => {
    setKatakanaInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (Katakanainput.toLowerCase() === katakana[current].romanji) {
      setKatakanaStreak(Katakanastreak + 1)
      setMaxKatakanaStreak(Katakanastreak + 1 > maxKatakanaStreak ? Katakanastreak + 1 : maxKatakanaStreak)
      setError(false)

      localStorage.setItem('streak', Katakanastreak + 1)
      localStorage.setItem('maxStreak', Katakanastreak + 1 > maxKatakanaStreak ? Katakanastreak + 1 : maxKatakanaStreak)
    } else {
      const k = katakana[current].katakana
      const r = katakana[current].romanji
      setError(`You got it wrong! The correct answer for ${k} is ${r}`)
      setKatakanaStreak(0)
      localStorage.setItem('streak', 0)
    }

    setKatakanaInput('')
    setRandomKatakana()
  }

  useEffect(() => {
    setRandomKatakana()
    setKatakanaStreak(parseInt(localStorage.getItem('streak')) || 0)
    setMaxKatakanaStreak(parseInt(localStorage.getItem('maxStreak')) || 0)
  }, [])

  return (
    <div className="min-h-screen bg-slate-800 text-purple-100 text-center">
      <header className="p-6 mb-8">
        <h1 className="text-2xl font-bold uppercase">Katakana Flashcards</h1>
        <div>
          <p> Streak: {Katakanastreak} / {maxKatakanaStreak}</p>
        </div>
      </header>

      <div className="text-9xl font-bold mb-8">
        <p>{katakana[current].katakana}</p>
      </div>

      <div className="mb-8">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={Katakanainput}
            className="block w-24 bg-transparent border-b-2 border-b-white mx-auto outline-none text-center text-6xl pb-2" />
        </form>
      </div>
      {error &&
        <div>
          <p>{error}</p>
        </div>
      }
      <Footer />
    </div>
  )
}

export default Katakana 
