import { BigNumber, ethers } from "ethers"
import { useEffect, useState } from "react"
import { useAccount, useProvider } from "wagmi"
import { TokenOption } from "../../types/TokenOption";
import AnimatedBalance from "../AnimatedBalance";

const ANIMATION_MINIMUM_STEP_TIME = 100;
const REFRESH_STEP_TIME = 5000;
const REFRESH_INTERVAL = 300; // 300 * 100 = 30000 ms = 30 s

interface BalancesFieldProps {
    token0: TokenOption;
    token1: TokenOption;
}

const BalancesField = ({ token0, token1 }: BalancesFieldProps) => {
    const [currentBalance0, setCurrentBalance0] = useState<BigNumber>(
        ethers.BigNumber.from(0)
    );
    const [flowRate0, setFlowRate0] = useState<BigNumber>(
        ethers.BigNumber.from(0)
    );
    const [currentBalance1, setCurrentBalance1] = useState<BigNumber>(
        ethers.BigNumber.from(0)
    );
    const [flowRate1, setFlowRate1] = useState<BigNumber>(
        ethers.BigNumber.from(0)
    );
    const provider = useProvider();
    const { address } = useAccount();

    async function refresh() {
        // refresh vars
        const tokenABI = [
            "function realtimeBalanceOf(address account, uint256 timestamp) public view returns (int256 availableBalance, uint256 deposit, uint256 owedDeposit)",
        ];
        if (address) {
            const tokenContract0 = new ethers.Contract(
                token0.address,
                tokenABI,
                provider
            );
            const tokenContract1 = new ethers.Contract(
                token1.address,
                tokenABI,
                provider
            );
            const currentTimestampBigNumber = ethers.BigNumber.from(
                new Date().valueOf() // Milliseconds elapsed since UTC epoch, disregards timezone.
            );

            // set token0 state
            const initialBalance0 = (
                await tokenContract0.realtimeBalanceOf(
                    address,
                    currentTimestampBigNumber.div(1000).toString()
                )
            ).availableBalance;
            const futureBalance0 = (
                await tokenContract0.realtimeBalanceOf(
                    address,
                    currentTimestampBigNumber
                        .div(1000)
                        .add(
                            (REFRESH_INTERVAL * ANIMATION_MINIMUM_STEP_TIME) /
                            1000
                        )
                        .toString()
                )
            ).availableBalance;
            setCurrentBalance0(initialBalance0);
            setFlowRate0(
                futureBalance0.sub(initialBalance0).div(REFRESH_INTERVAL)
            );

            // set token1 state
            const initialBalance1 = (
                await tokenContract1.realtimeBalanceOf(
                    address,
                    currentTimestampBigNumber.div(1000).toString()
                )
            ).availableBalance;
            const futureBalance1 = (
                await tokenContract1.realtimeBalanceOf(
                    address,
                    currentTimestampBigNumber
                        .div(1000)
                        .add(
                            (REFRESH_INTERVAL * ANIMATION_MINIMUM_STEP_TIME) /
                            1000
                        )
                        .toString()
                )
            ).availableBalance;
            setCurrentBalance1(initialBalance1);
            setFlowRate1(
                futureBalance1.sub(initialBalance1).div(REFRESH_INTERVAL)
            );
        }
    }

    // REFRESH(in milliseconds) = REFRESH_INTERVAL * ANIMATION_MINIMUM_STEP_TIME
    const [time, setTime] = useState(REFRESH_INTERVAL);
    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(time + 1);
            if (time >= REFRESH_INTERVAL) {
                setTime(0);
                refresh();
            }

            // animate frame
            setCurrentBalance0((c) => c.add(flowRate0));
            setCurrentBalance1((c) => c.add(flowRate1));
        }, ANIMATION_MINIMUM_STEP_TIME);
        return () => {
            clearTimeout(timer);
        };
    }, [time]);

    useEffect(() => {
        refresh();
    }, [address]);

    return (
        <div className="flex items-center space-x-2 monospace-font text-sm">
            <p className="tracking-widest font-semibold">
                {
                    parseFloat(
                        ethers.utils.formatEther(currentBalance0)
                    ).toLocaleString(undefined, {minimumFractionDigits: 6})
                }
            </p>
            <img src={token0.logo} className='h-5 pr-4' />
            <p className="tracking-widest font-semibold">
                {
                    parseFloat(
                        ethers.utils.formatEther(currentBalance1)
                    ).toLocaleString(undefined, {minimumFractionDigits: 6})
                }
            </p>
            <img src={token1.logo} className='h-5' />
        </div>
    )
}

export default BalancesField;