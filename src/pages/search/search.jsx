import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SearchTemplate } from 'components/templates';

const Search = function () {

    const { query } = useParams();

    const productSlice = useSelector((state) => state.product);

    if (productSlice.error !== '') throw new Error(productSlice.error);

    if (productSlice.isLoading) return <div />; // TODO: add skeleton templates here

    const products = Search.filterProducts(query, productSlice);

    return (

        <SearchTemplate products={products} />
    );

};

Search.filterProducts = function (query, productSlice) {

    const keywords = query.toLowerCase().split(' ').filter((item) => item !== '');
    return productSlice.list.filter((item) => keywords.some((keyword) => item.title.toLowerCase().includes(keyword)));

};

export { Search };
