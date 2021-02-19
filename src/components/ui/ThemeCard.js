import React from 'react';
import { injectIntl } from 'react-intl';

import cardStyles from '../../styles/theme-card.module.scss';

class ThemeCard extends React.Component {
	
    renderCharacter(character, key) {
        console.log(character)
        return (
            <li key={key}>{character}</li>
        );
    }

	render() {
        const { data, intl } = this.props;

        const currentTheme = intl.formatMessage({ id: 'currentTheme' });

		return data && (
			<section className={cardStyles.card}>
				<h2 className={cardStyles.cardTitle}>
                    <span className="sr-only">{currentTheme}: </span>
                    {data && data.name ? data.name : ""}
                </h2>
                <p className={cardStyles.cardDescription}>
                    {data && data.description ? data.description : ""}
                </p>
                
                {data && data.suggestions && data.suggestions.length > 0 && (
                    <ul>
                        {data.suggestions.map( 
                            (character, index) => this.renderCharacter(character, `theme-character-${index}`) 
                        )}
                    </ul>
                )}
			</section>
		)
	}
}

export default injectIntl(ThemeCard);