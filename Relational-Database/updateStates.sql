update Estado
set name = 'Maranhão'
where initials = 'MA'

select name from Estado where initials = 'MA'

update Estado
set name ='Paraná', population = 11.32
where initials = 'PR'

select est.name, initials, population
from Estado est 
where initials = 'PR'