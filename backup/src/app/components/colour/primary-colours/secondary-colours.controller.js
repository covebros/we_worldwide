angular
    .module('app')
    .controller('SecondaryColourCtrl', function ($scope) {
        $scope.oneAtATime = false;

        $scope.groups = [
            {
                title: 'Orange tints',
                class: 'orange1',
                color: [
                    {
                        class: 'orange1',
                        CMYK: '0 100 100 10',
                        RGB: '230 0 0',
                        HEX: '#E60000'
                    }, 
                    {
                        class: 'orange2',
                        CMYK: '0 100 100 20',
                        RGB: '204 0 0',
                        HEX: '#CC0000'
                    }, 
                    {
                        class: 'orange3',
                        CMYK: '0 100 100 30',
                        RGB: '179 0 0',
                        HEX: '#B30000'
                    }, 
                    {
                        class: 'orange4',
                        CMYK: '0 100 100 40',
                        RGB: '153 0 0',
                        HEX: '#990000'
                    }
                ]
            },
            {
                title: 'Green tints',
                class: 'green1',
                color: [
                    {
                        class: 'green1',
                        CMYK: '0 0 0 90',
                        RGB: '35 35 35',
                        HEX: '#232323'
                    },
                    {
                        class: 'green2',
                        CMYK: '0 0 0 80',
                        RGB: '51 51 51',
                        HEX: '#232323'
                    },
                    {
                        class: 'green3',
                        CMYK: '0 0 0 70',
                        RGB: '76 76 76',
                        HEX: '#232323'
                    },
                    {
                        class: 'green4',
                        CMYK: '0 0 0 60',
                        RGB: '102 102 102',
                        HEX: '#232323'
                    }
                ]
            },
            {
                title: 'Blue tints',
                class: 'turquoise1',
                color: [
                    {
                        class: 'turquoise1',
                        CMYK: '0 0 0 90',
                        RGB: '35 35 35',
                        HEX: '#232323'
                    },
                    {
                        class: 'turquoise2',
                        CMYK: '0 0 0 80',
                        RGB: '51 51 51',
                        HEX: '#232323'
                    },
                    {
                        class: 'turquoise3',
                        CMYK: '0 0 0 70',
                        RGB: '76 76 76',
                        HEX: '#232323'
                    },
                    {
                        class: 'turquoise4',
                        CMYK: '0 0 0 60',
                        RGB: '102 102 102',
                        HEX: '#232323'
                    }
                ]
            },
            {
                title: 'Purple tints',
                class: 'purple1',
                color: [
                    {
                        class: 'purple1',
                        CMYK: '0 0 0 90',
                        RGB: '35 35 35',
                        HEX: '#232323'
                    },
                    {
                        class: 'purple2',
                        CMYK: '0 0 0 80',
                        RGB: '51 51 51',
                        HEX: '#232323'
                    },
                    {
                        class: 'purple3',
                        CMYK: '0 0 0 70',
                        RGB: '76 76 76',
                        HEX: '#232323'
                    },
                    {
                        class: 'purple4',
                        CMYK: '0 0 0 60',
                        RGB: '102 102 102',
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