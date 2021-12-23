-- Verify oparc:init on pg

BEGIN;

-- XXX Add verifications here.
SELECT * FROM attraction WHERE false;
SELECT * FROM visitor WHERE false;
SELECT * FROM incident WHERE false;
SELECT * FROM visitor_reserve_attraction WHERE false;

ROLLBACK;