import React from 'react';
import { AriaLabelingProps } from '@react-types/shared';
import { AriaTextFieldOptions } from 'react-aria';
import { StylingProps, I18nResult, ReactionProps, AvatarProps, MenuProps } from '@baseline-ui/core';
import { Messages } from '@baseline-ui/translations';

interface SignatureTextInputProps extends StylingProps, Omit<AriaTextFieldOptions<"input">, "isRequired" | "isReadOnly" | "inputElementType" | "validationState" | "isInvalid" | "description" | "errorMessage" | keyof AriaLabelingProps> {
    /** The style object to apply to the input element. */
    inputStyle?: React.CSSProperties;
    /** The class name to apply to the input element. */
    inputClassName?: string;
    /** The clear button label. */
    clearLabel: string;
    /**
     * Whether the input is inline. This affects the styling of the input.
     *
     * @default true
     */
    isInline?: boolean;
    /** The label for the input. */
    label: string;
    /** The class name to apply to the footer element. */
    footerClassName?: string;
    /** The style object to apply to the footer element. */
    footerStyle?: React.CSSProperties;
}

declare const SignatureTextInput: React.ForwardRefExoticComponent<SignatureTextInputProps & React.RefAttributes<HTMLDivElement>>;

interface StateContainerProps<T extends Record<string, unknown>> {
    /**
     * The initial state of the container. This is an object with keys and values.
     * The values can be anything except for functions.
     */
    initialState?: T;
    /**
     * The children of the container. This is a function that receives the state
     * of the container.
     *
     * @example
     *   ```tsx
     *   <StateContainer initialState={{ isOpen: false }}>
     *     {({ get, set }) => (
     *     <div>
     *       <button onClick={() => set("isOpen", !get("isOpen"))}>
     *         Toggle
     *         {get("isOpen") ? "Open" : "Closed"}
     *       </button>
     *     </div>
     *   )}
     *   </StateContainer>
     *   ```;
     *
     * @param state The state of the container.
     */
    children: (state: {
        get: (key: keyof T) => T[keyof T];
        set: (key: keyof T, value: T[keyof T]) => void;
        intl: I18nResult<Messages>;
    }) => React.ReactNode;
    /**
     * A callback that is called when the state of the container changes.
     *
     * @param state
     */
    onChange?: (state: T) => void;
    /**
     * The state of the container. This is an object with keys and values. This is
     * used to control the state of the container. The values can be anything
     * except for functions.
     */
    state?: T;
}

declare function StateContainer<T extends Record<string, unknown>>({ initialState, children, onChange, state: controlledState, }: StateContainerProps<T>): React.ReactNode;

interface DevtoolsProps extends StylingProps {
    /** The children to render. */
    children: React.ReactNode;
    /**
     * The stating string for the class name.
     *
     * @default "BaselineUI"
     */
    classStartsWith?: string;
}

declare const Devtools: React.ForwardRefExoticComponent<DevtoolsProps & React.RefAttributes<HTMLDivElement>>;

interface StampProps extends StylingProps, AriaLabelingProps {
    /** The height of the stamp. */
    height?: number;
    /** The minimum width of the stamp. */
    minWidth?: number;
    /** The maximum width of the stamp. */
    maxWidth?: number;
    /** The width of the stamp's stroke. */
    strokeWidth?: number;
    /** The color of the stamp's stroke. */
    strokeColor?: string;
    /** The fill color of the stamp. */
    fillColor?: string;
    /** The color of the stamp's font. */
    fontColor?: string;
    /** The font family of the stamp. */
    fontFamily?: string;
    /** The description of the stamp. This is displayed below the `text`. */
    subText?: string;
    /**
     * The main text of the stamp. This is displayed at the center of the stamp if
     * no `subText` is provided. Otherwise, it is displayed above the `subText`.
     */
    text?: string;
    /**
     * The label of the stamp. This is used as the title of the SVG element. It is
     * not visible to the user.
     */
    label?: string | React.ReactNode;
    /**
     * The callback function that is called when the dimensions of the stamp
     * change.
     */
    onDimensionsChange?: (dimensions: {
        width: number;
        height: number;
    }) => void;
}

declare const Stamp: React.ForwardRefExoticComponent<StampProps & React.RefAttributes<SVGSVGElement>>;

interface CommentProps extends StylingProps {
    /**
     * The list of reactions to show in the comment. If this is not provided, the
     * reactions will not be shown.
     */
    reactions?: ReactionProps[];
    /** The name shown in the comment header. */
    name?: React.ReactNode;
    /**
     * The description shown in the comment header. This can be a string or a
     * React node.
     */
    description?: React.ReactNode;
    /** The content of the comment. This can be a string or a React node. */
    content: React.ReactNode;
    /**
     * The type of the content string. If this is set to "html", the content will
     * be rendered as HTML. If this is set to "plain", the content will be
     * rendered as plain text. This prop is only used when the `content` prop is a
     * string.
     *
     * @default "plain"
     */
    contentStringType?: "plain" | "html";
    /**
     * Indicates whether the element is displayed inline.
     *
     * @default true
     */
    isInline?: boolean;
    /**
     * The avatar properties to be passed to the `Avatar` component. If this is
     * not provided, the avatar will not be shown.
     */
    avatarProps?: Omit<AvatarProps, "size">;
    /**
     * The `aria-label` property assigned to the menu trigger element of the
     * component.
     */
    menuProps?: MenuProps;
    /**
     * The `children` property is an optional prop that accepts a JSX element or
     * an array of JSX elements. The children is displayed at the bottom of the
     * comment.
     */
    children?: React.ReactNode;
}

declare const Comment: React.ForwardRefExoticComponent<CommentProps & React.RefAttributes<HTMLDivElement>>;

export { Comment, type CommentProps, Devtools, type DevtoolsProps, SignatureTextInput, type SignatureTextInputProps, Stamp, type StampProps, StateContainer, type StateContainerProps };
