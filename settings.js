var curKeyNumUp = 38;
var curKeyNumDown = 40;
var curKeyNumLeft = 37;
var curKeyNumRight = 39;
var curKeyUp="⇧";
var curKeyDown="⇩";
var curKeyRight = "➪";
var curKeyLeft= "⇦" ;
var curNumOfFoodPoints = 50;
var newColor5 = "#f6355c";
var newColor15 = "#e3a221";
var newColor25 = "#316600";
var curMaxGameTime = 60;
var curNumOfMonsters=2;

$(document).ready(function(){
	$("#setting").validate({
		rules: {
			Up: {
				required: true,
			},
			Down: {
				required: true,
			},
            Right: {
				required: true,
			},
			Left: {
				required: true,
			},
            foodPointsScale:{
                required: true
            },
            pointsColor5:{
                required: true
            },
            pointsColor15:{
                required: true
            },
            pointsColor25:{
                required: true
            },
            gameTimeScale:{
                required: true
            },
            monstersScale:{
                required: true
            }
		},
		messages: {
            Up: {
				required: "Please enter Up button",
			},
			Down: {
				required: "Please enter Down button",
			},
            Right: {
				required: "Please enter Right button",
			},
			Left: {
				required: "Please enter Left button",
			},
            foodPointsScale:{
                required: "Please enter food points"
            },
            pointsColor5:{
                required: "Please enter color"
            },
            pointsColor15:{
                required: "Please enter color"
            },
            pointsColor25:{
                required: "Please enter color"
            },
            gameTimeScale:{
                required: "Please enter game time"
            },
            monstersScale:{
                required: "Please enter monster"
            }
		}
		,submitHandler: function(){
            switchScreens("pacmanScreen", true)
			Start();
		}
	});
});

function DisplayCurKey(keyCode){
	if(keyCode == 38) return "⇧";
	else if(keyCode == 40) return "⇩";
	else if(keyCode == 39) return "➪";
	else if(keyCode == 37) return "⇦";
	else return String.fromCharCode(event.keyCode);
}

function changeKey(setting){
    $(document).keydown(function(event){
        keyNum = event.keyCode;
        switch (setting){
            case "UP":
                if (keyNum==curKeyNumDown || keyNum==curKeyNumLeft || keyNum==curKeyNumRight){
                    window.alert("This key was already chosen, please choose another one");
                    break;
                }
                curKeyUp=  DisplayCurKey(keyNum);
                curKeyNumUp = keyNum;
                document.getElementById("Up").value = curKeyUp;
                break;
            case "DOWN":
                if (keyNum==curKeyNumUp || keyNum==curKeyNumLeft || keyNum==curKeyNumRight){
                    window.alert("This key was already chosen, please choose another one");
                    break;
                }
                curKeyDown = DisplayCurKey(keyNum);
                curKeyNumDown = keyNum;
                document.getElementById("Down").value = curKeyDown;
                break;
            case "LEFT":
                if (keyNum==curKeyNumDown || keyNum==curKeyNumUp || keyNum==curKeyNumRight){
                    window.alert("This key was already chosen, please choose another one");
                    break;
                }
                curKeyLeft = DisplayCurKey(keyNum);
                curKeyNumLeft = keyNum;
                document.getElementById("Left").value = curKeyLeft;
                break;
            case "RIGHT":
                if (keyNum==curKeyNumDown || keyNum==curKeyNumLeft || keyNum==curKeyNumUp){
                    window.alert("This key was already chosen, please choose another one");
                    break;
                }
                curKeyRight = DisplayCurKey(keyNum);
                curKeyNumRight = keyNum;
                document.getElementById("Right").value = curKeyRight;
                break;
        }
        $(document).unbind();
    });
}

function changeSettings(setting){
    switch(setting){
        case "FOOD":
            curNumOfFoodPoints=parseInt(document.getElementById("foodPointsScale").value)
            setValFromScale("foodPointsLabel", "foodPointsScale");
            break;
        case "COLOR5":
            newColor5=document.getElementById("5PointColor").value
            break;
        case "COLOR15":
            newColor15=document.getElementById("15PointColor").value
            break;
        case "COLOR25":
            newColor25=document.getElementById("25PointColor").value
            break;
        case "TIME":
            curMaxGameTime=parseInt(document.getElementById("gameTimeScale").value)
            setValFromScale("gameTimeLabel", "gameTimeScale");
            break;
        case "MONSTERS":
            curNumOfMonsters=parseInt(document.getElementById("monstersScale").value)
            setValFromScale("monstersLabel", "monstersScale");
            break;
    }
}


function setValFromScale(label, scale){
    scaleValue = document.getElementById(scale).value
    $('#'+ label).text(scaleValue);
    $("#" + label).css("color", "white");
    $("#" + label).css('font-weight', 'bold');
}

function getRandomColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var color = "#" + randomColor.padStart(6, '0')
    return color;
  }

function randomSettings(){
    curKeyNumUp = 38;
    curKeyNumDown = 40;
    curKeyNumLeft = 37;
    curKeyNumRight = 39;
    curKeyUp="⇧";
    document.getElementById("Up").value = curKeyUp;
    curKeyDown="⇩";
    document.getElementById("Down").value = curKeyDown;
    curKeyRight="➪";
    document.getElementById("Right").value = curKeyRight;
    curKeyLeft ="⇦";
    document.getElementById("Left").value = curKeyLeft;
    curNumOfFoodPoints= getRandomInt(50,90);
    document.getElementById("foodPointsScale").value = curNumOfFoodPoints;
    document.getElementById("foodPointsLabel").innerHTML = curNumOfFoodPoints;
    newColor5 =getRandomColor();
    document.getElementById("5PointColor").value = newColor5;
    newColor15= getRandomColor();
    document.getElementById("15PointColor").value = newColor15;
    newColor25 = getRandomColor();
    document.getElementById("25PointColor").value = newColor25;
    curMaxGameTime = getRandomInt(60,360);
    document.getElementById("gameTimeScale").value = curMaxGameTime;
    document.getElementById("gameTimeLabel").innerHTML = curMaxGameTime;
    curNumOfMonsters=getRandomInt(1,4);
    document.getElementById("monstersScale").value = curNumOfMonsters;
    document.getElementById("monstersLabel").innerHTML = curNumOfMonsters;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}