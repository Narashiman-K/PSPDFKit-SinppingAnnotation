import React, { ForwardedRef, Key } from 'react';
import { I18nResult, StylingProps, PreviewProps, ColorPreset } from '@baseline-ui/core';
import { Block } from '@baseline-ui/blocks';
import { Messages } from '@baseline-ui/translations';

type State<T> = {
    get: <K extends keyof T>(key: K) => T[K];
    set: <K extends keyof T>(key: K, value: T[K]) => void;
    toJS: () => T;
};
interface RecipeResult<T> {
    intl: I18nResult<Messages>;
    state: State<T>;
    device: "mobile" | "tablet" | "desktop";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IRecord = Record<string, any>;

interface BaseChildrenArgs<T = Record<string, never>>
  extends RecipeResult<T> {
  /** The block component that can be modified */
  ui: Block;

  /** The ref of the block component */
  ref?: ForwardedRef<HTMLDivElement>;
}

interface BaseRecipeProps<
  State extends IRecord,
  ChildArgs extends IRecord,
> {
  /**
   * The initial state of the component. This is useful for controlling the
   * component.
   */
  initialState?: Partial<State>;

  /**
   * The state of the component. This is useful for controlling the component.
   * If this is provided, the property with non-defined values will be
   * controlled.
   */
  state?: Partial<State>;

  /** The function that is called when the state of the component changes. */
  onStateChange?: (changes: Partial<State>) => void;

  /** Optional prop for rendering child components. */
  children?: (props: ChildArgs) => React.ReactElement;
}

interface SharedProps$3 extends StylingProps {
    /**
     * The items to display in the list. Each item can be an image, svg, or text.
     * Each item must have a unique id. The signature list will display the items
     * in the order they are provided.
     */
    items: (PreviewProps & {
        id: Key;
    })[];
    /**
     * Callback fired when the user clicks the button to add a signature to the
     * list.
     */
    onAdd?: () => void;
    /**
     * Callback fired when the user clicks the add button on a preview. The delete
     * button is only displayed when this callback is provided.
     *
     * @param id
     */
    onAddFromPreview?: (id: Key) => void;
    /**
     * Callback fired when the user clicks the remove button on a preview.
     *
     * @param id
     */
    onRemoveFromPreview?: (id: Key) => void;
    /** Callback fired when the user clicks the cancel button. */
    onCancel?: () => void;
    /** The id of the title element. */
    titleId?: string;
    /**
     * The variant of the component. This changes the styling of the component.
     *
     * @default "wide"
     */
    variant?: "wide" | "narrow";
}
type ChildrenArgs$3 = SharedProps$3 & BaseChildrenArgs<IRecord>;
interface SignaturesListProps extends SharedProps$3, BaseRecipeProps<IRecord, ChildrenArgs$3> {
}

declare const SignaturesList: React.ForwardRefExoticComponent<SignaturesListProps & React.RefAttributes<HTMLDivElement>>;

declare const SignaturesListBlock: ({ className, style, titleId, items, ref, onAdd, onAddFromPreview, onRemoveFromPreview, onCancel, variant, intl: { formatMessage }, }: Omit<ChildrenArgs$3, "ui">) => any;

declare enum ALLOWED_TABS {
    DRAW = "DRAW",
    TYPE = "TYPE",
    IMAGE = "IMAGE"
}
interface InternalState$2 extends IRecord {
    /**
     * The color of an object. This is a hex value that is applied to the points
     * in `FreehandCanvas` or `SignatureTextInput`
     */
    color: string;
    /**
     * Represents the signature of a variable that can have three different types:
     * "type", "draw", or "image".
     *
     * @example
     *   const signature: Signature = { type: "type", value: "example" };
     *
     * @example
     *   const signature: Signature = {
     *     type: "draw",
     *     value: [
     *       [
     *         [1, 2],
     *         [3, 4],
     *       ],
     *       [
     *         [5, 6],
     *         [7, 8],
     *       ],
     *     ],
     *   };
     *
     * @example
     *   const signature: Signature = { type: "image", value: new File() };
     */
    signature?: {
        type: "type";
        value: string;
    } | {
        type: "draw";
        value: number[][][];
    } | {
        type: "image";
        value: File;
    };
    /**
     * The selectedFont variable represents the currently selected font for text
     * input.
     */
    selectedFont: string;
    /**
     * Indicates whether the signature should be stored or not.
     *
     * @default false
     */
    shouldStoreSignature: boolean;
}
interface SharedProps$2 extends StylingProps {
    /** The default text in the signature input. */
    defaultInputText?: string;
    /**
     * Indicates whether it is possible to store the signature or not.
     *
     * @default true
     */
    allowStoringSignature?: boolean;
    /**
     * An array of color presets. If not provided, the default color presets will
     * be used.
     *
     * ```js
     * [
     *   { color: "#000000", label: "Black" },
     *   { color: "#2293fb", label: "Blue" },
     *   { color: "#4636e3", label: "Dark Blue" },
     * ];
     * ```
     */
    colorPresets: ColorPreset[];
    /**
     * The tabs that should be shown in the signature dialog. The tabs are
     * represented as a string of the tab names. The following tabs are available:
     * "DRAW", "TYPE", and "IMAGE".
     *
     * @default ["DRAW", "TYPE", "IMAGE"]
     */
    allowedTabs?: (keyof typeof ALLOWED_TABS)[];
    /**
     * An array of font names. Make sure those fonts are available in the
     * application. The names should be the same as the ones used in the
     * application.
     */
    fonts: string[];
    /** The title ID of the component. This is used for accessibility purposes. */
    titleId?: string;
    /** Callback function that is called when a close event is triggered. */
    onCloseRequest: () => void;
    /** Callback function that is called when a signature is added. */
    onAdd: (state: InternalState$2 & {
        canvasSize: {
            height: number;
            width: number;
        } | undefined;
    }) => void;
    /**
     * The variant of the variable.
     *
     * @typedef {"narrow" | "wide"} Variant
     */
    variant?: "narrow" | "wide";
}
interface ChildrenArgs$2 extends SharedProps$2, BaseChildrenArgs<InternalState$2> {
}
interface CreateSignatureProps extends SharedProps$2, BaseRecipeProps<InternalState$2, ChildrenArgs$2> {
}

declare const CreateSignature: React.ForwardRefExoticComponent<CreateSignatureProps & React.RefAttributes<HTMLDivElement>>;

interface InternalState$1 extends IRecord {
    text?: string;
    includeDate: boolean;
    includeTime: boolean;
    color: string;
}
interface SharedProps$1 extends StylingProps {
    /**
     * The `id` of the title of the component. This is useful for accessibility
     * when the component is used in a dialog.
     */
    titleId?: string;
    /** Callback function that is called when a close event is triggered. */
    onCloseRequest?: () => void;
    /**
     * Callback function that is called when a stamp is added.
     *
     * @param options
     */
    onCreate: (options: {
        text?: string;
        subText?: string;
        color: string;
        width: number;
    }) => void;
    /** An optional array of color presets. */
    colorPresets: {
        color: string;
        label: string;
    }[];
    /**
     * An optional function that returns a lighter variant of the color provided.
     * By default, the color is lightened by 80%.
     *
     * @param color
     */
    getLighterVariant?: (color: string) => string;
    /**
     * A callback function that is called when the user clicks on the "Use
     * existing stamp" button.
     */
    onExistingStampPress?: () => void;
}
type ChildrenArgs$1 = SharedProps$1 & BaseChildrenArgs<InternalState$1>;
interface CreateStampProps extends SharedProps$1, BaseRecipeProps<InternalState$1, ChildrenArgs$1> {
}

declare const CreateStamp: React.ForwardRefExoticComponent<CreateStampProps & React.RefAttributes<HTMLDivElement>>;

interface InternalState extends IRecord {
}
interface SharedProps extends StylingProps, Omit<SignaturesListProps, "children" | "onRemoveFromPreview" | "variant" | "initialState" | "onAddFromPreview" | "disabledActions" | "onAdd"> {
    /**
     * Callback fired when the user clicks the preview
     *
     * @param id
     */
    onAdd?: (id: Key) => void;
    /** Callback fired when the user clicks the custom stamp button */
    onCustomStampPress?: () => void;
}
type ChildrenArgs = SharedProps & BaseChildrenArgs<InternalState>;
interface StampsListProps extends SharedProps, BaseRecipeProps<InternalState, ChildrenArgs> {
}

declare const StampsList: React.ForwardRefExoticComponent<StampsListProps & React.RefAttributes<HTMLDivElement>>;

export { CreateSignature, type CreateSignatureProps, CreateStamp, type CreateStampProps, SignaturesList, SignaturesListBlock, type SignaturesListProps, StampsList, type StampsListProps };
