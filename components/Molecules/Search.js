import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ url, setUrl, currLink }) => {
  const handleSearch = (event) => {
    let searchTerm = event.target.value;
    event.preventDefault();
    const newUrl =
      url.search("&search") !== -1
        ? url.split("&search")[0].concat(`&search=${searchTerm}`)
        : url.concat(`&search=${searchTerm}`);
    setUrl(newUrl);
    if (searchTerm === "") {
      setUrl(currLink);
    }
  };

  return (
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="ស្វែងរក..."
        className="bg-white border-2 border-primary rounded-md py-2 px-4 focus:outline-none text-sm h-full"
        onChange={(e) => handleSearch(e)}
      />
      <button
        className="bg-light_primary text-primary px-4 rounded-md text-sm"
        type="submit"
        disabled
      >
        <BsSearch />
      </button>
    </div>
  );
};

export default Search;
