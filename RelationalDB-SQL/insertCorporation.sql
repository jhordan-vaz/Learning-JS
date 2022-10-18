alter table corporation modify cnpj varchar(14);

insert into corporation
    (name, cnpj)
values
    ('Bradesco', 95694186000132),
    ('Nubank', 27887148000146),
    ('Midway', 01598317000134);

desc corporation;
desc mayors;
select * from corporation;
select * from cities;

insert into unities_corporation
    (corporation_id, cities_id, office)
values
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);
