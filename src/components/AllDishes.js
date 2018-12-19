import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Dish from './Dish';

const AllDishes = ({ menu, match, location }) => (
  <>
    <ul>
      {menu.map(dish => (
        <li key={dish.id}>
          <Link
            to={{
              pathname: `${match.url}/${dish.id}`,
              state: { from: location },
            }}
          >
            <Dish
              image={dish.image}
              alt={dish.name}
              name={dish.name}
              price={dish.price}
            />
          </Link>
        </li>
      ))}
    </ul>
  </>
);
export default withRouter(AllDishes);
