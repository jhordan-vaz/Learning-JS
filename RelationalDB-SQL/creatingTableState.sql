create table state (
    id INT unsigned not null auto_increment,
    name varchar(45) not null,
    initials varchar(2) not null,
    region enum('North', 'Northeast', 'Midwest', 'Southeast', 'south') not null,
    population decimal(5,2) not null,
    primary key (id),
    unique key (name),
    unique key (initials)
);