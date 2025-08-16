import { ethers } from "ethers";
import CrowdProjectAbi from "./CrowdProject.json";

const CONTRACT_ADDRESS = "你的合约地址";

// 连接区块链
function getContract() {
  if (!window.ethereum) return null;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, CrowdProjectAbi, signer);
}

// 读取所有项目
export async function getProjects() {
  try {
    const contract = getContract();
    const projects = await contract.getProjects();
    return projects.map((p, i) => ({
      id: i,
      name: p.name,
      description: p.description,
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

// 发起新项目
export async function createProject(name, description) {
  try {
    const contract = getContract();
    const tx = await contract.createProject(name, description);
    await tx.wait();
  } catch (err) {
    console.error(err);
  }
}
