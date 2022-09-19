// Load a list of available expressions based on the Distillery selected
const loadExpressions = async () => {
  var x = document.getElementById('distilleryList').value;

  if (x) {
    const response = await fetch(`/api/expressions/list/${x}`);
    const data = await response.json();

    var options = `<option value="" selected disabled hidden>Select Expression</option>`;
    
    data.forEach(function (expression) {
        options += `<option value="${expression.id}">${expression.name}</option>`
    });

    document.getElementById('expressionList').innerHTML = options;

  };
};

// Gather entered journal values and submit them
const newJournalSubmit = async (event) => {
  event.preventDefault();

// Color chosen
  let color = "";
  const colorFinder = () => {
    const ele = document.getElementsByName('colorRadios');

    for(i = 0; i < ele.length; i++) {
      if(ele[i].checked) {
      color = ele[i].value;
    }}
  };
  colorFinder();

  // Flavors Values
  const winey = document.getElementById('wineyRange').value;
  const woody = document.getElementById('woodyRange').value;
  const sulphury = document.getElementById('sulphuryRange').value;
  const feinty = document.getElementById('feintyRange').value;
  const peaty = document.getElementById('peatyRange').value;
  const floral = document.getElementById('floralRange').value;
  const fruity = document.getElementById('fruityRange').value;
  const malty = document.getElementById('maltyRange').value;
  const notes = document.getElementById('notesText').value;

  // Rating Value
  const rating = document.getElementById('overallRange').value;

  // Distillery ID #
  const distilleryEl = document.getElementById('distilleryList');
  const distillery_id = distilleryEl.options[distilleryEl.selectedIndex].value;
  
  // Expression ID #
  const expressionEl = document.getElementById('expressionList');
  const expression_id = expressionEl.options[expressionEl.selectedIndex].value;

  // If we have values for everything, submit the post request to create the new journal
  if (color && winey && woody && sulphury && feinty && peaty && floral && fruity && malty && rating && distillery_id && expression_id) {
    const response = await fetch(`/api/journals`, {
      method: 'POST',
      body: JSON.stringify({ color, winey, woody, sulphury, feinty, peaty, floral, fruity, malty, notes, rating, distillery_id, expression_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // If we get an "ok" response to our post, then load the homepage
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create journal entry');
    }
  }
};

const button = document.getElementById('new-journal-submit');
if(button){
  button.addEventListener('click', newJournalSubmit);
}