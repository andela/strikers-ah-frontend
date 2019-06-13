/* eslint-disable class-methods-use-this */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import dotenv from 'dotenv';
import { Redirect } from 'react-router-dom';
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
import Spinner from './Spinner';
import MessageDisplay from './MessageDisplay';

dotenv.config();

const { REACT_APP_FRONTENT } = process.env;
/**
 *@author: Innocent Nkunzi
 * @returns {*} Articleform
 */
export class AllArticles extends Component {
  /**
   *
   * @param {*} props
   */
  state = {};

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
   *
   * @param {*} item
   * @returns {*} image
   */
  handleImage = item => {
    const image1 = samplePic;
    const { image } = item;
    const image3 = image === 'null' ? image1 : image;
    return image3;
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
      article: { allArticles, message },
    } = this.props;
    if (message !== undefined && message === 'Not article found for now') {
      return <Redirect to="/not-found" />;
    }
    if (allArticles !== undefined && allArticles.length !== 0) {
      const arr = allArticles;
      return (
        <div>
          <Header />
          <div className="container">
            <div className="allArticlecontents">
              {
                (allArticle = arr.map(item => (
                  <Fragment key={item.id}>
                    <div className="card">
                      <img
                        className="image"
                        alt="articleImage"
                        src={this.handleImage(item)}
                      />
                      <div className="contentDescription">
                        <a href={`/article/${item.slug}`}>
                          <div className="articleCardHeader">
                            <p>{reactParser(item.title)}</p>
                          </div>
                          <div className="articleDescription">
                            <p>{reactParser(item.description)}</p>
                          </div>
                        </a>
                        <div className="buttons">
                          {decodedToken !== undefined &&
                          decodedToken.id === item.authorid ? (
                            <div>
                              <button
                                type="submit"
                                className="redButton"
                                onClick={() => this.handleDelete(item.slug)}
                                id="submit-data"
                                data-test="submit-data"
                              >
                                Delete
                              </button>

                              <button type="submit" className="lightBlueButton">
                                <a href={`/articlesedit/${item.slug}/edit`}>
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

    return (
      <div>
        <Spinner />
      </div>
    );
  }
}
const mapStateToprops = state => ({
  article: state.Article,
});

export default connect(
  mapStateToprops,
  { getAllArticles, getOneArticle, deleteArticle },
)(AllArticles);
