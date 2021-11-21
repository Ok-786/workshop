CREATE TABLE userdetails (
    id SERIAL,
    user_id INT NOT NULL,
    street_address VARCHAR(255),
    appartment VARCHAR(255),
    country VARCHAR(255),
    state VARCHAR(255),
    city VARCHAR(255),
    age INT,
    height INT,
    weight INT,
    fat INT,
    heart_rate INT,
    blood_pressure INT,
    fitness_goals VARCHAR(255),
    neck INT,
    chest INT,
    right_bicep INT,
    left_bicep INT,
    waist INT,
    hips INT,
    right_thigh INT,
    left_thigh INT,
    right_calf INT,
    left_calf INT,
    CONSTRAINT userdetails_id_pk PRIMARY KEY (id),
    CONSTRAINT userdetails_id_fk FOREIGN KEY (user_id) REFERENCES users(user_id)
);
