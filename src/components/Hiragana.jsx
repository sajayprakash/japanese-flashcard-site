import { useState, useEffect } from 'react'
import Footer from './Footer'

const Hiragana = () => {
  const hiragana = [
    { romanji: 'a', hiragana: 'あ' },
    { romanji: 'i', hiragana: 'い' },
    { romanji: 'u', hiragana: 'う' },
    { romanji: 'e', hiragana: 'え' },
    { romanji: 'o', hiragana: 'お' },
    { romanji: 'ka', hiragana: 'か' },
    { romanji: 'ki', hiragana: 'き' },
    { romanji: 'ku', hiragana: 'く' },
    { romanji: 'ke', hiragana: 'け' },
    { romanji: 'ko', hiragana: 'こ' },
    { romanji: 'sa', hiragana: 'さ' },
    { romanji: 'shi', hiragana: 'し' },
    { romanji: 'su', hiragana: 'す' },
    { romanji: 'se', hiragana: 'せ' },
    { romanji: 'so', hiragana: 'そ' },
    { romanji: 'ta', hiragana: 'た' },
    { romanji: 'chi', hiragana: 'ち' },
    { romanji: 'tsu', hiragana: 'つ' },
    { romanji: 'te', hiragana: 'て' },
    { romanji: 'to', hiragana: 'と' },
    { romanji: 'na', hiragana: 'な' },
    { romanji: 'ni', hiragana: 'に' },
    { romanji: 'nu', hiragana: 'ぬ' },
    { romanji: 'ne', hiragana: 'ね' },
    { romanji: 'no', hiragana: 'の' },
    { romanji: 'ha', hiragana: 'は' },
    { romanji: 'hi', hiragana: 'ひ' },
    { romanji: 'fu', hiragana: 'ふ' },
    { romanji: 'he', hiragana: 'へ' },
    { romanji: 'ho', hiragana: 'ほ' },
    { romanji: 'ma', hiragana: 'ま' },
    { romanji: 'mi', hiragana: 'み' },
    { romanji: 'mu', hiragana: 'む' },
    { romanji: 'me', hiragana: 'め' },
    { romanji: 'mo', hiragana: 'も' },
    { romanji: 'ya', hiragana: 'や' },
    { romanji: 'yu', hiragana: 'ゆ' },
    { romanji: 'yo', hiragana: 'よ' },
    { romanji: 'ra', hiragana: 'ら' },
    { romanji: 'ri', hiragana: 'り' },
    { romanji: 'ru', hiragana: 'る' },
    { romanji: 're', hiragana: 'れ' },
    { romanji: 'ro', hiragana: 'ろ' },
    { romanji: 'wa', hiragana: 'わ' },
    { romanji: 'wo', hiragana: 'を' },
    { romanji: 'n', hiragana: 'ん' }
  ]

  const [HiraganaInput, setHiraganaInput] = useState('')
  const [current, setCurrent] = useState(0)

  const [hiraganastreak, setHiraganaStreak] = useState(0)
  const [maxHiraganaStreak, setHiraganaMaxStreak] = useState(0)

  const [error, setError] = useState(false)

  const setRandomHiragana = () => {
    const randomIndex = Math.floor(Math.random() * hiragana.length)
    setCurrent(randomIndex)
  }

  const handleChange = (e) => {
    setHiraganaInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (HiraganaInput.toLowerCase() === hiragana[current].romanji) {
      setHiraganaStreak(hiraganastreak + 1)
      setHiraganaMaxStreak(hiraganastreak + 1 > maxHiraganaStreak ? hiraganastreak + 1 : maxHiraganaStreak)
      setError(false)

      localStorage.setItem('streak', hiraganastreak + 1)
      localStorage.setItem('maxStreak', hiraganastreak + 1 > maxHiraganaStreak ? hiraganastreak + 1 : maxHiraganaStreak)
    } else {
      const h = hiragana[current].hiragana
      const r = hiragana[current].romanji
      setError(`You got it wrong! The correct answer for ${h} is ${r}`)
      setHiraganaStreak(0)
      localStorage.setItem('streak', 0)
    }

    setHiraganaInput('')
    setRandomHiragana()
  }

  useEffect(() => {
    setRandomHiragana()
    setHiraganaStreak(parseInt(localStorage.getItem('streak')) || 0)
    setHiraganaMaxStreak(parseInt(localStorage.getItem('maxStreak')) || 0)
  }, [])

  return (
    <div className="min-h-screen bg-slate-800 text-purple-100 text-center">
      <header className="p-6 mb-8">
        <h1 className="text-2xl font-bold uppercase">Hiragana Flashcards</h1>
        <div>
          <p> Streak: {hiraganastreak} / {maxHiraganaStreak}</p>
        </div>
      </header>

      <div className="text-9xl font-bold mb-8">
        <p>{hiragana[current].hiragana}</p>
      </div>

      <div className="mb-8">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={HiraganaInput}
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

export default Hiragana 
