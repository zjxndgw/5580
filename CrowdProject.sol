// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CrowdProject {

    struct Project {
        string name;
        address creator;
        uint256 totalAmount;
        string qrCode;
        bool priority;
    }

    Project[] public projects;
    address public admin;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin");
        _;
    }

    function launchProject(string memory name, uint256 totalAmount, string memory qrCode) public {
        projects.push(Project({
            name: name,
            creator: msg.sender,
            totalAmount: totalAmount,
            qrCode: qrCode,
            priority: false
        }));
    }

    function updateProject(uint256 index, address newCreator, bool isPriority) public onlyAdmin {
        require(index < projects.length, "Invalid index");
        projects[index].creator = newCreator;
        projects[index].priority = isPriority;
    }

    function getProjects() public view returns(Project[] memory) {
        return projects;
    }

    function projectCount() public view returns(uint256) {
        return projects.length;
    }
}
