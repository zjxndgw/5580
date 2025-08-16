import { ethers } from "ethers";
import CrowdProjectAbi from "./CrowdProject.json";

const CONTRACT_ADDRESS = "你的合约地址";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(CONTRACT_ADDRESS, CrowdProjectAbi, provider);

export const loadProjectsFromChain = async () => {
    const projList = await contract.getProjects();
    const localFunds = JSON.parse(localStorage.getItem("projects_funds")) || {};
    return projList.map((p, idx) => ({
        index: idx,
        name: p.name,
        creator: p.creator,
        totalAmount: p.totalAmount.toNumber(),
        qrCode: p.qrCode,
        priority: p.priority,
        fundedAmount: localFunds[idx] || 0
    }));
};

export const launchProject = async (name, totalAmount, qrCode) => {
    const signer = provider.getSigner();
    const tx = await contract.connect(signer).launchProject(name, totalAmount, qrCode);
    await tx.wait();
};

export const updateProject = async (index, newCreator, priority) => {
    const signer = provider.getSigner();
    const tx = await contract.connect(signer).updateProject(index, newCreator, priority);
    await tx.wait();
};
