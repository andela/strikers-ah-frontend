/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable dot-notation */
/* eslint-disable no-return-assign */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill/dist/quill.snow.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../styles/css/article.css';
import Alerts from './Alert';
import { createArticle } from '../../redux/actions/articleAction';
import MessageDisplay from './MessageDisplay';
/**
 * @description styling the bold button
 */

export const EditorBar = () => {
  return (
    <div className="content">
      <Alerts />
      <section className="editor-tools">
        <div className="container">
          <div id="align-bartool">
            <div className="bar-tool">
              <div id="toolbar">
                <button type="button" className="ql-bold" />
                <button type="button" className="ql-italic" />
                <button type="button" className="ql-underline" />
                <button type="button" className="ql-strike" />
                <button type="button" className="ql-blockquote" />
                <button type="button" className="ql-code-block" />
                <select className="ql-font">
                  <option value="arial" selected>
                    Arial
                  </option>
                  <option value="comic-sans">Comic Sans</option>
                  <option value="courier-new">Courier New</option>
                  <option value="georgia">Georgia</option>
                  <option value="helvetica">Helvetica</option>
                  <option value="lucida">Lucida</option>
                </select>
                <select className="ql-size">
                  <option value="extra-small">Size 1</option>
                  <option value="small">Size 2</option>
                  <option value="medium" selected>
                    Size 3
                  </option>
                  <option value="large">Size 4</option>
                </select>
                <button type="button" className="ql-link" />
                <select className="ql-align" />
                <select className="ql-color" />
                <select className="ql-background" />
                <button type="button" className="ql-clean" />
                <button type="button" className="ql-image" />
                <button type="button" className="ql-video" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
const Size = Quill.import('formats/size');
Size.whitelist = ['extra-small', 'small', 'medium', 'large'];
Quill.register(Size, true);

const Font = Quill.import('formats/font');
Font.whitelist = [
  'arial',
  'comic-sans',
  'courier-new',
  'georgia',
  'helvetica',
  'lucida',
];
Quill.register(Font, true);

/*
 * Editor component with custom toolbar and content containers
 */
/**
 * @author Innocent Nkunzi
 * @param {*} html
 * @description editor
 * @returns {*} class
 *
 */
export class Editor extends React.Component {
  static modules = {
    toolbar: {
      container: '#toolbar',
    },
  };

  static formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'code-block',
  ];

  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      image: null,
      taglist: [],
      tagInputs: [{ name: 'input0', value: '' }],
    };
    this.BodyContent = React.createRef();
  }

  onSubmit = () => {
    const { title, body, image, taglist } = this.state;
    const data = {
      title,
      body,
      taglist,
      image,
    };

    this.props.createArticle(data);
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  handleImage = ({ target }) => {
    this.setState({ image: target.files[0] });
  };

  /**
   * @param { * } body --
   * @returns { * }--
   */
  handleQuillChange = body => {
    this.setState({ body });
  };

  tagInputChange = ({ target }) => {
    const { name, value } = target;
    const tagInput = this.state.tagInputs.find(input => input.name === name);
    const index = this.state.tagInputs.indexOf(tagInput);
    const { tagInputs } = this.state;
    tagInputs[index].value = value;
    this.setState({ tagInputs });
  };

  makeInput = () => {
    const { tagInputs } = this.state;
    const newInput = { name: `input${tagInputs.length}`, value: '' };
    tagInputs.push(newInput);
    const inputWithValues = this.state.tagInputs.filter(
      input => input.value.length > 0,
    );
    const taglist = inputWithValues.map(input => input.value);
    this.setState({ tagInputs, taglist });
  };

  /**
   * @author Innocent Nkunzi
   * @returns {*} editor
   */
  render() {
    const { tagInputs } = this.state;
    let id = 1;
    return (
      <div className="content">
        <MessageDisplay />
        <EditorBar />
        <section className="text-area">
          <div className="topImage">
            <label htmlFor="file-upload" className="file-upload">
              <FontAwesomeIcon icon={faImage} className="imageIcone" />
              <input
                type="file"
                id="sigleImage"
                onChange={this.handleImage}
                name="image"
              />
            </label>
          </div>
          <div className="container">
            <form className="form">
              <div>
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  placeholder="Title goes here"
                  id="title"
                  maxLength="80"
                />
              </div>
              <div>
                <ReactQuill
                  id="body"
                  value={this.state.body || ''}
                  onChange={this.handleQuillChange}
                  placeholder={this.props.placeholder}
                  modules={Editor.modules}
                  formats={Editor.formats}
                  name="body"
                />
              </div>
              <button
                type="button"
                onClick={() => this.onSubmit()}
                id="publish"
              >
                Publish
              </button>
            </form>
            <React.Fragment>
              <div id="addTag">
                <button
                  type="button"
                  id="makeInput"
                  onClick={this.makeInput}
                  className="tags"
                >
                  AddTag
                </button>
              </div>
              <div id="tags">
                {tagInputs.map(input => (
                  <input
                    type="text"
                    id="tagInputchange"
                    name={input.name}
                    placeholder="#"
                    onChange={this.tagInputChange}
                    value={input.value}
                    key={id++}
                  />
                ))}
              </div>
            </React.Fragment>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToprops = state => ({
  article: state.Article,
});

export default connect(
  mapStateToprops,
  { createArticle, alert },
)(Editor);
