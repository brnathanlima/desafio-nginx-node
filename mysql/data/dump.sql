use desafio_node_nginx;

CREATE TABLE IF NOT EXISTS desafio_node_nginx.people (
	id INTEGER auto_increment NOT NULL,
	name varchar(255) NOT NULL,
	CONSTRAINT users_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=latin1
COLLATE=latin1_swedish_ci;
