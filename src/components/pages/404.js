import React from 'react';
import { Link } from "react-router-dom";
import { injectIntl } from 'react-intl';

class NotFound extends React.Component {
	
	render() {
		const { intl } = this.props;
		
		const title = intl.formatMessage({ id: 'app.404.title' });
		const content = intl.formatMessage({ id: 'app.404.body' });
		const navA = intl.formatMessage({ id: 'app.404.nav' });
		const navB = intl.formatMessage({ id: 'app.404.link' });
		
		return (
			<div className="wrapper">
				<section id="not-found" className="not-found text-center">
					<h3>{title}</h3>
					<p>{content}</p>
					<p>{navA}<Link to="/">{navB}</Link></p>
				</section>
			</div>
		);
	}
}

export default injectIntl(NotFound);