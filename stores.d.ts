import type { Firestore, Query, CollectionReference, DocumentReference } from 'firebase/firestore';
import { type Auth } from 'firebase/auth';
import type { User } from 'firebase/auth';
/**
 * @param  {Firestore} firestore firebase firestore instance
 * @param  {string|DocumentReference} ref document path or reference
 * @param  {any} startWith optional default data
 * @returns a store with realtime updates on document data
 */
export declare function docStore<T>(firestore: Firestore, ref: string | DocumentReference, startWith?: T): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<T>, invalidate?: ((value?: T | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    ref: null;
    id: string;
} | {
    subscribe: (this: void, run: import("svelte/store").Subscriber<T | null>, invalidate?: ((value?: T | null | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    ref: DocumentReference<import("@firebase/firestore").DocumentData>;
    id: string;
};
/**
 * @param  {Firestore} firestore firebase firestore instance
 * @param  {string|Query} ref collectionGroup ID, or a query
 * @param  {[]} startWith optional default data
 * @returns a store with realtime updates on collection group data
 */
export declare function collectionGroupStore<T>(firestore: Firestore, ref: string | Query, startWith?: T[]): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<T[]>, invalidate?: ((value?: T[] | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    ref: null;
} | {
    subscribe: (this: void, run: import("svelte/store").Subscriber<T[]>, invalidate?: ((value?: T[] | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    ref: Query<import("@firebase/firestore").DocumentData>;
};
/**
 * @param  {Firestore} firestore firebase firestore instance
 * @param  {string|Query|CollectionReference} ref collection path, reference, or query
 * @param  {[]} startWith optional default data
 * @returns a store with realtime updates on collection data
 */
export declare function collectionStore<T>(firestore: Firestore, ref: string | Query | CollectionReference, startWith?: T[]): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<T[]>, invalidate?: ((value?: T[] | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    ref: null;
} | {
    subscribe: (this: void, run: import("svelte/store").Subscriber<T[]>, invalidate?: ((value?: T[] | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    ref: Query<import("@firebase/firestore").DocumentData>;
};
/**
 * @param  {Auth} auth firebase auth instance
 * @returns a store with the current firebase user
 */
export declare function userStore(auth: Auth): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<User | null | undefined>, invalidate?: ((value?: User | null | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
};
export declare const sdk: import("svelte/store").Writable<{
    auth: Auth;
    firestore: Firestore;
}>;
