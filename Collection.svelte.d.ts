import { SvelteComponentTyped } from "svelte";
import type { CollectionReference, Firestore, Query } from 'firebase/firestore';
declare const __propDef: {
    props: {
        ref: string | CollectionReference | Query;
        firestore?: Firestore | undefined;
        startWith?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            data: any[];
            ref: CollectionReference | Query | null;
            count: number;
        };
        loading: object;
    };
};
export type CollectionProps = typeof __propDef.props;
export type CollectionEvents = typeof __propDef.events;
export type CollectionSlots = typeof __propDef.slots;
export default class Collection extends SvelteComponentTyped<CollectionProps, CollectionEvents, CollectionSlots> {
}
export {};
