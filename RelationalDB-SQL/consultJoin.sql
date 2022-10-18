select
  s.name as Estado,
  c.name as Cidade,
  region as Região
     from state s, cities c
where s.id = c.state_id;

select 
    c.name as Cidade,
    s.name as Estado,
    region as Região
from state s 
inner join cities c on s.id = c.state_id