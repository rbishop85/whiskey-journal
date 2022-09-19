// Create a delete fetch request based on the data-id of the clicked delete button
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