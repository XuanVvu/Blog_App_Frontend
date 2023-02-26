import React, { Fragment } from 'react';
import BlogItem from './BlogItem';
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import { PostsState$, LoadingState$, filterSearch$ } from '../../redux/selectors';
import Loading from '../ui/Loading';

const BlogList = () => {
    const postsList = useSelector(PostsState$);
    const loading = useSelector(LoadingState$);
    const searchText = useSelector(filterSearch$);

    const postListFilter = postsList.filter((post) => {
        return post.category.includes(searchText.toLowerCase());
    });

    return (
        <Fragment>
            <Container>
                {loading && <Loading />}

                <Row>
                    {postsList &&
                        postListFilter.map((item) => (
                            <Col lg="4" md="4" sm="6" key={item.id}>
                                <BlogItem data={item} />
                            </Col>
                        ))}
                </Row>
            </Container>
        </Fragment>
    );
};

export default BlogList;
