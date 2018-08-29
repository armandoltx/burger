import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // To convert the state created in BurgerBuilder to an array to use it in here
  let transformedIngredients = Object.keys(props.ingredients)
      .map(igKey => {
          // to convert the string value into an array that contains as many elements as ingredients we have
          return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + 1} type={igKey} />;
          });
          // use (_) because we want to get the index, we do not care about the element itself
      })
      .reduce((arr, el) => {
        return arr.concat(el)
      }, []);
      console.log(transformedIngredients);

  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />

    </div>
  );
};

export default burger;