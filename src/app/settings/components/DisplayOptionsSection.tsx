"use client";
import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

interface DisplayOption {
    value: string;
    label: string;
    description: string;
}

interface Props {
    displayOption: string;
    setDisplayOption: (option: string) => void;
    displayOptions: DisplayOption[];
}

export default function DisplayOptionsSection({ displayOption, setDisplayOption, displayOptions }: Props) {
    return (
        <section>
            <h3 className="text-gray-800 font-semibold mb-4">Tùy chọn hiển thị</h3>
            <div className="space-y-2">
                {displayOptions.map((option) => (
                    <label
                        key={option.value}
                        className={`relative flex flex-col p-4 rounded-lg border cursor-pointer transition-all duration-200 ${displayOption === option.value
                                ? "border-blue-500 bg-blue-50 text-blue-600"
                                : "border-gray-200 hover:bg-gray-50"
                            }`}
                    >
                        <input
                            type="radio"
                            name="displayOption"
                            value={option.value}
                            checked={displayOption === option.value}
                            onChange={(e) => setDisplayOption(e.target.value)}
                            className="sr-only"
                        />
                        <div className="flex items-start justify-between">
                            <div>
                                <span className={`font-medium block ${displayOption === option.value ? "text-blue-600" : "text-gray-900"}`}>
                                    {option.label}
                                </span>
                                <span className={`text-sm mt-1 ${displayOption === option.value ? "text-blue-500" : "text-gray-600"}`}>
                                    {option.description}
                                </span>
                            </div>
                            {displayOption === option.value && (
                                <CheckIcon className="w-5 h-5 text-blue-600 absolute right-4 top-7" />
                            )}
                        </div>
                    </label>
                ))}
            </div>
        </section>
    );
}
