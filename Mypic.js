class Mypic {
    constructor() {
        this.type = 'Mypic';
    }

    render() {
        var triangle1 = new MyTriangle([0.8,0.8], [1.0, 0.0, 0.0, 1.0], 50.0, -92).render(); 
        var triangle2 = new MyTriangle([0.8,0.8], [1.0, 0.0, 0.0, 1.0], 50.0, 92).render(); 
        var triangle3 = new MyTriangle([0,0], [0.0, 1.0, 0.0, 1.0], 90.0, -135).render(); 
        var triangle4 = new MyTriangle([0,0], [0.647, 0.165, 0.165, 1.0], 90.0, 45).render();
        var triangle5 = new MyTriangle([-0.6,-0.6], [1.0, 1.0, 0.0, 1.0], 90.0, -135).render(); 
        var triangle6 = new MyTriangle([0,-0.7], [0.0, 0.0, 1.0, 1.0], 30.0, 135).render(); 
        var triangle7 = new MyTriangle([0.7,0], [0.0, 0.0, 1.0, 1.0], 30.0, 135).render(); 
        var triangle8 = new MyTriangle([0.05,-0.6], [0.0, 0.0, 1.0, 1.0], 50.0, -60).render();
        var triangle9 = new MyTriangle([-0.55,-0.2], [0.0, 0.0, 1.0, 1.0], 50.0, 125).render(); 
        var triangle10 = new MyTriangle([0.8,0.8],  [1.0, 0.0, 0.0, 1.0], 50.0, 180).render(); 
        var triangle11 = new MyTriangle([-0.8,-0.8],  [1.0, 0.0, 0.0, 1.0], 50.0, -180).render(); 
        var triangle12 = new MyTriangle([0.6,0.6],  [1.0, 0.0, 0.0, 1.0], 50.0, -92).render(); 
        var triangle13 = new MyTriangle([0.6,0.6],  [1.0, 0.0, 0.0, 1.0], 50.0, 92).render(); 
        var triangle14 = new MyTriangle([0.6,0.6],  [1.0, 0.0, 0.0, 1.0], 50.0, 180).render(); 
        var triangle15 = new MyTriangle([-0.6,-0.6],  [1.0, 0.0, 0.0, 1.0], 50.0, 180).render(); 
        var triangle16 = new MyTriangle([-0.7,0], [0.0, 0.0, 1.0, 1.0], 60.0, 200).render(); 
        var triangle17 = new MyTriangle([0.1,-0.5], [0.0, 0.0, 1.0, 1.0], 10.0, 500).render(); 
        var triangle18 = new MyTriangle([-0.1,0.45], [0.0, 0.0, 1.0, 1.0], 10.0, 730).render(); 
        var triangle19 = new MyTriangle([-0.3,-0.6], [0.0, 0.0, 1.0, 1.0], 60.0, -800).render(); 
        var triangle20 = new MyTriangle([0.1,0.1], [0.0, 0.0, 1.0, 1.0], 20.0, 45).render();  

    }
}