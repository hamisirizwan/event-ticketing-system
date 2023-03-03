DROP TABLE payments;
CREATE TABLE payments (
    id SERIAL PRIMARY KEY NOT NULL,
    ticket_no INTEGER NOT NULL REFERENCES tickets(ticket_no) ON DELETE NO ACTION,
    is_completed BOOLEAN NOT NULL DEFAULT false,
    reference TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);