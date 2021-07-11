import axios from 'axios';

const key = 'd7cbda8f';
const configOMB = {
    // baseURL: 'http://www.omdbapi.com',
    baseURL: `https://www.omdbapi.com/?apikey=${key}&t=`,
};
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`${title}`)
            .then(res => res.data)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`${title}&type=${type}`)
            .then(res => res.data)
    }
};


export default API;

export type SearchResultType = typeof SearchResult
 const  SearchResult = {
    Actors: "Jim Carrey, Peter Riegert, Peter Greene, Amy Yasbeck",
    Awards: "Nominated for 1 Oscar. Another 6 wins & 20 nominations.",
    BoxOffice: "$119,938,730",
    Country: "USA",
    DVD: "01 Jun 2009",
    Director: "Chuck Russell",
    Genre: "Action, Comedy, Crime, Fantasy",
    Language: "English, Swedish",
    Metascore: "56",
    Plot: "Bank clerk Stanley Ipkiss is transformed into a manic superhero when he wears a mysterious mask.",
    Poster: "https://m.media-amazon.com/images/M/MV5BOWExYjI5MzktNTRhNi00Nzg2LThkZmQtYWVkYjRlYWI2MDQ4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    Production: "New Line Cinema, Dark Horse Entertainment",
    Rated: "PG-13",
    Ratings: [{Source: "Internet Movie Database", Value: "6.9/10"}, {Source: "Rotten Tomatoes", Value: "79%"}],
    Released: "29 Jul 1994",
    Response: "True",
    Runtime: "101 min",
    Title: "The Mask",
    Type: "movie",
    Website: "N/A",
    Writer: "Michael Fallon (story), Mark Verheiden (story), Mike Werb (screenplay)",
    Year: "1994",
    imdbID: "tt0110475",
    imdbRating: "6.9",
    imdbVotes: "355,538",
}