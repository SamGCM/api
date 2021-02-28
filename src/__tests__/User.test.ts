import request from 'supertest';
import { createConnection, getConnection } from 'typeorm';
import { app } from '../app';

describe("Users", ( ) =>{
    beforeAll(async ( ) => {
        const connection = await createConnection( );
        await connection.runMigrations( );
    });

    afterAll(async ( ) => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    })

    it("Should be able to create new a user", async ( ) => {
        const response = await request(app).post("/users").send({
        email: "user@example.com",
        name: "User Example"
    });


    });
    it("Should not be able to create a user with exists email", async ( ) => {
        const response = await request(app).post("/users").send({
            email: "user@example.com",
            name: "User Example"
    });
    expect(response.status).toBe(400);
    });
});