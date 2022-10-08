update state
set name = 'Maranhão'
where initials = 'MA'

select est.name from state est where initials = 'MA'

update state 
set name = 'Paraná', population = 11.32
where initials = 'PR'

select est.name, initials, population
from state est where initials = 'PR'