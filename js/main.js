function load() {
    var greeting = 'Hello ';
    var name = prompt('Please enter your name:');
    var message = ', please check your order.';
    var welcome = greeting + name + message;

    var sign = prompt('Welcome ' + name + ', enter a name that you want to be placed on the tiles.');
    var tiles = sign.length;
    var sub = tiles * 5;
    var shipp = 7;
    var total = sub + shipp;

    var msg = document.getElementById('greeting').textContent = welcome;
    var msgSign = document.getElementById('userSign').textContent = sign;
    var msgTiles = document.getElementById('tiles').textContent = tiles;
    var msgSub = document.getElementById('subTotal').textContent = '$' + sub;
    var msgShipp = document.getElementById('shipping').textContent = '$' + shipp;
    var msgTotal = document.getElementById('grandTotal').textContent = '$' + total;
}

window.onload = load;