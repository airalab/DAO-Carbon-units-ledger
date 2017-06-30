/* eslint quote-props: 0 */
/* eslint quotes: 0 */
/* eslint object-curly-spacing: 0 */
/* eslint key-spacing: 0 */
/* eslint comma-spacing: 0 */
export default [{ constant: false, inputs: [{ name: '_owner', type: 'address' }], name: 'setOwner', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }], name: 'balances', outputs: [{ name: '', type: 'int256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'beneficiary', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'payment', outputs: [], payable: true, type: 'function' }, { constant: true, inputs: [], name: 'hammer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'taxman', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_account', type: 'address' }, { name: '_fee', type: 'uint256' }], name: 'serviceFee', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'destroy', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_hammer', type: 'address' }], name: 'setHammer', outputs: [], payable: false, type: 'function' }, { inputs: [{ name: '_taxman', type: 'address' }, { name: '_beneficiary', type: 'address' }], payable: false, type: 'constructor' }]