
// Create a delete fetch request based on the data-id of the clicked delete button

let capitalizeUsername = "";

// Function to capitalize the first letter of a given username
const capitalizeFirstLetter = () => {
  capitalizeUsername = username.charAt(0).toUpperCase() + username.slice(1);
}

capitalizeFirstLetter();

// Insert that capitalize username into the page
document.getElementById('welcome-message').innerHTML = ("Welcome, " + capitalizeUsername + "!");

// Function that pulls the data-id from a delete button and uses it to submit a "Delete" fetch request for that journal ID and then reloads the page

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/journals/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete journal entry');
      }
    }
  };
  
  document
    .querySelector('.journal-list')
    .addEventListener('click', delButtonHandler);