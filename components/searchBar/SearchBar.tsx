"use client"

import { useState } from "react";
function SearchBar() {
  const [valueInput, setValueInput] = useState('')

  async function onClickFiltered() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({ value:valueInput })

    let requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("http://127.0.0.1:3000/api/filtered", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  return (
    <div className="flex gap-[16px] items-center p-[24px]">
      <div className="flex flex-1 gap-[8px] bg-[#f8f8f8] rounded-[8px] p-[12px]">
        <img src="./images/search-ligth.svg" alt="" />
        <input
          className="flex-1 bg-[transparent]"
          type="text"
          placeholder="search..."
          value={valueInput}
          onChange={e => setValueInput(e.target.value)}
        />
      </div>

      <button className="flex items-center gap-3 px-[24px] py-[12px] bg-[#f8f8f8] rounded-[8px]"
        onClick={onClickFiltered}>
        Filters
        <img src="./images/filter.svg" alt="" />
      </button>
    </div>
  );
}

export default SearchBar;
