select * from state where id = 22

insert into cities (name, area, state_id)
values ('Campinas', 795, 22)

insert into cities (name, area, state_id)
values ('Ninterói', 133.9, 16)

insert into cities (name, area, state_id)
values ('Caruaru', 920.6,(select id from state where initials = 'PE'))