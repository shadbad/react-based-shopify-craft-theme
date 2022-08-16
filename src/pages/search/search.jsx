import { useParams } from 'react-router-dom';

const Search = function () {

    const { query } = useParams();

    return (
        <h1>
            This is the search result page for
            {` "${query}"`}
        </h1>
    );

};

export { Search };
