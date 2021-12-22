-- Deploy oparc:init to pg

BEGIN;


CREATE TABLE attraction (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    public_name text NOT NULL UNIQUE,
    capacity int NOT NULL,
    open_time timestamptz,
    close_time timestamptz,
    duration int NOT NULL
);

CREATE TABLE incident (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    incident_number int NOT NULL UNIQUE,
    nature text NOT NULL,
    assigned_tech text NOT NULL,
    report_date timestamptz NOT NULL,
    resolution_date timestamptz,
    attraction_id int NOT NULL REFERENCES attraction(id)

);
CREATE TABLE visitor  (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    ticket_number int NOT NULL UNIQUE,
    validity_start timestamptz NOT NULL,
    validity_end timestamptz NOT NULL
);

CREATE DOMAIN int5 AS INT CHECK(value > 0 AND value < 5);
CREATE TABLE "visitor_reserve_attraction" (
    "attraction_id" INT NOT NULL REFERENCES "attraction"("id") ON DELETE CASCADE,
    "visitor_id" INT NOT NULL REFERENCES "visitor"("id") ON DELETE CASCADE,
    place_quantity int5 NOT NULL DEFAULT 1,
    reservation_time TIMESTAMPTZ NOT NULL,
    PRIMARY KEY("attraction_id", "visitor_id")
);


COMMIT;
