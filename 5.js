var $block = document.getElementById('block');
var $table = document.createElement('table');
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

for (var i = 0; i <= 9; i++) {
    var $row = document.createElement('tr');

    for (var j = 0; j <= 9; j++) {
        var $cell = document.createElement('td'); 

        if ((i == 0) || (i == 9)) {
            if ((j !== 0) && (j !== 9)) {
                $cell.textContent = letters[j-1];
            }
        } else {
            if ((j == 0) || (j == 9)) {
                $cell.textContent = i;
            } else {
                if ((i+j) % 2 == 0) {
                    $cell.setAttribute('class', 'white');
                } else 
                    $cell.setAttribute('class', 'black');
            }
        }
        $row.appendChild($cell);
    }
    $table.appendChild($row);
}
$block.appendChild($table);