/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import InfiniteScroll from 'react-infinite-scroller';
import s from './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroesList: props.heroes || [],
      heroes: props.heroes ? props.heroes.slice(0, 10) : [],
      hasMoreItems: true,
      totalShow: 0,
      searchTerm: '',
    };
  }

  handleChange = evt => {
    const { heroesList } = this.state;
    const { value } = evt.target;
    this.setState({
      hasMoreItems: false,
      searchTerm: value,
      heroes: heroesList.filter(
        item => item.name.toLowerCase().indexOf(value) !== -1,
      ),
    });
  };

  loadItems = () => {
    const { heroesList, totalShow } = this.state;
    this.setState({
      heroes:
        totalShow > heroesList.length
          ? heroesList
          : heroesList.slice(1, totalShow + 10),
      totalShow: totalShow + 9,
      hasMoreItems: totalShow < heroesList.length,
    });
  };

  render() {
    const loader = <div className={s.loader}>Loading ...</div>;
    const NoRes = <div className={s.NoResults}>No heroes found &#9785;</div>
    const { heroes, hasMoreItems } = this.state;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>Heroes</h1>
          <div className={s.search}>
            <input
              id="search"
              name="search"
              type="text"
              className={s.searchBox}
              placeholder=""
              onChange={this.handleChange}
              value={this.state.searchTerm}
            />
            <label htmlFor="search">Filter hero</label>
            <span className={s.focusBorder} />
          </div>
          <div className={s.rootNoRes}>{heroes.length === 0 && !hasMoreItems && NoRes}</div>
          <InfiniteScroll
            pageStart={0}
            loadMore={() => this.loadItems()}
            hasMore={hasMoreItems}
            loader={loader}
          >
            <div className={s.heroesList}>
              {heroes
                .sort((a, b) => {
                  if (a.name > b.name) return 1;
                  else if (b.name > a.name) return -1;
                  return 0;
                })
                .map(item => (
                  <div
                    className={s.heroeCard}
                    key={`item-${item.id}`}
                    style={{
                      backgroundImage: `url(${item.image_splash})`,
                    }}
                  >
                    <img src={item.image_portrait} width="100" alt="hero" />
                    <p className={s.heroName}>{item.name}</p>
                  </div>
                ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      links: PropTypes.shape({}),
      name: PropTypes.string,
      slug: PropTypes.string,
      image_portrait: PropTypes.string,
      image_splash: PropTypes.string,
      image_card_background: PropTypes.string,
    }),
  ).isRequired,
};

export default withStyles(s)(Home);
