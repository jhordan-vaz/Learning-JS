create table if not exists cities (
    id INT unsigned not null auto_increment,
    name varchar(255) not null,
    state_id int unsigned not null,
    area decimal(10,2),
    PRIMARY KEY(id),
    FOREIGN KEY(state_id) REFERENCES state (id)
);

drop table teste;