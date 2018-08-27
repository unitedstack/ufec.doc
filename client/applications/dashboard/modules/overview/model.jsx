import React from 'react';
import overviewMd from './md/overview.md';
import './style/index.less';
import '../../style/md.less';

class Model extends React.Component {
  componentDidMount() {
    const blocks = document.querySelectorAll('.overview-container pre code');
    Array.from(blocks).forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  render() {
    return <div className="overview-container" dangerouslySetInnerHTML={{ __html: overviewMd }} />;
  }
}

export default Model;
