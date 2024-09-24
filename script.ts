interface Movie {
    title: string,
    year: string,
    director: string,
    rating: string
}

function createRow(movie: Movie): void {
    const tableBody = document.getElementById('table-body');
    const row = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.classList.add('title-cell');
    titleCell.textContent = movie.title;
    row.appendChild(titleCell);

    const yearCell = document.createElement('td');
    titleCell.classList.add('year-cell');
    yearCell.textContent = movie.year;
    row.appendChild(yearCell);

    const directorCell = document.createElement('td');
    directorCell.classList.add('director-cell');
    directorCell.textContent = movie.director;
    row.appendChild(directorCell);

    const ratingCell = document.createElement('td');
    ratingCell.classList.add('rating-cell');
    ratingCell.textContent = movie.rating;
    row.appendChild(ratingCell);

    const yourRatingCell = document.createElement('td');
    yourRatingCell.classList.add('your-rating-cell');
    const range = document.createElement('input');
    range.setAttribute('type', 'range');
    yourRatingCell.appendChild(range);
    row.appendChild(yourRatingCell);

    tableBody?.appendChild(row);
}

// const test: Movie = {title: 'fsdfd', year: '1999', director: 'dofkhdoih', rating: '9.6'};



async function GetByGenre(genre: string): Promise<void> {
    const url: string = 'http://localhost:3000/movies';
    try {
        const response = await fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({genre: genre})
            }
        );
        if (!response.ok) {
            throw new Error("Fetch Failed!!!");
        }
        else {
            const movies: JSON = await response.json();
            console.log(movies);
            
            displayMovies(movies);
            
        }

    } catch (error) {
        console.log(error);
        
    }
}
function displayMovies(movies: JSON): void {
    const moviesArr:string = JSON.stringify(movies);
    console.log(moviesArr);
    const final = JSON.parse(moviesArr);
    console.log(final);
    for (let index = 0; index < final.length; index++) {
        const element = final[index];
        const movie: Movie = {title: element.title, year: element.year, director: element.director, rating: element.rating};
        createRow(movie);
    }
    
    
}

const button = document.getElementById('show-button');

button?.addEventListener('click', () => {
    const select = document.getElementById('genre-selector') as HTMLSelectElement;
    if (select.value) {
        GetByGenre(select.value);
    }

})