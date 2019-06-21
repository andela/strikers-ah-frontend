/* eslint-disable import/no-named-as-default */
/* eslint-disable no-plusplus */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/fontawesome-free-solid';
import Modal from './Modal';
import '../../styles/scss/reportArticle.scss';
import { getCategory, createReport } from '../../redux/actions/ReportArticle';
import ReportArticleMessages from './ReportArticleMessages';

/**
 * @description Report form
 * @author Innocent Nkunzi
 * @param {*} slug
 * @returns {*} --
 */
export class ReportForm extends Component {
  /**
   *
   * @param {*} props
   */

  state = {
    category: '',
    description: '',
    show: false,
  };

  componentDidMount = () => {
    this.props.getCategory();
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  reportArticle = slug => {
    const { category, description } = this.state;
    const data = {
      category,
      description,
    };

    this.props.createReport(slug, data);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  /**
   * @author Innocent Nkunzi
   * @returns {*} report
   */
  render() {
    const { reportCategory } = this.props.reportCategory;
    const singleArticle = this.props.article;
    const { slug } = singleArticle;
    let k = 1;
    if (reportCategory.length !== 0 && reportCategory !== undefined) {
      return (
        <div>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <ReportArticleMessages />
            <h1>Report this article</h1>
            <form className="reportForm">
              <select
                name="category"
                className="selectOption"
                onChange={this.handleChange}
                id="testData"
              >
                <option>Select category</option>
                {reportCategory.map(cate => (
                  <option key={k++} value={cate.name}>
                    {cate.name}
                  </option>
                ))}
              </select>

              <textarea
                id="test"
                name="description"
                className="description"
                placeholder="Description..."
                onChange={this.handleChange}
              />
              <button
                type="button"
                className="reportButton"
                onClick={() => this.reportArticle(slug)}
                id="reportButton"
              >
                submit
              </button>
            </form>
          </Modal>
          <button
            type="button"
            onClick={this.showModal}
            className="openModal"
            id="showmodal"
          >
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </button>
        </div>
      );
    }
    return <div />;
  }
}

export const mapStateToprops = state => ({
  reportCategory: state.getCategory,
  article: { ...state.Article.article },
});

export default connect(
  mapStateToprops,
  { getCategory, createReport },
)(ReportForm);
