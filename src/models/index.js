const Movie= require('./Movie');
const Director= require('./Director');
const Actor= require('./Actor');
const Genre= require('./Genre');

Movie.hasMany(Director);
Movie.hasMany(Actor);
Movie.hasMany(Genre);
 



