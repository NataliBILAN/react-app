import React, { PureComponent, createRef } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Avatar from '../Avatar/Avatar';
import s from './UserMenu.module.css';

export default class UserMenu extends PureComponent {
  containerRef = createRef();

  state = {
    isDropdownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  // Использую PureComponent (когда стэйт -примитивы), либо-shouldComponentUpdate=>чтобы не было лишнего рендеринга компонента

  // shouldComponentUpdate(nextProps, nextState) {
  //   const { isDropdownOpen } = this.state;

  //   return nextState.isDropdownOpen !== isDropdownOpen;
  // }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );
    const { isDropdownOpen } = this.state;

    if (isDropdownOpen && !isTargetInsideContainer) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState({ isDropdownOpen: true });
  };

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
  };

  render() {
    const { isDropdownOpen } = this.state;
    const { image, name } = this.props;
    return (
      <div
        className={s.container}
        ref={this.containerRef}
        onClick={this.openDropdown}
      >
        <Avatar image={image} />
        <p className={s.user_name}>{name}</p>
        {isDropdownOpen && <Dropdown />}
      </div>
    );
  }
}
