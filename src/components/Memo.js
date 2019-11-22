import React from 'react';
import PropTypes from "prop-types";
// import './Memo.css';

function Memo({ title, content }) {
  return (
    <div className="memo">
      <div className="memo__title">{title}</div>
      <div className="memo__content">{content}</div>
    </div>
  );
}

Memo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string
}

export default Memo;
