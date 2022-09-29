SELECT * FROM Estado 

select initials, name as 'Nome do Estado' from Estado 
WHERE region = 'south'

SELECT 
    name, 
    region,
    population
FROM Estado
WHERE population >= 10
order by population desc 

