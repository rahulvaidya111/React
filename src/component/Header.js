import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const base_url = "https://urbanmonkey.onrender.com/categories";

const Header = () => {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetch(`${base_url}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      
      });
  }, []);

  return (
    <>
      <header>
        <div className="navhead">
          <div className="navbar">
            <div className="logo">
              <Link to="/">
                {" "}
                <img
                  src="https://cdn.shopify.com/s/files/1/0661/7423/files/logo-news.png?v=1669196261"
                  width="230px"
                />
              </Link>
            </div>

            <div className="search">
              <form className="d">
                <select data-name="Product type" className="catagories">
                  {categories?.map((item) => {
                    return (
                      <option key={item.category_id} value="Accessories">
                        {item.category}
                      </option>
                    );
                  })}
                  {/* <option className="catagories" value="*">Catagories</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Apparel">Apparel</option>
                        <option value="Eyewear">Eyewear</option>
                        <option value="Face Mask">Face Mask</option>
                        <option value="Handbags, Wallets & Cases">Handbags, Wallets & Cases</option>
                        <option value="Headwear">Headwear</option>
                        <option value="Keychains">Keychains</option>
                        <option value="Skateboard">Skateboard</option>
                        <option value="Skateboard Decks">Skateboard Decks</option> */}
                </select>
                <input
                  className="searchbox"
                  type="search"
                  placeholder="Search Product"
                  aria-label="Search"
                />
                <button className="searchbtn" type="submit">
                  Search
                </button>
              </form>
            </div>
            <nav>
              <ul>
                <li>
                <Link to="/"> <a href="#">Home</a></Link>
                </li>
                <li>
                <a href="">Product</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Account</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
