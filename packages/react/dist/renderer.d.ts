import { PageViewMode, Payload, ReadyState } from "@vivliostyle/core";
import React from "react";
export declare type MessageType = "debug" | "info" | "warn";
export declare type NavigationPayload = Omit<Payload, "internal" | "href" | "content">;
export declare type HyperlinkPayload = Pick<Payload, "internal" | "href">;
interface VolatileState {
    docTitle: string;
    epage: number;
    epageCount: number;
    metadata: unknown;
}
declare type ChildrenFunction = ({ container, reload, }: {
    container: JSX.Element;
    reload: () => void;
}) => React.ReactNode;
interface RendererProps {
    source: string;
    page?: number;
    zoom?: number;
    renderAllPages?: boolean;
    autoResize?: boolean;
    pageViewMode?: PageViewMode;
    defaultPaperSize?: {
        width: number;
        height: number;
    };
    pageBorderWidth?: number;
    fitToScreen?: boolean;
    fontSize?: number;
    background?: string;
    userStyleSheet?: string;
    authorStyleSheet?: string;
    style?: React.CSSProperties;
    navigateToInternalURLs?: boolean;
    onToCLoad?: (toggleToC: (visible: boolean, autoHide: boolean) => void, toCVisible: boolean | null, toC: () => void) => void;
    onSetInstance?: (instance: any) => void;
    onMessage?: (message: string, type: MessageType) => void;
    onError?: (error: string) => void;
    onReadyStateChange?: (state: ReadyState) => void;
    onLoad?: (state: VolatileState) => void;
    onNavigation?: (state: VolatileState) => void;
    onHyperlink?: (payload: HyperlinkPayload) => void;
    children?: React.ReactNode | ChildrenFunction;
}
export declare const Renderer: React.FC<RendererProps>;
export {};
