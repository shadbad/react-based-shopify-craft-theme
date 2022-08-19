import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './icon.scss';

const Icon = React.memo(function ({ name }) {

    const [state, setState] = useState({ height: 0, size: 0, paths: [] });

    const load = useCallback(() => {

        import('./selection.json')

            .then((data) => {

                const item = data.icons.find((x) => x.properties.name === name);

                setState({
                    height: data.height,
                    size: item.icon.grid,
                    paths: item.icon.paths
                });

            })

            .catch((error) => {

                console.error(error);

                setState({
                    height: 0,
                    size: 0,
                    paths: []
                });

            });

    });

    useEffect(load, [name]);

    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={state.size}
            height={state.size}
            viewBox={`0 0 ${state.height} ${state.height}`}
            className={`icon ${name}`}
        >

            <title>{name}</title>

            {state.paths.map((p, index) => <path key={`${name}-path-${index}`} className="icon__path" d={p} />)}

        </svg>
    );

});

Icon.propTypes = {
    name: PropTypes.string.isRequired
};

export { Icon };
