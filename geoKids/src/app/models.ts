export interface Operation{
    parameter: Array<string>;
    formula: string
}

export interface UnitConversion{
    cm: string;
    dm: string;
    m: string;
    km: string;
}



export interface Geometry {
    id: string;
    name: string;
    parameter: Array<string>;
    area: Operation;
    perimeter: Operation;
}

export interface Units {
    id: string;
    name: string;
    conversion: { 
        length: UnitConversion,
        area: UnitConversion
    };
}
