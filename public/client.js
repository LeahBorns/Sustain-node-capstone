"use strict";

const myActivities = [
    {
        category: 'Food',
        activityName: 'Buy locally',
        activityImage: 'food.png',
        activityPoints: 4
    },
    {
        category: 'Food',
        activityName: 'Eat less meat',
        activityImage: 'food.png',
        activityPoints: 6
    },
    {
        category: 'Transportation',
        activityName: 'Pedal Power',
        activityImage: 'bike.png',
        activityPoints: 8
    },
    {
        category: 'Transportation',
        activityName: 'Look into carbon offsets',
        activityImage: 'bike.png',
        activityPoints: 10
    },
    {
        category: 'Water',
        activityName: "If it's yellow let it mellow",
        activityImage: 'water-drop.png',
        activityPoints: 2
    },
    {
        category: 'Water',
        activityName: 'Shorter you shower',
        activityImage: 'water-drop.png',
        activityPoints: 4
    },
    {
        category: 'Energy',
        activityName: 'Change bulbs to LED',
        activityImage: 'lightbulb.png',
        activityPoints: 10
    },
    {
        category: 'Energy',
        activityName: 'Keep house temp at 68&deg;F',
        activityImage: 'lightbulb.png',
        activityPoints: 6
    },
    {
        category: 'Waste',
        activityName: 'Use reuseable water bottle',
        activityImage: 'recycle.png',
        activityPoints: 4
    },
    {
        category: 'Waste',
        activityName: 'Avoid anything disposable',
        activityImage: 'recycle.png',
        activityPoints: 8
    },
    {
        category: 'Nature',
        activityName: 'Go outside for 30 minutes',
        activityImage: 'nature.png',
        activityPoints: 8
    },
    {
        category: 'Nature',
        activityName: 'Remove self from tech for 30 minutes',
        activityImage: 'nature.png',
        activityPoints: 6
    },
    {
        category: 'Health',
        activityName: 'Exercise 3x a week',
        activityImage: 'exercise.png',
        activityPoints: 8
    },
    {
        category: 'Health',
        activityName: 'Eat mindfully',
        activityImage: 'exercise.png',
        activityPoints: 6
    },
    {
        category: 'Health',
        activityName: 'Eat mindfully',
        activityImage: 'exercise.png',
        activityPoints: 6
    }
    ];



//PROFILE PAGE
//3.Brought to profile page. Fill out expereince click commited and click button
//button flips and says it was finished. Points added to user feed

//ACTIVITY PAGE
//4.Choose from practices. Select box and click add button.
//block will rotate to say activity added.
//5. Activties added to feed as done

//FRIENDS PAGE
//6. Points updated as friends commit. Search for friends.

// Function and object definitions
var user = undefined;
var loggedinUserName = '';
var sustainGoals = '';
var currentScore = 5;
var allActivities = [];

///////////////////////////////REGISTER AND SIGN UP////////////////////////////
function showSignInPage() {
    $('#friends-page').hide();
    $('#feed-page').hide();
    $('#activities-page').hide();
    $('#profile-page').hide();
    $('#register-page').hide();
    $('#login-page').show();
    $('#js-signout-link').hide();
    $('#nav-links').hide();
}

function showNewUserPage() {
    //    $('*').scrollTop(0);
    $('#friends-page').hide();
    $('#feed-page').hide();
    $('#activities-page').hide();
    $('#profile-page').hide();
    $('#register-page').show();
    $('#js-signout-link').hide();
    $('#login-page').hide();
    $('#nav-links').hide();
}

////////////////////////////PROFILE PAGE FUNCTIONS////////////////////////////////

// SHOW PROFILE PAGE
function showProfilePage(loggedinUserName, sustainGoals) {

    $('#friends-page').hide();
    $('#feed-page').hide();
    $('#activities-page').hide();
    $('#profile-page').show();
    $('#register-page').hide();
    $('#login-page').hide();
    $('#js-signout-link').show();
    $('#js-signout-link').text("Sign out " + loggedinUserName);
    $('#nav-links').show();
    $('.profileUsername').text(loggedinUserName);
    $('.profileDescription').text(sustainGoals);
    $('#total-points').text(currentScore + myActivities.activityPoints);
    displayProfileActivities(myActivities);
    //        $('.profileActivityBoxesSection').text(displayProfileActivities(myActivities));
}

//SHOW ACTIVITY/CATEGORIES ON PROFILE PAGE
function displayProfileActivities(myActivities) {

    let buildActivity = "";
    $.each(myActivities, function (myProfileKey, myProfileValue) {

        buildActivity += '<div class="activityBoxes">';
        buildActivity += '<img class="activityImageValue" src="images/' + myProfileValue.activityImage + '" alt="' + myProfileValue.category + ' category">';
        buildActivity += '<h3 class="activityNameValueValue">' + myProfileValue.activityName + '</h3><br>';
        buildActivity += '<h3 class="activityPointsValue">Points: ' + myProfileValue.activityPoints + '</h3><br>';

        buildActivity += '<label for="checkbox">Committed</label>';
        buildActivity += '<input class="checkbox" type="checkbox" name="completed" value="completed"> <br>';
        buildActivity += '<p>Tell us about your experience</p><textarea class="textBox" name="textBox" id="text-box"></textarea>';
        buildActivity += '<button class="completedActivityButton" role="button">I did it</button>';

        buildActivity += "</div>";
    });
    $('.activityDetailsBoxesSection').html(buildActivity);
};

function displayProfileActivitiesByUser(myActivities, userActivities) {

    console.log(myActivities, userActivities);

    let buildActivity = "";

    //loop all activities
    $.each(myActivities, function (myProfileKey, myProfileValue) {

        //loop user selected activities
        $.each(userActivities, function (userActivitiesKey, userActivitiesValue) {

            //            if the user activity matches the name from all activities
            if (myProfileValue.activityName == userActivitiesValue.activityCategoryName) {

                buildActivity += '<div class="activityBoxes">';
                buildActivity += '<img class="activityImageValue" src="images/' + myProfileValue.activityImage + '" alt="' + myProfileValue.category + ' category">';
                buildActivity += '<h3 class="activityNameValueValue">' + myProfileValue.activityName + '</h3><br>';
                buildActivity += '<h3 class="activityPointsValue">Points: ' + myProfileValue.activityPoints + '</h3><br>';

                buildActivity += '<label for="checkbox">Committed</label>';
                buildActivity += '<input class="checkbox" type="checkbox" name="completed" value="completed"> <br>';
                buildActivity += '<p>Tell us about your experience</p><textarea class="textBox" name="textBox" id="text-box"></textarea>';
                buildActivity += '<button class="completedActivityButton" role="button">I did it</button>';

                buildActivity += "</div>";
            }
        });
    });
    $('.activityDetailsBoxesSection').html(buildActivity);
};

//Profile page card flip
function completedActivity(myActivities) {

    let buildCompletedActivity = "";
    $.each(myActivities, function (completedKey, completedValue) {
        buildCompletedActivity += "<div class='activityBoxes animated flipOutY'>";
        buildCompletedActivity += "<h3>Congrats!</h3>"
        buildCompletedActivity += "<p> You completed " + completedValue.activityName + "!</p>";
        buildCompletedActivity += "</div>";
    });
    $('.activityBoxes animated flipOutY').html(buildCompletedActivity);
};

///////////////////////////////ACTIVITY OR CATEGORY PAGE FUNCTIONS/////////////////////////
//SHOW ACTIVTY/CATEGORY PAGE
function showActivitiesPage(allActivities) {

    $('#friends-page').hide();
    $('#feed-page').hide();
    $('#activities-page').show();
    $('#profile-page').hide();
    $('#register-page').hide();
    $('#login-page').hide();
    $('#js-signout-link').show();
    $('#nav-links').show();
}

//FUNCTION TO SHOW ALL ACTIVITIES IN 'CARD' FORM
function displayAllActivities(myActivities) {

    let buildActivity = "";
    $.each(myActivities, function (myActivitiesKey, myActivitiesValue) {

        buildActivity += "<div class='activityBoxes'>";
        buildActivity += "<img class='activityImageValue' src='images/" + myActivitiesValue.activityImage + "' alt='" + myActivitiesValue.category + "category' >";
        buildActivity += "<input type='hidden' class='activityImageInputValue' value='" + myActivitiesValue.activityImage + "' >";
        buildActivity += "<h3 class='activityNameValue'> " + myActivitiesValue.activityName + "</h3><br>";
        buildActivity += "<input type='hidden' class='activityCategoryNameInputValue' value='" + myActivitiesValue.activityName + "' >";

        buildActivity += "<h3 class='activityPointsValue'> Points:" + myActivitiesValue.activityPoints + "</h3><br>";
        buildActivity += "<input type='hidden'  class='activityCategoryPointsInputValue' value='" + myActivitiesValue.activityPoints + "' >";
        buildActivity += "<button class='addCategoryButton' id='activityAddButton' role='submit' type='button'>Add Category</button><br>";

        buildActivity += "</div>";
    });

    $('.activityBoxesSection').html(buildActivity);
};



//PULL DOWN MENU CONDITIONAL
function displaySelectedActivities(categoryName, categoryPoints) {
    // console.log(categoryName, categoryPoints);
    let buildActivity = "";
    let emptyActivities = 0;

    $.each(myActivities, function (myActivitiesKey, myActivitiesValue) {

        if ((categoryName !== "") && (categoryName == myActivitiesValue.category) && (categoryPoints !== "") && (categoryPoints == myActivitiesValue.activityPoints)) {
            buildActivity += "<div class='activityBoxes'>";
            buildActivity += "<img class='activityImageValue' src='images/" + myActivitiesValue.activityImage + "' alt='" + myActivitiesValue.category + "category' >";
            buildActivity += "<h3 class='activityNameValue'> " + myActivitiesValue.activityName + "</h3><br>";
            buildActivity += "<h3 class='activityPointsValue'> Points:" + myActivitiesValue.activityPoints + "</h3><br>";
            buildActivity += "<button class='addCategoryButton' id='activityAddButton' role='button' type='submit'>Add Category</button><br>";
            buildActivity += "</div>";
        } else if ((categoryName !== "") && (categoryName == myActivitiesValue.category) && (categoryPoints == "")) {
            buildActivity += "<div class='activityBoxes'>";
            buildActivity += "<img class='activityImageValue' src='images/" + myActivitiesValue.activityImage + "' alt='" + myActivitiesValue.category + "category' >";
            buildActivity += "<h3 class='activityNameValue'> " + myActivitiesValue.activityName + "</h3><br>";
            buildActivity += "<h3 class='activityPointsValue'> Points:" + myActivitiesValue.activityPoints + "</h3><br>";
            buildActivity += "<button class='addCategoryButton' id='activityAddButton' role='button' type='submit'>Add Category</button><br>";
            buildActivity += "</div>";
        } else if (((categoryName == "") && (categoryPoints !== "") && (categoryPoints == myActivitiesValue.activityPoints))) {
            buildActivity += "<div class='activityBoxes'>";
            buildActivity += "<img class='activityImageValue' src='images/" + myActivitiesValue.activityImage + "' alt='" + myActivitiesValue.category + "category' >";
            buildActivity += "<h3 class='activityNameValue'> " + myActivitiesValue.activityName + "</h3><br>";
            buildActivity += "<h3 class='activityPointsValue'> Points:" + myActivitiesValue.activityPoints + "</h3><br>";
            buildActivity += "<button class='addCategoryButton' id='activityAddButton' role='button' type='submit'>Add Category</button><br>";
            buildActivity += "</div>";
        } else if ((categoryName == "") && (categoryPoints == "")) {
            emptyActivities++;
        }
    });
    if (emptyActivities > 0) {
        buildActivity += "<h3 class='activityNameValue'> Please select category name or points</h3>";
    }

    $('.activityBoxesSection').html(buildActivity);
};

//Activity/Category Page card flip
function addedActivity(myActivities) {

    let buildAddedActivity = "";
    $.each(myActivities, function (addedKey, addedValue) {
        buildAddedActivity += "<div class='activityBoxes animated flipOutY'>";
        buildAddedActivity += "<h3>Congrats!</h3>"
        buildAddedActivity += "<p> You added " + addedValue.activityName + "!</p>";
        buildAddedActivity += "</div>";
    });
    $('.activityBoxes').html(buildAddedActivity);
};



///////////////////////////////////////////SIGN-IN TRIGGERS///////////////////////////////////////////////
//Page loads to SIGN-IN PAGE
//1. User enters user name and password. Press enter to enter site
$(document).ready(function () {
    // when page first loads
    //    $('*').scrollTop(0);

    $('#friends-page').hide();
    $('#feed-page').hide();
    $('#activities-page').hide();
    $('#profile-page').hide();
    $('#register-page').hide();
    $('#login-page').show();
    $('#js-signout-link').hide();
    $('#nav-links').hide();

    // USER WITH ACCOUNT SIGNS IN

    $('#js-signin-button').on('click', function (event) {
        event.preventDefault();

        // AJAX call to validate login info and sign user in
        const inputUname = $('input[name="signin-username"]').val();
        const inputPw = $('input[name="signin-pw"]').val();
        // check for spaces, empty, undefined
        if ((!inputUname) || (inputUname.length < 1) || (inputUname.indexOf(' ') > 0)) {
            alert('Invalid username');
        } else if ((!inputPw) || (inputPw.length < 1) || (inputPw.indexOf(' ') > 0)) {
            alert('Invalid password');
        } else {
            const unamePwObject = {
                username: inputUname,
                password: inputPw
            };
            user = inputUname;


            $.ajax({
                    type: "POST",
                    url: "/signin",
                    dataType: 'json',
                    data: JSON.stringify(unamePwObject),
                    contentType: 'application/json'
                })
                .done(function (result) {
                    // console.log(result);
                    loggedinUserName = result.username;

                    // show the signout link in header as soon as user is signed in
                    $('#js-signout-link').show();

                    showActivitiesPage(allActivities);
                    displayAllActivities(myActivities);
                })
                .fail(function (jqXHR, error, errorThrown) {
                    console.log(jqXHR);
                    console.log(error);
                    console.log(errorThrown);
                    alert('Invalid username and password combination. Pleae check your username and password and try again.');
                });
        };
    });
    //
    ///////////////////////////////////////////REGISTER PAGE TRIGGERS///////////////////////////////////////////////
    //2. Visitor wants to create an account. Clicks create an account
    //Add username, email, password and verify password. Submit
    //and brought back to sign in page to sign in
    $('#js-new-account').on('click', function (event) {
        showNewUserPage();
    });
    $('#signup-button').on('click', function (event) {
        event.preventDefault();
        const form = document.body.querySelector('#new-user-form');
        if (form.checkValidity && !form.checkValidity()) {
            return;
        }
        const uname = $('input[name="username"]').val();
        const email = $('input[name="email"]').val();
        const pw = $('input[name="pw"]').val();
        const confirmPw = $('input[name="confirm-pw"]').val();
        const goals = $('input[name="goals"]').val();
        if (pw !== confirmPw) {

            alert('Passwords must match!');
        } else {
            event.preventDefault();
            const newUserObject = {
                username: uname,
                password: pw,
                email: email,
                goals: goals
            };
            // will assign a value to variable 'user' in signin step below
            // AJAX call to send form data up to server/DB and create new user
            $.ajax({
                    type: 'POST',
                    url: '/signup',
                    dataType: 'json',
                    data: JSON.stringify(newUserObject),
                    contentType: 'application/json'
                })
                .done(function (result) {
                    event.preventDefault();
                    alert('Thanks for signing up! You may now sign in with your username and password.');
                    showSignInPage();
                })
                .fail(function (jqXHR, error, errorThrown) {
                    console.log(jqXHR);
                    console.log(error);
                    console.log(errorThrown);
                });
        };
    });

    ///////////////////////////////////////////ACTIVITY PAGE TRIGGERS///////////////////////////////////////////////
    //Show all activities.

    //when user clicks Activity Categories from menu
    $('#js-activities').on('click', function (event) {
        event.preventDefault();
        showActivitiesPage(allActivities);
        displayAllActivities(myActivities);
    });

    //allow user to pick from pull down certain activities/points
    $('.pullDownCategories').on('click', function (event) {
        event.preventDefault();
        const categoryName = $('.sustainCategories').val();
        const categoryPoints = $('.sustainPoints').val();
        displaySelectedActivities(categoryName, categoryPoints);
    });


    ///////////////////////////////////////////PROFILE PAGE TRIGGERS///////////////////////////////////////////////
    //PROFILE PAGE from image in nav
    $('#js-profile').on('click', function (event) {
        showProfilePage(loggedinUserName, sustainGoals);



        $.ajax({
                type: 'GET',
                url: '/category/show/' + loggedinUserName,
                dataType: 'json',
                contentType: 'application/json'
            })
            .done(function (result) {
                //console.log(result.categoryOutput);

                displayProfileActivitiesByUser(myActivities, result.categoryOutput);
            })

            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    });

    //1. If box is checked and textbox is filled in.
    //2. "I did it" button is pressed.
    //3. 'Card' spins around and says completed.
    //4. information from card shows up in feed


    // when user clicks sign-out link in header
    document.getElementById('js-signout-link').addEventListener('click', function (event) {
        location.reload();
    });

});


//Activity/category added
//$(document).on('click', '#activityAddButton', function (event) {
//            event.preventDefault();
//
//            const activityTrigger = $('#activityAddButton');
//            const activityCategoryImage = $(this).parent().find('.activityImageInputValue').val();
//            const activityCategoryNameInputValue = $(this).parent().find('.activityCategoryNameInputValue').val();
//            const activityCategoryPointsInputValue = $(this).parent().find('.activityCategoryPointsInputValue').val();
//
//
//            const newActivityCategoryObject = {
//                username: loggedinUserName,
//                activityCategoryImage: activityCategoryImage,
//                activityCategoryName: activityCategoryNameInputValue,
//                activityCategoryPoints: activityCategoryPointsInputValue
//            };
//
//    //console.log(newActivityCategoryObject);
//
//    //
//    //        if (activityTrigger !== 'submit') {
//    //            $('.profileActivityBoxesSection').empty();
//    //        } else if (activityTrigger == 'submit') {
//    //            displayAddedActivities(myActivities);
//    //        }
//
//    //Adds card with flip and shows profile version of cards correctly
//    const categoryCheckBox = $('.checkbox').val();
//    const categoryActivityName = $('.activityNameValue').val();
//    const categoryActivityImage = $('.activityImageValue').val();
//    const categoryActivityPoints = $('.activityPointsValue').val();
//    //
//    //    console.log(categoryCheckBox);
//    //    console.log(activityDescription, categoryActivityName, categoryActivityImage, categoryActivityPoints, loggedinUserName);
//    //
//    //    if (categoryCheckBox != 'completed') {
//    //        alert('Must be checked');
//    //    } else {
//    //        const newAddedActivity = {
//    //            activityName: categoryActivityName,
//    //            activityImage: categoryActivityImage,
//    //            activityPoints: categoryActivityPoints,
//    //            username: loggedinUserName
//    //        };
//    //        console.log(newAddedActivity);
//            $.ajax({
//                    type: 'POST',
//                    url: '/category/add',
//                    dataType: 'json',
//                    data: JSON.stringify(newActivityCategoryObject),
//                    contentType: 'application/json'
//                })
//                .done(function (result) {
//                    event.preventDefault();
//                    addedActivity(myActivities);
//                })
//
//                .fail(function (jqXHR, error, errorThrown) {
//                    console.log(jqXHR);
//                    console.log(error);
//                    console.log(errorThrown);
//                });
//    //    $.ajax({
//    //            type: 'GET',
//    //            url: '/activity/add/' + loggedinUserName,
//    //            dataType: 'json',
//    //            contentType: 'application/json'
//    //        })
//    //        .done(function (result) {
//    //            console.log(result);
//    //            event.preventDefault();
//    //            displayProfileActivities(myActivities);
//    //
//    //        })
//    //
//    //        .fail(function (jqXHR, error, errorThrown) {
//    //            console.log(jqXHR);
//    //            console.log(error);
//    //            console.log(errorThrown);
//    //        });
//            });

$(document).on('click', '.completedActivityButton', function (event) {
    event.preventDefault();
    const checkBox = $(this).parent().find('.checkbox').val();
    const activityDescription = $(this).parent().find('.textBox').val();
    const profileActivityName = $(this).parent().find('.activityNameValue').val();
    const profileActivityImage = $(this).parent().find('.activityImageValue').val();
    const profileActivityPoints = $(this).parent().find('.activityPointsValue').val();


    console.log(checkBox);
    console.log(activityDescription, profileActivityName, profileActivityImage, profileActivityPoints, loggedinUserName);

    if (checkBox != 'completed') {
        alert('Must be checked');
    } else if (activityDescription.length < 10) {
        alert('Must be at least 10 characters');
    } else {
        const newActivityCompleted = {
            activityDescription: activityDescription,
            activityName: profileActivityName,
            activityImage: profileActivityImage,
            activityPoints: profileActivityPoints,
            username: loggedinUserName
        };
        //        console.log(newActivityCompleted);
        $(this).parent().toggleClass('activityBoxeCompleted');

        $.ajax({
                type: 'POST',
                url: '/activity/add',
                dataType: 'json',
                data: JSON.stringify(newActivityCompleted),
                contentType: 'application/json'
            })
            .done(function (result) {
                event.preventDefault();
                //                $.ajax({
                //                        type: 'GET',
                //                        url: '/activity/add/' + loggedinUserName,
                //                        dataType: 'json',
                //                        contentType: 'application/json'
                //                    })
                //                    .done(function (result) {
                //                        //console.log(result);
                //                        event.preventDefault();
                //                        displayProfileActivities(myActivities);
                //
                //                    })
                //
                //                    .fail(function (jqXHR, error, errorThrown) {
                //                        console.log(jqXHR);
                //                        console.log(error);
                //                        console.log(errorThrown);
                //                    });

                alert('Congrats! You completed todays task');

            })

            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });



    };
});
