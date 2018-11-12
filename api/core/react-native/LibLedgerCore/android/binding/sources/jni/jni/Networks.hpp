// AUTOGENERATED FILE - DO NOT MODIFY!
// This file generated by Djinni from networks.djinni

#ifndef DJINNI_GENERATED_NETWORKS_HPP_JNI_
#define DJINNI_GENERATED_NETWORKS_HPP_JNI_

#include "../../api/Networks.hpp"
#include "djinni_support.hpp"

namespace djinni_generated {

class Networks final : ::djinni::JniInterface<::ledger::core::api::Networks, Networks> {
public:
    using CppType = std::shared_ptr<::ledger::core::api::Networks>;
    using CppOptType = std::shared_ptr<::ledger::core::api::Networks>;
    using JniType = jobject;

    using Boxed = Networks;

    ~Networks();

    static CppType toCpp(JNIEnv* jniEnv, JniType j) { return ::djinni::JniClass<Networks>::get()._fromJava(jniEnv, j); }
    static ::djinni::LocalRef<JniType> fromCppOpt(JNIEnv* jniEnv, const CppOptType& c) { return {jniEnv, ::djinni::JniClass<Networks>::get()._toJava(jniEnv, c)}; }
    static ::djinni::LocalRef<JniType> fromCpp(JNIEnv* jniEnv, const CppType& c) { return fromCppOpt(jniEnv, c); }

private:
    Networks();
    friend ::djinni::JniClass<Networks>;
    friend ::djinni::JniInterface<::ledger::core::api::Networks, Networks>;

};

}  // namespace djinni_generated
#endif //DJINNI_GENERATED_NETWORKS_HPP_JNI_