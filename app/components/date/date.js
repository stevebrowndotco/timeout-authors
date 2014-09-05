'use strict';

angular.module('date',[])
    .factory('date', function () {

        function roundDate(newDate) {
            var roundedDate = newDate.getTime();
            return roundedDate;
        }

        function getNthSuffix(number) {
            switch (number) {
                case 1:
                case 21:
                case 31:
                    return 'st';
                case 2:
                case 22:
                    return 'nd';
                case 3:
                case 23:
                    return 'rd';
                default:
                    return 'th';
            }
        }

        function countDays(firstDate, lastDate) {
            var oneDay = 24 * 60 * 60 * 1000,
                _firstDate = new Date(firstDate),
                _secondDate = new Date(lastDate),
                numberOfDays = Math.round(Math.abs((_firstDate.getTime() - _secondDate.getTime()) / (oneDay)));
            return numberOfDays;
        }

        return {
            today: function() {
                return new Date();
            },
            daysAgo: function (daysFrom) {
                var days = daysFrom,
                    date = new Date(),
                    daysAgo = date.setTime(date.getTime() - (days * 24 * 60 * 60 * 1000));
                return new Date(daysAgo);
            },
            getNthSuffix: function(number) {
                return getNthSuffix(number);
            },
            countDays: function (firstDate, lastDate) {
                return countDays(firstDate, lastDate);
            }
        };
    });

Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};