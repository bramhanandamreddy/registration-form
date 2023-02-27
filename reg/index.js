const submit_button = document.getElementById('submit');
submit_button.onclick = function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const fatherFirstName = document.getElementById('fathername').value;
    const fatherLastName = document.getElementById('fatherlastname').value;
    const motherFirstName = document.getElementById('mothername').value;
    const motherLastName = document.getElementById('motherlastname').value;
    const gender = document.getElementById('gender').value;
    const nationality = document.getElementById('nationality').value;
    const address1 = document.getElementById('address1').value;
    const address2 = document.getElementById('address2').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipcode = document.getElementById('zipcode').value;
    const phone = document.getElementById('phone').value;
    const hscInstitution = document.getElementById('hsc-institution').value;
    const hscBoard = document.getElementById('hsc-board').value;
    const hscScore = document.getElementById('hsc-score').value;
    const sscInstitution = document.getElementById('ssc-institution').value;
    const sscBoard = document.getElementById('ssc-board').value;
    const sscScore = document.getElementById('ssc-score').value;
    const currentlyPursuing = document.getElementById('currently-pursuing').value;
    const currentInstitution = document.getElementById('current-institution').value;
    const overallPercentage = document.getElementById('overall-percentage').value;
    const currentBacklog = document.getElementById('current-backlog').value;
    const photo = document.getElementById('photo').files[0];
    const hsc = document.getElementById('hsc').files[0];
    const ssc = document.getElementById('ssc').files[0];
    const all = document.getElementById('all').files[0];

    if (firstName === '') {
        alert('Please enter your first name.');
        document.getElementById('firstname').focus();
        return;
    }
    if (lastName === '') {
        alert('Please enter your last name.');
        document.getElementById('lastname').focus();
        return;
    }
    if (dob === '') {
        alert('Please enter your date of birth.');
        document.getElementById('dob').focus();
        return;
    }
    if (email === '') {
        alert('Please enter your email address.');
        document.getElementById('email').focus();
        return;
    }
    if (fatherFirstName === '') {
        alert('Please enter your fatherFirstName.');
        document.getElementById('fatherFirstName').focus();
        return;
    }
    if (fatherLastName === '') {
        alert('Please enter your fatherLastName.');
        document.getElementById('fatherLastName').focus();
        return;
    }
    if ( motherFirstName=== '') {
    alert('Please enter your motherFirstName.');
    document.getElementById('motherFirstName').focus();
    return;
  }
  if ( motherLastName=== '') {
    alert('Please enter your motherLastName.');
    document.getElementById(' motherLastName').focus();
    return;
  }
  if ( gender=== '') {
    alert('Please enter your gender.');
    document.getElementById(' gender').focus();
    return;
  }
  if ( nationality=== '') {
    alert('Please enter your nationality.');
    document.getElementById('nationality').focus();
    return;
  }
   if (address1 === '') {
    alert('Please enter your present address.');
    document.getElementById(' address1 ').focus();
    return;
  }
  if (address2 === '') {
    alert('Please enter your local address.');
    document.getElementById(' address2 ').focus();
    return;
  }
  if (city === '') {
    alert('Please enter your city address.');
    document.getElementById('city  ').focus();
    return;
  }
   if (state === '') {
    alert('Please enter your state.');
    document.getElementById('state ').focus();
    return;
  }
   if (  city === '') {
    alert('Please enter your city.');
    document.getElementById('city  ').focus();
    return;
  }
  if (zipcode=== '') {
    alert('Please enter your zipcode.');
    document.getElementById('zipcode').focus();
    return;
  }
  if (phone === '') {
    alert('Please enter your phone number.');
    document.getElementById('phone  ').focus();
    return;
  }
  
  if (hscInstitution=== '') {
    alert('Please enter your hscInstitution.');
    document.getElementById('hscInstitution ').focus();
    return;
  }
  if (  hscBoard=== '') {
    alert('Please enter your hscBoard.');
    document.getElementById('hscBoard ').focus();
    return;
  }
  if (  hscScore=== '') {
    alert('Please enter your hscScore.');
    document.getElementById('hscScore  ').focus();
    return;
  }
  if (  sscInstitution=== '') {
    alert('Please enter your sscInstitution.');
    document.getElementById('sscInstitution').focus();
    return;
  }
   if (  sscBoard=== '') {
    alert('Please enter your sscboard.');
    document.getElementById('sscBoard').focus();
    return;
  } if (  sscScore === '') {
    alert('Please enter your sscScore.');
    document.getElementById('sscScore ').focus();
    return;
  } if ( currentlyPursuing=== '') {
    alert('Please enter your currentlyPursuing.');
    document.getElementById('currentlyPursuing').focus();
    return;
  } if (   currentInstitution=== '') {
    alert('Please enter your currentInstitution.');
    document.getElementById(' currentInstitution').focus();
    return;
  }
  if (   overallPercentage=== '') {
    alert('Please enter your overallPercentage.');
    document.getElementById(' overallPercentage').focus();
    return;
  }
  if (   currentBacklog === '') {
    alert('Please enter your currentBacklog.');
    document.getElementById(' currentBacklog ').focus();
    return;
  }
  if (    photo === '') {
    alert('Please uplode your photo.');
    document.getElementById(' photo ').focus();
    return;
  }
  if (   hsc=== '') {
    alert('Please uplode your hsc memo..');
    document.getElementById(' hsc').focus();
    return;
  }
  if (   ssc=== '') {
    alert('Please uplode your ssc memo.');
    document.getElementById(' ssc').focus();
    return;
  }
  if (   all=== '') {
    alert('Please uplode your all marks memo.');
    document.getElementById(' all').focus();
    return;
  }
  const userData = {
    firstName,
    lastName,
    dob,
    email,
    fatherFirstName,
    fatherLastName,
    motherFirstName,
    motherLastName,
    gender,
    nationality,
    address1,
    address2,
    city,
    state,
    zipcode,
    phone,
    hscInstitution,
    hscBoard,
    hscScore,
    sscInstitution,
    sscBoard,
    sscScore,
    currentlyPursuing,
    currentInstitution,
    overallPercentage,
    currentBacklog,
    photo,
    hsc,
    ssc,
    all,
  };
 
  localStorage.setItem('userData', JSON.stringify(userData))
  
    alert('Form submitted successfully!');
    return true;

}