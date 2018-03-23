/*!
 * Phylogeny Explorer
 *
 * @summary
 * @author John Ropas
 * @since 02/10/2016
 *
 * Copyright(c) 2016 Phylogeny Explorer
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.css';

function Feedback() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <a
          className={s.link}
          href="#"
        >Ask a question</a>
        <span className={s.spacer}>|</span>
        <a
          className={s.link}
          href="#"
        >Report an issue</a>
      </div>
    </div>
  );
}

export default withStyles(s)(Feedback);
