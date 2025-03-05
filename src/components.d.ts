/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CheckboxInput {
        "checkboxdisabled": boolean;
        "checkboxvalue": string;
        "labelfor": string;
        "labeltitle": string;
    }
    interface GrayOutlinedBtn {
        "btndisabled": boolean;
        "imagesrc": string;
        "plusicon": boolean;
        "text": string;
    }
    interface MainBtn {
    }
    interface MyComponent {
        "first": string;
        "last": string;
        "middle": string;
    }
    interface PrimaryBtn {
        "btndisabled": boolean;
        "imagesrc": string;
        "plusicon": boolean;
        "text": string;
    }
    interface PrimaryNoBorderBtn {
        "btndisabled": boolean;
        "imagesrc": string;
        "plusicon": boolean;
        "text": string;
    }
    interface RadioInput {
        "labelfor": string;
        "labeltitle": string;
        "radioValue": string;
        "radiodisabled": boolean;
    }
    interface RcsActions {
        "actions": string;
        "description": string;
    }
    interface SecondaryBtn {
        "btndisabled": boolean;
        "imagesrc": string;
        "plusicon": boolean;
        "text": string;
    }
    interface SecondaryNoBorderBtn {
        "btndisabled": boolean;
        "imagesrc": string;
        "plusicon": boolean;
        "text": string;
    }
    interface UpuiChip {
        "removable"?: boolean;
        "selected"?: boolean;
        "size"?: 'small' | 'medium' | 'large';
        "text": string;
    }
    interface UpuiInput {
        "inputId": string;
        "label": string;
        "name": string;
        "placeholder": string;
        "readonly": boolean;
        "type": string;
        "value": string;
    }
}
export interface RcsActionsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRcsActionsElement;
}
export interface UpuiChipCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUpuiChipElement;
}
export interface UpuiInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUpuiInputElement;
}
declare global {
    interface HTMLCheckboxInputElement extends Components.CheckboxInput, HTMLStencilElement {
    }
    var HTMLCheckboxInputElement: {
        prototype: HTMLCheckboxInputElement;
        new (): HTMLCheckboxInputElement;
    };
    interface HTMLGrayOutlinedBtnElement extends Components.GrayOutlinedBtn, HTMLStencilElement {
    }
    var HTMLGrayOutlinedBtnElement: {
        prototype: HTMLGrayOutlinedBtnElement;
        new (): HTMLGrayOutlinedBtnElement;
    };
    interface HTMLMainBtnElement extends Components.MainBtn, HTMLStencilElement {
    }
    var HTMLMainBtnElement: {
        prototype: HTMLMainBtnElement;
        new (): HTMLMainBtnElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPrimaryBtnElement extends Components.PrimaryBtn, HTMLStencilElement {
    }
    var HTMLPrimaryBtnElement: {
        prototype: HTMLPrimaryBtnElement;
        new (): HTMLPrimaryBtnElement;
    };
    interface HTMLPrimaryNoBorderBtnElement extends Components.PrimaryNoBorderBtn, HTMLStencilElement {
    }
    var HTMLPrimaryNoBorderBtnElement: {
        prototype: HTMLPrimaryNoBorderBtnElement;
        new (): HTMLPrimaryNoBorderBtnElement;
    };
    interface HTMLRadioInputElement extends Components.RadioInput, HTMLStencilElement {
    }
    var HTMLRadioInputElement: {
        prototype: HTMLRadioInputElement;
        new (): HTMLRadioInputElement;
    };
    interface HTMLRcsActionsElementEventMap {
        "actionClick": string;
    }
    interface HTMLRcsActionsElement extends Components.RcsActions, HTMLStencilElement {
        addEventListener<K extends keyof HTMLRcsActionsElementEventMap>(type: K, listener: (this: HTMLRcsActionsElement, ev: RcsActionsCustomEvent<HTMLRcsActionsElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLRcsActionsElementEventMap>(type: K, listener: (this: HTMLRcsActionsElement, ev: RcsActionsCustomEvent<HTMLRcsActionsElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLRcsActionsElement: {
        prototype: HTMLRcsActionsElement;
        new (): HTMLRcsActionsElement;
    };
    interface HTMLSecondaryBtnElement extends Components.SecondaryBtn, HTMLStencilElement {
    }
    var HTMLSecondaryBtnElement: {
        prototype: HTMLSecondaryBtnElement;
        new (): HTMLSecondaryBtnElement;
    };
    interface HTMLSecondaryNoBorderBtnElement extends Components.SecondaryNoBorderBtn, HTMLStencilElement {
    }
    var HTMLSecondaryNoBorderBtnElement: {
        prototype: HTMLSecondaryNoBorderBtnElement;
        new (): HTMLSecondaryNoBorderBtnElement;
    };
    interface HTMLUpuiChipElementEventMap {
        "chipClick": void;
        "chipRemove": void;
    }
    interface HTMLUpuiChipElement extends Components.UpuiChip, HTMLStencilElement {
        addEventListener<K extends keyof HTMLUpuiChipElementEventMap>(type: K, listener: (this: HTMLUpuiChipElement, ev: UpuiChipCustomEvent<HTMLUpuiChipElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLUpuiChipElementEventMap>(type: K, listener: (this: HTMLUpuiChipElement, ev: UpuiChipCustomEvent<HTMLUpuiChipElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLUpuiChipElement: {
        prototype: HTMLUpuiChipElement;
        new (): HTMLUpuiChipElement;
    };
    interface HTMLUpuiInputElementEventMap {
        "valueChanged": string;
    }
    interface HTMLUpuiInputElement extends Components.UpuiInput, HTMLStencilElement {
        addEventListener<K extends keyof HTMLUpuiInputElementEventMap>(type: K, listener: (this: HTMLUpuiInputElement, ev: UpuiInputCustomEvent<HTMLUpuiInputElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLUpuiInputElementEventMap>(type: K, listener: (this: HTMLUpuiInputElement, ev: UpuiInputCustomEvent<HTMLUpuiInputElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLUpuiInputElement: {
        prototype: HTMLUpuiInputElement;
        new (): HTMLUpuiInputElement;
    };
    interface HTMLElementTagNameMap {
        "checkbox-input": HTMLCheckboxInputElement;
        "gray-outlined-btn": HTMLGrayOutlinedBtnElement;
        "main-btn": HTMLMainBtnElement;
        "my-component": HTMLMyComponentElement;
        "primary-btn": HTMLPrimaryBtnElement;
        "primary-no-border-btn": HTMLPrimaryNoBorderBtnElement;
        "radio-input": HTMLRadioInputElement;
        "rcs-actions": HTMLRcsActionsElement;
        "secondary-btn": HTMLSecondaryBtnElement;
        "secondary-no-border-btn": HTMLSecondaryNoBorderBtnElement;
        "upui-chip": HTMLUpuiChipElement;
        "upui-input": HTMLUpuiInputElement;
    }
}
declare namespace LocalJSX {
    interface CheckboxInput {
        "checkboxdisabled"?: boolean;
        "checkboxvalue"?: string;
        "labelfor"?: string;
        "labeltitle"?: string;
    }
    interface GrayOutlinedBtn {
        "btndisabled"?: boolean;
        "imagesrc"?: string;
        "plusicon"?: boolean;
        "text"?: string;
    }
    interface MainBtn {
    }
    interface MyComponent {
        "first"?: string;
        "last"?: string;
        "middle"?: string;
    }
    interface PrimaryBtn {
        "btndisabled"?: boolean;
        "imagesrc"?: string;
        "plusicon"?: boolean;
        "text"?: string;
    }
    interface PrimaryNoBorderBtn {
        "btndisabled"?: boolean;
        "imagesrc"?: string;
        "plusicon"?: boolean;
        "text"?: string;
    }
    interface RadioInput {
        "labelfor"?: string;
        "labeltitle"?: string;
        "radioValue"?: string;
        "radiodisabled"?: boolean;
    }
    interface RcsActions {
        "actions"?: string;
        "description"?: string;
        "onActionClick"?: (event: RcsActionsCustomEvent<string>) => void;
    }
    interface SecondaryBtn {
        "btndisabled"?: boolean;
        "imagesrc"?: string;
        "plusicon"?: boolean;
        "text"?: string;
    }
    interface SecondaryNoBorderBtn {
        "btndisabled"?: boolean;
        "imagesrc"?: string;
        "plusicon"?: boolean;
        "text"?: string;
    }
    interface UpuiChip {
        "onChipClick"?: (event: UpuiChipCustomEvent<void>) => void;
        "onChipRemove"?: (event: UpuiChipCustomEvent<void>) => void;
        "removable"?: boolean;
        "selected"?: boolean;
        "size"?: 'small' | 'medium' | 'large';
        "text": string;
    }
    interface UpuiInput {
        "inputId"?: string;
        "label"?: string;
        "name"?: string;
        "onValueChanged"?: (event: UpuiInputCustomEvent<string>) => void;
        "placeholder"?: string;
        "readonly"?: boolean;
        "type"?: string;
        "value"?: string;
    }
    interface IntrinsicElements {
        "checkbox-input": CheckboxInput;
        "gray-outlined-btn": GrayOutlinedBtn;
        "main-btn": MainBtn;
        "my-component": MyComponent;
        "primary-btn": PrimaryBtn;
        "primary-no-border-btn": PrimaryNoBorderBtn;
        "radio-input": RadioInput;
        "rcs-actions": RcsActions;
        "secondary-btn": SecondaryBtn;
        "secondary-no-border-btn": SecondaryNoBorderBtn;
        "upui-chip": UpuiChip;
        "upui-input": UpuiInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "checkbox-input": LocalJSX.CheckboxInput & JSXBase.HTMLAttributes<HTMLCheckboxInputElement>;
            "gray-outlined-btn": LocalJSX.GrayOutlinedBtn & JSXBase.HTMLAttributes<HTMLGrayOutlinedBtnElement>;
            "main-btn": LocalJSX.MainBtn & JSXBase.HTMLAttributes<HTMLMainBtnElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "primary-btn": LocalJSX.PrimaryBtn & JSXBase.HTMLAttributes<HTMLPrimaryBtnElement>;
            "primary-no-border-btn": LocalJSX.PrimaryNoBorderBtn & JSXBase.HTMLAttributes<HTMLPrimaryNoBorderBtnElement>;
            "radio-input": LocalJSX.RadioInput & JSXBase.HTMLAttributes<HTMLRadioInputElement>;
            "rcs-actions": LocalJSX.RcsActions & JSXBase.HTMLAttributes<HTMLRcsActionsElement>;
            "secondary-btn": LocalJSX.SecondaryBtn & JSXBase.HTMLAttributes<HTMLSecondaryBtnElement>;
            "secondary-no-border-btn": LocalJSX.SecondaryNoBorderBtn & JSXBase.HTMLAttributes<HTMLSecondaryNoBorderBtnElement>;
            "upui-chip": LocalJSX.UpuiChip & JSXBase.HTMLAttributes<HTMLUpuiChipElement>;
            "upui-input": LocalJSX.UpuiInput & JSXBase.HTMLAttributes<HTMLUpuiInputElement>;
        }
    }
}
