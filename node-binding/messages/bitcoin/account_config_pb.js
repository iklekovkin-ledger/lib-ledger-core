/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var common_amount_pb = require('../common/amount_pb.js');
goog.object.extend(proto, common_amount_pb);
goog.exportSymbol('proto.ledger.core.message.bitcoin.AccountConfiguration', null, global);
goog.exportSymbol('proto.ledger.core.message.bitcoin.AccountSettings', null, global);
goog.exportSymbol('proto.ledger.core.message.bitcoin.KeychainEngine', null, global);
goog.exportSymbol('proto.ledger.core.message.bitcoin.LedgerExplorerConfig', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ledger.core.message.bitcoin.LedgerExplorerConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ledger.core.message.bitcoin.LedgerExplorerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ledger.core.message.bitcoin.LedgerExplorerConfig.displayName = 'proto.ledger.core.message.bitcoin.LedgerExplorerConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ledger.core.message.bitcoin.AccountSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ledger.core.message.bitcoin.AccountSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ledger.core.message.bitcoin.AccountSettings.displayName = 'proto.ledger.core.message.bitcoin.AccountSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ledger.core.message.bitcoin.AccountConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ledger.core.message.bitcoin.AccountConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ledger.core.message.bitcoin.AccountConfiguration.displayName = 'proto.ledger.core.message.bitcoin.AccountConfiguration';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ledger.core.message.bitcoin.LedgerExplorerConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ledger.core.message.bitcoin.LedgerExplorerConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ledger.core.message.bitcoin.LedgerExplorerConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ledger.core.message.bitcoin.LedgerExplorerConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    endpoint: jspb.Message.getFieldWithDefault(msg, 2, ""),
    port: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ledger.core.message.bitcoin.LedgerExplorerConfig}
 */
proto.ledger.core.message.bitcoin.LedgerExplorerConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ledger.core.message.bitcoin.LedgerExplorerConfig;
  return proto.ledger.core.message.bitcoin.LedgerExplorerConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ledger.core.message.bitcoin.LedgerExplorerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ledger.core.message.bitcoin.LedgerExplorerConfig}
 */
proto.ledger.core.message.bitcoin.LedgerExplorerConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ledger.core.message.bitcoin.LedgerExplorerConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ledger.core.message.bitcoin.LedgerExplorerConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ledger.core.message.bitcoin.LedgerExplorerConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ledger.core.message.bitcoin.LedgerExplorerConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getEndpoint();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 version = 1;
 * @return {number}
 */
proto.ledger.core.message.bitcoin.LedgerExplorerConfig.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.ledger.core.message.bitcoin.LedgerExplorerConfig.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string endpoint = 2;
 * @return {string}
 */
proto.ledger.core.message.bitcoin.LedgerExplorerConfig.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.ledger.core.message.bitcoin.LedgerExplorerConfig.prototype.setEndpoint = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 port = 3;
 * @return {number}
 */
proto.ledger.core.message.bitcoin.LedgerExplorerConfig.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.ledger.core.message.bitcoin.LedgerExplorerConfig.prototype.setPort = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ledger.core.message.bitcoin.AccountSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.ledger.core.message.bitcoin.AccountSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ledger.core.message.bitcoin.AccountSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ledger.core.message.bitcoin.AccountSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    explorer: (f = msg.getExplorer()) && proto.ledger.core.message.bitcoin.LedgerExplorerConfig.toObject(includeInstance, f),
    trustLevel: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dustThreshold: (f = msg.getDustThreshold()) && common_amount_pb.Amount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ledger.core.message.bitcoin.AccountSettings}
 */
proto.ledger.core.message.bitcoin.AccountSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ledger.core.message.bitcoin.AccountSettings;
  return proto.ledger.core.message.bitcoin.AccountSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ledger.core.message.bitcoin.AccountSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ledger.core.message.bitcoin.AccountSettings}
 */
proto.ledger.core.message.bitcoin.AccountSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.ledger.core.message.bitcoin.LedgerExplorerConfig;
      reader.readMessage(value,proto.ledger.core.message.bitcoin.LedgerExplorerConfig.deserializeBinaryFromReader);
      msg.setExplorer(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTrustLevel(value);
      break;
    case 4:
      var value = new common_amount_pb.Amount;
      reader.readMessage(value,common_amount_pb.Amount.deserializeBinaryFromReader);
      msg.setDustThreshold(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ledger.core.message.bitcoin.AccountSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ledger.core.message.bitcoin.AccountSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ledger.core.message.bitcoin.AccountSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ledger.core.message.bitcoin.AccountSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExplorer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ledger.core.message.bitcoin.LedgerExplorerConfig.serializeBinaryToWriter
    );
  }
  f = message.getTrustLevel();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDustThreshold();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_amount_pb.Amount.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ledger.core.message.bitcoin.AccountSettings.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ledger.core.message.bitcoin.AccountSettings.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LedgerExplorerConfig explorer = 2;
 * @return {?proto.ledger.core.message.bitcoin.LedgerExplorerConfig}
 */
proto.ledger.core.message.bitcoin.AccountSettings.prototype.getExplorer = function() {
  return /** @type{?proto.ledger.core.message.bitcoin.LedgerExplorerConfig} */ (
    jspb.Message.getWrapperField(this, proto.ledger.core.message.bitcoin.LedgerExplorerConfig, 2));
};


/** @param {?proto.ledger.core.message.bitcoin.LedgerExplorerConfig|undefined} value */
proto.ledger.core.message.bitcoin.AccountSettings.prototype.setExplorer = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.ledger.core.message.bitcoin.AccountSettings.prototype.clearExplorer = function() {
  this.setExplorer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ledger.core.message.bitcoin.AccountSettings.prototype.hasExplorer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 trust_level = 3;
 * @return {number}
 */
proto.ledger.core.message.bitcoin.AccountSettings.prototype.getTrustLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.ledger.core.message.bitcoin.AccountSettings.prototype.setTrustLevel = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional ledger.core.message.common.Amount dust_threshold = 4;
 * @return {?proto.ledger.core.message.common.Amount}
 */
proto.ledger.core.message.bitcoin.AccountSettings.prototype.getDustThreshold = function() {
  return /** @type{?proto.ledger.core.message.common.Amount} */ (
    jspb.Message.getWrapperField(this, common_amount_pb.Amount, 4));
};


/** @param {?proto.ledger.core.message.common.Amount|undefined} value */
proto.ledger.core.message.bitcoin.AccountSettings.prototype.setDustThreshold = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.ledger.core.message.bitcoin.AccountSettings.prototype.clearDustThreshold = function() {
  this.setDustThreshold(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ledger.core.message.bitcoin.AccountSettings.prototype.hasDustThreshold = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ledger.core.message.bitcoin.AccountConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.ledger.core.message.bitcoin.AccountConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ledger.core.message.bitcoin.AccountConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ledger.core.message.bitcoin.AccountConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
    keychainEngine: jspb.Message.getFieldWithDefault(msg, 1, 0),
    xpubPath: jspb.Message.getFieldWithDefault(msg, 2, ""),
    settings: (f = msg.getSettings()) && proto.ledger.core.message.bitcoin.AccountSettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ledger.core.message.bitcoin.AccountConfiguration}
 */
proto.ledger.core.message.bitcoin.AccountConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ledger.core.message.bitcoin.AccountConfiguration;
  return proto.ledger.core.message.bitcoin.AccountConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ledger.core.message.bitcoin.AccountConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ledger.core.message.bitcoin.AccountConfiguration}
 */
proto.ledger.core.message.bitcoin.AccountConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ledger.core.message.bitcoin.KeychainEngine} */ (reader.readEnum());
      msg.setKeychainEngine(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setXpubPath(value);
      break;
    case 3:
      var value = new proto.ledger.core.message.bitcoin.AccountSettings;
      reader.readMessage(value,proto.ledger.core.message.bitcoin.AccountSettings.deserializeBinaryFromReader);
      msg.setSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ledger.core.message.bitcoin.AccountConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ledger.core.message.bitcoin.AccountConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ledger.core.message.bitcoin.AccountConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ledger.core.message.bitcoin.AccountConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeychainEngine();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getXpubPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ledger.core.message.bitcoin.AccountSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional KeychainEngine keychain_engine = 1;
 * @return {!proto.ledger.core.message.bitcoin.KeychainEngine}
 */
proto.ledger.core.message.bitcoin.AccountConfiguration.prototype.getKeychainEngine = function() {
  return /** @type {!proto.ledger.core.message.bitcoin.KeychainEngine} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.ledger.core.message.bitcoin.KeychainEngine} value */
proto.ledger.core.message.bitcoin.AccountConfiguration.prototype.setKeychainEngine = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string xpub_path = 2;
 * @return {string}
 */
proto.ledger.core.message.bitcoin.AccountConfiguration.prototype.getXpubPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.ledger.core.message.bitcoin.AccountConfiguration.prototype.setXpubPath = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AccountSettings settings = 3;
 * @return {?proto.ledger.core.message.bitcoin.AccountSettings}
 */
proto.ledger.core.message.bitcoin.AccountConfiguration.prototype.getSettings = function() {
  return /** @type{?proto.ledger.core.message.bitcoin.AccountSettings} */ (
    jspb.Message.getWrapperField(this, proto.ledger.core.message.bitcoin.AccountSettings, 3));
};


/** @param {?proto.ledger.core.message.bitcoin.AccountSettings|undefined} value */
proto.ledger.core.message.bitcoin.AccountConfiguration.prototype.setSettings = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.ledger.core.message.bitcoin.AccountConfiguration.prototype.clearSettings = function() {
  this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ledger.core.message.bitcoin.AccountConfiguration.prototype.hasSettings = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * @enum {number}
 */
proto.ledger.core.message.bitcoin.KeychainEngine = {
  BIP32_P2PKH: 0,
  BIP49_P2SH: 1,
  BIP173_P2WPKH: 2,
  BIP173_P2WSH: 3
};

goog.object.extend(exports, proto.ledger.core.message.bitcoin);
