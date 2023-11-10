import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { UseFilterProductContext } from "../context/filterproductcontext";

function Sort() {
  const { view_grid, DisplayGrid, DisplayListView, getSortingValue } =
    UseFilterProductContext();

  return (
    <Wrapper className="sort-section">
      {/* 1st column  */}
      <div className="sorting-list--grid">
        <button className={view_grid ? "active sort-btn" : "sort-btn"}>
          <BsFillGridFill className="icon" onClick={DisplayGrid} />
        </button>
        <button className={!view_grid ? "active sort-btn" : "sort-btn"}>
          <BsList className="icon" onClick={DisplayListView} />
        </button>
      </div>
      <div className="">
        <form>
          <select id="sort" onChange={getSortingValue}>
            <option value="lowest">Price (lowest)</option>
            <option value="highest">Price (highest)</option>
            <option value="a-z">Price (A-Z)</option>
            <option value="z-a">Price (Z-A)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
}

export default Sort;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;
