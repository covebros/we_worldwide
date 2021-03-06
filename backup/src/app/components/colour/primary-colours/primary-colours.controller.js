angular
    .module('app')
    .controller('PrimaryColourCtrl', function ($scope) {
        $scope.oneAtATime = false;

        $scope.groups = [
            {
                title: 'Red tints',
                class: 'red1',
                color: [
                    {
                        class: 'red1',
                        CMYK: '0 100 100 10',
                        RGB: '230 0 0',
                        HEX: '#E60000'
                    }, 
                    {
                        class: 'red2',
                        CMYK: '0 100 100 20',
                        RGB: '204 0 0',
                        HEX: '#CC0000'
                    }, 
                    {
                        class: 'red3',
                        CMYK: '0 100 100 30',
                        RGB: '179 0 0',
                        HEX: '#B30000'
                    }, 
                    {
                        class: 'red4',
                        CMYK: '0 100 100 40',
                        RGB: '153 0 0',
                        HEX: '#990000'
                    }
                    , 
                    {
                        class: 'red5',
                        CMYK: '0 100 100 50',
                        RGB: '128 0 0',
                        HEX: '#800000'
                    }
                ]
            },
            {
                title: 'Grey tints',
                class: 'grey1',
                color: [
                    {
                        class: 'grey1',
                        CMYK: '0 0 0 90',
                        RGB: '35 35 35',
                        HEX: '#232323'
                    },
                    {
                        class: 'grey2',
                        CMYK: '0 0 0 80',
                        RGB: '51 51 51',
                        HEX: '#232323'
                    },
                    {
                        class: 'grey3',
                        CMYK: '0 0 0 70',
                        RGB: '76 76 76',
                        HEX: '#232323'
                    },
                    {
                        class: 'grey4',
                        CMYK: '0 0 0 60',
                        RGB: '102 102 102',
                        HEX: '#232323'
                    },
                    {
                        class: 'grey5',
                        CMYK: '0 0 0 50',
                        RGB: '128 128 128',
                        HEX: '#232323'
                    },
                    {
                        class: 'grey6',
                        CMYK: '0 0 0 40',
                        RGB: '153 153 153',
                        HEX: '#232323'
                    },
                    {
                        class: 'grey7',
                        CMYK: '0 0 0 30',
                        RGB: '179 179 179',
                        HEX: '#232323'
                    },
                    {
                        class: 'grey8',
                        CMYK: '0 0 0 20',
                        RGB: '204 204 204',
                        HEX: '#232323'
                    },
                    {
                        class: 'grey9',
                        CMYK: '0 0 0 10',
                        RGB: '230 230 230',
                        HEX: '#232323'
                    }
                ]
            }
        ];

        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };
    });