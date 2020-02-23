export default interface News {
    id: number;
    title: string;
    body: string;
    date: Date;
    authors: Array<string>;
}