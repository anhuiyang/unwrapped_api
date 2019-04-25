const sinon = require('sinon')
const chai = require('chai')
const expect = chai.expect
const mongoose = require('mongoose')
require('sinon-mongoose')
const book = require('../modles/shop')

describe('Get all shop', ()=>{
    it('should return all shops', ()=>{
        let ShopMock = sinon.mock(Shop)
        let expectedResult = {status: true, todo: []}
        ShopMock.expects('find').yeilds(null, expectedResult)
        Shop.find((err, result)=>{
            ShopMock.verify()
            ShopMock.restore()
            expect(result.status).to.be.true
            document()
        })
    })
})



// describe("Get all todos", function(){
//     // Test will pass if we get all todos
//    it("should return all todos", function(done){
//        var TodoMock = sinon.mock(Todo);
//        var expectedResult = {status: true, todo: []};
//        TodoMock.expects('find').yields(null, expectedResult);
//        Todo.find(function (err, result) {
//            TodoMock.verify();
//            TodoMock.restore();
//            expect(result.status).to.be.true;
//            done();
//        });
//    });