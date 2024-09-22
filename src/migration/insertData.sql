INSERT INTO directors (name, nationality, dateOfBirth) VALUES 
('Steven Spielberg', 'American', '1946-12-18'),
('Christopher Nolan', 'British-American', '1970-07-30'),
('Quentin Tarantino', 'American', '1963-03-27'),
('Martin Scorsese', 'American', '1942-11-17'),
('Greta Gerwig', 'American', '1983-08-04');

INSERT INTO actors (name, nationality, dateOfBirth) VALUES 
('Leonardo DiCaprio', 'American', '1974-11-11'),
('Brad Pitt', 'American', '1963-12-18'),
('Scarlett Johansson', 'American', '1984-11-22'),
('Robert Downey Jr.', 'American', '1965-04-04'),
('Meryl Streep', 'American', '1949-06-22');

INSERT INTO genres (name) VALUES 
('Action'),
('Drama'),
('Comedy'),
('Thriller'),
('Romance');

INSERT INTO movies (title, releaseYear, directorId) VALUES 
('Inception', 2010, 2),
('Pulp Fiction', 1994, 3),
('The Irishman', 2019, 4),
('Little Women', 2019, 5),
('Jurassic Park', 1993, 1);

INSERT INTO ratings (movieId, rating) VALUES 
(1, 9.0),
(2, 8.9),
(3, 8.6),
(4, 8.4),
(5, 9.1);

INSERT INTO movieGenres (movieId, genreId) VALUES 
(1, 1),
(1, 4),
(2, 2), 
(3, 2),
(4, 2), 
(5, 1);
