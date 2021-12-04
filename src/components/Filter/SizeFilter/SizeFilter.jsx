import React, {useContext} from "react";
import { FilterStatesContext } from '../../../contexts/FilterStatesContext';

const SizeFilter = () => {
    const { setSize, setBrand, setGender, productsToRender } =
    useContext(FilterStatesContext);

    const handleSizeChange = (e) => {
        setSize(p => e.target.value);
    }
  return (
    <div>
      <label for="cars">Choose Size : </label>
      <select name="cars" id="cars" onChange={handleSizeChange}>
        <option value="s">s</option>
        <option value="m">m</option>
        <option value="l">l</option>
        <option value="xl">xl</option>
        <option value="all" selected>all</option>
      </select>
    </div>
  );
};

export default SizeFilter;
