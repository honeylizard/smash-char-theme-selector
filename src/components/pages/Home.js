import React from 'react';
import { injectIntl } from 'react-intl';

import data from '../../data/example.json';
import ThemeCard from '../ui/ThemeCard';
import homeStyles from '../../styles/home.module.scss';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentTheme: null,
			themes: data.map((theme, index) => {
				return {
					...theme,
					selected: false,
					id: index,
				}
			}),
			error: null,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		try {
			const remainingThemes = this.state.themes.filter((elem) => !elem.selected);
			if (remainingThemes.length > 0) {
				this.getRandomTheme(remainingThemes);
			} else {
				const clearedThemes = this.state.themes.map((element) => ({
					...element,
					selected: false,
				}));
				this.setState((prevState) => ({
					...prevState,
					currentTheme: null,
					themes: clearedThemes,
					error: null,
				}));
				this.getRandomTheme(clearedThemes);
			}
		} catch (error) {
			this.setState((prevState) => ({
				...prevState,
				error: error.message || error
			}));
		}
	}

	getRandomTheme(themesToPickFrom) {
		const newNumber = this.getRandomNumber(0, themesToPickFrom.length - 1);
		const newTheme = themesToPickFrom[newNumber];
		newTheme.selected = true;

		this.setState((prevState) => {
			const updatedThemes = [...prevState.themes];
			updatedThemes[newTheme.id] = newTheme;
			return {
				...prevState,
				currentTheme: newTheme,
				themes: updatedThemes,
			}
		});
	}

	getRandomNumber(min, max) {
		return Math.floor(min + Math.random() * (max - min));
	}
	
	render() {
		const { intl } = this.props;
		const { error, currentTheme } = this.state;

		const title = intl.formatMessage({ id: 'meta.title' });
		const submitBtnLabel = intl.formatMessage({ id: 'randomizeTheme' });

		return (
			<React.Fragment>
				<section className={homeStyles.homeContainer}>
					<div className="wrapper">
						<h1 className={homeStyles.homeTitle}>{title}</h1>

						{error && (
							<div role="alert" className={`${homeStyles.homeAlert} ${homeStyles.homeAlertError}`}>
								{error}
							</div>
						)}
						<form onSubmit={this.handleSubmit} className={homeStyles.homeForm}>
							<button type="submit">{submitBtnLabel}</button>
						</form>

						<ThemeCard data={currentTheme} />
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default injectIntl(Home);