import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms';
import { Chip } from 'components/molecules';
import './filter-chips.scss';

const FilterChips = function ({ className, selectedFilters, onChipClick, onClearAllClick }) {

    return (

        <div className={`filter-chips ${className}`}>
            {
                selectedFilters.map((item) => (

                    <Chip
                        key={item.key}
                        className="filter-chips__item"
                        label={item.title}
                        onClick={() => onChipClick(item.key)}
                    />

                ))
            }

            <Button className="filter-chips__clear-button" variant="link" onClick={onClearAllClick}>
                Clear all
            </Button>
        </div>

    );

};

FilterChips.propTypes = {
    className: PropTypes.string,
    selectedFilters: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        title: PropTypes.string
    })).isRequired,
    onChipClick: PropTypes.func,
    onClearAllClick: PropTypes.func
};

FilterChips.defaultProps = {
    className: '',
    onChipClick: null,
    onClearAllClick: null
};

export { FilterChips };
