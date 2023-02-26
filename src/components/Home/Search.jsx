import React, { Fragment, useEffect, useState } from 'react';
import { Button, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filterSearch } from '../../redux/actions';

const Search = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    // const handleClickSearch = () => {
    //     dispatch(filterSearch(search));
    // };
    useEffect(() => {
        dispatch(filterSearch(search));
    }, [search]);

    return (
        <Fragment>
            <div className="search__container">
                <Input
                    className="search__box"
                    placeholder="Search By Category"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
                <Button className="search__btn">Go</Button>
            </div>
        </Fragment>
    );
};

export default Search;
