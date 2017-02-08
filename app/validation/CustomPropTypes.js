import { PropTypes } from 'react';

export { DealPropTypes };

const DealPropTypes = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
}).isRequired;
