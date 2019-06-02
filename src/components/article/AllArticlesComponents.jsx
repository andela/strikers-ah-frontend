/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import dotenv from 'dotenv';
import sweeetAlert from 'sweetalert';
import decodeToken from 'jwt-decode';
import reactParser from 'html-react-parser';
import { connect } from 'react-redux';
import Header from './Header';
import '../../styles/css/article.css';
import samplePic from '../../styles/img/headBook.jpeg';
import {
  getAllArticles,
  getOneArticle,
  deleteArticle,
} from '../../redux/actions/articleAction';

dotenv.config();

const REACT_APP_FRONTENT = process.env.REACT_APP_BACKEND;
/**
 *@author: Innocent Nkunzi
 * @returns {*} Articleform
 */
export class AllArticles extends Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpen = this.handleOpen.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  /**
   *@author: Innocent Nkunzi
   * @returns {*} Articleform
   * @param {*} slug
   */
  componentDidMount() {
    this.props.getAllArticles();
  }

  /**
   *@author: Innocent Nkunzi
   * @returns {*} Articleform
   * @param {*} slug
   */
  handleOpen = slug => {
    this.props.getOneArticle(slug);
  };

  /**
   *@author: Innocent Nkunzi
   * @returns {*} Articleform
   * @param {*} slug
   */
  handleDelete = slug => {
    if (slug) {
      sweeetAlert({
        title: 'Are you sure?',
        text: 'Are you sure you want to delete this article?',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
        .then(willDelete => {
          if (willDelete) {
            this.props.deleteArticle(slug);
            sweeetAlert('Article has been deleted!', {
              icon: 'success',
            });
          }
        })
        .catch(err => {
          sweeetAlert('Ooop something went wrong', err);
        });
    }
  };

  /**
   * @author Innocent Nkunzi
   * @returns {*} component
   */
  render() {
    const token = localStorage.getItem('token');
    let decodedToken;
    if (token) {
      decodedToken = decodeToken(token, { Header: true });
    }
    let allArticle;
    const {
      article: { allArticles },
    } = this.props;
    if (allArticles !== undefined && allArticles.length !== 0) {
      const arr = allArticles;
      return (
        <div>
          <Header />
          <div className="container">
            <div className="allArticlecontents">
              {
                (allArticle = arr.map(item => (
                  <Fragment>
                    <div key={item.id} className="card">
                      <img
                        className="image"
                        alt="articleImage"
                        src={samplePic}
                      />
                      <div className="contentDescription">
                        <a href={`${REACT_APP_FRONTENT}/article/${item.slug}`}>
                          <div className="articleCardHeader">
                            <p>{reactParser(item.title)}</p>
                          </div>
                          <div className="articleDescription">
                            <p>{reactParser(item.description)}</p>
                          </div>
                        </a>
                        <div className="buttons">
                          {decodedToken.id === item.authorid ? (
                            <div>
                              <button
                                type="submit"
                                className="redButton"
                                onClick={() => this.handleDelete(item.slug)}
                              >
                                Delete
                              </button>

                              <button type="submit" className="lightBlueButton">
                                <a
                                  href={`${REACT_APP_FRONTENT}/articlesedit/${
                                    item.slug
                                  }/edit`}
                                >
                                  Edit
                                </a>
                              </button>
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </div>
                  </Fragment>
                )))
              }
            </div>
          </div>
        </div>
      );
    }
    return <div>{allArticle}</div>;
  }
}
const mapStateToprops = state => ({
  article: state.Article,
});

export default connect(
  mapStateToprops,
  { getAllArticles, getOneArticle, deleteArticle },
)(AllArticles);
