import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
import InfiniteSlider from "./InfiniteSlider";

function cn(...inputs) {
                return twMerge(clsx(inputs));
}

export default function BlurredInfiniteSlider({
                children,
                fadeWidth = 80,
                containerClassName,
                ...sliderProps
}) {
                const maskStyle = {
                                maskImage:
                                                `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
                                WebkitMaskImage:
                                                `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
                };

                return (
                                <div
                                                className={cn("relative w-full", containerClassName)}
                                                style={maskStyle}
                                >
                                                <InfiniteSlider {...sliderProps}>{children}</InfiniteSlider>
                                </div>
                );
}
