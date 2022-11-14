import { BigNumber, ethers } from "ethers";
import { useEffect } from "react";
import { useStore } from "../utils/store";
import { GenericDropdownOption } from "../types/GenericDropdownOption";
import { TokenOption } from "../types/TokenOption";
import tokens from "../utils/tokens";
import Select from "./Select";
import React from "react";

interface TokenFlowFieldProps {
    displayedValue: string;
    dropdownItems?: GenericDropdownOption[];
    dropdownValue?: GenericDropdownOption;
    setDropdownValue?: (value: GenericDropdownOption) => void;
    token: TokenOption;
    setToken: (token: TokenOption) => void;
    isNonSuperToken?: boolean;
}

const TokenFlowField = ({
    displayedValue,
    dropdownItems,
    dropdownValue,
    setDropdownValue,
    token,
    setToken,
    isNonSuperToken
}: TokenFlowFieldProps) => {

    const store = useStore();

    return (
        <div>
            <div
                className={
                    "hover:border-aqueductBlue focus-within:textbox-outline flex flex-col grow border-[1px] border-gray-200 centered-shadow-sm rounded-2xl "
                    + " px-3 py-3"
                }
            >
                <div className={"flex items-end2 space-x-2"}>
                    <input
                        className={
                            "px-2 py-3 text-5xl text-slate-600 font-semibold monospace-font tracking-widest flex w-full h-min outline-none"
                        }
                        type="text"
                        pattern="^[0-9]*[.,]?[0-9]*$"
                        placeholder="0"
                        value={displayedValue}
                        onChange={() => {}}
                    />
                    {
                        dropdownItems && dropdownValue && setDropdownValue &&
                        <Select options={dropdownItems} dropdownValue={dropdownValue} setDropdownValue={setDropdownValue} />
                    }
                    <Select
                        options={tokens}
                        dropdownValue={token}
                        setDropdownValue={setToken}
                        isNonSuperToken={isNonSuperToken}
                    />
                </div>
                
            </div>
        </div>
    );
};

export default TokenFlowField;