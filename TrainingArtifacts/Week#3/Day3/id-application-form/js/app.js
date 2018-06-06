function addDetails() {
    console.log('Add button clicked');
    // Check if user has entered all required data
    // If not show error message
    // Else post it
    if (validateFirstName()) {
        if (validateFullName()) {
            // Do a Post
            postData();
        }
        else {
            // Display error message for full Name
            displayErrorMessageForFullName();
        }
    } else {
        // Display error message for first Name
        displayErrorMessageForFirstName();
    }

}

function displayErrorMessageForFirstName() {
    $('#errForFirstName').show();
}

function displayErrorMessageForFullName() {
    $('#errForFullName').show();
}


function validateFirstName() {
    const firstName = $('#firstName').val();
    if (firstName === '') {
        return false;
    }
    return true;
}

function validateFullName() {
    const fullName = $('#fullName').val();
    if (fullName === '') {
        return false;
    }
    return true;
}

function postData() {
    const data = {
        firstName: $('#firstName').val(),
        fullName: $('#fullName').val()
    };
    $.ajax({
        type: "POST",
        url: 'https://id-application-form.firebaseio.com/applicationIds.json',
        data: JSON.stringify(data),
        success: onPostSuccess,
        // dataType: dataType
    });
}

const onPostSuccess = (data) => {
    console.log('Posting to firebase success');
    console.log(data);
}

$('document').ready(() => {
    // Initialize
    $('.span-for-errors').hide();
});