// AUTOGENERATED FILE - DO NOT MODIFY!
// This file generated by Djinni from bitcoin_public_key_provider.djinni

#import "LGBitcoinLikePublicKey.h"
#include "BitcoinLikePublicKey.hpp"

static_assert(__has_feature(objc_arc), "Djinni requires ARC to be enabled for this file");

@class LGBitcoinLikePublicKey;

namespace djinni_generated {

struct BitcoinLikePublicKey
{
    using CppType = ::ledger::core::api::BitcoinLikePublicKey;
    using ObjcType = LGBitcoinLikePublicKey*;

    using Boxed = BitcoinLikePublicKey;

    static CppType toCpp(ObjcType objc);
    static ObjcType fromCpp(const CppType& cpp);
};

}  // namespace djinni_generated