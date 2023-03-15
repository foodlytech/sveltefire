import { SvelteComponentTyped } from "svelte";
import type { Auth, User } from 'firebase/auth';
declare const __propDef: {
    props: {
        auth?: Auth | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        loading: object;
        default: {
            user: User;
        };
        signedOut: object;
    };
};
export type UserProps = typeof __propDef.props;
export type UserEvents = typeof __propDef.events;
export type UserSlots = typeof __propDef.slots;
export default class User extends SvelteComponentTyped<UserProps, UserEvents, UserSlots> {
}
export {};
