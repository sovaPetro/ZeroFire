    var app = angular.module("sampleApp", ["firebase"]);

    app.controller("SampleCtrl", function($scope, $firebaseArray) {
		$scope.indicator = "If you see me - angular works!";
        var ref = new Firebase("https://euler-numb.firebaseio.com/");
        var usersRef = ref.child("forArticles");
		$scope.contacts = $firebaseArray(ref);

        var salo = {
     "first": { name: `Long before Waring posed his problem, Diophantus had asked whether every positive integer could be represented as the sum of four perfect squares greater than or equal to zero. This question later became known as Bachet's conjecture, after the 1621 translation of Diophantus by Claude Gaspard Bachet de Méziriac, and it was solved by Joseph-Louis Lagrange in his four-square theorem in 1770, the same year Waring made his conjecture. Waring sought to generalize this problem by trying to represent all positive integers as the sum of cubes, integers to the fourth power, and so forth, to show that any positive integer may be represented as the sum of other integers raised to a specific exponent, and that there was always a maximum number of integers raised to a certain exponent required to represent all positive integers in this way.`},
     "second": { name: 'Article two'}

        };
		
		$scope.addContact = function() {
			
            usersRef.set(salo);

			alert('you set a new obj to your firebase right now)))');
		};
		
    });