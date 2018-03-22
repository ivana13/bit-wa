import { urlShows, urlSearchShow } from '../shared/constants';
import { Show } from '../entities/Show';


class CreateShow {

    fetchShows() {
        return fetch(urlShows)
            .then((props) => {
                return props.json();
            })
            .then((props) => {
                const showsData = props.map((show) => {
                    return new Show(show)
                })

                return showsData;
            })
    }

}

export const createShows = new CreateShow;