export enum AccountActionTitles {
    VIEW = 'View',
    EDIT = 'Edit',
};

export interface IAccountAction {
    title: AccountActionTitles;
    url: string;
}

export interface IAccountData {
    id: string | number;
    name: string;
    createdOn: string;
    owner: string;
    actions?: IAccountAction[];
    updatedOn?: string;
}