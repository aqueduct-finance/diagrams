import { useState } from "react";
import { BigNumber } from "ethers";
import WidgetContainer from "./WidgetContainer";
import { useStore } from "../../utils/store";
import flowrates from "../../utils/flowrates";
import { IoSwapVertical } from "react-icons/io5";
import TokenFlowField from "../TokenFlowField";
import ReadOnlyFlowOutput from "../ReadOnlyFlowOutput";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import LoadingSpinner from "../LoadingSpinner";

interface ProvideLiquidityWidgetProps {
    displayedFlowRate0: string;
    displayedExpectedFlowRate0: string;
    displayedFlowRate1: string;
    displayedExpectedFlowRate1: string;
    showErrorMessage: boolean;
    transactionButtonProps: string;
    transactionButtonLoading: boolean;
}

const ProvideLiquidityWidget = ({ displayedFlowRate0, displayedExpectedFlowRate0, displayedFlowRate1, displayedExpectedFlowRate1, showErrorMessage, transactionButtonProps, transactionButtonLoading }: ProvideLiquidityWidgetProps) => {
    const store = useStore();

    return (
        <section className="flex flex-col items-center w-full">
            <WidgetContainer title="Provide Liquidity">
                <div className="flex flex-col items-center space-y-2 py-1">
                    <TokenFlowField
                        displayedValue={displayedFlowRate0}
                        dropdownItems={flowrates}
                        dropdownValue={store.flowrateUnit}
                        setDropdownValue={store.setFlowrateUnit}
                        token={store.outboundToken}
                        setToken={store.setOutboundToken}
                    />
                    <div className="w-full">
                        <ReadOnlyFlowOutput
                            displayedValue={displayedExpectedFlowRate0}
                            token={store.inboundToken}
                        />
                    </div>
                    <div className="py-2">
                        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-xl border-[1px]">
                            <IoSwapVertical size={20} />
                        </div>
                    </div>
                    <TokenFlowField
                        displayedValue={displayedFlowRate1}
                        dropdownItems={flowrates}
                        dropdownValue={store.flowrateUnit}
                        setDropdownValue={store.setFlowrateUnit}
                        token={store.outboundToken}
                        setToken={store.setOutboundToken}
                    />
                    <div className="w-full">
                        <ReadOnlyFlowOutput
                            displayedValue={displayedExpectedFlowRate1}
                            token={store.outboundToken}
                        />
                    </div>
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
                                    {showErrorMessage ? 'Enter flow rates' : 'Provide Liquidity'}
                                </p>
                        }
                    </button>
                </div>
            </WidgetContainer>
        </section >
    );
};

export default ProvideLiquidityWidget;
