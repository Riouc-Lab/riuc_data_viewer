// Comment.js
import React, { useEffect } from 'react';

export default function Comment({ repo }) {
  const commentBox = React.createRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', repo);
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'comments');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');

    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(script);
    } else {
      console.error('Error adding Utterances comments to DOM: ref missing');
    }
  }, [repo]);

  return <div ref={commentBox} />;
}
