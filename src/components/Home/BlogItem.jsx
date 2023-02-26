import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import BlogCategory from '../ui/BlogCategory';
import EditModal from './EditModal';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../redux/actions';
import { convertDate, jsUcfirst } from '../../config/convertData';

const BlogItem = ({ data }) => {
    const dispatch = useDispatch();
    const handleDeletePost = () => {
        dispatch(deletePost.deletePostRequest(data.id));
    };

    return (
        <Fragment>
            <div className="blog__container">
                <img className="blog__img" src={data.cover} alt="" />
                <div className="blog__content">
                    <div className="d-flex blog__content__inner">
                        <BlogCategory category={jsUcfirst(data.category)} />
                        <div className="other__function">
                            <i className="other__item fa-solid fa-ellipsis-vertical"></i>
                            <div className="function__popover">
                                <EditModal data={data} />
                                <div className="function__popover__item" onClick={handleDeletePost}>
                                    DELETE
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to={`/blog/${data.id}`}>
                        <div className="blog__title">{data.title}</div>
                    </Link>
                    <p className="blog__description">{data.description.slice(0, 150)} ...</p>
                </div>

                <div className="author ">
                    <img className="author_avt" src={data.authorAvt} alt="" />
                    <div className="author__inner">
                        <div className="author__name">{data.authorName}</div>
                        <div className="author__createAt">{convertDate(data.createAt)}</div>
                    </div>

                    <Link to={`/blog/${data.id}`}>
                        <i className="fa-solid fa-right-to-bracket open__btn"></i>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default BlogItem;
