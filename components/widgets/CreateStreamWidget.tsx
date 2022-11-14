import { useState } from "react";
import { BigNumber } from "ethers";
import WidgetContainer from "./WidgetContainer";
import { useStore } from "../../utils/store";
import flowrates from "../../utils/flowrates";
import { IoArrowDown } from "react-icons/io5";
import { TokenOption } from "../../types/TokenOption";
import TokenFlowField from "../TokenFlowField";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import LoadingSpinner from "../LoadingSpinner";

interface CreateStreamWidgetProps {
    displayedSwapFlowRate: string;
    displayedExpectedFlowRate: string;
    showErrorMessage: boolean;
    transactionButtonProps: string;
    transactionButtonLoading: boolean;
}

const CreateStreamWidget = ({ displayedSwapFlowRate, displayedExpectedFlowRate, showErrorMessage, transactionButtonProps, transactionButtonLoading }: CreateStreamWidgetProps) => {
    const store = useStore();

    return (
        <section className="flex flex-col items-center w-full">
            <WidgetContainer title="Swap">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full py-1">
                        <TokenFlowField
                            displayedValue={displayedSwapFlowRate}
                            dropdownItems={flowrates}
                            dropdownValue={store.flowrateUnit}
                            setDropdownValue={store.setFlowrateUnit}
                            token={store.outboundToken}
                            setToken={store.setOutboundToken}
                        />
                    </div>
                    <div className="w-full py-1">
                        <TokenFlowField
                            displayedValue={displayedExpectedFlowRate}
                            token={store.inboundToken}
                            setToken={store.setInboundToken}
                        />
                    </div>
                    <button
                        className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-xl border-[1px] centered-shadow-sm"
                        onClick={() => {
                            const oldOutbound: TokenOption = store.outboundToken;
                            store.setOutboundToken(store.inboundToken);
                            store.setInboundToken(oldOutbound);
                        }}
                    >
                        <IoArrowDown size={20} />
                    </button>
                </div>
                <div className="flex space-x-4 py-2 text-sm text-gray-400 items-center justify-center -translate-x-4">
                    <div>
                        <AiOutlineInfoCircle
                            size={20}
                            className={"transition-all duration-500 "}
                        />
                    </div>
                    <div className="space-y-1">
                        <p>
                            {"1 ETHxp = 1601.59 USDCxp"}
                        </p>
                    </div>
                </div>
                <div className={"w-full " + transactionButtonProps}>
                    <button
                        className={
                            "flex w-full justify-center items-center h-16 font-bold rounded-3xl outline-2 transition-all duration-[2000ms] "
                            + (showErrorMessage ? ' border-aqueductBlue/20 border-2 text-aqueductBlue/50 ' : ' bg-aqueductBlue/90 text-white ')
                            + (!showErrorMessage && !transactionButtonLoading && ' hover:outline ')
                        }
                    //disabled={loading || errorMessage != undefined}
                    >
                        {
                            transactionButtonLoading ?
                                <LoadingSpinner size={30} />
                                :
                                <p>
                                    {showErrorMessage ? 'Enter flow rate' : 'Swap'}
                                </p>
                        }
                    </button>
                </div>
            </WidgetContainer>
        </section >
    );
};

export default CreateStreamWidget;
