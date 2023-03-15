import { SvelteComponentTyped } from "svelte";
import type { Firestore, Query } from 'firebase/firestore';
declare const __propDef: {
    props: {
        ref: string | Query;
        firestore?: Firestore | undefined;
        startWith?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            data: any[];
            ref: Query | null;
            count: number;
        };
        loading: object;
    };
};
export type CollectionGroupProps = typeof __propDef.props;
export type CollectionGroupEvents = typeof __propDef.events;
export type CollectionGroupSlots = typeof __propDef.slots;
export default class CollectionGroup extends SvelteComponentTyped<CollectionGroupProps, CollectionGroupEvents, CollectionGroupSlots> {
}
export {};
