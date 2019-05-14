var $block = document.getElementById('block');
var $table = document.createElement('table');

for (var i = 0; i <= 9; i++) {
    var $row = document.createElement('tr');

    for (var j = 0; j <= 9; j++) {
        var $cell = document.createElement('td'); 

        if ((i == 0) || (i == 9)) {
            if ((j !== 0) && (j !== 9)) {
                switch (j) {
                    case 1:
                        $cell.textContent = 'A';
                        break;
                    case 2:
                        $cell.textContent = 'B';
                        break;
                    case 3:
                        $cell.textContent = 'C';
                        break;
                    case 4:
                        $cell.textContent = 'D';
                        break;
                    case 5:
                        $cell.textContent = 'E';
                        break;
                    case 6:
                        $cell.textContent = 'F';
                        break;
                    case 7:
                        $cell.textContent = 'G';
                        break;
                    case 8:
                        $cell.textContent = 'H';
                        break;
                }
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