import React from 'react';
import { Link } from 'react-router-dom';
import s from './HomePage.module.css';

const HomePage = () => (
  <div>
    <h1 className={s.logo}>Blog it</h1>
    <p className={s.article}>
      Do you know what blogs are?If you don’t, then you’ve come to the right
      place. In the beginning, a blog was more of a personal diary that people
      shared online, and it goes back to 1994. In this online journal, you could
      talk about your daily life or share things you do. But, people saw an
      opportunity to communicate any information in a new way. So began the
      beautiful world of blogging. What is a Blog? Definition of blog A blog
      (shortening of “weblog”) is an online journal or informational website
      displaying information in the reverse chronological order, with latest
      posts appearing first. It is a platform where a writer or even a group of
      writers share their views on an individual subject. Blog structure The
      appearance of blogs changed over time, and nowadays blogs include
      different items. But, most blogs include some standard features and
      structure. Here are common features that a typical blog will include:
      Header with the menu or navigation bar Main content area with highlighted
      or latest blog posts Sidebar with social profiles, favorite content, or
      call-to-action Footer with relevant links like a disclaimer, privacy
      policy, contact page, etc.
    </p>
    <Link
      to={{
        pathname: `/posts`,
      }}
      className={s.link}
    >
      All discussions
    </Link>
  </div>
);
export default HomePage;