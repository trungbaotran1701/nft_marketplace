// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NftMarket is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _listedItems;
    Counters.Counter private _tokenIds;

    mapping(string => bool) private _existsTokenURI;

    constructor() ERC721("TrungChanNFT", "TCNFT") {}

    function mintToken(string memory tokenURI) public payable returns (uint256) {
        require(!checkTokenURIs(tokenURI), 'TokenURI has been existed');
        _listedItems.increment();
        _tokenIds.increment();

        uint newTokenId = _tokenIds.current();

        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        _existsTokenURI[tokenURI] = true;

        return newTokenId;
    }

    function checkTokenURIs(string memory tokenURI) public view returns (bool) {
        return _existsTokenURI[tokenURI] == true;
    }

}