CREATE TABLE IF NOT EXISTS directors (
    directorId SERIAL PRIMARY KEY,
    name VARCHAR(100),
    nationality VARCHAR(50),
    dateOfBirth DATE
);
      
CREATE TABLE IF NOT EXISTS actors (
    actorId SERIAL PRIMARY KEY,
    name VARCHAR(100),
    nationality VARCHAR(50),
    dateOfBirth DATE
);

CREATE TABLE IF NOT EXISTS genres (
    genreId SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS movies (
    movieId SERIAL PRIMARY KEY,
    title VARCHAR(100),
    releaseYear INT,
    directorId INT REFERENCES directors(directorId)
);

CREATE TABLE IF NOT EXISTS ratings (
    movieId INT PRIMARY KEY, 
    rating DECIMAL CHECK (rating >= 0 AND rating <= 10),
    CONSTRAINT fk_movie FOREIGN KEY (movieId) REFERENCES movies(movieId) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS movieGenres (
    movieId INT REFERENCES movies(movieId),
    genreId INT REFERENCES genres(genreId),
    PRIMARY KEY (movieId, genreId)
);