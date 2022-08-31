import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { LinkImage } from 'components/molecules';
import './category-group.scss';

const CategoryGroup = React.memo(function ({ className }) {

    const categories = useSelector((state) => state.category.list);

    return (

        <ul className={`category-group ${className}`}>
            {
                categories
                    .filter((item) => item.title !== 'Bundles' && item.images && item.images.length > 0)
                    .sort((a, b) => a.displayOrder - b.displayOrder)
                    .map((category) => (

                        <li key={category.id} className="category-group-list-item">
                            <LinkImage className="category-group-link" title={category.title} imageUrl={category.images[0]} href={category.url} />
                        </li>

                    ))
            }
        </ul>

    );

});

CategoryGroup.propTypes = {
    className: PropTypes.string
};

CategoryGroup.defaultProps = {
    className: ''
};

export { CategoryGroup };
