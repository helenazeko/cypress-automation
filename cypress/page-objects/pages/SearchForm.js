export class SearchForm{

	static selectors = {
		SEARCH_FORM: '.search-form',
		SEARCH_INPUT_FIELD: 'input[name="keyword"]',
		SEARCH_BUTTON: '.search',
	};
}

export class SearchResults{
	static MAX_ITEMS_PER_PAGE = 26;

	static selectors = {
		RESULTS_PANEL: '.box1',
		RESULT_ITEM_NAMES: 'Naziv filma:', 
		RESULT_ITEM_GANRE: 'ŽANR filma:',
		RESULT_ITEM_DURATION: 'TRAJANJE:',
		RESULTS_RELDATE: 'DATUM IZASKA:',
		RESULTS_DIRECTOR: 'REDATELJ filma:',
        RESULTS_ACTORS: 'GLUMCI:'
	};

	static msg = {
		NO_RESULTS: 'Rezultati pretraživanja:',
	};
}

export class Movie {
    
    static selectors = {
		RESULTS_PANEL: '.box1',
		RESULT_ITEM_NAMES: 'movieTitle',
		RESULT_ITEM_GANRE: 'movieGenre',
		RESULT_ITEM_DURATION: 'movieDuration',
		RESULTS_RELDATE: 'movieRelDate',
		RESULTS_DIRECTOR: 'movieDirector',
    }
}