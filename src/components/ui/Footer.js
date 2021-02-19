import React from 'react';
import { injectIntl } from 'react-intl';

import footerStyles from '../../styles/footer.module.scss';

class Footer extends React.Component {
			
	render() {
		const { intl } = this.props;
		
		const devLegal = intl.formatMessage({ id: 'meta.developer' });
		
		return (
			<React.Fragment>
				<footer role="contentinfo" className={footerStyles.footerContainer}>
					<div className="wrapper">
						<p className="developer">{devLegal}</p>
					</div>
				</footer>
			</React.Fragment>
		)
	}
}

export default injectIntl(Footer);