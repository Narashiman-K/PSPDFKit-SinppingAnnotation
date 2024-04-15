import React, { Key, Dispatch, SetStateAction } from 'react';
import { DraggableCollectionStateOptions, DroppableCollectionStateOptions, Orientation, ListState, SliderStateOptions, ToggleProps, OverlayTriggerProps, OverlayTriggerState, MenuTriggerProps, TooltipTriggerProps, NumberFieldStateOptions, ListProps, SelectStateOptions, Item as Item$1 } from 'react-stately';
import * as react_aria from 'react-aria';
import { DraggableCollectionOptions, DroppableCollectionOptions, AriaListBoxProps, AriaListBoxOptions, OptionAria, AriaButtonProps, AriaSliderProps, AriaSwitchProps, AriaSearchFieldProps, AriaPopoverProps, useOverlayTrigger, AriaMenuProps, AriaMenuTriggerProps, AriaLinkOptions, SeparatorProps as SeparatorProps$1, AriaProgressBarProps, AriaTextFieldProps, AriaTooltipProps, AriaPositionProps, OverlayProps, AriaToggleButtonProps, AriaCheckboxProps, AriaNumberFieldProps, I18nProviderProps as I18nProviderProps$1, LocalizedStrings, useNumberFormatter, useDateFormatter, AriaTagGroupProps, AriaSelectOptions, AriaDialogProps, DropOptions, ClipboardProps, PressProps, AriaRadioGroupProps, AriaModalOverlayProps, Locale } from 'react-aria';
export { I18nProviderProps, useCollator, useDateFormatter, useNumberFormatter } from 'react-aria';
import { Node as Node$1, DragItem, AriaLabelingProps } from '@react-types/shared';
import { IconProps, SVGRProps } from '@baseline-ui/icons';
import { Theme, Sprinkles } from '@baseline-ui/tokens';
import { AriaTabListProps } from '@react-types/tabs';
import { ColorFieldProps, Color } from '@react-stately/color';
import { OnRender, OnRenderStart, OnDragStart, OnDrag, OnDragEnd, OnResizeStart, OnResize, OnResizeEnd, OnRotateStart, OnRotate, OnRotateEnd, OnSnap, RotationPosition } from 'react-moveable';
import { AriaToolbarProps } from '@react-aria/toolbar';

type DragAndDropProps = Omit<DraggableCollectionStateOptions & DraggableCollectionOptions & DroppableCollectionOptions & DroppableCollectionStateOptions, "keyboardDelegate" | "dropTargetDelegate" | "shouldAcceptItemDrop" | "onDropEnter" | "onDropActivate" | "onDropExit" | "getDropOperation" | "collection" | "selectionManager" | "onRootDrop" | "onInsert" | "getAllowedDropOperations" | "getItems" | "onItemDrop"> & Partial<Pick<DraggableCollectionStateOptions, "getItems">> & {
    /**
     * Indicates whether reordering is enabled.
     *
     * @default false
     */
    enableReorder: boolean;
    /**
     * Whether the items are arranged in a stack or grid.
     *
     * @default stack
     */
    layout: "grid" | "stack";
    /**
     * The primary orientation of the items. Usually this is the direction that
     * the collection scrolls.
     *
     * @default vertical
     */
    orientation: Orientation;
};

interface BlockProps {
  /**
   * The unique identifier for the block. This is used to identify the block in
   * the DOM and in the block map. It is added as a data attribute
   * `data-blockid` to the root element of the block if a DOM node is rendered.
   */
  "data-blockid"?: Key;
}

interface StylingProps extends BlockProps {
  /** The className applied to the root element of the component. */
  className?: string;

  /** The style applied to the root element of the component. */
  style?: React.CSSProperties;
}

type ListOption = {
    id: string;
    label: string;
    description?: string;
    icon?: React.FC<IconProps>;
    data?: Record<string, any>;
    /**
     * The type of item.
     *
     * @default item
     */
    type?: "option";
};
type ListSection = {
    id: string;
    title?: string;
    type: "section";
    children: ListOption[];
};
type ListItem = ListOption | ListSection;
interface ListBoxProps extends StylingProps, Omit<AriaListBoxProps<ListItem> & AriaListBoxOptions<ListItem>, "children" | "linkBehavior" | "isVirtualized" | "keyboardDelegate">, Omit<DragAndDropProps, "preview" | "enableReorder" | "orientation" | "layout">, Partial<Pick<DragAndDropProps, "enableReorder" | "orientation" | "layout">> {
    /**
     * The items to render in the listbox. Items have the following shape:
     *
     * ```ts
     * export type ListOption = {
     *   id: string;
     *   label: string;
     *   description?: string;
     *   icon?: React.FC<IconProps>;
     * };
     *
     * export type ListSection = {
     *   id: string;
     *   title?: string;
     *   type: "section";
     *   children: ListOption[];
     * };
     *
     * type ListItem = ListOption | ListSection;
     * ```
     */
    items: ListItem[];
    /**
     * The custom render function for the listbox options.
     *
     * @param item Node<ListItem>
     * @param options [OptionAria]()
     * @param ref React.RefObject<HTMLLIElement>
     */
    renderOption?: (item: Node$1<ListItem>, options: OptionAria & {
        showSelectedIcon?: boolean;
        _state: ListState<ListItem>;
    }, ref: React.Ref<HTMLLIElement>) => React.ReactNode;
    /** Renders the drop indicator component. */
    renderDropIndicator?: (options: {
        dropIndicatorProps: React.HTMLAttributes<HTMLLIElement>;
        isDropTarget: boolean;
        isHidden: boolean;
        orientation: Orientation;
    }, ref: React.RefObject<HTMLLIElement>) => React.ReactNode;
    /**
     * The custom render function for the drag preview. This can be used to render
     * a custom drag preview when dragging items.
     */
    renderDragPreview?: (items: DragItem[]) => React.ReactNode;
    /** Whether to show the selected checkmark icon. */
    showSelectedIcon?: boolean;
    /** The label for the listbox. */
    label?: React.ReactNode;
    /** The CSS class name for the drop indicator. */
    dropIndicatorClassName?: string;
    /** The style of the drop indicator used in a component. */
    dropIndicatorStyle?: React.CSSProperties;
}

declare const ListBox: React.ForwardRefExoticComponent<ListBoxProps & React.RefAttributes<HTMLUListElement>>;

interface ActionButtonSharedProps extends Omit<AriaButtonProps<"button" | "div">, "rel" | "href" | "target" | "children">, StylingProps {
}
interface ActionButtonProps extends ActionButtonSharedProps {
    /**
     * The button's variant.
     *
     * @default primary
     */
    variant?: "primary" | "secondary" | "tertiary" | "ghost" | "popover";
    /** The button's label. */
    label: React.ReactNode;
    /** The button's icon before the label. */
    iconStart?: React.FC<IconProps>;
    /** The button's icon after the label. */
    iconEnd?: React.FC<IconProps>;
    /**
     * The button's size.
     *
     * @default sm
     */
    size?: "sm" | "md";
}

declare const ActionButton: React.ForwardRefExoticComponent<ActionButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface DomNodeRendererProps {
    /** The class name applied to the wrapper `div` component. */
    className?: string;
    /**
     * The DOM node to render inside the component. If this is not provided, the
     * component will render nothing. If this is provided, the component will
     * render the DOM node inside a `div` component with `display` set to
     * `contents`.
     */
    node: Node;
}

declare const DomNodeRenderer: React.ForwardRefExoticComponent<DomNodeRendererProps & React.RefAttributes<HTMLDivElement>>;

interface SliderProps extends Omit<AriaSliderProps<number> & SliderStateOptions<number>, "orientation" | "numberFormatter">, StylingProps {
    /**
     * Whether the slider is read only.
     *
     * @default false
     */
    isReadOnly?: boolean;
    /** The format options passed to `Intl.NumberFormat`. */
    numberFormatOptions?: Intl.NumberFormatOptions & {
        numberingSystem?: string;
    };
    /** The label for the slider. */
    label?: React.ReactNode;
    /**
     * Whether to include a number input for the slider.
     *
     * @default false
     */
    includeNumberInput?: boolean;
}

declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLDivElement>>;

interface SwitchProps extends Omit<AriaSwitchProps, "children">, Omit<ToggleProps, "children" | "isRequired" | "validate" | "validationBehavior" | "validationState" | "isInvalid">, StylingProps {
    /** The label to display next to the switch. */
    label?: React.ReactNode;
    /** The position of the label. */
    labelPosition?: "top" | "left";
    /** The status label to display next to the switch. */
    statusLabel?: {
        on: string;
        off: string;
    };
}

declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLLabelElement>>;

interface SearchInputProps extends Omit<AriaSearchFieldProps, "validationState" | "label" | "aria-autocomplete" | "autoComplete" | "isRequired" | "aria-haspopup" | "isReadOnly" | "aria-activedescendant" | "type" | "validationBehavior" | "validate" | "isInvalid">, StylingProps {
    /**
     * The size of the search input.
     *
     * @default "md"
     */
    size?: "sm" | "md" | "lg";
    /**
     * The variant of the search input.
     *
     * @default "primary"
     */
    variant?: "primary" | "ghost";
    /** Defines a string value that labels the current element. */
    "aria-label": string;
}

declare const SearchInput: React.ForwardRefExoticComponent<SearchInputProps & React.RefAttributes<HTMLDivElement>>;

interface ThemeProviderProps extends StylingProps {
    /**
     * The theme to use. If not provided, the theme will be inherited from the
     * parent ThemeProvider. If there is no parent ThemeProvider, the default
     * theme will be used.
     *
     * @default "system"
     */
    theme?: Theme | "light" | "dark" | "system";
    /** The children to render. */
    children: React.ReactNode;
    /**
     * A function that will be called when the theme changes from any of the child
     * components.
     */
    setTheme?: (theme: Theme | "light" | "dark" | "system") => void;
}

declare const ThemeProvider: React.ForwardRefExoticComponent<ThemeProviderProps & React.RefAttributes<HTMLDivElement>>;

/**
 * A hook that returns the user preferences for color scheme, contrast, reduced
 * motion, transparency and reduced data. The values are updated when the user
 * changes their preferences.
 *
 * @example
 *   const { colorScheme, highContrast, reducedMotion, transparency } =
 *     useUserPreferences();
 *
 * @param ownerWindow - The window object to use. Defaults to the global window
 *   object.
 * @returns The user preferences.
 */
declare function useUserPreferences(ownerWindow?: Window & typeof globalThis): {
    colorScheme: "dark" | "light";
    highContrast: boolean;
    reducedMotion: boolean;
    transparency: boolean;
};

type OverlayTriggerProps_ = Parameters<typeof useOverlayTrigger>[0];
interface PopoverProps extends OverlayTriggerProps, OverlayTriggerProps_ {
    /** The children of the popover. */
    children: React.ReactNode | ((state: OverlayTriggerState) => React.ReactNode);
}
interface PopoverContentProps extends Omit<AriaPopoverProps, "popoverRef" | "triggerRef">, StylingProps {
    /**
     * The reference element for the popover position. By default, the popover is
     * positioned relative to the trigger element.
     */
    triggerRef?: React.RefObject<HTMLElement>;
    /** The class name for the underlay element. */
    underlayClassName?: string;
    /** The contents of the popover. */
    children: React.ReactNode;
}
interface PopoverTriggerProps {
    /** The contents of the popover trigger. */
    children: React.ReactNode | (({ isOpen, triggerProps, triggerRef, }: {
        isOpen: boolean;
        triggerProps: AriaButtonProps<"button">;
        triggerRef: React.RefObject<HTMLElement>;
    }) => React.ReactNode);
}

declare const PopoverContent: React.ForwardRefExoticComponent<PopoverContentProps & React.RefAttributes<HTMLDivElement>>;

declare const PopoverTrigger: React.FC;

declare const Popover: React.FC<PopoverProps>;

type MenuOption = Omit<ListOption, "description"> & {
    keyboardShortcut?: string;
};
type MenuSection = Omit<ListSection, "children"> & {
    children: MenuOption[];
};
type MenuItem = MenuOption | MenuSection;
type MenuPopoverProps = Pick<PopoverContentProps, "isNonModal" | "placement" | "shouldUpdatePosition" | "shouldFlip" | "boundaryElement" | "crossOffset" | "offset">;
interface MenuProps extends MenuPopoverProps, MenuTriggerProps, Omit<AriaMenuProps<MenuItem>, "children">, Omit<AriaMenuTriggerProps, "type"> {
    /** The `className` property assigned to the root element of the component. */
    className?: string;
    /** The `className` property assigned to the content element of the component. */
    contentClassName?: string;
    /** The `className` property assigned to the item element of the component. */
    itemClassName?: string;
    /**
     * A list of items to render in the menu. Items have the following shape:
     *
     * ```ts
     * export type MenuOption = {
     *   id: string;
     *   label: string;
     *   keyboardShortcut?: string;
     *   icon?: React.FC<IconProps>;
     * };
     *
     * export type MenuSection = {
     *   id: string;
     *   title?: string;
     *   type: "section";
     *   children: MenuOption[];
     * };
     *
     * export type MenuItem = MenuOption | MenuSection;
     * ```
     */
    items: MenuItem[];
    /**
     * The `children` property is used to render the trigger element of the
     * component.
     *
     * ```tsx
     * <Menu>
     *   <ActionButton label="Label">
     * </Menu>
     * ```
     */
    children?: React.ReactNode;
}

declare const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLUListElement>>;

interface LinkProps extends AriaLinkOptions, StylingProps {
    /** The link's style variant. */
    variant?: "default" | "inline";
    /** The children to render. */
    children: React.ReactNode;
    /** The size of the link. */
    size?: "sm" | "md" | "lg";
}

declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLElement>>;

interface SharedFileUploadProps extends StylingProps {
    /** Whether the component is inlined. */
    variant?: "default" | "inline";
    /** Whether the component is disabled. */
    isDisabled?: boolean;
    /** The label to display. */
    label: string;
    /** The description to display. */
    description?: string;
    /**
     * The pattern to match the file name against. This is a regular expression,
     * and will be matched against the entire file name.
     */
    accept?: string;
    /** The name of the input. */
    name?: string;
    /** The callback function that is fired when the value changes. */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * The callback function that is fired when the value changes and the value is
     * valid.
     */
    onValueChange?: (files: File[]) => void;
    /**
     * Identifies the element (or elements) that provide a detailed, extended
     * description for the object.
     */
    "aria-describedby"?: string;
}
interface FileUploadProps extends SharedFileUploadProps {
    /** The Icon to display. */
    icon?: React.FC<IconProps>;
    /** Whether to allow multiple files to be uploaded. */
    multiple?: boolean;
}

declare const FileUpload: React.ForwardRefExoticComponent<FileUploadProps & React.RefAttributes<HTMLLabelElement>>;

interface SeparatorProps extends SeparatorProps$1, StylingProps {
    /**
     * The variant of the separator.
     *
     * @default "primary"
     */
    variant?: "primary" | "secondary";
}

declare const Separator: React.ForwardRefExoticComponent<SeparatorProps & React.RefAttributes<HTMLDivElement>>;

interface ProgressBarProps extends Omit<AriaProgressBarProps, "isIndeterminate"> {
    /** The `className` property assigned to the root element of the component. */
    className?: string;
    /**
     * The variant of the progress bar.
     *
     * @default active
     */
    variant?: "active" | "success" | "error";
    /** The description of the progress bar. */
    description?: string;
    /**
     * Whether the progress bar value should be displayed.
     *
     * @default false
     */
    showValue?: boolean;
    /** The error message of the progress bar. */
    errorMessage?: string;
}

declare const ProgressBar: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<HTMLDivElement>>;

interface InputMessage {
    /** The description to display below the input. */
    description?: string;
    /** The error message to display when the input is in an error state. */
    errorMessage?: string;
    /** The warning message to display when the input is in a warning state. */
    warningMessage?: string;
}
interface TextInputProps extends Omit<AriaTextFieldProps, "validationState" | "isInvalid" | "description" | "errorMessage">, StylingProps, InputMessage {
    /** The state of the input. */
    validationState?: "valid" | "error" | "warning";
    /**
     * The variant of the text input.
     *
     * @default primary
     */
    variant?: "primary" | "ghost";
    /**
     * The position of the label relative to the input.
     *
     * @default top
     */
    labelPosition?: "top" | "start";
    /** Whether the input is read only. */
    readOnly?: boolean;
    /** The style object to apply to the input element */
    inputStyle?: React.CSSProperties;
    /** The class name to apply to the input element */
    inputClassName?: string;
}

declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;

interface ReactionProps extends Omit<AriaSwitchProps & ToggleProps, "validationState" | "isRequired" | "children" | "isInvalid" | "validationBehavior" | "validate">, StylingProps {
    /** The size of the reaction. */
    size?: "sm" | "md";
    /** The number of reactions. */
    count: number;
    /** The icon to render. */
    icon?: React.FC<IconProps>;
}

declare const Reaction: React.ForwardRefExoticComponent<ReactionProps & React.RefAttributes<HTMLLabelElement>>;

interface TooltipProps extends TooltipTriggerProps, AriaTooltipProps, Omit<AriaPositionProps, "overlayRef" | "targetRef" | "maxHeight" | "isOpen" | "arrowSize"> {
    /** The content of the tooltip. */
    text?: string;
    /** The tooltip trigger element. */
    children: React.ReactNode;
    /**
     * The delay time for the tooltip to show up.
     *
     * @default 1000
     */
    delay?: number;
    /**
     * The delay time for the tooltip to hide.
     *
     * @default 500
     */
    closeDelay?: number;
    /**
     * Represents the size of an element.
     *
     * @default md
     */
    size?: "sm" | "md";
    /**
     * The variant that can be applied to an element.
     *
     * @default default
     */
    variant?: "default" | "inverse";
    /**
     * Indicates whether to include an arrow in the output.
     *
     * @default true
     */
    includeArrow?: boolean;
}

declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>;

interface PortalProps extends OverlayProps {
    /** The `className` property assigned to the root element of the component. */
    className?: string;
}

declare const Portal: React.ForwardRefExoticComponent<PortalProps & React.RefAttributes<HTMLDivElement>>;

interface ProgressSpinnerProps extends Omit<AriaProgressBarProps, "value" | "isIndeterminate" | "formatOptions" | "maxValue" | "minValue" | "valueLabel">, StylingProps {
    /**
     * The size of the progress circle.
     *
     * @default md
     */
    size?: "sm" | "md";
    /**
     * The progress circle's variant.
     *
     * @default active
     */
    variant?: "active" | "inactive" | "success" | "error";
}

declare const ProgressSpinner: React.ForwardRefExoticComponent<ProgressSpinnerProps & React.RefAttributes<HTMLDivElement>>;

interface ActionIconButtonProps extends ActionButtonSharedProps {
    /** The icon to display */
    icon: React.FC<IconProps>;
    /**
     * The size of the icon button.
     *
     * @default "md"
     */
    size?: "xxs" | "xs" | "sm" | "md" | "lg";
    /**
     * The variant of the icon button.
     *
     * @default "primary"
     */
    variant?: "primary" | "secondary" | "tertiary" | "ghost" | "toolbar" | "popover";
}

declare const ActionIconButton: React.ForwardRefExoticComponent<ActionIconButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface ToggleButtonProps extends StylingProps, Omit<AriaToggleButtonProps, "children"> {
    /** The text content of the button. */
    label: React.ReactNode;
    /** The icon to display before the label. */
    iconStart?: React.FC<SVGRProps>;
    /**
     * The size of the button.
     *
     * @default "md"
     */
    size?: "md" | "lg";
}

declare const ToggleButton: React.ForwardRefExoticComponent<ToggleButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface CheckboxProps extends Omit<AriaCheckboxProps, "children" | "validationBehavior" | "validationState" | "validate">, StylingProps {
    /** The checkbox's label. */
    label?: string;
    /**
     * The position of the label
     *
     * @default end
     */
    labelPosition?: "start" | "end";
}

declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLLabelElement>>;

type Excluded = "isDisabled" | "isReadOnly" | "isRequired" | "locale" | "validationState" | "label" | "formatOptions" | "isInvalid" | "validationBehaviour" | "validate" | "description" | "errorMessage";
interface PaginationProps extends Omit<AriaNumberFieldProps, Excluded>, Omit<NumberFieldStateOptions, Excluded>, StylingProps {
    /** The largest value allowed for the input. */
    maxValue: number;
    /** The label for the pagination component. */
    "aria-label": string;
    /**
     * The variant of the pagination component.
     *
     * @default floating
     */
    variant?: "floating" | "pinned";
    /**
     * The size of the pagination component.
     *
     * @default md
     */
    size?: "xs" | "sm" | "md" | "lg";
}

declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLDivElement>>;

interface I18nProviderProps extends I18nProviderProps$1 {
    /** The messages to use for internationalization. */
    messages?: LocalizedStrings;
}

declare const I18nProvider: React.FC<I18nProviderProps>;

type NumberFormatProps = Parameters<typeof useNumberFormatter>[0] & {
    /** The number to format. */
    value: number;
};

declare const NumberFormat: React.FC<NumberFormatProps>;

type DateFormatProps = Parameters<typeof useDateFormatter>[0] & {
    /** The date to format. */
    date: Date;
};

declare const DateFormat: React.FC<DateFormatProps>;

type Item = {
    id: string;
    label: string;
    variant?: "neutral" | "red" | "green" | "blue" | "high-contrast";
    icon?: React.FC<SVGRProps>;
};
interface TagGroupProps extends StylingProps, Omit<AriaTagGroupProps<Item>, "children" | "errorMessage" | "description">, Omit<ListProps<Item>, "children" | "collection" | "filter"> {
    /**
     * The items to display in the tag group.
     *
     * Type Item = { id: string; label: string; variant?: "neutral" | "red" |
     * "green" | "blue" | "high-contrast"; icon?: React.FC<SVGRProps>; }
     */
    items: Item[];
    /**
     * The variant of the tag group.
     *
     * @default "neutral"
     */
    variant?: Item["variant"];
    /** The label for the tag group. */
    "aria-label": string;
}

declare const TagGroup: React.ForwardRefExoticComponent<TagGroupProps & React.RefAttributes<HTMLDivElement>>;

interface AccordionProps extends StylingProps {
    /**
     * This prop controls the expansion mode of the accordion. If set to `single`,
     * only one item can be expanded at a time. If set to `multiple`, multiple
     * items can be expanded at the same time.
     *
     * @default single
     */
    expansionMode?: "single" | "multiple";
    /** This callback is called when the expanded state of the accordion changes. */
    onChange?: (value: Set<Key>) => void;
    /** The children of the accordion. Each child should be an `AccordionItem`. */
    children: React.ReactNode;
    /** The keys of the items that should be expanded by default. */
    defaultExpandedKeys?: Set<Key>;
    /**
     * The keys of the items that should be expanded. If this prop is provided,
     * the accordion will be a controlled component. This means that the expanded
     * state of the accordion will not change unless you update this prop.
     */
    expandedKeys?: Set<Key>;
    /**
     * The keys of the items that should be disabled. Disabled items cannot be
     * expanded or collapsed.
     */
    disabledKeys?: Set<Key>;
}
interface AccordionItemProps extends StylingProps {
    /** The title of the accordion item. */
    title: string;
    /**
     * The buttons that should be rendered in the accordion item. These buttons
     * will be rendered in the top right corner of the accordion item. They will
     * be rendered in the order they are provided. The buttons will be rendered as
     * `ActionIconButton`s, so you can pass any props that you would pass to an
     * `ActionIconButton`.
     *
     * @example
     *   ```jsx
     *   <AccordionItem
     *    title="Accordion Item"
     *    actions={[{
     *      icon: EditIcon,
     *      label: "Edit",
     *      onPress: () => alert("Edit"),
     *    }]}>Content</AccordionItem>
     *    ```;
     */
    actions?: Omit<ActionIconButtonProps, "size" | "variant" | "excludeFromTabOrder">[];
    /**
     * The action buttons should only be shown when the user hovers over or
     * focuses the accordion item.
     *
     * @default false
     */
    showActionsOnTriggerOnly?: boolean;
    /** The content of the accordion item. */
    children: React.ReactNode;
    /** The key of the accordion item. */
    value: Key;
    /**
     * The description of the accordion item. This will be rendered at the end of
     * the accordion header.
     */
    subLabel?: string;
}

declare const Accordion: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>;

declare const AccordionItem: React.ForwardRefExoticComponent<AccordionItemProps & React.RefAttributes<HTMLHeadingElement>>;

interface SelectProps extends Omit<AriaSelectOptions<ListItem> & SelectStateOptions<ListItem> & PopoverContentProps, "validationState" | "items" | "children" | "isRequired" | "className" | "style" | "triggerRef" | "validate" | "validationBehavior" | "keyboardDelegate">, Pick<ListBoxProps, "items" | "showSelectedIcon">, StylingProps {
    /**
     * The position of the label.
     *
     * @default "top"
     */
    labelPosition?: "top" | "start";
    /** The description of the select component. */
    description?: string;
    /** The error message of the select component. */
    errorMessage?: string;
    /** The warning message of the select component. */
    warningMessage?: string;
    /** The label of the select component. */
    label?: React.ReactNode;
    /** The variant of the select component. */
    variant?: "primary" | "ghost";
    /** The state of the select component. */
    validationState?: "valid" | "error" | "warning";
    /** Whether the select component is read only. */
    isReadOnly?: boolean;
}

declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>;

interface AvatarProps extends StylingProps {
    /**
     * The size of the component.
     *
     * @default "md"
     */
    size?: "md" | "sm";
    /**
     * The icon to display. This icon has to be imported from the
     * `@baseline-ui/icons` package.
     */
    icon?: React.FC<SVGRProps>;
    /** The name of the user. */
    name: string;
    /** The URL of the image to display. */
    imgSrc?: string;
    /**
     * The image loading strategy to use. See
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes:~:text=a%20fallback%20destination.-,loading,-Indicates%20how%20the)
     */
    imgLoading?: "lazy" | "eager";
    /** Whether to show the initials of the user if no image is provided. */
    showInitials?: boolean;
    /** Whether the component is disabled. */
    isDisabled?: boolean;
    /** Whether the user has a notification. */
    hasNotifications?: boolean;
}

declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>>;

type ItemProps = React.ComponentProps<typeof Item$1> & StylingProps & {
    key?: Key;
    icon?: React.FC<SVGRProps>;
    value?: string;
    title?: string;
    titleClassName?: string;
    titleStyle?: React.CSSProperties;
};
type TabsProps = Omit<StylingProps & AriaTabListProps<ItemProps>, "orientation" | "children" | "items" | "selectedKey" | "defaultSelectedKey" | "disabledKeys"> & {
    /**
     * The `TabItem` components to render inside the `Tabs` component.
     *
     * ```jsx
     * <Tabs>
     *   <TabItem key="tab1" title="Tab 1">
     *     <div>Tab 1 content</div>
     *   </TabItem>
     *   <TabItem key="tab2" title="Tab 2">
     *     <div>Tab 2 content</div>
     *   </TabItem>
     * </Tabs>;
     * ```
     */
    children: React.ReactNode;
    /**
     * The key of the tab that needs to be removed.
     *
     * @param key
     */
    onRemove?: (key: Key) => void;
    /** The value of the tab that needs to be selected. */
    selectedValue?: string;
    /** The default value of the tab that needs to be selected. */
    defaultSelectedValue?: string;
    /** The values of the tabs that need to be disabled. */
    disabledValues?: Set<Key>;
    /** A list of action buttons to render beside the tab items. */
    actions?: Omit<ActionIconButtonProps, "variant" | "size">[];
    /** The variant of the tabs */
    variant?: "primary" | "ghost";
    /** The className to apply to the tab header container. */
    tabHeaderClassName?: string;
    /** The style to apply to the tab header container. */
    tabHeaderStyle?: React.CSSProperties;
};
type TabItemProps = StylingProps & {
    /** The title of the tab. This will be displayed in the tab button. */
    title: string;
    /** The icon to display in front of the title. */
    icon?: React.FC<SVGRProps>;
    /** The value of the tab. This will be used to identify the tab. */
    value: string;
    /** The className to apply to the tab item. */
    titleClassName?: string;
    /** The style to apply to the tab item. */
    titleStyle?: React.CSSProperties;
};

declare const Tabs: React.ForwardRefExoticComponent<Omit<StylingProps & react_aria.AriaTabListProps<ItemProps>, "children" | "items" | "disabledKeys" | "orientation" | "selectedKey" | "defaultSelectedKey"> & {
    children: React.ReactNode;
    onRemove?: ((key: React.Key) => void) | undefined;
    selectedValue?: string | undefined;
    defaultSelectedValue?: string | undefined;
    disabledValues?: Set<React.Key> | undefined;
    actions?: Omit<ActionIconButtonProps, "size" | "variant">[] | undefined;
    variant?: "primary" | "ghost" | undefined;
    tabHeaderClassName?: string | undefined;
    tabHeaderStyle?: React.CSSProperties | undefined;
} & React.RefAttributes<HTMLDivElement>>;

declare const TabItem: React.FC<TabItemProps>;

interface InlineAlertProps extends StylingProps {
    /**
     * The variant of the alert.
     *
     * @default "info"
     */
    variant?: "info" | "warning" | "error" | "success";
    /** The title of the alert. */
    title: string;
    /** The description of the alert. */
    description: string;
    /**
     * The label of the action button. When provided, the action button will be
     * rendered.
     */
    actionLabel?: string;
    /** The callback fired when the action button is clicked. */
    onAction?: () => void;
    /**
     * The callback fired when the close button is clicked. When provided, the
     * close button will be rendered.
     */
    onClose?: () => void;
    /**
     * The arrangement of the variable.
     *
     * @default "single"
     * @typedef {"single" | "multi" | "compact"} Arrangement
     */
    arrangement?: "single" | "multi" | "compact";
    /**
     * The size of the alert.
     *
     * @default "md"
     */
    size?: "sm" | "md";
}

declare const InlineAlert: React.ForwardRefExoticComponent<InlineAlertProps & React.RefAttributes<HTMLDivElement>>;

interface NumberInputProps extends StylingProps, Omit<AriaNumberFieldProps, "validationState" | "isRequired" | "validate" | "validationBehavior"> {
    /**
     * The position of the label relative to the input.
     *
     * @default top
     */
    labelPosition?: "top" | "start";
    /**
     * The variant of the number input.
     *
     * @default primary
     */
    variant?: "primary" | "ghost";
    /**
     * Whether to show the stepper buttons.
     *
     * @default true
     */
    showStepper?: boolean;
    /** The description to display below the input. */
    description?: string;
    /** The error message to display when the input is in an error state. */
    errorMessage?: string;
}

declare const NumberInput: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<HTMLDivElement>>;

interface DialogProps extends AriaDialogProps, StylingProps {
    /** The children to render. */
    children: React.ReactNode;
    /**
     * The size of the dialog. This defines the max width of the dialog.
     *
     * @default "sm"
     */
    size?: "sm" | "md" | "lg" | "content";
    /**
     * The variant of the dialog.
     *
     * @default "primary"
     */
    variant?: "primary" | "ghost";
}
interface DialogTitleProps extends StylingProps {
    /** The children to render. */
    children: React.ReactNode;
}

declare const Dialog: React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<HTMLDivElement>>;

declare const DialogTitle: React.ForwardRefExoticComponent<DialogTitleProps & React.RefAttributes<HTMLDivElement>>;

interface ColorPreset {
    label: string;
    color: string;
}
interface ColorInputProps extends OverlayTriggerProps, StylingProps, Pick<ColorFieldProps, "onChange" | "defaultValue" | "value" | "label" | "isDisabled">, Pick<AriaLabelingProps, "aria-label">, Pick<PopoverContentProps, "isNonModal" | "placement" | "shouldUpdatePosition" | "shouldFlip" | "boundaryElement" | "crossOffset" | "offset"> {
    /**
     * The list of color presets to show in the color picker. The signature of the
     * color presets is:
     *
     * ```ts
     * export interface ColorPreset {
     *   label: string;
     *   color: string;
     * }
     * ```
     *
     * The color can be a hex or hexa value.
     */
    presets?: ColorPreset[];
    /**
     * Whether to include the custom color picker. If `false`, the color picker
     * will only show the color presets. The custom color picker allows the user
     * to pick any color. You can set the `allowAlpha` prop to `false` to disable
     * the alpha channel.
     *
     * @default true
     */
    includePicker?: boolean;
    /**
     * Whether to show the color label. The color label is the name of the color
     * that is currently selected. If boolean, the label will be shown only when
     * the color is not `null`. If a function, the function will be called with
     * the current color and should return a string. If `false`, the label will
     * not be shown.
     *
     * @default true
     */
    colorLabel?: boolean | ((color: Color | null) => string);
    /**
     * Whether to allow alpha values in the custom color picker.
     *
     * @default true
     */
    allowAlpha?: boolean;
    /**
     * Whether to allow the removal of the color.
     *
     * @default false
     */
    allowRemoval?: boolean;
    /** The label position of the color input. */
    labelPosition?: "top" | "start";
    /**
     * Whether to show the color picker in active or lazy mode. In active mode,
     * the color picker will be rendered when the color input popover is open and
     * the value of the color input will be updated when the user picks a color.
     * In lazy mode, the color picker will be rendered only when the user clicks
     * on the "Add color" button and the selected color will be added to custom
     * colors when the user clicks on the "Add color" button.
     *
     * @default active
     */
    pickerMode?: "active" | "lazy";
    /**
     * The key to use to store the picked color in the local storage.
     *
     * @default baselinePickedColor
     */
    storePickedColorKey?: string;
    /**
     * The label to show on the add color button.
     *
     * @default Add color
     */
    addColorButtonLabel?: string;
    /**
     * The label to show on the remove color button.
     *
     * @default Remove color
     */
    removeColorButtonLabel?: string;
    /**
     * The label to show on the custom colors section.
     *
     * @default Custom colors
     */
    customColorsLabel?: string;
    /**
     * An optional function to render the custom trigger button.
     *
     * @param options
     */
    renderTriggerButton?: (options: {
        isOpen: boolean;
        color: Color | null;
        ref: React.RefObject<HTMLButtonElement>;
        colorName?: string | boolean;
        triggerProps: AriaButtonProps<"button">;
    }) => React.ReactElement;
}

declare const ColorInput: React.ForwardRefExoticComponent<ColorInputProps & React.RefAttributes<HTMLDivElement>>;

declare const ColorSwatch: React.FC<ColorSwatchProps>;
interface ColorSwatchProps {
    color?: string;
    isFocusVisible?: boolean;
    isDisabled?: boolean;
    isSelected?: boolean;
    isPresentational?: boolean;
}

declare const IconColorInputButton: React.ForwardRefExoticComponent<Omit<ColorInputButtonProps, "children" | "labelPosition"> & {
    icon: React.FC<IconProps>;
    color?: string | undefined;
} & React.RefAttributes<HTMLButtonElement>>;
interface ColorInputButtonProps extends Omit<ActionButtonProps, "label"> {
    isOpen: boolean;
    "aria-label"?: string;
    labelPosition: "top" | "start";
    children: React.ReactNode;
}

interface FreehandCanvasProps extends StylingProps, AriaLabelingProps {
    /** The className applicable to the SVG canvas. */
    canvasClassName?: string;
    /** The style applicable to the SVG canvas. */
    canvasStyle?: React.CSSProperties;
    /** The ref for the canvas. */
    canvasRef?: React.RefObject<HTMLDivElement>;
    /** The className applicable to the footer. */
    footerClassName?: string;
    /** The style applicable to the footer. */
    footerStyle?: React.CSSProperties;
    /**
     * How much to soften the stroke's edges.
     *
     * @default 0
     */
    smoothing?: number;
    /**
     * How much to streamline the stroke.
     *
     * @default 0
     */
    streamline?: number;
    /** An easing function to apply to each point's pressure. */
    easing?: (pressure: number) => number;
    /**
     * Whether to simulate pressure based on velocity.
     *
     * @default false
     */
    simulatePressure?: boolean;
    /** Cap, taper and easing for the start of the line. */
    start?: {
        cap?: boolean;
        taper?: number | boolean;
        easing?: (distance: number) => number;
    };
    /** Cap, taper and easing for the end of the line. */
    end?: {
        cap?: boolean;
        taper?: number | boolean;
        easing?: (distance: number) => number;
    };
    /**
     * The width of the stroke.
     *
     * @default 2
     */
    strokeWidth?: number;
    /**
     * The color of the stroke.
     *
     * @default #3A87FD
     */
    strokeColor?: string;
    /**
     * Whether to keep the points within the canvas.
     *
     * @default true
     */
    isBound?: boolean;
    /**
     * Callback for when the points change. This is called on every point change.
     *
     * @param points
     */
    onChange?: (points: number[][][]) => void;
    /**
     * Callback for when the points change has ended. This is called once after
     * the pointerup event. It is recommended to use this callback for performance
     * reasons.
     *
     * @param points
     */
    onChangeEnd?: (points: number[][][]) => void;
    /** The default points to render. */
    defaultValue?: number[][][];
    /** The label for the canvas. */
    label?: string;
    /**
     * Whether to enable history for undo/redo.
     *
     * @default false
     */
    enableHistory?: boolean;
    /**
     * Whether the canvas is inline.
     *
     * @default true
     */
    isInline?: boolean;
    /** Whether the canvas is disabled. */
    isDisabled?: boolean;
    /** The placeholder for the canvas. */
    placeholder?: string;
    /** The label for the clear button. */
    clearLabel?: string;
    /** The label for the undo button. */
    undoLabel?: string;
    /** The label for the redo button. */
    redoLabel?: string;
    /** Description for the canvas. */
    description?: string;
}

declare const FreehandCanvas: React.ForwardRefExoticComponent<FreehandCanvasProps & React.RefAttributes<HTMLDivElement>>;

type TextProps<T extends keyof React.JSX.IntrinsicElements = "span"> = StylingProps & React.ComponentProps<T> & {
    /**
     * The type of text to render.
     *
     * @default "title"
     */
    type?: "subtitle" | "title" | "label" | "value" | "helper" | "body";
    /**
     * The size of the text.
     *
     * @default "md"
     */
    size?: "sm" | "md" | "lg";
    /** The text to render. Can be a string or a number. */
    children: React.ReactNode;
    /**
     * The HTML element to render.
     *
     * @default "span"
     */
    elementType?: React.ElementType;
};

declare const Text: React.ForwardRefExoticComponent<Pick<TextProps, "children" | "autoFocus" | "onFocus" | "onBlur" | "id" | "aria-label" | "aria-labelledby" | "aria-describedby" | "aria-details" | "onDrop" | "onDragStart" | "onDragEnd" | "className" | "style" | "data-blockid" | "type" | "color" | "size" | "content" | "translate" | "hidden" | "elementType" | "role" | "slot" | "title" | "key" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "lang" | "nonce" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "rel" | "resource" | "rev" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStartCapture" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture"> & React.RefAttributes<HTMLDivElement>>;

type TransformProps = {
    /** The `className` property assigned to the root element of the component. */
    className?: string;
    /** The `style` property assigned to the root element of the component. */
    style?: React.CSSProperties;
    /** The children to render. */
    children: (options: {
        style: React.CSSProperties;
    }) => React.ReactNode;
    /** Whether the transform is draggable. */
    isDraggable?: boolean;
    /** Whether the transform is resizable. */
    isResizable?: boolean;
    /** Whether the transform is rotatable. */
    isRotatable?: boolean;
    /** Whether the transform is snappable. */
    isSnappable?: boolean;
    /** A callback that will be called when the transform changes. */
    onTransform?: (transform: OnRender) => void;
    /** A callback that will be called when the transform starts. */
    onTransformStart?: (transform: OnRenderStart) => void;
    /** A callback that will be called when the transform ends. */
    onTransformEnd?: (transform: OnRender) => void;
    /** A callback that will be called when the target drag starts. */
    onDragStart?: (e: OnDragStart) => void;
    /** A callback that will be called when the target is dragged. */
    onDrag?: (e: OnDrag) => void;
    /** A callback that will be called when the target drag ends. */
    onDragEnd?: (e: OnDragEnd) => void;
    /** A callback that will be called when the target resize starts. */
    onResizeStart?: (e: OnResizeStart) => void;
    /** A callback that will be called when the target is resized. */
    onResize?: (e: OnResize) => void;
    /** A callback that will be called when the target resize ends. */
    onResizeEnd?: (e: OnResizeEnd) => void;
    /** A callback that will be called when the target rotation starts. */
    onRotateStart?: (e: OnRotateStart) => void;
    /** A callback that will be called when the target is rotated. */
    onRotate?: (e: OnRotate) => void;
    /** A callback that will be called when the target rotation ends. */
    onRotateEnd?: (e: OnRotateEnd) => void;
    /** A callback that will be called when the target is snapped. */
    onSnap?: (e: OnSnap) => void;
    /** A callback that will be called when the child is double clicked. */
    onDoubleClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /** A list of selectors relative to which the guidelines will be rendered. */
    elementGuidelines?: string[];
    /**
     * Set directions to show the control box.
     *
     * @default false if rotatable, ["n", "nw", "ne", "s", "se", "sw", "e", "w"] otherwise
     */
    renderDirections?: boolean | ("n" | "nw" | "ne" | "s" | "se" | "sw" | "e" | "w")[];
    /**
     * Whether the anchor should be hidden when dragging.
     *
     * @default true
     */
    hideAnchorOnDrag?: boolean;
    /** The `title` property assigned to the root element of the component. */
    title: string;
    /** The position of the rotation anchor. */
    rotationPosition?: RotationPosition;
    /**
     * Degree angles to snap to rotation
     *
     * @default [ ]
     */
    snapRotationDegrees?: number[];
    /**
     * Snap works if `abs(current rotation - snapRotationDegrees) <
     * snapRotationThreshold`.
     *
     * @default 5
     */
    snapRotationThreshold?: number;
    /** Whether the transform should be updated automatically. */
    autoUpdate?: boolean;
    /** The element ref, selector or element to which the transform will be bound. */
    bound?: React.RefObject<HTMLElement> | string | HTMLElement;
    /** The element ref, selector or element that is it's scrollable ancestor. */
    scrollableAncestor?: React.RefObject<HTMLElement> | string | HTMLElement;
    /**
     * Whether to prevent bubbling of events like mousedown, touchstart, etc.
     *
     * @default false
     */
    stopPropagation?: boolean;
    /**
     * Whether to call preventDefault on touchstart or mousedown
     *
     * @default true
     */
    preventDefault?: boolean;
    /**
     * The default transformOrigin of the target can be set in advance.
     *
     * @default ""
     */
    transformOrigin?: Array<string | number> | string | "";
};

declare const Transform: React.ForwardRefExoticComponent<TransformProps & React.RefAttributes<HTMLDivElement>>;

interface ImageDropZoneProps extends Omit<SharedFileUploadProps, "label" | "variant">, Omit<DropOptions, "ref" | "getDropOperation" | "hasDropButton" | "getDropOperationForPoint">, Omit<ClipboardProps, "getItems" | "onCut" | "onCopy">, Pick<FreehandCanvasProps, "footerClassName" | "footerStyle" | "placeholder" | "clearLabel">, AriaLabelingProps {
    /**
     * The initial image to display. This will be used as the `src` attribute of
     * the `<img>` element. You will be able to choose a new image.
     */
    defaultImageSrc?: string;
    /**
     * The image to display. This will be used as the `src` attribute of the
     * `<img>` element and will not be able to be changed from within the
     * component. Basically, this makes the component controlled.
     */
    imageSrc?: string;
    /**
     * The alt text to display for the image. This will be used as the `alt`
     * attribute of the `<img>`. element. If no `imageAlt` is provided, the
     * `label` will be used.
     */
    imageAlt?: string;
    /** The label to display for the picker button. */
    pickerButtonLabel?: string;
    /**
     * Whether to show the checkered background behind the image. This is useful
     * when the image has transparency.
     *
     * @default true
     */
    includeCheckeredBackground?: boolean;
    /** Whether the component is inlined. */
    isInline?: boolean;
    /** The class name to apply to the picker button. */
    pickerButtonClassName?: string;
    /** The style to apply to the picker button. */
    pickerButtonStyle?: React.CSSProperties;
    /** The class name to apply to the label. */
    labelClassName?: string;
    /** The style to apply to the label. */
    labelStyle?: React.CSSProperties;
}

declare const ImageDropZone: React.ForwardRefExoticComponent<ImageDropZoneProps & React.RefAttributes<HTMLDivElement>>;

interface PreviewProps extends StylingProps, AriaLabelingProps {
    /**
     * Whether the preview should be displayed inline or not. This is just a
     * visual change, the component will still behave the same.
     *
     * @default true
     */
    isInline?: boolean;
    /**
     * The image to display in the preview. This can be a URL or a base64 encoded
     * string.
     */
    imageSrc?: string;
    /** The alt text for the image. */
    imageAlt?: string;
    /** The SVG to display in the preview. This can be a React element or a string. */
    svgSrc?: string | React.ReactElement;
    /** Whether the preview should be disabled or not. */
    isDisabled?: boolean;
    /** The text to display in the preview. */
    textValue?: string;
    /** The style of the text. */
    textStyle?: React.CSSProperties;
    /**
     * This is fired when the `actionButtons` are not passed and you trigger a
     * `click` event on the preview. In case you have passed `actionButtons`, this
     * is not fired as focus shifts to the action buttons.
     */
    onPress?: PressProps["onPress"];
    /**
     * The callback to be called when the delete button is clicked. When passed,
     * the delete button is displayed.
     */
    onDelete?: ActionButtonProps["onPress"];
    /**
     * The label to be used for the delete button. This is used for accessibility
     * purposes.
     */
    deleteAriaLabel?: string;
    /** The callback to be called when the preview is clicked. */
    addAriaLabel?: string;
}

declare const Preview: React.ForwardRefExoticComponent<PreviewProps & React.RefAttributes<HTMLDivElement>>;

interface RadioGroupProps extends StylingProps, Omit<AriaRadioGroupProps, "description" | "errorMessage" | "isRequired" | "isInvalid" | "validate" | "validationBehavior" | "validationState"> {
    /**
     * The position of the label relative to the input.
     *
     * @default top
     */
    labelPosition?: "top" | "start";
    /**
     * The list of items to render in the radio group. Items have the following
     * shape:
     *
     * ```ts
     * export type ListOption = {
     *   id: string;
     *   label: string;
     *   description?: string;
     *   icon?: React.FC<IconProps>;
     * };
     * ```
     */
    items: ListOption[];
    /**
     * Render item option
     *
     * @typedef {Object} RenderItemOptions
     * @property {boolean} isFocusVisible - Whether the focus ring is visible.
     * @property {boolean} isFocused - Whether the option is focused.
     * @property {boolean} isSelected - Whether the option is selected.
     * @property {boolean} isHovered - Whether the option is hovered.
     * @property {boolean} isDisabled - Whether the option is disabled.
     */
    /**
     * The custom render function for the radio group options.
     *
     * @param {ListOption} item The item to render.
     * @param {RenderItemOptions} options The options for rendering the item.
     */
    renderOption?: (item: ListOption, options: {
        isFocusVisible: boolean;
        isFocused: boolean;
        isSelected: boolean;
        isHovered: boolean;
        isDisabled: boolean;
        optionLabelPosition: "start" | "end";
        isReadOnly?: boolean;
    }) => React.ReactNode;
    /** The class name for the group container. */
    optionsContainerClassName?: string;
    /** The style for the group container. */
    optionsContainerStyle?: React.CSSProperties;
    /** The ids of the items that are disabled. */
    disabledValues?: string[];
    /**
     * The position of the label of individual radio buttons.
     *
     * @default end
     */
    optionLabelPosition?: "start" | "end";
    /** The className applicable to the label. */
    optionClassName?: string;
    /** The style applicable to the label. */
    optionStyle?: React.CSSProperties;
}

declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;

interface ModalProps extends OverlayTriggerProps {
}
interface ModalContentProps extends Omit<AriaModalOverlayProps, "isDismissable" | "isKeyboardDismissDisabled">, StylingProps {
    /**
     * The contents of the modal. Can be a React node or a function that returns a
     * React node.
     */
    children: React.ReactNode | ((props: {
        close: () => void;
    }) => React.ReactNode);
    /**
     * The container element for the modal. By default, the modal is rendered as a
     * child of the body element.
     *
     * @default document.body
     */
    portalContainer?: HTMLElement;
    /**
     * Whether to disable the animation for the modal. This is useful when you
     * want to render one modal after another without the animation.
     *
     * @default false
     */
    disableAnimation?: boolean;
    /**
     * Whether the modal should be rendered as a drawer. This will render the
     * modal with a transparent background and no border at the bottom. The `auto`
     * value will render the modal as a drawer on mobile and as a dialog on
     * desktop and tablet.
     *
     * @default false
     */
    enableDrawer?: boolean | "auto";
    /**
     * Specifies if the component is dismissable or not. If the value is a
     * function, it will be called with a boolean indicating if the modal is
     * rendered as a drawer or not.
     *
     * @default true
     */
    isDismissable?: boolean | ((isDrawer: boolean) => boolean);
    /**
     * Determines if keyboard dismissal is disabled. If the value is a function,
     * it will be called with a boolean indicating if the modal is rendered as a
     * drawer or not.
     *
     * @default false
     */
    isKeyboardDismissDisabled?: boolean | ((isDrawer: boolean) => boolean);
}

declare const Modal: React.FC<ModalProps>;

declare const ModalContent: React.FC<ModalContentProps>;

declare const ModalTrigger: React.FC;

declare const ModalClose: React.FC;

interface MessageFormatProps {
    /**
     * By default `<MessageFormat>` will render the formatted string into a
     * `<React.Fragment>`. If you need to customize rendering, you can either wrap
     * it with another React element (recommended), specify a different tagName
     * (e.g., 'div')
     */
    elementType?: React.ElementType | "div" | "span";
    /** The id of the message to format. */
    id: string;
    /** The default message to use if the message id is not found. */
    defaultMessage?: string;
}

declare const MessageFormat: React.FC<MessageFormatProps>;

interface GroupProps extends StylingProps, AriaLabelingProps {
    /**
     * The `role` property specifies the accessibility `role` for the group. By
     * default, it is set to 'group'. If the contents of the group are important
     * enough to be included in the page table of contents, use 'region'. If the
     * group is visual only and does not represent a semantic grouping of
     * controls, use 'presentation'.
     *
     * @default group
     */
    role?: "group" | "region" | "presentation";
    /** Whether the group is disabled. */
    isDisabled?: boolean;
    /** The children to render. */
    children: React.ReactNode;
}

declare const Group: React.ForwardRefExoticComponent<GroupProps & React.RefAttributes<HTMLDivElement>>;

type SprinkleProps = Parameters<Sprinkles>[0];
interface BoxProps extends Pick<StylingProps, "data-blockid">, Omit<React.ComponentPropsWithoutRef<"div">, "color">, SprinkleProps {
    /**
     * The HTML element to use for the box.
     *
     * @default "div"
     */
    elementType?: string;
}

declare const Box: React.ForwardRefExoticComponent<BoxProps & React.RefAttributes<HTMLDivElement>>;

interface ColorPresetInlineInputProps extends Omit<RadioGroupProps, "items" | "disabledValues"> {
    items: ColorPreset[];
}

declare const ColorPresetInlineInput: React.ForwardRefExoticComponent<ColorPresetInlineInputProps & React.RefAttributes<HTMLDivElement>>;

interface ToolbarProps extends StylingProps, AriaToolbarProps {
    children: React.ReactNode;
    /**
     * Identifies the element (or elements) whose contents or presence are
     * controlled by the current element.
     */
    "aria-controls"?: string;
}

declare const Toolbar: React.ForwardRefExoticComponent<ToolbarProps & React.RefAttributes<HTMLDivElement>>;

interface ToggleIconButtonProps extends StylingProps, Omit<ToggleProps, "children">, Omit<ToggleButtonProps, "size" | "iconStart" | "label"> {
    /**
     * The available sizes for a variable.
     *
     * @default "md"
     */
    size?: "xxs" | "xs" | "sm" | "md" | "lg";
    /** Represents the variant of a component. */
    variant?: "primary" | "secondary" | "tertiary" | "toolbar";
    /** The icon to be displayed on the button. */
    icon: React.FC<IconProps>;
}

declare const ToggleIconButton: React.ForwardRefExoticComponent<ToggleIconButtonProps & React.RefAttributes<HTMLButtonElement>>;

type MentionableUser = {
    id: string;
    name: string;
    displayName: string;
    avatar?: AvatarProps;
    description?: string;
};
type EditorHandle = {
    setCaretPosition: (index: number) => void;
};
interface EditorProps extends StylingProps, AriaLabelingProps {
    /**
     * The function to be called when `Enter` key is pressed or Save button is
     * clicked.
     */
    onSave?: (value: string) => void;
    /**
     * The function to be called when Cancel button is clicked. If not provided,
     * the Cancel button will not be rendered.
     */
    onCancel?: () => void;
    /** The default value of the editor. */
    defaultValue?: string;
    /** The value of the editor. */
    value?: string;
    /**
     * The function to be called when the value of the editor changes.
     *
     * @param value
     */
    onChange?: (value: string) => void;
    /** Whether the editor is disabled. */
    isDisabled?: boolean;
    /**
     * Indicates whether rich text is enabled or not.
     *
     * @default true
     */
    enableRichText?: boolean;
    /** The placeholder text to be displayed when the editor is empty. */
    placeholder?: string;
    /**
     * The variant of the editor.
     *
     * @default default
     */
    variant?: "default" | "minimal";
    /** Whether the editor is inline or not. */
    isInline?: boolean;
    /** Specifies whether spell checking is enabled or disabled. */
    spellCheck?: boolean;
    /**
     * Optional property that represents the ARIA label for the submit button.
     * This property is used to provide an accessible label for the button, which
     * is read by screen readers to assist visually impaired users.
     *
     * @default Save
     */
    submitButtonAriaLabel?: string;
    /**
     * The React node representing the icon to be displayed on the submit button.
     *
     * @default ArrowUpCircleFilledIcon
     */
    submitButtonIcon?: React.FC<IconProps>;
    /**
     * The name of the avatar. The avatar is visible when `variant` is set to
     * `minimal` and `enableRichText` is set to `false`.
     */
    avatarName?: string;
    /**
     * The ARIA label for the editable content. In case of rich text, this label
     * is used to provide an accessible label for the contenteditable element,
     * which is read by screen readers to assist visually impaired users. In case
     * of plain text, this label is used to provide an accessible label for the
     * textarea element.
     *
     * @default Editing Area
     */
    editableContentAriaLabel?: string;
    /**
     * An optional array of mentionable users. Mention feature is only available
     * when `enableRichText` is set to `true` and this prop is provided.
     *
     * ```tsx
     * type MentionableUser = {
     *   id: string;
     *   name: string;
     *   displayName: string;
     *   avatar?: AvatarProps;
     *   description?: string;
     * };
     * ```
     */
    mentionableUsers?: MentionableUser[];
    /** Footer button represents an array of ActionIconButtonProps. */
    footerButtons?: ActionIconButtonProps[];
    /** The imperative handle for manipulating editor. */
    editorHandle?: React.RefObject<EditorHandle>;
}

declare const Editor: React.ForwardRefExoticComponent<EditorProps & React.RefAttributes<HTMLDivElement>>;

interface ScrollControlButtonProps extends StylingProps, Pick<ActionButtonProps, "label"> {
    /**
     * The ref to the scrollable element.
     *
     * @default document.body
     */
    scrollRef?: React.RefObject<HTMLElement>;
    /**
     * Indicates whether the button should be hidden when the keyboard is being
     * used.
     *
     * @default false
     */
    hideForKeyboard?: boolean;
    /**
     * The delay in milliseconds before the button is hidden when the scrolling
     * stops.
     *
     * @default 1500
     */
    delay?: number;
    /**
     * Indicates whether the scroll should be smooth.
     *
     * @default true
     */
    smoothScroll?: boolean;
}

declare const ScrollControlButton: React.ForwardRefExoticComponent<ScrollControlButtonProps & React.RefAttributes<HTMLButtonElement>>;

/**
 * A hook that creates an IntersectionObserver and observes a target element.
 *
 * @example
 *   ```tsx
 *   import { useIntersectionObserver } from "@baseline-ui/core";
 *
 *   const MyComponent = () => {
 *    const ref = useRef(null);
 *
 *    const onIntersect = (entry) => {
 *      console.log(entry);
 *    };
 *
 *    useIntersectionObserver({ ref, onIntersect });
 *
 *    return <div ref={ref}>Hello world</div>;
 *   };
 *   ```;
 *
 * @param {IntersectionObserverOptions} options - The options for the
 *   IntersectionObserver.
 * @param {React.RefObject<HTMLElement>} options.ref - The ref of the target
 *   element to observe.
 * @param {(entry: IntersectionObserverEntry) => void} options.onIntersect - The
 *   function to call when the target element intersects the root element.
 * @param {boolean} options.isDisabled - Whether the IntersectionObserver should
 *   be disabled.
 * @param {number | number[]} options.threshold - The threshold(s) at which to
 *   trigger the onIntersect function.
 * @param {string} options.rootMargin - The margin around the root element.
 * @param {React.RefObject<HTMLElement>} options.root - The ref of the root
 *   element to observe.
 */
declare function useIntersectionObserver({ ref, onIntersect, isDisabled, threshold, rootMargin, root, }: IntersectionObserverOptions): void;
interface IntersectionObserverOptions {
    ref: React.RefObject<HTMLElement>;
    onIntersect: (entry: IntersectionObserverEntry) => void;
    root?: React.RefObject<HTMLElement>;
    rootMargin?: string;
    threshold?: number;
    isDisabled?: boolean;
}

/**
 * A hook that observes the size changes of a DOM element using the
 * ResizeObserver API.
 *
 * @example
 *   ```tsx
 *   const ref = useRef<HTMLDivElement>(null);
 *
 *   const { size } = useResizeObserver({
 *    ref,
 *    onResize: (entry) => {
 *    // do something
 *    },
 *    isDisabled: false,
 *   });
 *   ```;
 *
 * @param {Object} options - The options object.
 * @param {React.RefObject<HTMLElement>} options.ref - The ref object that
 *   points to the observed element.
 * @param {Function} options.onResize - The callback function that is called
 *   when the element is resized.
 * @param {boolean} options.isDisabled - A flag that indicates whether the
 *   observer is disabled.
 * @returns {Object} An object that contains the size of the observed element.
 */
declare function useResizeObserver({ ref, onResize, isDisabled, }: ResizeObserverOptions): {
    size: {
        width: number;
        height: number;
    } | undefined;
};
interface ResizeObserverOptions {
    ref: React.RefObject<HTMLElement>;
    onResize?: (entry: ResizeObserverEntry) => void;
    isDisabled?: boolean;
}

/**
 * A custom hook that loads an image and returns its loading state and props.
 *
 * @example
 *   ```tsx
 *   const { isLoaded, hasError, isLoading, imgProps } = useImage({
 *    src: "https://via.placeholder.com/150",
 *    alt: "Placeholder image",
 *   });
 *   ```;
 *
 * @param {Object} options - The options object.
 * @param {string} options.src - The image source URL.
 * @param {string} options.alt - The image alt text.
 * @returns {Object} An object containing the image loading state and props.
 * @returns {boolean} IsLoaded - Whether the image has loaded.
 * @returns {boolean} HasError - Whether there was an error loading the image.
 * @returns {boolean} IsLoading - Whether the image is currently loading.
 * @returns {Object} ImgProps - The image props to be passed to the `img`
 *   element.
 * @returns {string} ImgProps.src - The image source URL, or `undefined` if the
 *   image hasn't loaded yet.
 * @returns {string} ImgProps.alt - The image alt text.
 */
declare function useImage({ src, alt }: {
    src?: string;
    alt: string;
}): {
    isLoaded: boolean;
    hasError: boolean;
    isLoading: boolean;
    imgProps: {
        src?: string;
        alt: string;
    };
};

/**
 * A hook that provides undo and redo functionality for a given state.
 *
 * @example
 *   ```tsx
 *   const { state, push, undo, redo, pastStates, futureStates, canUndo, canRedo } = useUndoRedo({
 *     onAction: (state, action) => {
 *     // do something
 *     },
 *   });
 *
 *   // push a new state
 *   push({ foo: "bar" });
 *
 *   // undo the last state
 *   undo();
 *
 *   // redo the last state
 *   redo();
 *   ```;
 *
 * @template T The type of the state object.
 * @param initialState The initial state object.
 * @param options Additional options for the hook.
 * @param options.isDisabled Whether the undo/redo functionality should be
 *   disabled.
 * @param options.onAction A callback function that is called whenever an undo
 *   or redo action is performed.
 * @returns An object containing the current state, undo and redo functions, and
 *   other related properties.
 */
declare const useUndoRedo: <T>(initialState: T | undefined, { isDisabled, onAction, }: {
    isDisabled?: boolean | undefined;
    onAction?: ((state: T, action: "UNDO" | "REDO") => void) | undefined;
}) => {
    state: T;
    push: (newState: T) => void;
    undo: () => void;
    redo: () => void;
    pastStates: T[];
    futureStates: T[];
    canUndo: boolean;
    canRedo: boolean;
};

/**
 * This hook returns true if the component is being rendered for the first time.
 * This is useful for avoiding side effects on the first render inside of
 * useEffect.
 *
 * @example
 *   ```tsx
 *   const isFirstRender = useIsFirstRender();
 *
 *   useEffect(() => {
 *      if (isFirstRender) return;
 *      // do something
 *      return () => {
 *        // do something on unmount
 *      };
 *   }, [isFirstRender]);
 *   ```;
 *
 * @returns Whether or not the component is being rendered for the first time
 */
declare function useIsFirstRender(): boolean;

/**
 * A hook that provides internationalization functionality. It returns a
 * function to format messages and the current locale. The hook can be used with
 * or without a messages object. If no messages object is provided, the hook
 * will use the messages provided by the `I18nProvider`. If a messages object is
 * provided, the hook will use those messages instead of the ones provided by
 * the `I18nProvider`.
 *
 * @example
 *   ```tsx
 *   import { useI18n } from "@baseline-ui/core";
 *
 *   const messages = {
 *    en: { hello: "Hello" },
 *    fr: { hello: "Bonjour" },
 *   };
 *
 *   const MyComponent = () => {
 *    const { formatMessage, locale } = useI18n(messages);
 *
 *   return (
 *    <div>
 *      <p>{formatMessage("hello")}</p>
 *      <p>{locale}</p>
 *    </div>
 *    )};
 *   ```;
 *
 * @template T - A type that represents the shape of the translation messages.
 * @param {Object<string, T>} [messages] - An optional object containing
 *   translation messages for different languages.
 * @returns {I18nResult<T>} An object containing a function to format messages
 *   and the current locale.
 */
declare function useI18n<T extends Record<string, string>>(messages?: {
    [lang: string]: T;
}): I18nResult<T>;
interface I18nResult<T extends LocalizedStrings[keyof LocalizedStrings]> {
    formatMessage: (id: keyof T | MessageDescriptor<T>, values?: {
        [p: string]: any;
    }) => string;
    locale: Locale;
}
interface MessageDescriptor<T extends LocalizedStrings[keyof LocalizedStrings]> {
    id: keyof T;
    defaultMessage?: string;
}
type Message<T extends object> = {
    [U in keyof T]: U;
};
/**
 * Defines a set of messages for use with the `useI18n` hook.
 *
 * @param messages An object containing message descriptors.
 * @returns An object containing the message descriptors with their keys as
 *   property names.
 */
declare function defineMessages<T extends {
    [p: string]: {
        id: string;
    };
}>(messages: T): Message<T>;

/**
 * A hook that uses a MutationObserver to watch for changes to the DOM.
 *
 * @example
 *   ```tsx
 *   const targetRef = React.useRef<HTMLDivElement>(null);
 *
 *   useMutationObserver(targetRef.current, { attributes: true }, (mutations) => {
 *    console.log(mutations);
 *    // do something with the mutations
 *    // ...
 *   });
 *   ```;
 *
 * @param target The element to observe for changes.
 * @param options The options to pass to the MutationObserver.
 * @param callback The callback to call when a mutation occurs.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
declare function useMutationObserver(target: Element | null, options: MutationObserverInit, callback: MutationCallback): MutationObserver | null;

type SetValue<T> = Dispatch<SetStateAction<T>>;
/**
 * A hook to persist a value to localStorage.
 *
 * @example
 *   ```tsx
 *   function MyComponent() {
 *    const [value, setValue] = useLocalStorage("my-value", "default-value");
 *    return (
 *    <input value={value} onChange={e => setValue(e.target.value)} />
 *    );
 *   }
 *   ```;
 *
 * @param key The localStorage key to use
 * @param initialValue The initial value to use if the key is not found in
 *   localStorage
 */
declare function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>];

/**
 * A hook that provides text selection functionality for a given HTML element.
 *
 * ```jsx
 * function MyComponent() {
 *   const ref = useRef();
 *   const [selection, setSelection] = useState();
 *
 *   useTextSelection({
 *     ref,
 *     onSelectionChange: setSelection,
 *   });
 *
 *   return (
 *     <div ref={ref}>
 *       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
 *     </div>
 *   );
 * }
 * ```
 */
declare function useTextSelection({ ref, onSelectionChange, onSelectionEnd, isDisabled, }: TextSelectionProps): void;
interface TextSelectionProps {
    ref: React.RefObject<HTMLElement>;
    onSelectionChange: (selection: Selection) => void;
    onSelectionEnd?: (selection: Selection) => void;
    isDisabled?: boolean;
}

/**
 * Returns the current device type based on the window width.
 *
 * ```jsx
 * const device = useDevice();
 *
 * if (device === "mobile") {
 *   return <MobileComponent />;
 * } else if (device === "tablet") {
 *   return <TabletComponent />;
 * } else {
 *   return <DesktopComponent />;
 * }
 * ```
 *
 * @param element - The element to use to get the owner window. Defaults to
 *   `document.body`.
 */
declare function useDevice(element?: HTMLElement | null): "mobile" | "tablet" | "desktop";

export { Accordion, AccordionItem, type AccordionItemProps, type AccordionProps, ActionButton, type ActionButtonProps, ActionIconButton, type ActionIconButtonProps, Avatar, type AvatarProps, type BlockProps, Box, type BoxProps, Checkbox, type CheckboxProps, ColorInput, type ColorInputProps, type ColorPreset, ColorPresetInlineInput, type ColorPresetInlineInputProps, ColorSwatch, type ColorSwatchProps, DateFormat, type DateFormatProps, Dialog, type DialogProps, DialogTitle, type DialogTitleProps, DomNodeRenderer, type DomNodeRendererProps, Editor, type EditorProps, FileUpload, type FileUploadProps, FreehandCanvas, type FreehandCanvasProps, Group, type GroupProps, I18nProvider, type I18nResult, IconColorInputButton, ImageDropZone, type ImageDropZoneProps, InlineAlert, type InlineAlertProps, Link, type LinkProps, ListBox, type ListBoxProps, type ListOption, Menu, type MenuProps, type MessageDescriptor, MessageFormat, type MessageFormatProps, Modal, ModalClose, ModalContent, type ModalContentProps, type ModalProps, ModalTrigger, NumberFormat, type NumberFormatProps, NumberInput, type NumberInputProps, Pagination, type PaginationProps, Popover, PopoverContent, type PopoverContentProps, type PopoverProps, PopoverTrigger, type PopoverTriggerProps, Portal, type PortalProps, Preview, type PreviewProps, ProgressBar, type ProgressBarProps, ProgressSpinner, type ProgressSpinnerProps, RadioGroup, type RadioGroupProps, Reaction, type ReactionProps, ScrollControlButton, type ScrollControlButtonProps, SearchInput, type SearchInputProps, Select, type SelectProps, Separator, type SeparatorProps, Slider, type SliderProps, type StylingProps, Switch, type SwitchProps, TabItem, type TabItemProps, Tabs, type TabsProps, TagGroup, type TagGroupProps, Text, TextInput, type TextInputProps, type TextProps, ThemeProvider, type ThemeProviderProps, ToggleButton, type ToggleButtonProps, ToggleIconButton, type ToggleIconButtonProps, Toolbar, type ToolbarProps, Tooltip, type TooltipProps, Transform, type TransformProps, defineMessages, useDevice, useI18n, useImage, useIntersectionObserver, useIsFirstRender, useLocalStorage, useMutationObserver, useResizeObserver, useTextSelection, useUndoRedo, useUserPreferences };
