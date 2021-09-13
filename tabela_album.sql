CREATE TABLE album_digital (
	id serial not null,
	nome varchar(50) not null,
	cpf varchar(11),
	tel_whats varchar(11) not null,
	email varchar(50) not null,
	estado varchar(2) not null,
	cidade varchar(50) not null,
	data_nascimento date,
	titulo_foto varchar(50) not null,
	nome_fotografa varchar(50) not null,
	nome_foto varchar(50) not null,
	nome_responsavel varchar(50),
	cpf_responsavel varchar(11),
	primary key(id)
);

select * from album_digital ad
