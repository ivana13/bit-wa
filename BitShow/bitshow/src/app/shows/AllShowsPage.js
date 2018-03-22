import React from 'react';
import { TvShowList } from './TvShowList';
import {createShows} from '../../services/ShowsService';


class AllShowsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shows: [],
            isListView: true
        }
    }

    handeStates = () => {
        this.setState({
            isListView: !this.state.isListView
        })
    }
    
    componentDidMount() {
        this.loadShows()
    }

    loadShows = () => {
        createShows.fetchShows()
            .then(shows => this.setState({shows:shows}));
    }

    render() {
        return (
            <main className="container">
                <div className="headline-holder">
                    <h1>Popular Shows</h1>
                </div>
                <div id="main-row" className="row">
                    <TvShowList shows={this.state.shows} />
                </div>
            </main>
        )
    }
}

export { AllShowsPage }