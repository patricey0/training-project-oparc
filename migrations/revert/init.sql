-- Revert oparc:init from pg

BEGIN;

DROP TABLE incident;

DROP TABLE visitor_reserve_attraction;

DROP DOMAIN int5;

DROP TABLE visitor;

DROP TABLE attraction;

COMMIT;




