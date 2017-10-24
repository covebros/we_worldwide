(function () {
  'use strict';

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
              Heading: 'Pantone: 145c',
              CMYK: '9 42 98 0',
              RGB: '229 157 39',
              HEX: '#E59D27'
            },
            {
              class: 'orange2',
              Heading: '70%',
              CMYK: '51 4 20 0',
              RGB: '237 186 104',
              HEX: '#EDBA68'
            },
            {
              class: 'orange3',
              Heading: '40%',
              CMYK: '4 17 39 0',
              RGB: '245 216 169',
              HEX: '#F5D8A9'
            },
            {
              class: 'orange4',
              Heading: '15%',
              CMYK: '1 6 15 0',
              RGB: '251 240 223',
              HEX: '#FBF0DF'
            }
          ]
        },
        {
          title: 'Green tints',
          class: 'green1',
          color: [
            {
              class: 'green1',
              Heading: 'Pantone: 383c',
              CMYK: '39 8 100 0',
              RGB: '171 193 17',
              HEX: '#ABC111'
            },
            {
              class: 'green2',
              Heading: '70%',
              CMYK: '27 5 70 0',
              RGB: '196 212 88',
              HEX: '#C4D458'
            },
            {
              class: 'green3',
              Heading: '40%',
              CMYK: '16 3 40 0',
              RGB: '221 230 160',
              HEX: '#DDE6A0'
            },
            {
              class: 'green4',
              Heading: '15%',
              CMYK: '6 1 15 0',
              RGB: '243 246 219',
              HEX: '#F3F6DB'
            }
          ]
        },
        {
          title: 'Blue tints',
          class: 'turquoise1',
          color: [
            {
              class: 'turquoise1',
              Heading: 'Pantone: 632 C',
              CMYK: '73 6 28 0',
              RGB: '27 179 188',
              HEX: '#1BB3BC'
            },
            {
              class: 'turquoise2',
              Heading: '70%',
              CMYK: '51 4 20 0',
              RGB: '95 202 208',
              HEX: '#5FCAD0'
            },
            {
              class: 'turquoise3',
              Heading: '40%',
              CMYK: '29 2 11 0',
              RGB: '164 225 228',
              HEX: '#A4E1E4'
            },
            {
              class: 'turquoise4',
              Heading: '15%',
              CMYK: '11 1 4 0',
              RGB: '221 244 244',
              HEX: '#DDF4F5'
            }
          ]
        },
        {
          title: 'Purple tints',
          class: 'purple1',
          color: [
            {
              class: 'purple1',
              Heading: 'Pantone: 676c',
              CMYK: '36 92 37 9',
              RGB: '158 54 103',
              HEX: '#9E3667'
            },
            {
              class: 'purple2',
              Heading: '70%',
              CMYK: '25 64 26 6',
              RGB: '187 114 149',
              HEX: '#BB7295'
            },
            {
              class: 'purple3',
              Heading: '40%',
              CMYK: '15 37 15 4',
              RGB: '216 175 194',
              HEX: '#D8AFC2'
            },
            {
              class: 'purple4',
              Heading: '15%',
              CMYK: '5 14 5 1',
              RGB: '240 225 232',
              HEX: '#F0E1E8'
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
})();
