        function showContent(contentId) {
            const content = document.getElementById('contentContainer');

            switch (contentId) {
                case 'addMember':
                    var contentContainer = document.getElementById('contentContainer');
                    contentContainer.innerHTML="";
                    // Create the input fields
                    var nameInput = document.createElement('input');
                    nameInput.type = 'text';
                    nameInput.placeholder = 'Name';
                    var ageInput = document.createElement('input');
                    ageInput.type = 'text';
                    ageInput.placeholder = 'Age';

                    var phoneInput = document.createElement('input');
                    phoneInput.type = 'text';
                    phoneInput.placeholder = 'Phone Number';

                    var genderInput = document.createElement('input');
                    genderInput.type = 'text';
                    genderInput.placeholder = 'Gender';

                    // Create the submit button
                    var submitButton = document.createElement('button');
                    submitButton.textContent = 'Submit';

                    // Add event listener to the submit button
                    submitButton.addEventListener('click', function () {
                        // Get the values from the input fields
                        var name = nameInput.value;
                        var age = ageInput.value;
                        var phoneNumber = phoneInput.value;
                        var gender = genderInput.value;

                        // Do something with the values (e.g., submit the form)
                        console.log('Name:', name);
                        console.log('Age:', age);
                        console.log('Phone Number:', phoneNumber);
                        console.log('Gender:', gender);

                        // Clear the input fields
                        nameInput.value = '';
                        ageInput.value = '';
                        phoneInput.value = '';
                        genderInput.value = '';
                    });

                    contentContainer.appendChild(nameInput);
                    contentContainer.appendChild(ageInput);
                    contentContainer.appendChild(phoneInput);
                    contentContainer.appendChild(genderInput);
                    contentContainer.appendChild(submitButton);
                    contentContainer.className='cont';

                    break;
                case 'updateDelete':
                    // Get the reference to the contentContainer div
                    var contentContainer = document.getElementById('contentContainer');
                     contentContainer.innerHTML = "";
                    // Create the input field for member ID
                    var memberIdInput = document.createElement('input');
                    memberIdInput.type = 'text';
                    memberIdInput.placeholder = 'Member ID';

                    // Create the submit button
                    var submitButton = document.createElement('button');
                    submitButton.textContent = 'Delete Member';
                    submitButton.style="background-color:red";

                    // Add event listener to the submit button
                    submitButton.addEventListener('click', function () {
                        // Get the value from the member ID input field
                        var memberId = memberIdInput.value;

                        // Do something with the member ID value (e.g., submit the form)
                        console.log('Member ID:', memberId);

                        // Clear the input field
                        memberIdInput.value = '';
                    });

                    // Append the input field and submit button to the contentContainer div
                    contentContainer.appendChild(memberIdInput);
                    contentContainer.appendChild(submitButton);
                       contentContainer.className = 'cont';
                       break;
                case 'createBills':
                    var contentContainer = document.getElementById('contentContainer');
                    contentContainer.innerHTML = "";
                    // Create the input field for member ID
                    var memberIdInput = document.createElement('input');
                    memberIdInput.type = 'text';
                    memberIdInput.placeholder = 'Member ID';

                    // Create the submit button
                    var submitButton = document.createElement('button');
                    submitButton.textContent = 'Generate Bill';

                     const bill = document.createElement('p');
                        bill.innerHTML="Total Bill : 2 months | $230";

                    submitButton.addEventListener('click', function () {
                        // Get the value from the member ID input field
                        var memberId = memberIdInput.value;

                        
                        const memberIdadd = document.createElement('p');
                        memberIdadd.innerHTML = "Member ID :" + memberId;
                        console.log('Member ID:', memberId);
                        bill.appendChild(memberIdadd);
                         contentContainer.appendChild(bill);
                    });

                    contentContainer.appendChild(memberIdInput);
                    contentContainer.appendChild(submitButton);
                    contentContainer.className = 'cont';
                    break;
                default:
                    content = '';
                    break;
            }

            
        }
