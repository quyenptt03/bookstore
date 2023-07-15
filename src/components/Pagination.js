import React from "react";
import { Link } from "react-router-dom";

export default function Pagination({
  productsPerPage,
  totalProducts,
  handleClick,
}) {
  const PageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    PageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {PageNumbers.map((number) => (
          <li key={number} id={number} className="page-item">
            <Link
              to={`/products?page=${number}`}
              onClick={() => handleClick(number)}
              className="page-link"
            >
              {number}
            </Link>
          </li>
        ))}
        {/*<li>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li>
          <a href="#">
            <span className="next"></span>
          </a>
        </li>*/}
      </ul>
    </nav>
  );
}
