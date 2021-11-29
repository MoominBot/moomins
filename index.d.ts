declare module "@moominbot/moomins" {
    export interface Moomin {
        name: string;
        tags: string[];
        description: string;
    }

    export const characters: Moomin[];
}