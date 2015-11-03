(function () {
    'use strict';

    angular.module('AllClearApp')

    .constant('mockData', {
        users : [
            {
                'ID'                        : 8,
                'firstName'                 : 'Heath',
                'lastName'                  : 'Ledger',
                'middleName'                : 'Andrew',
                'displayName'               : 'Heath Ledger',
                'emailAddress'              : 'hledger@deloitte.com',
                'username'                  : 'hl',
                'password'                  : '123',
                'role'                      : 'monitor'
            },
            {
                'ID'                        : 9,
                'firstName'                 : 'River',
                'lastName'                  : 'Phoneix',
                'middleName'                : 'Jude',
                'displayName'               : 'River Phoneix',
                'emailAddress'              : 'rphoneix@deloitte.com',
                'username'                  : 'rp',
                'password'                  : '123',
                'role'                      : 'user'
            }
        ]
    })

    .constant('mockDataOverrides', {
        users : [
            {
                'ID'                        : 8,
                'firstName'                 : 'Heath',
                'lastName'                  : 'Ledger',
                'middleName'                : 'Andrew',
                'displayName'               : 'Heath Ledger',
                'emailAddress'              : 'hledger@deloitte.com',
                'username'                  : 'hl',
                'password'                  : '123',
                'role'                      : 'monitor'
            },
            {
                'ID'                        : 9,
                'firstName'                 : 'River',
                'lastName'                  : 'Phoneix',
                'middleName'                : 'Jude',
                'displayName'               : 'River Phoneix',
                'emailAddress'              : 'rphoneix@deloitte.com',
                'username'                  : 'rp',
                'password'                  : '123',
                'role'                      : 'user'
            }
        ]
    });
})();
