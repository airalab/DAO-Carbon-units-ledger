import 'creator/CreatorAuditor.sol';
import 'builder/Builder.sol';

/**
 * @title BuilderAuditor contract
 */
contract BuilderAuditor is Builder {
    /**
     * @dev Run script creation contract
     * @param _operator is an operator address
     * @param _token is an associated token address
     * @param _holder is a insurance holder address
     * @return address new contract
     */
    function create(address _operator, address _token, address _holder) returns (address) {
        var inst = CreatorAuditor.create(_operator, _token, _holder);
        Owned(inst).delegate(msg.sender);
        deal(inst);
        return inst;
    }
}