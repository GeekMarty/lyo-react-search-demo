import React, { PropTypes } from 'react';
// import { DealPropTypes } from '../validation/CustomPropTypes';
// import { Deal } from '../models/Deal';

class DealBox extends React.PureComponent {
    // constructor(props) {
    //     super(props);

    //     this.state = { deal: props.deal };
    // }

    render() {
        return (
            <div className="ds-itembox col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="ds-box ds-standard ds-dark-blue">
                    <div classID={this.props.deal} className="dealerDetailLink" name="bla">
                        <div className="ds-top-wrapper">
                            <h4>{ this.props.deal }</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

DealBox.propTypes = {
    deal: PropTypes.string.isRequired
};

export default DealBox;
