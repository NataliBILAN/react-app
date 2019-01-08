import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DishCard from './DishCard';
import s from './AllDishes.module.css';

const AllDishesView = ({ menu, match, location }) => (
  <>
    <ul className={s.menu}>
      {menu.map(dish => (
        <li key={dish.id}>
          <Link
            to={{
              pathname: `${match.url}/${dish.id}`,
              state: { from: location },
            }}
            className={s.menu_item}
          >
            <DishCard
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
export default withRouter(AllDishesView);
