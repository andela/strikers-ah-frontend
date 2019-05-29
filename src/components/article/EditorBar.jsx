import React from 'react';
import '../../styles/css/article.css';
import Alert from './Alert';

const EditorBar = () => {
  return (
    <div className="content">
      <Alert />
      <section className="editor-tools">
        <div className="container">
          <div id="align-bartool">
            <div className="bar-tool">
              <button
                type="button"
                title="boldButton"
                onClick={() => document.execCommand('Bold', false, null)}
              >
                <b>B</b>
              </button>
              <span id="border" />
              <button
                type="button"
                title="italicButton"
                onClick={() => document.execCommand('Italic', false, null)}
              >
                <em>I</em>
              </button>
              <span id="border" />
              <button
                type="button"
                title="underlineButton"
                onClick={() => document.execCommand('Underline', false, null)}
              >
                <u>U</u>
              </button>
              <span id="border" />
              <input type="color" id="highlight" title="hightligt-text" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditorBar;
