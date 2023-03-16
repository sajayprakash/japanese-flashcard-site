import { useState } from 'react';
import Hiragana from './Hiragana';
import Katakana from './Katakana';

const Navbar = () => {
  const [showHiragana, setShowHiragana] = useState(true);

  const handleHiraganaClick = () => {
    setShowHiragana(true);
  };

  const handleKatakanaClick = () => {
    setShowHiragana(false);
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white'>
      <div className='flex justify-between px-4 py-2'>
        <div className='flex items-center'>
          <a href="https://sajayprakash.com" className='text-lg font-bold'>Sajay Prakash</a>
        </div>
        <div className='flex items-center'>
          <button
            className={`mx-2 ${
              showHiragana ? 'text-purple-300' : 'text-white'
            } hover:text-purple-300 focus:outline-none`}
            onClick={handleHiraganaClick}
          >
            Hiragana
          </button>
          <button
            className={`mx-2 ${
              !showHiragana ? 'text-purple-300' : 'text-white'
            } hover:text-purple-300 focus:outline-none`}
            onClick={handleKatakanaClick}
          >
            Katakana
          </button>
        </div>
      </div>
      {showHiragana ? <Hiragana /> : <Katakana />}
    </nav>
  );
};

export default Navbar;
