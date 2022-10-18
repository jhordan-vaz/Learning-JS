create table if not exists corporation (
    id int unsigned not null auto_increment,
    name varchar(255) not null,
    cnpj int unsigned,
    primary key(id),
    unique key(cnpj)
);

create table if not exists unities_corporation (
    corporation_id int unsigned not null,
    cities_id int unsigned not null,
    office tinyint(1) not null,
    primary key(corporation_id, cities_id)
);