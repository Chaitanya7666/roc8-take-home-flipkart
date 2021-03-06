import React from "react";
import useStyles from "./styles";

const EachProductCard = ({ eachItem }) => {
  // console.log(eachItem);
  const classes = useStyles();
  return (
    <div className={classes.eachItemDiv}>
      <div className={classes.productImageDiv}>
        <img src={eachItem.productImageUrl} alt={eachItem.productName} className={classes.productImage}/>
      </div>
      <div className={classes.productDetailsAndPriceDiv}>
        <h5>{eachItem.brand}</h5>
        <h5>{eachItem.productName}</h5>
        <h6>size : {eachItem.size}</h6>
        <h6>gender : {eachItem.gender}</h6>

        <h6>discounted price : {eachItem.discountedPrice}</h6>
        <h6>original price : <strike>{eachItem.originalPrice}</strike></h6>
      </div>
    </div>
  );
};

export default EachProductCard;
