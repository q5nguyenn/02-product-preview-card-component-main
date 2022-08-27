var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
  $scope.users = [
    {
      userid: 1,
      name: "Suresh",
    },
    {
      userid: 2,
      name: "Rohini",
    },
    {
      userid: 3,
      name: "Praveen",
    },
  ];
  var arr = [];
  // $scope.items = ["mot", "hai", "ba"];
  $scope.handleClick = function () {
    var temp = "";
    // console.log($scope.value);
    // if ($scope.value == 1 || $scope.value == 2 || $scope.value == 3) {
    //   console.log($scope.value);
    //   temp = "hihhh" + $scope.value;
    // } else {
    //   temp = "Ban chua chon gi";
    // }

    switch ($scope.value) {
      case "1":
      case "2":
      case "3":
        temp = $scope.value;
        break;
      default:
        temp = "Looking forward to the Weekend";
        break;
    }
    // switch ($scope.value) {
    //   case 1:
    //   case 2:
    //   case 3:
    //     temp = "ban da chon so" + value;
    //     break;
    //   default:
    //     temp = "Ban chua chon gi";
    // }
    $scope.result = temp;
  };
});
