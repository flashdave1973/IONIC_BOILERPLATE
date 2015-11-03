'use strict';

describe('Service: UserFactory', function () {

    beforeEach(module('AllClearApp'));

    var UserFactory, users, $httpBackend, promise;

    beforeEach(inject(function (_$httpBackend_, _UserFactory_) {

        $httpBackend = _$httpBackend_;
        UserFactory = _UserFactory_;

    }));

    it('should start with an empty loggedInUser object', function () {
        users = UserFactory.users;

        expect(typeof (users)).toBe('object');
    });

    it('should exists', function () {        

        // send get Team Leader from factory
        UserFactory.getUsers().then(function () {

            // return team leaders teams
            promise = UserFactory.users;

            console.log('promise', promise);
            
            expect(promise.user).toBe('hledger');
        });


    });

});
