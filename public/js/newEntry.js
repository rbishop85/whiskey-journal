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
