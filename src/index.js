import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

// Localization
import { IntlProvider } from 'react-intl';
import messages_en from './translations/en.json';

// Styling
import appStyles from './styles/_core.scss';

// Routes
import routes from './routes.js';

// Components
import NotFound from './components/pages/404';
import Footer from './components/ui/Footer';

// Localization Init
const messages = {
	'en': messages_en
};

const language = navigator.language.split(/[-_]/)[0]; // language without region code

// App init
ReactDOM.render(
	<IntlProvider locale={language} messages={messages[language]}>
		<div className={appStyles.appContainer}>
			<BrowserRouter>
				<div id="content" className="content main" role="main">
						<Switch>
							{routes.map(route => {
								let output = (
									<Route key={route.path} path={route.path} exact={route.exact} component={route.main} />
								);
								return output;
							})}
							<Route component={NotFound} />
						</Switch>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	</IntlProvider>, 
	document.getElementById('root')
);

serviceWorker.unregister();
