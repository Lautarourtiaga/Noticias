export default interface BasicApi <entity>{
    data: Array<entity>;
    list: (filtro?: any) => Array<entity>;
    add: (newResource: entity) => entity;
    put: (id: number,properties: any) => entity;
}