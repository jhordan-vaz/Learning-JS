select i.name, c.name   
from corporation i, unities_corporation uc, cities c
where i.id = uc.corporation_id
and c.id = uc.cities_id
and office 