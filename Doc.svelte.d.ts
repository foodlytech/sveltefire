import { SvelteComponentTyped } from "svelte";
import type { DocumentReference, Firestore } from 'firebase/firestore';
declare const __propDef: {
    props: {
        ref: string | DocumentReference;
        firestore?: Firestore | undefined;
        startWith?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            data: any;
            ref: DocumentReference | null;
        };
        loading: object;
    };
};
export type DocProps = typeof __propDef.props;
export type DocEvents = typeof __propDef.events;
export type DocSlots = typeof __propDef.slots;
export default class Doc extends SvelteComponentTyped<DocProps, DocEvents, DocSlots> {
}
export {};
