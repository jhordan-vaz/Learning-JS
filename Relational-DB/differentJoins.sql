select * from mayors;
select * from cities;

select * from cities c inner join mayors m on c.id = m.cities_id;
select * from cities c left join mayors m on c.id = m.cities_id;
select * from cities c right join mayors m on c.id = m.cities_id;
--select * from cities c full join mayors m on c.id = m.cities_id; sql não suporta

select * from cities c left join mayors m on c.id = m.cities_id;
union
select * from cities c right join mayors m on c.id = m.cities_id;

--um "full join"