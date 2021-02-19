import React from 'react';
import { injectIntl } from 'react-intl';
import MetaTags from 'react-meta-tags';

class Meta extends React.Component {
			
	render() {
		const { intl, pageTitle } = this.props;
		
		const title = intl.formatMessage({ id: 'meta.title' });
		
		return (
			<MetaTags>
				<title>{pageTitle ? `${pageTitle} | ${title}` : title}</title>
			</MetaTags>
		)
	}
}

export default injectIntl(Meta);