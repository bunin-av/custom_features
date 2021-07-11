import React, {useState} from 'react';
import API, {SearchResultType} from './API';
import './lesson_3';

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState<SearchResultType>({} as SearchResultType);
    const [searchNameByType, setSearchNameByType] = useState('');
    const [searchResultByType, setSearchResultByType] = useState<SearchResultType>({} as SearchResultType);

    const searchFilm = () => {
        const newValue = searchName.split(' ').join('+')
        API.searchFilmsByTitle(newValue)
            .then(r => setSearchResult(r))
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newValue = searchNameByType.split(' ').join('+')
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(newValue, type)
            .then(r => setSearchResultByType(r))
    }

    const makeResultsElements = (obj: SearchResultType) => {
        const resultsKeys = (Object.keys(obj) as Array<keyof SearchResultType>)
        const resultsElements = resultsKeys.map((el) => {
            if (el === 'Ratings') {
                return ''
            }
            return <div>{el}: {obj[el]}</div>
        })
        return resultsElements
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {Object.keys(searchResult).length !== 0 &&
                    makeResultsElements(searchResult)}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {Object.keys(searchResultByType).length !== 0 &&
                    makeResultsElements(searchResultByType)}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;