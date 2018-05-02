// AUTOGENERATED FILE - DO NOT MODIFY!
// This file generated by Djinni from bitcoin_like_wallet.djinni

#ifndef DJINNI_GENERATED_NJSBITCOINLIKEINPUT_HPP
#define DJINNI_GENERATED_NJSBITCOINLIKEINPUT_HPP


#include "../../../core/src/api/../utils/optional.hpp"
#include "NJSAmountCpp.hpp"
#include "NJSBinaryCallback.hpp"
#include "NJSBitcoinLikeOutputCpp.hpp"
#include "NJSBitcoinLikeScriptCpp.hpp"
#include "NJSDerivationPathCpp.hpp"
#include <cstdint>
#include <memory>
#include <string>
#include <vector>

#include <nan.h>
#include <node.h>
#include "../../../core/src/api/BitcoinLikeInput.hpp"

using namespace v8;
using namespace node;
using namespace std;
using namespace ledger::core::api;

class NJSBitcoinLikeInput: public Nan::ObjectWrap {
public:

    static void Initialize(Local<Object> target);
    virtual ~NJSBitcoinLikeInput() {};
    NJSBitcoinLikeInput(const std::shared_ptr<ledger::core::api::BitcoinLikeInput> &iBitcoinLikeInput):_BitcoinLikeInput(iBitcoinLikeInput){};

    static Handle<Object> wrap(const std::shared_ptr<ledger::core::api::BitcoinLikeInput> &object);
    static Nan::Persistent<ObjectTemplate> BitcoinLikeInput_prototype;
    std::shared_ptr<ledger::core::api::BitcoinLikeInput> getCppImpl(){return _BitcoinLikeInput;};

private:
    /** Returns the address of the input (if an address can be computed) */
    static NAN_METHOD(getAddress);

    /**
     * Returns the public associated with the address. This value can be NULL if you are building a transaction with an
     * address which does not belong to your wallet.
     */
    static NAN_METHOD(getPublicKeys);

    /** Returns the derivation path of this input if the address is owned by the wallet */
    static NAN_METHOD(getDerivationPath);

    /**
     * Returns the value of the amount. Depending on the backend this value may not exist if the input is not owned by
     * the wallet.
     */
    static NAN_METHOD(getValue);

    /**
     * Get the transaction hash of the output spent by this input. The result can be NULL if the output is not owned by
     * the wallet
     */
    static NAN_METHOD(getPreviousTxHash);

    /**
     * Get the index at which the output is located in the transaction output spent by this input. The result can be
     * NULL if the input does not belong to the wallet
     *Check whether input
     *@return Boolean, true if input belongs to coinbase transaction (reward for mining a block)
     */
    static NAN_METHOD(isCoinbase);

    /**
     *Stored data cointained in coinbase
     *@return Optional String
     */
    static NAN_METHOD(getCoinbase);

    /**
     *Get output index, it identifies which UTXO from tht transaction to spend
     *@return Optional 32 bits integer, index of previous transaction
     */
    static NAN_METHOD(getPreviousOutputIndex);

    /**
     * Retrieve the output spent by this input. Depending on the implementation this method may
     * use a lock to fetch data from a database. Therefore it may have poor performance, use with
     * caution.
     * @return The output spent by this input.
     */
    static NAN_METHOD(getPreviousOuput);

    /** Get ScriptSig of this input. The scriptsig is the first half of a script necessary to spend a previous output. */
    static NAN_METHOD(getScriptSig);

    /** Parse the script sig to a [[BitcoinLikeScript]] */
    static NAN_METHOD(parseScriptSig);

    /**
     * Set the ScriptS to the given value
     * @param scriptSig The ScriptSig to use for this input
     */
    static NAN_METHOD(setScriptSig);

    /** Push data to the end of the current ScriptSig */
    static NAN_METHOD(pushToScriptSig);

    /** Set the sequence number of this input */
    static NAN_METHOD(setSequence);

    /** Get the sequence number of this input */
    static NAN_METHOD(getSequence);

    static NAN_METHOD(getPreviousTransaction);

    /** Easy way to set the P2PKH script signature. Shorthand for input.pushToScriptSig(input.getPublicKeys()[0], signature) */
    static NAN_METHOD(setP2PKHSigScript);

    static NAN_METHOD(New);

    std::shared_ptr<ledger::core::api::BitcoinLikeInput> _BitcoinLikeInput;
};
#endif //DJINNI_GENERATED_NJSBITCOINLIKEINPUT_HPP