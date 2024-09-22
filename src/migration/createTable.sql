CREATE TABLE IF NOT EXISTS directors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    nationality VARCHAR(50),
    dateOfBirth DATE
);
      
CREATE TABLE IF NOT EXISTS actors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    nationality VARCHAR(50),
    dateOfBirth DATE
);

CREATE TABLE IF NOT EXISTS genres (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    releaseYear INT,
    directorId INT REFERENCES directors(id)
);

CREATE TABLE IF NOT EXISTS ratings (
    movieId INT PRIMARY KEY, 
    rating DECIMAL CHECK (rating >= 0 AND rating <= 10),
    CONSTRAINT fk_movie FOREIGN KEY (movieId) REFERENCES movies(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS movieGenres (
    movieId INT REFERENCES movies(id),
    genreId INT REFERENCES genres(id),
    PRIMARY KEY (movieId, genreId)
);