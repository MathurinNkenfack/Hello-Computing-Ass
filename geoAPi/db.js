const geometries = [
    {
        id:"g1",
        name:"Square",
        parameter: ["s"],
        area: {
            parameter: ["s"],
            formula: "s*s"
        }, 
        perimeter:{
            parameter: ["s"],
            formula: "parseFloat(s)*4"
        }
    },
    {
        id:"g2",
        name:"Rectangle",
        parameter: ["l", "w"],
        area: {
            parameter: ["l", "w"],
            formula: "l*w"
        }, 
        perimeter:{
            parameter: ["l", "w"],
            formula: "2*(parseFloat(l) + parseFloat(w))"
        }
    },
    {
        id:"g3",
        name:"Circle",
        parameter: ["r"],
        area: {
            parameter: ["r"],
            formula: "Math.PI*(parseFloat(r)*parseFloat(r))"
        }, 
        perimeter:{
            parameter: ["r"],
            formula: "2*Math.PI*parseFloat(r)"
        }
    },
    {
        id:"g4",
        name:"Trapezium",
        parameter: ["a","b","c","d","h"],
        area: {
            parameter: ["a", "b", "h"],
            formula: "0.5*(parseFloat(a)+parseFloat(b))*parseFloat(h)"
        }, 
        perimeter:{
            parameter: ["a", "b", "c", "d"],
            formula: "parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d)"
        }
    },
    {
        id:"g5_1",
        name:"Right Angled Triangle",
        parameter: ["b","h","c",],
        area: {
            parameter: ["b", "h"],
            formula: "0.5*(parseFloat(b)*parseFloat(h))"
        }, 
        perimeter:{
            parameter: ["b", "h", "c"],
            formula: "parseFloat(b) + parseFloat(h) + parseFloat(c)"
        }
    },
    {
        id:"g5_2",
        name:"Equilateral Triangle",
        parameter: ["a"],
        area: {
            parameter: ["a"],
            formula: "0.433012702*(parseFloat(a)*parseFloat(a))"
        }, 
        perimeter:{
            parameter: ["a"],
            formula: "parseFloat(a)*3"
        }
    },
    {
        id:"g5_3",
        name:"Isosceles Triangle",
        parameter: ["a", "b"],
        area: {
            parameter: ["a", "b"],
            formula: "0.25*b*( Math.sqrt(Math.pow((2*parseFloat(a)), 2) - Math.pow(parseFloat(b), 2)))"
        }, 
        perimeter:{
            parameter: ["a", "b"],
            formula: "(2*parseFloat(a)) + parseFloat(b)"
        }
    },
    {
        id:"g5_4",
        name:"Scalene Triangle",
        parameter: ["a", "b", "c"],
        area: {
            parameter: ["a", "b", "c"],
            formula: "Math.sqrt(((parseFloat(a)+parseFloat(b)+parseFloat(c))/2)*((parseFloat(b)+parseFloat(c)-parseFloat(a))/2)*((parseFloat(a)+parseFloat(c)-parseFloat(b))/2)*((parseFloat(a)+parseFloat(b)-parseFloat(c))/2))"
        }, 
        perimeter:{
            parameter: ["a", "b", "c"],
            formula: "parseFloat(a) + parseFloat(b) + parseFloat(c)"
        }
    },

]

const units = [
    {
        id:"cm",
        name: "Centimeter",
        conversion:{
            length:{
                cm:"1",
                dm:'1e-1',
                m:'1e-2',
                km:'1e-5'
            },
            area:{
                cm:"1",
                dm:'1e-2',
                m:'1e-4',
                km:'1e-10'
            }
            
        }
    },
    {
        id:"dm",
        name: "Decimeter",
        conversion:{
            length:{
                cm:'1e1',
                dm:"1",
                m:'1e-1',
                km:'1e-4'
            },
            area:{
                cm:'1e2',
                dm:"1",
                m:'1e-2',
                km:'1e-8'
            }
        }
    },
    {
        id:"m",
        name: "Meter",
        conversion:{
            length:{
                cm:'1e2',
                dm:'1e1',
                m:"1",
                km:'1e-3'
            },
            area:{
                cm:'1e4',
                dm:'1e2',
                m:"1",
                km:'1e-6'
            }
            
        }
    },
    {
        id:"km",
        name: "Kilometer",
        conversion:{
            length:{
                cm:'1e5',
                dm:'1e4',
                m:'1e3',
                km:"1"
            },
            area:{
                cm:'1e10',
                dm:'1e8',
                m:'1e6',
                km:"1"
            }
            
        }
    },
    
]



module.exports = {geometries, units}