import PropTypes from 'prop-types';
import { TextHeading } from 'components/atoms';
import { ListProduct } from 'components/molecules';
import { useJumpToTop } from 'hooks';
import './collection-template.scss';

const CollectionTemplate = function ({ category, products }) {

    useJumpToTop();

    return (
        <>
            <div className="collection__header">

                <TextHeading className="collection__title" type={1}>{category.title}</TextHeading>

                {category.description && <p className="collection__description">{category.description}</p>}
            </div>

            <ListProduct products={products} />
        </>
    );

};

CollectionTemplate.propTypes = {

    category: PropTypes.shape({

        id: PropTypes.string,

        title: PropTypes.string,

        url: PropTypes.string,

        slug: PropTypes.string,

        description: PropTypes.string

    }).isRequired,

    products: PropTypes.arrayOf(

        PropTypes.shape({

            id: PropTypes.string,

            categoryId: PropTypes.string,

            caption: PropTypes.string,

            title: PropTypes.string,

            subtitle: PropTypes.string,

            tags: PropTypes.arrayOf(PropTypes.string),

            stock: PropTypes.number,

            sales: PropTypes.number,

            date: PropTypes.number,

            images: PropTypes.arrayOf(PropTypes.string),

            price: PropTypes.number,

            discount: PropTypes.number,

            slug: PropTypes.string,

            content: PropTypes.string,

            spec: PropTypes.arrayOf(PropTypes.shape({

                key: PropTypes.string,

                value: PropTypes.string

            }))

        })

    ).isRequired

};

export { CollectionTemplate };
