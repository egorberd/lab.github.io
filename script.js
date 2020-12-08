var a11, a12, a13, a21, a22, a23, a31, a32, a33, b1, b2, b3;

function determinant(a11, a12, a13, a21, a22, a23, a31, a32, a33) {

    var d = a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32;
    d = d - a13 * a22 * a31 - a12 * a21 * a33 - a11 * a23 * a32;

    return d
}

function kramer(a11, a12, a13, a21, a22, a23, a31, a32, a33) {
    var d, d1, d2, d3;

    d = determinant(a11, a12, a13, a21, a22, a23, a31, a32, a33);

    d1 = determinant(b1, a12, a13, b2, a22, a23, b3, a32, a33);

    d2 = determinant(a11, b1, a13, a21, b2, a23, a31, b3, a33);

    d3 = determinant(a11, a12, b1, a21, a22, b2, a31, a32, b3);

    x1 = d1 / d;
    document.getElementById('x1').value = x1;

    x2 = d2 / d;
    document.getElementById('x2').value = x2;

    x3 = d3 / d;
    document.getElementById('x3').value = x3;
}

function generate() {
    a11 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('num1').value = a11;
    console.log("a11 = " + a11);

    a12 = document.getElementById('num2').value = Math.floor(Math.random() * 10) + 1;
    document.getElementById('num2').value = a12;

    a13 = document.getElementById('num3').value = Math.floor(Math.random() * 10) + 1;
    document.getElementById('num3').value = a13;

    a21 = document.getElementById('num4').value = Math.floor(Math.random() * 10) + 1;
    document.getElementById('num4').value = a21;

    a22 = document.getElementById('num5').value = Math.floor(Math.random() * 10) + 1;
    document.getElementById('num5').value = a22;

    a23 = document.getElementById('num6').value = Math.floor(Math.random() * 10) + 1;
    document.getElementById('num6').value = a23;

    a31 = document.getElementById('num7').value = Math.floor(Math.random() * 10) + 1;
    document.getElementById('num7').value = a31;

    a32 = document.getElementById('num8').value = Math.floor(Math.random() * 10) + 1;
    document.getElementById('num8').value = a32;

    a33 = document.getElementById('num9').value = Math.floor(Math.random() * 10) + 1;
    document.getElementById('num9').value = a33;

    b1 = document.getElementById('num=1').value = Math.floor(Math.random() * 10);
    b2 = document.getElementById('num=2').value = Math.floor(Math.random() * 10);
    b3 = document.getElementById('num=3').value = Math.floor(Math.random() * 10);

    if ((a11 / a21) == (a12 / a22) != (b1 / b2)) {
        document.getElementById('x1').value = "Нет решений";
        document.getElementById('x2').value = "Нет решений";
        document.getElementById('x3').value = "Нет решений";
    }
    kramer(a11, a12, a13, a21, a22, a23, a31, a32, a33);
}
