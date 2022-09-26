var figures = [{
  name: 'Square',
  parameter: {
    s: '7'
  },
  unit: 'm',
  area: '49',
  perimeter: '28',
  change: {
    area:{
      unit: 'dm',
      value: '4900'
    },
    perimeter:{
      unit: 'dm',
      value: '280'
    }
  }
},
{
  name: 'Rectangle',
  parameter: {
    l: '600',
    w: '2'
  },
  unit: 'cm',
  area: '1200',
  perimeter: '1204',
  change: {
    area:{
      unit: 'dm',
      value: '12'
    },
    perimeter:{
      unit: 'dm',
      value: '120.4'
    }
  }
},
{
  name: 'Trapezium',
  parameter: {
    a: '6',
    b: '12',
    c: '13',
    d: '13',
    h: '2'
  },
  unit: 'm',
  area: '18',
  perimeter: '44',
  change: {
    area:{
      unit: 'cm',
      value: '180000'
    },
    perimeter:{
      unit: 'km',
      value: '0.044'
    }
  }
}
]


describe('GeoKids App Testing', () => {
  figures.forEach(fig =>{
    it('Area of a ' + fig.name.toLowerCase(), () => {
      cy.visit('/');
      cy.get('[data-cy="figure"]').select(fig.name);
      cy.get('[data-cy="parameter-unit"]').select(fig.unit);
      type ObjectKey = keyof typeof fig.parameter;
      var parameters = Object.keys(fig.parameter);
      for(let i =0; i < parameters.length; i++){
        var p = parameters[i] as ObjectKey;
        cy.get('[data-cy="' + p + '"]').type(<string>fig.parameter[p])
      }
      cy.get('[data-cy="submit"]').click();
      cy.get('[data-cy="perimeter"]').then(($field)=>{
        expect($field.text()).equal(fig.perimeter + " " + fig.unit);
      })
      cy.get('[data-cy="perimeter-units"]').select(fig.change.perimeter.unit);
      cy.get('[data-cy="perimeter"]').then(($field)=>{
        expect($field.text()).equal(fig.change.perimeter.value + " " + fig.change.perimeter.unit);
      })
      cy.get('[data-cy="area"]').then(($field)=>{
        expect($field.text()).equal(fig.area + " " + fig.unit + "²");
      })
      cy.get('[data-cy="area-units"]').select(fig.change.area.unit);
      cy.get('[data-cy="area"]').then(($field)=>{
        expect($field.text()).equal(fig.change.area.value + " " + fig.change.area.unit + "²");
      })
    })
  })
  
})

