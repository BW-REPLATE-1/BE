//const supertest = require('supertest'); <--for server testing
//const server = require('../api/server');
const db = require('../database/dbConfig');
const Business = require('../models/business-model');
const Volunteer = require('../models/volunteer-model');
const Request = require('../models/requests-model');

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

describe('business-profile model', () => {
    describe('insert()', () => {
        it('should add business profile to the database', async () => {
            await Business.insert({
                username: "iampopcorn",
                email: "iampopcorn@gmail.com",
                business_name: "I am Popcorn",
                business_address: "555 Riverside Ave. Munster, IN 60682",
                phone_number: 5552949283,
                user_id: 3
            })
            const business = await db('business-profile')

            expect(business).toHaveLength(3)
        })
    })
})

describe('volunteer-profile model', () => {
    describe('insert()', () => {
        it('should add volunteer profile to the database', async () => {
            await Volunteer.insert({
                username: "ambee",
                email: "aharris@msn.com",
                volunteer_name: "Amber Harris",
                phone_number: 7085251414,
                user_id: 4
              })
            const volunteer = await db('volunteer-profile')

            expect(volunteer).toHaveLength(3)
        })
    })
})

describe('request model', () => {
    describe('insert()', () => {
        it('should add request to the database', async () => {
            await Request.insert({
                food_type: "hot dogs",
                food_amount: 15,
                description: "15lbs of hot dogs",
                pickup_time: "2020-05-31 21:30:00",
                business_address: "391 Riverside Ave. Chicago, IL 606019",
                completed: false,
                business_id: 1
              })
            const request = await db('requests')

            expect(request).toHaveLength(3)
        })
    })
})

