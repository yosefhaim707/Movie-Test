var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function createRow(movie) {
    var tableBody = document.getElementById('table-body');
    var row = document.createElement('tr');
    var titleCell = document.createElement('td');
    titleCell.classList.add('title-cell');
    titleCell.textContent = movie.title;
    row.appendChild(titleCell);
    var yearCell = document.createElement('td');
    titleCell.classList.add('year-cell');
    yearCell.textContent = movie.year;
    row.appendChild(yearCell);
    var directorCell = document.createElement('td');
    directorCell.classList.add('director-cell');
    directorCell.textContent = movie.director;
    row.appendChild(directorCell);
    var ratingCell = document.createElement('td');
    ratingCell.classList.add('rating-cell');
    ratingCell.textContent = movie.rating;
    row.appendChild(ratingCell);
    var yourRatingCell = document.createElement('td');
    yourRatingCell.classList.add('your-rating-cell');
    var range = document.createElement('input');
    range.setAttribute('type', 'range');
    yourRatingCell.appendChild(range);
    row.appendChild(yourRatingCell);
    tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(row);
}
// const test: Movie = {title: 'fsdfd', year: '1999', director: 'dofkhdoih', rating: '9.6'};
function GetByGenre(genre) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, movies, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'http://localhost:3000/movies';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify({ genre: genre })
                        })];
                case 2:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    throw new Error("Fetch Failed!!!");
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    movies = _a.sent();
                    console.log(movies);
                    displayMovies(movies);
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function displayMovies(movies) {
    var moviesArr = JSON.stringify(movies);
    console.log(moviesArr);
    var final = JSON.parse(moviesArr);
    console.log(final);
    for (var index = 0; index < final.length; index++) {
        var element = final[index];
        var movie = { title: element.title, year: element.year, director: element.director, rating: element.rating };
        createRow(movie);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('show-button');
    button.addEventListener('click', function (event) {
        var tableBody = document.getElementById('table-body');
        tableBody.innerHTML = '';
        var select = document.getElementById('genre-selector');
        if (select.value) {
            GetByGenre(select.value);
        }
    });
});
