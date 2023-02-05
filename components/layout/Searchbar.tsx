import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

function Searchbar() {
  const [searchString, setString] = useState('');
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchURL = `https://google.com/search?q=${searchString}`;
    window.open(searchURL, '_blank');
  };
  return (
    <div className="border rounded-full overflow-hidden">
      <form className="py-2" onSubmit={formSubmit}>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setString(e.target.value)
          }
          type="text"
          placeholder="Search"
          className="focus:outline-none ml-2"
        />
        <span className="p-2 hover:bg-sky-400 duration-100 border-l text-center hover:text-white">
          <button>
            <BsSearch />
          </button>
        </span>
      </form>
    </div>
  );
}

export default Searchbar;
