function displayResult()
      {
        var length = document.getElementById('length').value;
        var width = document.getElementById('width').value;
        var height = document.getElementById('height').value;
        var result = length * width * height;
        document.getElementById('result').innerHTML = result;
      }