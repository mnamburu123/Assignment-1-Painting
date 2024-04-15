class MyTriangle {
    constructor(position, color, size, rotate) {
        this.type = 'triangle';
        this.position = position;
        this.color = color;
        this.size = size;
        this.rotate = rotate; // Rotation angle in degrees
    }

    render() {
        var xy = this.position;
        var rgba = this.color;
        var size = this.size;
        var angle = this.rotate;

        // Pass the color of a point to u_FragColor variable
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        gl.uniform1f(u_Size, size);
        var d = this.size / 200.0;

        var radians = angle * Math.PI / 180;
        var cosni = Math.cos(radians);
        var sini = Math.sin(radians);

        var x1 = xy[0];
        var y1 = xy[1];
        var x2 = xy[0] + d;
        var y2 = xy[1];
        var x3 = xy[0];
        var y3 = xy[1] + d;

        var rotatedX1 = x1 * cosni - y1 * sini;
        var rotatedY1 = x1 * sini + y1 * cosni;
        var rotatedX2 = x2 * cosni - y2 * sini;
        var rotatedY2 = x2 * sini + y2 * cosni;
        var rotatedX3 = x3 * cosni - y3 * sini;
        var rotatedY3 = x3 * sini + y3 * cosni;

        drawTriangle([rotatedX1, rotatedY1, rotatedX2, rotatedY2, rotatedX3, rotatedY3]);
    }
}

function drawTriangle(vertices) {
    var n = 3;
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);

    // Assign the buffer object to a_Position variable
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
  
    // Enable the assignment to a_Position variable
    gl.enableVertexAttribArray(a_Position);
    gl.drawArrays(gl.TRIANGLES, 0, n);
}
