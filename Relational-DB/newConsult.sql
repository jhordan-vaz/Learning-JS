select region as 'Região', sum(population) as total from state group by region 
order by total desc 

