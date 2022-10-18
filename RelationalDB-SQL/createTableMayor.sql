create table if not exists mayors (
    id INT unsigned not null auto_increment,
    name varchar(255) not null,
    cities_id int unsigned,
    primary key (id),
    unique key (cities_id),
    foreign key (cities_id) references cities (id)
);

--modelo 1 para 1