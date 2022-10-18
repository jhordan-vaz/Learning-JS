select * from state 

select initials as 'Iniciais', name as 'Nome dos estados' from state
where region = 'South'

select name, region from state
where population >= 10
order by population desc