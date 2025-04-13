'use strict';

var chunkAIJNXPS2_cjs = require('./chunk-AIJNXPS2.cjs');
require('./chunk-FI6Q4OWN.cjs');
var uiTon = require('@layerzerolabs/ui-ton');
var uiCore = require('@layerzerolabs/ui-core');
var core = require('@ton/core');
var lzDefinitions = require('@layerzerolabs/lz-definitions');
var lzTonSdkV2 = require('@layerzerolabs/lz-ton-sdk-v2');
var memoryCache = require('memory-cache');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var memoryCache__default = /*#__PURE__*/_interopDefault(memoryCache);

// src/ton/allObjects.ts
var tonObjects = {
  OApp: {
    name: "oAppStore",
    0: {
      fieldName: "OApp::owner",
      fieldType: "cl::t::address"
    },
    1: {
      fieldName: "OApp::tentativeOwner",
      fieldType: "cl::t::address"
    },
    2: {
      fieldName: "OApp::authenticated",
      fieldType: "cl::t::bool"
    },
    3: {
      fieldName: "OApp::initialized",
      fieldType: "cl::t::bool"
    },
    4: {
      fieldName: "OApp::controllerAddress",
      fieldType: "cl::t::address"
    },
    5: {
      fieldName: "OApp::eid",
      fieldType: "cl::t::uint32"
    },
    6: {
      fieldName: "OApp::maxReceivedNonce",
      fieldType: "cl::t::dict256"
    },
    7: {
      fieldName: "OApp::peers",
      fieldType: "cl::t::dict256"
    },
    8: {
      fieldName: "OApp::enforcedOptions",
      fieldType: "cl::t::dict256"
    },
    9: {
      fieldName: "OApp::endpointCode",
      fieldType: "cl::t::cellRef"
    },
    10: {
      fieldName: "OApp::channelCode",
      fieldType: "cl::t::cellRef"
    },
    11: {
      fieldName: "OApp::endpointInitStorage",
      fieldType: "cl::t::objRef"
    },
    12: {
      fieldName: "OApp::lzReceiveExecuteCallbackGas",
      fieldType: "cl::t::uint32"
    }
  },
  UsdtOFT: {
    name: "usdtOFT",
    0: {
      fieldName: "UsdtOFT::oAppStorage",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "UsdtOFT::creditsArbitrum",
      fieldType: "cl::t::coins"
    },
    2: {
      fieldName: "UsdtOFT::creditsCelo",
      fieldType: "cl::t::coins"
    },
    3: {
      fieldName: "UsdtOFT::creditsEth",
      fieldType: "cl::t::coins"
    },
    4: {
      fieldName: "UsdtOFT::creditsTon",
      fieldType: "cl::t::coins"
    },
    5: {
      fieldName: "UsdtOFT::creditsTron",
      fieldType: "cl::t::coins"
    },
    6: {
      fieldName: "UsdtOFT::contractBalance",
      fieldType: "cl::t::coins"
    },
    7: {
      fieldName: "UsdtOFT::feeBalance",
      fieldType: "cl::t::coins"
    },
    8: {
      fieldName: "UsdtOFT::feeBps",
      fieldType: "cl::t::uint16"
    },
    9: {
      fieldName: "UsdtOFT::contractWalletAddress",
      fieldType: "cl::t::address"
    },
    10: {
      fieldName: "UsdtOFT::plannerAddress",
      fieldType: "cl::t::address"
    },
    11: {
      fieldName: "UsdtOFT::gasAsserts",
      fieldType: "cl::t::objRef"
    },
    12: {
      fieldName: "UsdtOFT::costAsserts",
      fieldType: "cl::t::objRef"
    },
    13: {
      fieldName: "UsdtOFT::recoverRequest",
      fieldType: "cl::t::objRef"
    },
    14: {
      fieldName: "UsdtOFT::lpAdminAddress",
      fieldType: "cl::t::address"
    }
  },
  "lz::Config": {
    name: "Config",
    0: {
      fieldName: "lz::Config::path",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "lz::Config::forwardingAddress",
      fieldType: "cl::t::address"
    },
    2: {
      fieldName: "lz::Config::opCode",
      fieldType: "cl::t::uint32"
    },
    3: {
      fieldName: "lz::Config::config",
      fieldType: "cl::t::objRef"
    }
  },
  "lz::EpConfig::NewWithConnection": {
    name: "EpConfig",
    0: {
      fieldName: "lz::EpConfig::NewWithConnection::isNull",
      fieldType: "cl::t::bool"
    },
    1: {
      fieldName: "lz::EpConfig::NewWithConnection::sendMsglibManager",
      fieldType: "cl::t::address"
    },
    2: {
      fieldName: "lz::EpConfig::NewWithConnection::sendMsglib",
      fieldType: "cl::t::address"
    },
    3: {
      fieldName: "lz::EpConfig::NewWithConnection::sendMsglibConnection",
      fieldType: "cl::t::address"
    },
    4: {
      fieldName: "lz::EpConfig::NewWithConnection::receiveMsglib",
      fieldType: "cl::t::address"
    },
    5: {
      fieldName: "lz::EpConfig::NewWithConnection::receiveMsglibConnection",
      fieldType: "cl::t::address"
    },
    6: {
      fieldName: "lz::EpConfig::NewWithConnection::timeoutReceiveMsglib",
      fieldType: "cl::t::address"
    },
    7: {
      fieldName: "lz::EpConfig::NewWithConnection::timeoutReceiveMsglibConnection",
      fieldType: "cl::t::address"
    },
    8: {
      fieldName: "lz::EpConfig::NewWithConnection::timeoutReceiveMsglibExpiry",
      fieldType: "cl::t::uint64"
    }
  },
  "lz::EpConfig": {
    name: "EpConfig"
  },
  "lz::EpConfig::NewWithDefaults": {
    name: "EpConfig"
  },
  "lz::MsglibInfo": {
    name: "MsglibInfo",
    0: {
      fieldName: "lz::MsglibInfo::msglibAddress",
      fieldType: "cl::t::address"
    },
    1: {
      fieldName: "lz::MsglibInfo::msglibConnectionCode",
      fieldType: "cl::t::cellRef"
    },
    2: {
      fieldName: "lz::MsglibInfo::msglibConnectionInitStorage",
      fieldType: "cl::t::objRef"
    }
  },
  "lz::Packet": {
    name: "Packet",
    0: {
      fieldName: "lz::Packet::path",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "lz::Packet::message",
      fieldType: "cl::t::cellRef"
    },
    2: {
      fieldName: "lz::Packet::nonce",
      fieldType: "cl::t::uint64"
    },
    3: {
      fieldName: "lz::Packet::guid",
      fieldType: "cl::t::uint256"
    }
  },
  "lz::Path": {
    name: "path",
    0: {
      fieldName: "lz::Path::srcEid",
      fieldType: "cl::t::uint32"
    },
    1: {
      fieldName: "lz::Path::srcOApp",
      fieldType: "cl::t::address"
    },
    2: {
      fieldName: "lz::Path::dstEid",
      fieldType: "cl::t::uint32"
    },
    3: {
      fieldName: "lz::Path::dstOApp",
      fieldType: "cl::t::address"
    }
  },
  "lz::ReceiveEpConfig": {
    name: "RcvEpCfg",
    0: {
      fieldName: "lz::ReceiveEpConfig::receiveMsglibConnection",
      fieldType: "cl::t::address"
    },
    1: {
      fieldName: "lz::ReceiveEpConfig::timeoutReceiveMsglibConnection",
      fieldType: "cl::t::address"
    },
    2: {
      fieldName: "lz::ReceiveEpConfig::expiry",
      fieldType: "cl::t::uint64"
    }
  },
  "lz::SendEpConfig": {
    name: "SendEpCfg",
    0: {
      fieldName: "lz::SendEpConfig::sendMsglibManager",
      fieldType: "cl::t::address"
    },
    1: {
      fieldName: "lz::SendEpConfig::sendMsglib",
      fieldType: "cl::t::address"
    },
    2: {
      fieldName: "lz::SendEpConfig::sendMsglibConnection",
      fieldType: "cl::t::address"
    }
  },
  "lz::SmlJobAssigned": {
    name: "SmlJobAssg",
    0: {
      fieldName: "lz::SmlJobAssigned::executorAddress",
      fieldType: "cl::t::address"
    },
    1: {
      fieldName: "lz::SmlJobAssigned::fee",
      fieldType: "cl::t::coins"
    }
  },
  "lz::Worker": {
    name: "Worker",
    0: {
      fieldName: "lz::Worker::owner",
      fieldType: "cl::t::address"
    },
    1: {
      fieldName: "lz::Worker::viewAllowlist",
      fieldType: "cl::t::dict256"
    },
    2: {
      fieldName: "lz::Worker::viewDependencies",
      fieldType: "cl::t::dict256"
    },
    3: {
      fieldName: "lz::Worker::bytecodeLibrary",
      fieldType: "cl::t::cellRef"
    },
    4: {
      fieldName: "lz::Worker::storage",
      fieldType: "cl::t::objRef"
    }
  },
  "md::AddMsglib": {
    name: "addMsgLib",
    0: {
      fieldName: "md::AddMsglib::msglibManagerAddress",
      fieldType: "cl::t::address"
    },
    1: {
      fieldName: "md::AddMsglib::dstEid",
      fieldType: "cl::t::uint32"
    }
  },
  "md::Bool": {
    name: "Bool",
    0: {
      fieldName: "md::Bool::bool",
      fieldType: "cl::t::bool"
    }
  },
  "md::ChannelNonceInfo": {
    name: "cNonceInfo",
    0: {
      fieldName: "md::ChannelNonceInfo::nonce",
      fieldType: "cl::t::uint64"
    },
    1: {
      fieldName: "md::ChannelNonceInfo::firstUnexecutedNonce",
      fieldType: "cl::t::uint64"
    }
  },
  "md::CoinsAmount": {
    name: "coinsAmt",
    0: {
      fieldName: "md::CoinsAmount::amount",
      fieldType: "cl::t::coins"
    }
  },
  "md::CounterIncrement": {
    name: "countIncr",
    0: {
      fieldName: "md::CounterIncrement::dstEid",
      fieldType: "cl::t::uint32"
    },
    1: {
      fieldName: "md::CounterIncrement::incrementType",
      fieldType: "cl::t::uint8"
    },
    2: {
      fieldName: "md::CounterIncrement::extraOptions",
      fieldType: "cl::t::objRef"
    },
    3: {
      fieldName: "md::CounterIncrement::nativeFee",
      fieldType: "cl::t::coins"
    },
    4: {
      fieldName: "md::CounterIncrement::zroFee",
      fieldType: "cl::t::coins"
    }
  },
  "md::Deploy": {
    name: "deploy",
    0: {
      fieldName: "md::Deploy::initialDeposit",
      fieldType: "cl::t::coins"
    },
    1: {
      fieldName: "md::Deploy::dstEid",
      fieldType: "cl::t::uint32"
    },
    2: {
      fieldName: "md::Deploy::dstOApp",
      fieldType: "cl::t::uint256"
    },
    3: {
      fieldName: "md::Deploy::extraInfo",
      fieldType: "cl::t::objRef"
    }
  },
  "md::Deploy::NewWithExtraInfo": {
    name: "deploy"
  },
  "md::ExtendedMd": {
    name: "extendedMd",
    0: {
      fieldName: "md::ExtendedMd::md",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "md::ExtendedMd::obj",
      fieldType: "cl::t::objRef"
    },
    2: {
      fieldName: "md::ExtendedMd::forwardingAddress",
      fieldType: "cl::t::address"
    }
  },
  "md::getMsglibInfoCallback": {
    name: "getMsgLbCb",
    0: {
      fieldName: "md::getMsglibInfoCallback::msglibAddress",
      fieldType: "cl::t::address"
    },
    1: {
      fieldName: "md::getMsglibInfoCallback::connectionCode",
      fieldType: "cl::t::cellRef"
    }
  },
  "md::InitEndpoint": {
    name: "initEp",
    0: {
      fieldName: "md::InitEndpoint::channelCode",
      fieldType: "cl::t::cellRef"
    }
  },
  "md::InitSmlConnection": {
    name: "initSmlCon",
    0: {
      fieldName: "md::InitSmlConnection::channelAddress",
      fieldType: "cl::t::address"
    }
  },
  "md::LzReceivePrepare": {
    name: "lzrecvprep",
    0: {
      fieldName: "md::LzReceivePrepare::nonce",
      fieldType: "cl::t::uint64"
    },
    1: {
      fieldName: "md::LzReceivePrepare::nanotons",
      fieldType: "cl::t::coins"
    }
  },
  "md::LzReceiveStatus": {
    name: "LzRecvSts",
    0: {
      fieldName: "md::LzReceiveStatus::success",
      fieldType: "cl::t::bool"
    },
    1: {
      fieldName: "md::LzReceiveStatus::nonce",
      fieldType: "cl::t::uint64"
    },
    2: {
      fieldName: "md::LzReceiveStatus::value",
      fieldType: "cl::t::coins"
    },
    3: {
      fieldName: "md::LzReceiveStatus::extraData",
      fieldType: "cl::t::cellRef"
    },
    4: {
      fieldName: "md::LzReceiveStatus::reason",
      fieldType: "cl::t::cellRef"
    },
    5: {
      fieldName: "md::LzReceiveStatus::sender",
      fieldType: "cl::t::address"
    },
    6: {
      fieldName: "md::LzReceiveStatus::packet",
      fieldType: "cl::t::objRef"
    },
    7: {
      fieldName: "md::LzReceiveStatus::executionStatus",
      fieldType: "cl::t::uint8"
    }
  },
  "md::LzReceiveStatus::NewFull": {
    name: "LzRecvSts",
    0: {
      fieldName: "md::LzReceiveStatus::NewFull::success",
      fieldType: "cl::t::bool"
    },
    1: {
      fieldName: "md::LzReceiveStatus::NewFull::nonce",
      fieldType: "cl::t::uint64"
    },
    2: {
      fieldName: "md::LzReceiveStatus::NewFull::value",
      fieldType: "cl::t::coins"
    },
    3: {
      fieldName: "md::LzReceiveStatus::NewFull::extraData",
      fieldType: "cl::t::cellRef"
    },
    4: {
      fieldName: "md::LzReceiveStatus::NewFull::reason",
      fieldType: "cl::t::cellRef"
    },
    5: {
      fieldName: "md::LzReceiveStatus::NewFull::sender",
      fieldType: "cl::t::address"
    },
    6: {
      fieldName: "md::LzReceiveStatus::NewFull::packet",
      fieldType: "cl::t::objRef"
    },
    7: {
      fieldName: "md::LzReceiveStatus::NewFull::executionStatus",
      fieldType: "cl::t::uint8"
    }
  },
  "md::LzSend": {
    name: "lzSend",
    0: {
      fieldName: "md::LzSend::sendRequestId",
      fieldType: "cl::t::uint64"
    },
    1: {
      fieldName: "md::LzSend::sendMsglibManager",
      fieldType: "cl::t::address"
    },
    2: {
      fieldName: "md::LzSend::sendMsglib",
      fieldType: "cl::t::address"
    },
    3: {
      fieldName: "md::LzSend::sendMsglibConnection",
      fieldType: "cl::t::address"
    },
    4: {
      fieldName: "md::LzSend::packet",
      fieldType: "cl::t::objRef"
    },
    5: {
      fieldName: "md::LzSend::nativeFee",
      fieldType: "cl::t::coins"
    },
    6: {
      fieldName: "md::LzSend::zroFee",
      fieldType: "cl::t::coins"
    },
    7: {
      fieldName: "md::LzSend::extraOptions",
      fieldType: "cl::t::objRef"
    },
    8: {
      fieldName: "md::LzSend::enforcedOptions",
      fieldType: "cl::t::objRef"
    },
    9: {
      fieldName: "md::LzSend::callbackData",
      fieldType: "cl::t::objRef"
    }
  },
  "md::MdAddress": {
    name: "MdAddr",
    0: {
      fieldName: "md::MdAddress::md",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "md::MdAddress::address",
      fieldType: "cl::t::address"
    }
  },
  "md::MdEid": {
    name: "MdEid",
    0: {
      fieldName: "md::MdEid::md",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "md::MdEid::eid",
      fieldType: "cl::t::uint32"
    }
  },
  "md::MdObj": {
    name: "MdObj",
    0: {
      fieldName: "md::MdObj::md",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "md::MdObj::obj",
      fieldType: "cl::t::objRef"
    }
  },
  "md::MessagingReceipt": {
    name: "MsgReceipt",
    0: {
      fieldName: "md::MessagingReceipt::lzSend",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "md::MessagingReceipt::nativeFeeActual",
      fieldType: "cl::t::coins"
    },
    2: {
      fieldName: "md::MessagingReceipt::zroFeeActual",
      fieldType: "cl::t::coins"
    },
    3: {
      fieldName: "md::MessagingReceipt::errorCode",
      fieldType: "cl::t::uint16"
    }
  },
  "md::MsglibSendCallback": {
    name: "libSndCb",
    0: {
      fieldName: "md::MsglibSendCallback::nativeFee",
      fieldType: "cl::t::coins"
    },
    1: {
      fieldName: "md::MsglibSendCallback::zroFee",
      fieldType: "cl::t::coins"
    },
    2: {
      fieldName: "md::MsglibSendCallback::lzSend",
      fieldType: "cl::t::objRef"
    },
    3: {
      fieldName: "md::MsglibSendCallback::packetEncoded",
      fieldType: "cl::t::cellRef"
    },
    4: {
      fieldName: "md::MsglibSendCallback::payees",
      fieldType: "cl::t::cellRef"
    },
    5: {
      fieldName: "md::MsglibSendCallback::nonceByteOffset",
      fieldType: "cl::t::uint16"
    },
    6: {
      fieldName: "md::MsglibSendCallback::nonceBytes",
      fieldType: "cl::t::uint8"
    },
    7: {
      fieldName: "md::MsglibSendCallback::guidByteOffset",
      fieldType: "cl::t::uint16"
    },
    8: {
      fieldName: "md::MsglibSendCallback::guidBytes",
      fieldType: "cl::t::uint8"
    },
    9: {
      fieldName: "md::MsglibSendCallback::msglibSendEvents",
      fieldType: "cl::t::objRef"
    },
    10: {
      fieldName: "md::MsglibSendCallback::errorCode",
      fieldType: "cl::t::uint8"
    }
  },
  "md::Nonce": {
    name: "nonce",
    0: {
      fieldName: "md::Nonce::nonce",
      fieldType: "cl::t::uint64"
    }
  },
  "md::OptionsExtended": {
    name: "OptionsExt",
    0: {
      fieldName: "md::OptionsExtended::eid",
      fieldType: "cl::t::uint32"
    },
    1: {
      fieldName: "md::OptionsExtended::msgType",
      fieldType: "cl::t::uint32"
    },
    2: {
      fieldName: "md::OptionsExtended::options",
      fieldType: "cl::t::objRef"
    }
  },
  "md::OptionsV1": {
    name: "OptionsV1",
    0: {
      fieldName: "md::OptionsV1::lzReceiveGas",
      fieldType: "cl::t::uint256"
    },
    1: {
      fieldName: "md::OptionsV1::lzReceiveValue",
      fieldType: "cl::t::uint256"
    },
    2: {
      fieldName: "md::OptionsV1::nativeDropAddress",
      fieldType: "cl::t::address"
    },
    3: {
      fieldName: "md::OptionsV1::nativeDropAmount",
      fieldType: "cl::t::uint256"
    }
  },
  "md::OptionsV2": {
    name: "OptionsV2",
    0: {
      fieldName: "md::OptionsV2::lzReceiveGas",
      fieldType: "cl::t::uint256"
    },
    1: {
      fieldName: "md::OptionsV2::lzReceiveValue",
      fieldType: "cl::t::uint256"
    },
    2: {
      fieldName: "md::OptionsV2::lzComposeGas",
      fieldType: "cl::t::uint256"
    },
    3: {
      fieldName: "md::OptionsV2::lzComposeValue",
      fieldType: "cl::t::uint256"
    },
    4: {
      fieldName: "md::OptionsV2::nativeDropAddress",
      fieldType: "cl::t::address"
    },
    5: {
      fieldName: "md::OptionsV2::nativeDropAmount",
      fieldType: "cl::t::uint256"
    }
  },
  "md::PacketId": {
    name: "pktId",
    0: {
      fieldName: "md::PacketId::path",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "md::PacketId::nonce",
      fieldType: "cl::t::uint64"
    }
  },
  "md::PacketSent": {
    name: "pktSent",
    0: {
      fieldName: "md::PacketSent::nativeFee",
      fieldType: "cl::t::coins"
    },
    1: {
      fieldName: "md::PacketSent::zroFee",
      fieldType: "cl::t::coins"
    },
    2: {
      fieldName: "md::PacketSent::extraOptions",
      fieldType: "cl::t::objRef"
    },
    3: {
      fieldName: "md::PacketSent::enforcedOptions",
      fieldType: "cl::t::objRef"
    },
    4: {
      fieldName: "md::PacketSent::packetEncoded",
      fieldType: "cl::t::cellRef"
    },
    5: {
      fieldName: "md::PacketSent::nonce",
      fieldType: "cl::t::uint64"
    },
    6: {
      fieldName: "md::PacketSent::msglibAddress",
      fieldType: "cl::t::address"
    },
    7: {
      fieldName: "md::PacketSent::msglibSendEvents",
      fieldType: "cl::t::objRef"
    }
  },
  "md::SetAddress": {
    name: "setAddress",
    0: {
      fieldName: "md::SetAddress::address",
      fieldType: "cl::t::address"
    }
  },
  "md::SetEpConfig": {
    name: "SetEpCfg",
    0: {
      fieldName: "md::SetEpConfig::useDefaults",
      fieldType: "cl::t::bool"
    },
    1: {
      fieldName: "md::SetEpConfig::sendMsglibManager",
      fieldType: "cl::t::address"
    },
    2: {
      fieldName: "md::SetEpConfig::receiveMsglibManager",
      fieldType: "cl::t::address"
    },
    3: {
      fieldName: "md::SetEpConfig::timeoutReceiveMsglibManager",
      fieldType: "cl::t::address"
    },
    4: {
      fieldName: "md::SetEpConfig::timeoutReceiveMsglibExpiry",
      fieldType: "cl::t::uint64"
    }
  },
  "md::SetPeer": {
    name: "setPeer",
    0: {
      fieldName: "md::SetPeer::eid",
      fieldType: "cl::t::uint32"
    },
    1: {
      fieldName: "md::SetPeer::peer",
      fieldType: "cl::t::uint256"
    }
  },
  "md::SetSmlManagerConfig": {
    name: "setSmlCfg",
    0: {
      fieldName: "md::SetSmlManagerConfig::nativeFee",
      fieldType: "cl::t::coins"
    },
    1: {
      fieldName: "md::SetSmlManagerConfig::zroFee",
      fieldType: "cl::t::coins"
    }
  },
  "action::event": {
    name: "event",
    0: {
      fieldName: "action::event::topic",
      fieldType: "cl::t::uint256"
    },
    1: {
      fieldName: "action::event::body",
      fieldType: "cl::t::objRef"
    },
    2: {
      fieldName: "action::event::initialStorage",
      fieldType: "cl::t::objRef"
    }
  },
  POOO: {
    name: "POOO",
    0: {
      fieldName: "POOO::nextEmpty",
      fieldType: "cl::t::uint64"
    },
    1: {
      fieldName: "POOO::bitmap",
      fieldType: "cl::t::cellRef"
    }
  },
  Channel: {
    name: "channel",
    0: {
      fieldName: "Channel::baseStorage",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "Channel::path",
      fieldType: "cl::t::objRef"
    },
    2: {
      fieldName: "Channel::endpointAddress",
      fieldType: "cl::t::address"
    },
    3: {
      fieldName: "Channel::epConfigOApp",
      fieldType: "cl::t::objRef"
    },
    4: {
      fieldName: "Channel::outboundNonce",
      fieldType: "cl::t::uint64"
    },
    5: {
      fieldName: "Channel::sendRequestQueue",
      fieldType: "cl::t::objRef"
    },
    6: {
      fieldName: "Channel::lastSendRequestId",
      fieldType: "cl::t::uint64"
    },
    7: {
      fieldName: "Channel::commitPOOO",
      fieldType: "cl::t::objRef"
    },
    8: {
      fieldName: "Channel::executePOOO",
      fieldType: "cl::t::objRef"
    },
    9: {
      fieldName: "Channel::executionQueue",
      fieldType: "cl::t::cellRef"
    },
    10: {
      fieldName: "Channel::zroBalance",
      fieldType: "cl::t::coins"
    }
  },
  Controller: {
    name: "controller",
    0: {
      fieldName: "Controller::baseStorage",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "Controller::eid",
      fieldType: "cl::t::uint32"
    },
    2: {
      fieldName: "Controller::endpointCode",
      fieldType: "cl::t::cellRef"
    },
    3: {
      fieldName: "Controller::channelCode",
      fieldType: "cl::t::cellRef"
    },
    4: {
      fieldName: "Controller::zroWallet",
      fieldType: "cl::t::address"
    },
    5: {
      fieldName: "Controller::tentativeOwner",
      fieldType: "cl::t::address"
    }
  },
  BaseStorage: {
    name: "baseStore",
    0: {
      fieldName: "BaseStorage::owner",
      fieldType: "cl::t::address"
    },
    1: {
      fieldName: "BaseStorage::authenticated",
      fieldType: "cl::t::bool"
    },
    2: {
      fieldName: "BaseStorage::initialized",
      fieldType: "cl::t::bool"
    },
    3: {
      fieldName: "BaseStorage::initialStorage",
      fieldType: "cl::t::objRef"
    }
  },
  Endpoint: {
    name: "endpoint",
    0: {
      fieldName: "Endpoint::baseStorage",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "Endpoint::eid",
      fieldType: "cl::t::uint32"
    },
    2: {
      fieldName: "Endpoint::dstEid",
      fieldType: "cl::t::uint32"
    },
    3: {
      fieldName: "Endpoint::msglibs",
      fieldType: "cl::t::dict256"
    },
    4: {
      fieldName: "Endpoint::numMsglibs",
      fieldType: "cl::t::uint8"
    },
    5: {
      fieldName: "Endpoint::channelCode",
      fieldType: "cl::t::cellRef"
    },
    6: {
      fieldName: "Endpoint::channelStorageInit",
      fieldType: "cl::t::objRef"
    },
    7: {
      fieldName: "Endpoint::defaultSendMsglibManager",
      fieldType: "cl::t::address"
    },
    8: {
      fieldName: "Endpoint::defaultSendLibInfo",
      fieldType: "cl::t::objRef"
    },
    9: {
      fieldName: "Endpoint::defaultReceiveLibInfo",
      fieldType: "cl::t::objRef"
    },
    10: {
      fieldName: "Endpoint::defaultTimeoutReceiveLibInfo",
      fieldType: "cl::t::objRef"
    },
    11: {
      fieldName: "Endpoint::defaultExpiry",
      fieldType: "cl::t::uint64"
    }
  },
  SmlConnection: {
    name: "smlConn",
    0: {
      fieldName: "SmlConnection::baseStorage",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "SmlConnection::path",
      fieldType: "cl::t::objRef"
    },
    2: {
      fieldName: "SmlConnection::channelAddress",
      fieldType: "cl::t::address"
    }
  },
  SmlManager: {
    name: "smlMgr",
    0: {
      fieldName: "SmlManager::baseStorage",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "SmlManager::eid",
      fieldType: "cl::t::uint32"
    },
    2: {
      fieldName: "SmlManager::verison",
      fieldType: "cl::t::uint8"
    },
    3: {
      fieldName: "SmlManager::nativeFee",
      fieldType: "cl::t::coins"
    },
    4: {
      fieldName: "SmlManager::zroFee",
      fieldType: "cl::t::coins"
    },
    5: {
      fieldName: "SmlManager::packets",
      fieldType: "cl::t::dict256"
    },
    6: {
      fieldName: "SmlManager::controllerAddress",
      fieldType: "cl::t::address"
    },
    7: {
      fieldName: "SmlManager::endpointCode",
      fieldType: "cl::t::cellRef"
    },
    8: {
      fieldName: "SmlManager::channelCode",
      fieldType: "cl::t::cellRef"
    },
    9: {
      fieldName: "SmlManager::smlConnectionCode",
      fieldType: "cl::t::cellRef"
    }
  },
  "lz::Attestation": {
    name: "Attest",
    0: {
      fieldName: "lz::Attestation::hash",
      fieldType: "cl::t::uint256"
    },
    1: {
      fieldName: "lz::Attestation::confirmations",
      fieldType: "cl::t::uint64"
    }
  },
  DvnFeesPaidEvent: {
    name: "DvnFeePaid",
    0: {
      fieldName: "DvnFeesPaidEvent::requiredDVNs",
      fieldType: "cl::t::addressList"
    },
    1: {
      fieldName: "DvnFeesPaidEvent::optionalDVNs",
      fieldType: "cl::t::addressList"
    },
    2: {
      fieldName: "DvnFeesPaidEvent::serializedPayees",
      fieldType: "cl::t::objRef"
    }
  },
  ExecutorFeePaidEvent: {
    name: "ExcFeePaid",
    0: {
      fieldName: "ExecutorFeePaidEvent::executorAddress",
      fieldType: "cl::t::address"
    },
    1: {
      fieldName: "ExecutorFeePaidEvent::feePaid",
      fieldType: "cl::t::coins"
    }
  },
  "md::InitUln": {
    name: "initUln",
    0: {
      fieldName: "md::InitUln::connectionCode",
      fieldType: "cl::t::cellRef"
    },
    1: {
      fieldName: "md::InitUln::treasuryFeeBps",
      fieldType: "cl::t::uint16"
    }
  },
  "md::InitUlnConnection": {
    name: "initUlnCon",
    0: {
      fieldName: "md::InitUlnConnection::ulnSendConfigOApp",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "md::InitUlnConnection::ulnReceiveConfigOApp",
      fieldType: "cl::t::objRef"
    },
    2: {
      fieldName: "md::InitUlnConnection::endpointAddress",
      fieldType: "cl::t::address"
    },
    3: {
      fieldName: "md::InitUlnConnection::channelAddress",
      fieldType: "cl::t::address"
    }
  },
  "md::InitUlnConnection::NewOnlyConfig": {
    name: "initUlnCon"
  },
  "md::InitUlnManager": {
    name: "InitUlnMgr",
    0: {
      fieldName: "md::InitUlnManager::endpointCode",
      fieldType: "cl::t::cellRef"
    },
    1: {
      fieldName: "md::InitUlnManager::channelCode",
      fieldType: "cl::t::cellRef"
    }
  },
  "md::RentRefill": {
    name: "RentRefill",
    0: {
      fieldName: "md::RentRefill::address",
      fieldType: "cl::t::address"
    },
    1: {
      fieldName: "md::RentRefill::amount",
      fieldType: "cl::t::coins"
    }
  },
  "md::SetAdminWorkerAddresses": {
    name: "adminwork",
    0: {
      fieldName: "md::SetAdminWorkerAddresses::adminWorkers",
      fieldType: "cl::t::addressList"
    }
  },
  "md::TreasuryFeeBps": {
    name: "tfeebps",
    0: {
      fieldName: "md::TreasuryFeeBps::treasuryFeeBps",
      fieldType: "cl::t::uint16"
    }
  },
  UlnEvents: {
    name: "UlnEvents",
    0: {
      fieldName: "UlnEvents::workerEvents",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "UlnEvents::dvnFeesPaidEvent",
      fieldType: "cl::t::objRef"
    },
    2: {
      fieldName: "UlnEvents::executorFeePaidEvent",
      fieldType: "cl::t::objRef"
    }
  },
  UlnReceiveConfig: {
    name: "UlnRecvCfg",
    0: {
      fieldName: "UlnReceiveConfig::minCommitPacketGasNull",
      fieldType: "cl::t::bool"
    },
    1: {
      fieldName: "UlnReceiveConfig::minCommitPacketGas",
      fieldType: "cl::t::uint32"
    },
    2: {
      fieldName: "UlnReceiveConfig::confirmationsNull",
      fieldType: "cl::t::bool"
    },
    3: {
      fieldName: "UlnReceiveConfig::confirmations",
      fieldType: "cl::t::uint64"
    },
    4: {
      fieldName: "UlnReceiveConfig::requiredDVNsNull",
      fieldType: "cl::t::bool"
    },
    5: {
      fieldName: "UlnReceiveConfig::requiredDVNs",
      fieldType: "cl::t::addressList"
    },
    6: {
      fieldName: "UlnReceiveConfig::optionalDVNsNull",
      fieldType: "cl::t::bool"
    },
    7: {
      fieldName: "UlnReceiveConfig::optionalDVNs",
      fieldType: "cl::t::addressList"
    },
    8: {
      fieldName: "UlnReceiveConfig::optionalDVNThreshold",
      fieldType: "cl::t::uint8"
    }
  },
  "UlnReceiveConfig::NewWithDefaults": {
    name: "UlnRecvCfg"
  },
  "md::UlnSend": {
    name: "UlnSend",
    0: {
      fieldName: "md::UlnSend::lzSend",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "md::UlnSend::customUlnSendConfig",
      fieldType: "cl::t::objRef"
    },
    2: {
      fieldName: "md::UlnSend::connectionInitialStorage",
      fieldType: "cl::t::objRef"
    },
    3: {
      fieldName: "md::UlnSend::forwardingAddress",
      fieldType: "cl::t::address"
    }
  },
  UlnSendConfig: {
    name: "UlnSendCfg",
    0: {
      fieldName: "UlnSendConfig::workerQuoteGasLimit",
      fieldType: "cl::t::uint32"
    },
    1: {
      fieldName: "UlnSendConfig::maxMessageBytes",
      fieldType: "cl::t::uint32"
    },
    2: {
      fieldName: "UlnSendConfig::executorNull",
      fieldType: "cl::t::bool"
    },
    3: {
      fieldName: "UlnSendConfig::executor",
      fieldType: "cl::t::address"
    },
    4: {
      fieldName: "UlnSendConfig::requiredDVNsNull",
      fieldType: "cl::t::bool"
    },
    5: {
      fieldName: "UlnSendConfig::requiredDVNs",
      fieldType: "cl::t::addressList"
    },
    6: {
      fieldName: "UlnSendConfig::optionalDVNsNull",
      fieldType: "cl::t::bool"
    },
    7: {
      fieldName: "UlnSendConfig::optionalDVNs",
      fieldType: "cl::t::addressList"
    },
    8: {
      fieldName: "UlnSendConfig::confirmationsNull",
      fieldType: "cl::t::bool"
    },
    9: {
      fieldName: "UlnSendConfig::confirmations",
      fieldType: "cl::t::uint64"
    }
  },
  "UlnSendConfig::NewWithDefaults": {
    name: "UlnSendCfg"
  },
  "md::UlnVerification": {
    name: "UlnVerify",
    0: {
      fieldName: "md::UlnVerification::nonce",
      fieldType: "cl::t::uint64"
    },
    1: {
      fieldName: "md::UlnVerification::attestation",
      fieldType: "cl::t::objRef"
    }
  },
  "md::UlnWorkerFeelibBytecode": {
    name: "Ulnbytecod",
    0: {
      fieldName: "md::UlnWorkerFeelibBytecode::bytecode",
      fieldType: "cl::t::cellRef"
    }
  },
  "md::UlnWorkerFeelibEvents": {
    name: "UlnWrkEvnt",
    0: {
      fieldName: "md::UlnWorkerFeelibEvents::workerAddress",
      fieldType: "cl::t::address"
    },
    1: {
      fieldName: "md::UlnWorkerFeelibEvents::workerEvents",
      fieldType: "cl::t::objRef"
    },
    2: {
      fieldName: "md::UlnWorkerFeelibEvents::nextWorkerEvents",
      fieldType: "cl::t::objRef"
    }
  },
  UlnWorkerFeelibInfo: {
    name: "UlnWrkInfo",
    0: {
      fieldName: "UlnWorkerFeelibInfo::workerAddress",
      fieldType: "cl::t::address"
    },
    1: {
      fieldName: "UlnWorkerFeelibInfo::workerFeelibBytecode",
      fieldType: "cl::t::cellRef"
    },
    2: {
      fieldName: "UlnWorkerFeelibInfo::workerFeelibStorage",
      fieldType: "cl::t::objRef"
    },
    3: {
      fieldName: "UlnWorkerFeelibInfo::friendWorkerAddress",
      fieldType: "cl::t::address"
    },
    4: {
      fieldName: "UlnWorkerFeelibInfo::dstEid",
      fieldType: "cl::t::uint32"
    },
    5: {
      fieldName: "UlnWorkerFeelibInfo::rentBalance",
      fieldType: "cl::t::coins"
    },
    6: {
      fieldName: "UlnWorkerFeelibInfo::lastRentTimestamp",
      fieldType: "cl::t::uint64"
    },
    7: {
      fieldName: "UlnWorkerFeelibInfo::isAdmin",
      fieldType: "cl::t::bool"
    }
  },
  "md::VerificationStatus": {
    name: "veristatus",
    0: {
      fieldName: "md::VerificationStatus::nonce",
      fieldType: "cl::t::uint64"
    },
    1: {
      fieldName: "md::VerificationStatus::status",
      fieldType: "cl::t::uint32"
    }
  },
  Uln: {
    name: "uln",
    0: {
      fieldName: "Uln::baseStorage",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "Uln::eid",
      fieldType: "cl::t::uint32"
    },
    2: {
      fieldName: "Uln::dstEid",
      fieldType: "cl::t::uint32"
    },
    3: {
      fieldName: "Uln::defaultUlnReceiveConfig",
      fieldType: "cl::t::objRef"
    },
    4: {
      fieldName: "Uln::defaultUlnSendConfig",
      fieldType: "cl::t::objRef"
    },
    5: {
      fieldName: "Uln::connectionCode",
      fieldType: "cl::t::cellRef"
    },
    6: {
      fieldName: "Uln::workerFeelibInfos",
      fieldType: "cl::t::dict256"
    },
    7: {
      fieldName: "Uln::treasuryFeeBps",
      fieldType: "cl::t::uint16"
    },
    8: {
      fieldName: "Uln::remainingWorkerSlots",
      fieldType: "cl::t::uint16"
    },
    9: {
      fieldName: "Uln::remainingAdminWorkerSlots",
      fieldType: "cl::t::uint16"
    }
  },
  UlnConnection: {
    name: "connection",
    0: {
      fieldName: "UlnConnection::baseStorage",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "UlnConnection::path",
      fieldType: "cl::t::objRef"
    },
    2: {
      fieldName: "UlnConnection::endpointAddress",
      fieldType: "cl::t::address"
    },
    3: {
      fieldName: "UlnConnection::channelAddress",
      fieldType: "cl::t::address"
    },
    4: {
      fieldName: "UlnConnection::firstUnexecutedNonce",
      fieldType: "cl::t::uint64"
    },
    5: {
      fieldName: "UlnConnection::ulnAddress",
      fieldType: "cl::t::address"
    },
    6: {
      fieldName: "UlnConnection::UlnSendConfigOApp",
      fieldType: "cl::t::objRef"
    },
    7: {
      fieldName: "UlnConnection::UlnReceiveConfigOApp",
      fieldType: "cl::t::objRef"
    },
    8: {
      fieldName: "UlnConnection::hashLookups",
      fieldType: "cl::t::dict256"
    },
    9: {
      fieldName: "UlnConnection::commitPOOO",
      fieldType: "cl::t::objRef"
    }
  },
  UlnManager: {
    name: "ulnMgr",
    0: {
      fieldName: "UlnManager::baseStorage",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "UlnManager::ulnCode",
      fieldType: "cl::t::cellRef"
    },
    2: {
      fieldName: "UlnManager::ulnConnectionCode",
      fieldType: "cl::t::cellRef"
    },
    3: {
      fieldName: "UlnManager::controllerAddress",
      fieldType: "cl::t::address"
    },
    4: {
      fieldName: "UlnManager::eid",
      fieldType: "cl::t::uint32"
    },
    5: {
      fieldName: "UlnManager::endpointCode",
      fieldType: "cl::t::cellRef"
    },
    6: {
      fieldName: "UlnManager::channelCode",
      fieldType: "cl::t::cellRef"
    },
    7: {
      fieldName: "UlnManager::workerFeelibBytecodes",
      fieldType: "cl::t::dict256"
    },
    8: {
      fieldName: "UlnManager::adminWorkers",
      fieldType: "cl::t::addressList"
    },
    9: {
      fieldName: "UlnManager::tentativeOwner",
      fieldType: "cl::t::address"
    }
  },
  DvnFeelib: {
    name: "UlnDvnFl",
    0: {
      fieldName: "DvnFeelib::quorum",
      fieldType: "cl::t::uint64"
    },
    1: {
      fieldName: "DvnFeelib::remoteGas",
      fieldType: "cl::t::uint64"
    },
    2: {
      fieldName: "DvnFeelib::multiplierBps",
      fieldType: "cl::t::uint16"
    },
    3: {
      fieldName: "DvnFeelib::floorMarginUSD",
      fieldType: "cl::t::coins"
    }
  },
  ExecutorFeelib: {
    name: "UlnExecutr",
    0: {
      fieldName: "ExecutorFeelib::lzReceiveBaseGas",
      fieldType: "cl::t::uint64"
    },
    1: {
      fieldName: "ExecutorFeelib::multiplierBps",
      fieldType: "cl::t::uint16"
    },
    2: {
      fieldName: "ExecutorFeelib::floorMarginUSD",
      fieldType: "cl::t::coins"
    },
    3: {
      fieldName: "ExecutorFeelib::nativeCap",
      fieldType: "cl::t::coins"
    },
    4: {
      fieldName: "ExecutorFeelib::lzComposeBaseGas",
      fieldType: "cl::t::uint64"
    }
  },
  ArbitrumPriceFeedExtension: {
    name: "ArbFeeExt",
    0: {
      fieldName: "ArbitrumPriceFeedExtension::gasPerL2Tx",
      fieldType: "cl::t::uint64"
    },
    1: {
      fieldName: "ArbitrumPriceFeedExtension::gasPerL1CallDataByte",
      fieldType: "cl::t::uint32"
    }
  },
  PriceFeedFeelib: {
    name: "PFFeelib",
    0: {
      fieldName: "PriceFeedFeelib::priceRatio",
      fieldType: "cl::t::coins"
    },
    1: {
      fieldName: "PriceFeedFeelib::gasPriceInRemoteUnit",
      fieldType: "cl::t::uint64"
    },
    2: {
      fieldName: "PriceFeedFeelib::gasPerByte",
      fieldType: "cl::t::uint32"
    },
    3: {
      fieldName: "PriceFeedFeelib::nativePriceUsd",
      fieldType: "cl::t::coins"
    },
    4: {
      fieldName: "PriceFeedFeelib::arbitrumExtension",
      fieldType: "cl::t::objRef"
    },
    5: {
      fieldName: "PriceFeedFeelib::optimismExtension",
      fieldType: "cl::t::objRef"
    }
  },
  WorkerCoreStorage: {
    name: "wrkCorStor",
    0: {
      fieldName: "WorkerCoreStorage::admins",
      fieldType: "cl::t::addressList"
    },
    1: {
      fieldName: "WorkerCoreStorage::proxy",
      fieldType: "cl::t::address"
    },
    2: {
      fieldName: "WorkerCoreStorage::version",
      fieldType: "cl::t::uint256"
    }
  },
  Dvn: {
    name: "dvn",
    0: {
      fieldName: "Dvn::workerCoreStorage",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "Dvn::quorum",
      fieldType: "cl::t::uint64"
    },
    2: {
      fieldName: "Dvn::verifiers",
      fieldType: "cl::t::dict256"
    },
    3: {
      fieldName: "Dvn::setQuorumNonce",
      fieldType: "cl::t::uint64"
    },
    4: {
      fieldName: "Dvn::setVerifiersNonce",
      fieldType: "cl::t::uint64"
    },
    5: {
      fieldName: "Dvn::setAdminsByQuorumNonce",
      fieldType: "cl::t::uint64"
    }
  },
  Executor: {
    name: "executor",
    0: {
      fieldName: "Executor::workerCoreStorage",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "Executor::nativeDropTotalCap",
      fieldType: "cl::t::coins"
    }
  },
  "md::ClaimTon": {
    name: "claimTon",
    0: {
      fieldName: "md::ClaimTon::amount",
      fieldType: "cl::t::coins"
    },
    1: {
      fieldName: "md::ClaimTon::target",
      fieldType: "cl::t::address"
    }
  },
  "md::ExecuteParams": {
    name: "execParams",
    0: {
      fieldName: "md::ExecuteParams::target",
      fieldType: "cl::t::address"
    },
    1: {
      fieldName: "md::ExecuteParams::callData",
      fieldType: "cl::t::objRef"
    },
    2: {
      fieldName: "md::ExecuteParams::expiration",
      fieldType: "cl::t::uint64"
    },
    3: {
      fieldName: "md::ExecuteParams::opcode",
      fieldType: "cl::t::uint32"
    },
    4: {
      fieldName: "md::ExecuteParams::forwardingAddress",
      fieldType: "cl::t::address"
    }
  },
  "md::NativeDrop": {
    name: "NativeDrop",
    0: {
      fieldName: "md::NativeDrop::payees",
      fieldType: "cl::t::cellRef"
    },
    1: {
      fieldName: "md::NativeDrop::packetId",
      fieldType: "cl::t::objRef"
    },
    2: {
      fieldName: "md::NativeDrop::msglib",
      fieldType: "cl::t::address"
    }
  },
  "md::SetDict": {
    name: "setDct",
    0: {
      fieldName: "md::SetDict::nonce",
      fieldType: "cl::t::uint64"
    },
    1: {
      fieldName: "md::SetDict::opcode",
      fieldType: "cl::t::uint64"
    },
    2: {
      fieldName: "md::SetDict::dict",
      fieldType: "cl::t::dict256"
    },
    3: {
      fieldName: "md::SetDict::target",
      fieldType: "cl::t::address"
    }
  },
  "md::SetQuorum": {
    name: "setQuorum",
    0: {
      fieldName: "md::SetQuorum::nonce",
      fieldType: "cl::t::uint64"
    },
    1: {
      fieldName: "md::SetQuorum::opcode",
      fieldType: "cl::t::uint64"
    },
    2: {
      fieldName: "md::SetQuorum::quorum",
      fieldType: "cl::t::uint64"
    },
    3: {
      fieldName: "md::SetQuorum::target",
      fieldType: "cl::t::address"
    }
  },
  "md::SignedRequest": {
    name: "sgndReq",
    0: {
      fieldName: "md::SignedRequest::request",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "md::SignedRequest::signatures",
      fieldType: "cl::t::dict256"
    }
  },
  PriceFeedCache: {
    name: "pfCache",
    0: {
      fieldName: "PriceFeedCache::workerCoreStorage",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "PriceFeedCache::priceFeedFeeLibStorage",
      fieldType: "cl::t::objRef"
    },
    2: {
      fieldName: "PriceFeedCache::dstEid",
      fieldType: "cl::t::uint32"
    }
  },
  Proxy: {
    name: "pfProxy",
    0: {
      fieldName: "Proxy::workerCoreStorage",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "Proxy::callbackEnabled",
      fieldType: "cl::t::bool"
    }
  },
  Address: {
    name: "Address",
    0: {
      fieldName: "Address::address",
      fieldType: "cl::t::address"
    }
  },
  Amount: {
    name: "Amount",
    0: {
      fieldName: "Amount::amount",
      fieldType: "cl::t::coins"
    }
  },
  CostAsserts: {
    name: "CostAssert",
    0: {
      fieldName: "CostAsserts::maxPriceRatioArbitrum",
      fieldType: "cl::t::coins"
    },
    1: {
      fieldName: "CostAsserts::maxGasPriceArbitrum",
      fieldType: "cl::t::uint64"
    },
    2: {
      fieldName: "CostAsserts::maxPriceRatioCelo",
      fieldType: "cl::t::coins"
    },
    3: {
      fieldName: "CostAsserts::maxGasPriceCelo",
      fieldType: "cl::t::uint64"
    },
    4: {
      fieldName: "CostAsserts::maxPriceRatioEth",
      fieldType: "cl::t::coins"
    },
    5: {
      fieldName: "CostAsserts::maxGasPriceEth",
      fieldType: "cl::t::uint64"
    },
    6: {
      fieldName: "CostAsserts::maxPriceRatioTron",
      fieldType: "cl::t::coins"
    },
    7: {
      fieldName: "CostAsserts::maxGasPriceTron",
      fieldType: "cl::t::uint64"
    }
  },
  Fee: {
    name: "Fee",
    0: {
      fieldName: "Fee::bps",
      fieldType: "cl::t::uint16"
    }
  },
  GasAsserts: {
    name: "GasAssert",
    0: {
      fieldName: "GasAsserts::sendOFTGas",
      fieldType: "cl::t::uint32"
    },
    1: {
      fieldName: "GasAsserts::sendOFTGasReceiveGas",
      fieldType: "cl::t::uint32"
    },
    2: {
      fieldName: "GasAsserts::sendCreditsGas",
      fieldType: "cl::t::uint32"
    },
    3: {
      fieldName: "GasAsserts::sendCreditsGasReceiveGas",
      fieldType: "cl::t::uint32"
    },
    4: {
      fieldName: "GasAsserts::lzReceiveExecuteCallbackGas",
      fieldType: "cl::t::uint32"
    }
  },
  MdError: {
    name: "MdError",
    0: {
      fieldName: "MdError::md",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "MdError::errorCode",
      fieldType: "cl::t::uint256"
    }
  },
  MdGuid: {
    name: "MdGuid",
    0: {
      fieldName: "MdGuid::md",
      fieldType: "cl::t::objRef"
    },
    1: {
      fieldName: "MdGuid::guid",
      fieldType: "cl::t::uint256"
    }
  },
  OFTCredits: {
    name: "OFTCredits",
    0: {
      fieldName: "OFTCredits::dstEid",
      fieldType: "cl::t::uint32"
    },
    1: {
      fieldName: "OFTCredits::creditsArbitrum",
      fieldType: "cl::t::uint64"
    },
    2: {
      fieldName: "OFTCredits::creditsCelo",
      fieldType: "cl::t::uint64"
    },
    3: {
      fieldName: "OFTCredits::creditsEth",
      fieldType: "cl::t::uint64"
    },
    4: {
      fieldName: "OFTCredits::creditsTon",
      fieldType: "cl::t::uint64"
    },
    5: {
      fieldName: "OFTCredits::creditsTron",
      fieldType: "cl::t::uint64"
    },
    6: {
      fieldName: "OFTCredits::nativeFee",
      fieldType: "cl::t::coins"
    },
    7: {
      fieldName: "OFTCredits::zroFee",
      fieldType: "cl::t::coins"
    },
    8: {
      fieldName: "OFTCredits::extraOptions",
      fieldType: "cl::t::objRef"
    }
  },
  OFTSend: {
    name: "OFTSend",
    0: {
      fieldName: "OFTSend::dstEid",
      fieldType: "cl::t::uint32"
    },
    1: {
      fieldName: "OFTSend::to",
      fieldType: "cl::t::address"
    },
    2: {
      fieldName: "OFTSend::minAmount",
      fieldType: "cl::t::coins"
    },
    3: {
      fieldName: "OFTSend::nativeFee",
      fieldType: "cl::t::coins"
    },
    4: {
      fieldName: "OFTSend::zroFee",
      fieldType: "cl::t::coins"
    },
    5: {
      fieldName: "OFTSend::extraOptions",
      fieldType: "cl::t::objRef"
    },
    6: {
      fieldName: "OFTSend::composeMessage",
      fieldType: "cl::t::cellRef"
    }
  },
  RecoverUsdt: {
    name: "RcvUsdt",
    0: {
      fieldName: "RecoverUsdt::to",
      fieldType: "cl::t::address"
    },
    1: {
      fieldName: "RecoverUsdt::amount",
      fieldType: "cl::t::uint64"
    },
    2: {
      fieldName: "RecoverUsdt::recoveryTimeout",
      fieldType: "cl::t::uint64"
    }
  },
  SetPeer: {
    name: "SetPeer",
    0: {
      fieldName: "SetPeer::eid",
      fieldType: "cl::t::uint32"
    },
    1: {
      fieldName: "SetPeer::peer",
      fieldType: "cl::t::address"
    }
  },
  TokenTransfer: {
    name: "TknTrsfer",
    0: {
      fieldName: "TokenTransfer::to",
      fieldType: "cl::t::address"
    },
    1: {
      fieldName: "TokenTransfer::amount",
      fieldType: "cl::t::coins"
    }
  }
};

// ../../node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// ../../node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// ../../node_modules/lodash-es/_Symbol.js
var Symbol = root_default.Symbol;
var Symbol_default = Symbol;

// ../../node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// ../../node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// ../../node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// ../../node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// ../../node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// ../../node_modules/lodash-es/_arrayMap.js
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var arrayMap_default = arrayMap;

// ../../node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// ../../node_modules/lodash-es/_baseToString.js
var INFINITY = 1 / 0;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var baseToString_default = baseToString;

// ../../node_modules/lodash-es/toString.js
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default = toString;

// ../../node_modules/lodash-es/replace.js
function replace() {
  var args = arguments, string = toString_default(args[0]);
  return args.length < 3 ? string : string.replace(args[1], args[2]);
}
var replace_default = replace;

// src/ton/utils.ts
function ulnConfigKey(oftName, srcChainKey, dstChainKey) {
  return `${oftName}_${replace_default(srcChainKey.toUpperCase(), "-", "_")}_${replace_default(dstChainKey.toUpperCase(), "-", "_")}`;
}

// src/ton/OftBridgeV3__ton.ts
var oftBuildClass = lzTonSdkV2.generateBuildClass(tonObjects);
var oftDecodeClass = lzTonSdkV2.generateDecodeClass(tonObjects);
var JETTON_TRANSFER_GAS = 0.07;
var OftBridgeV3__ton = class {
  constructor(client, config, addressConfig, ulnConfigs) {
    this.client = client;
    this.config = config;
    this.addressConfig = addressConfig;
    this.ulnConfigs = ulnConfigs;
    this.validateConfig(config);
    this.oAppAddress = uiTon.parseTonAddress(this.addressConfig.oftProxy);
    const wrapper = uiTon.TonContractWrapper.create(this.oAppAddress);
    this.contract = this.client.provider(this.oAppAddress).open(wrapper);
    const tonMinterAddress = uiTon.parseTonAddress(addressConfig.token);
    this.minterContract = this.client.open(uiTon.UsdtMinter.createFromAddress(tonMinterAddress));
  }
  contract;
  oAppAddress;
  minterContract;
  estimatedGasCost = 0n;
  // Create a feeCache because getting the fee takes a lot of rpc calls
  feeCache = new memoryCache__default.default.Cache();
  validateConfig(config) {
    uiCore.assert(config.version === 3, "OftBridgeConfig version 3 is required");
  }
  approve(input) {
    throw new Error("Not Implemented");
  }
  claim(input) {
    throw new Error("Not Implemented");
  }
  async getOutput(input) {
    try {
      const [amount, fee] = await this.contract.getGetAmountAndFee(input.srcAmount.toBigInt());
      return {
        dstAmount: uiCore.CurrencyAmount.fromBigInt(input.dstToken, amount),
        fee: {
          bridgeFee: uiCore.CurrencyAmount.fromBigInt(
            uiCore.getNativeCurrency(input.srcAmount.token.chainKey),
            fee
          )
        }
      };
    } catch (error) {
      return {
        dstAmount: input.srcAmount,
        fee: {
          bridgeFee: uiCore.CurrencyAmount.fromBigInt(
            uiCore.getNativeCurrency(input.srcAmount.token.chainKey),
            0n
          )
        }
      };
    }
  }
  register(register) {
    throw new Error("Not Implemented");
  }
  async createForwardPayload(input) {
    const { dstChainKey, dstAddress, fee, dstAmountMin, dstNativeAmount } = input;
    const nativeFee = fee?.nativeFee.toBigInt() ?? 0;
    let extraOptions = core.beginCell().endCell();
    if (dstNativeAmount && dstNativeAmount.greaterThan(0)) {
      extraOptions = lzTonSdkV2.buildClass("md::OptionsV1", {
        lzReceiveGas: 0n,
        lzReceiveValue: 0n,
        nativeDropAddress: BigInt(dstAddress),
        nativeDropAmount: dstNativeAmount.toBigInt()
      });
    }
    let parsedDstAddress = dstAddress;
    if (uiCore.isTronChainKey(dstChainKey)) {
      parsedDstAddress = "0x" + chunkAIJNXPS2_cjs.fromTronAddress(dstAddress);
    }
    return oftBuildClass("OFTSend", {
      dstEid: BigInt(this.tryGetDeployment(dstChainKey).eid),
      to: BigInt(parsedDstAddress),
      minAmount: dstAmountMin?.toBigInt() ?? core.toNano(0),
      nativeFee,
      zroFee: core.toNano(0),
      // Zro is not on TON so this will always be 0
      extraOptions,
      composeMessage: core.beginCell().storeUint(0, 1).endCell()
    });
  }
  async createTransferBody(input) {
    const { dstChainKey, dstAddress, fee, srcAmount, srcAddress, dstAmountMin, dstNativeAmount } = input;
    uiCore.assert(dstChainKey, "dstChainKey");
    uiCore.assert(fee, "fee");
    uiCore.assert(dstAddress, "dstAddress");
    uiCore.assert(srcAddress, "srcAddress");
    uiCore.assert(srcAmount, "srcAmount");
    uiCore.assert(dstAmountMin, "dstAmountMin");
    const value = fee.nativeFee.toBigInt() + this.estimatedGasCost;
    const forwardPayload = await this.createForwardPayload({
      dstChainKey,
      dstAddress,
      dstAmountMin,
      fee,
      dstNativeAmount
    });
    const srcWalletAddress = uiTon.parseTonAddress(srcAddress);
    return uiTon.buildTonTransferCell({
      toAddress: this.oAppAddress,
      // oApp Address
      fromAddress: srcWalletAddress,
      value,
      fwdAmount: value,
      // How much to forward from the usdt jetton wallet to the
      jettonAmount: srcAmount.toBigInt(),
      forwardPayload
    });
  }
  async transfer(input) {
    const { srcAddress, fee } = input;
    const srcWalletAddress = uiTon.parseTonAddress(srcAddress);
    this.estimatedGasCost = await this.getGasAsserts();
    const body = await this.createTransferBody(input);
    const jettonAddress = await uiTon.getJettonAddressFromWallet(this.minterContract, srcWalletAddress);
    const amount = fee.nativeFee.toBigInt() + this.estimatedGasCost + core.toNano(JETTON_TRANSFER_GAS);
    const transaction = uiTon.createTransaction(
      {
        messages: [
          {
            address: jettonAddress,
            amount: amount.toString(),
            payload: body
          }
        ]
      },
      {
        client: this.client
      }
    );
    return transaction;
  }
  async getGasAsserts() {
    const oftStorage = await this.client.provider(uiTon.parseTonAddress(this.addressConfig.oftProxy)).get("getContractStorage", []);
    const oftCell = oftDecodeClass("UsdtOFT", oftStorage.stack.readCell());
    const gasAsserts = oftDecodeClass("GasAsserts", oftCell.gasAsserts);
    return gasAsserts.sendOFTGas * 440n;
  }
  getAllowance(input) {
    return Promise.resolve(uiCore.CurrencyAmount.fromRawAmount(input.token, uiCore.MaxUint256));
  }
  getDuration(input) {
    const { dstToken, srcToken } = input;
    const srcEid = this.tryGetDeployment(srcToken.chainKey).eid;
    const dstEid = this.tryGetDeployment(dstToken.chainKey).eid;
    const ua = { address: this.addressConfig.oftProxy, eid: srcEid };
    return uiCore.getMessageDuration(ua, dstEid);
  }
  getExtraGas(input) {
    return Promise.resolve(0);
  }
  async getLimit(input) {
    const [arbCreds, celoCreds, ethCreds, tonCreds, tronCreds] = await this.contract.getGetAllCredits();
    switch (input.dstToken.chainKey) {
      case lzDefinitions.ChainKey.ARBITRUM:
      case lzDefinitions.ChainKey.ARBITRUM_SEPOLIA:
        return uiCore.CurrencyAmount.fromRawAmount(input.srcToken, arbCreds);
      case lzDefinitions.ChainKey.CELO:
        return uiCore.CurrencyAmount.fromRawAmount(input.srcToken, celoCreds);
      case lzDefinitions.ChainKey.ETHEREUM:
      case lzDefinitions.ChainKey.SEPOLIA:
        return uiCore.CurrencyAmount.fromRawAmount(input.srcToken, ethCreds);
      case "ton":
      case "ton-testnet":
        return uiCore.CurrencyAmount.fromRawAmount(input.srcToken, tonCreds);
      case lzDefinitions.ChainKey.TRON_TESTNET:
      case lzDefinitions.ChainKey.TRON:
      case lzDefinitions.ChainKey.TRONDEV:
      case lzDefinitions.ChainKey.TRON_SANDBOX:
        return uiCore.CurrencyAmount.fromRawAmount(input.srcToken, tronCreds);
      default:
        return uiCore.CurrencyAmount.fromRawAmount(input.srcToken, 0n);
    }
  }
  async getMessageFee(input) {
    const { dstAddress } = input;
    if (!dstAddress) {
      return uiCore.MessageFee.from(input.srcToken.chainKey, {
        nativeFee: 0n,
        zroFee: 0n
      });
    }
    await this.createTransferBody({
      ...input,
      fee: uiCore.MessageFee.from(input.srcToken.chainKey, {
        nativeFee: 0n,
        zroFee: 0n
      })
    });
    const feeCacheKey = `${input.srcChainKey}-${input.dstChainKey}-${input.dstNativeAmount?.toBigInt() ?? 0}`;
    let promise = this.feeCache.get(feeCacheKey);
    if (!promise) {
      promise = this.getLzMessageFee(input);
      await this.feeCache.put(feeCacheKey, promise, 1e3 * 10);
    }
    return await promise;
  }
  async getLzMessageFee(input) {
    const { dstToken, srcToken, dstAddress, dstNativeAmount } = input;
    const dstChainKey = dstToken.chainKey;
    const dstDeployment = this.tryGetDeployment(dstToken.chainKey);
    const ulnAddress = uiTon.bigIntToAddress(
      uiTon.computeTonUlnAddress(BigInt(this.addressConfig.ulnManager), BigInt(dstDeployment.eid))
    );
    const endpointAddress = uiTon.bigIntToAddress(
      uiTon.computeTonEndpointAddress(BigInt(this.addressConfig.controller), BigInt(dstDeployment.eid))
    );
    const channelAddress = uiTon.bigIntToAddress(
      uiTon.computeTonChannelAddress(
        BigInt(this.addressConfig.oftProxy),
        BigInt(dstDeployment.eid),
        BigInt(dstDeployment.oftProxy?.address ?? ""),
        BigInt(this.addressConfig.controller),
        uiTon.addressToBigInt(endpointAddress)
      )
    );
    const lzSend = lzTonSdkV2.decodeClass(
      "md::LzSend",
      await this.contract.getLzSendMd(
        await this.createForwardPayload({
          dstChainKey: dstChainKey ?? "",
          dstAddress: dstAddress ?? "",
          dstNativeAmount
        })
      )
    );
    const mdUlnSend = lzTonSdkV2.buildClass("md::UlnSend", {
      lzSend,
      customUlnSendConfig: this.ulnConfigs[ulnConfigKey("USDT", "TON", dstChainKey)] ?? await this.getUlnConfig(dstDeployment),
      connectionInitialStorage: core.beginCell().endCell(),
      forwardingAddress: channelAddress
    });
    try {
      const quoteStack = (await this.client.provider(ulnAddress).get("ulnQuote", [
        {
          type: "cell",
          cell: mdUlnSend
        }
      ])).stack;
      const parsedArray = quoteStack.readTuple().skip(1).pop();
      const parsedQuoteCell = lzTonSdkV2.decodeClass("md::MsglibSendCallback", parsedArray[3]);
      const srcNativeToken = uiCore.getNativeCurrency(srcToken.chainKey);
      const tenPercentMult = new uiCore.Fraction(13, 10);
      return {
        // add 10% as a buffer. If it's not used it will just be returned to the user
        nativeFee: uiCore.CurrencyAmount.fromBigInt(srcNativeToken, parsedQuoteCell.nativeFee).multiply(
          tenPercentMult
        ),
        // This should always be 0 as ZRO isn't on Ton
        zroFee: uiCore.CurrencyAmount.fromBigInt(srcNativeToken, parsedQuoteCell.zroFee).multiply(
          tenPercentMult
        )
      };
    } catch (error) {
      throw error;
    }
  }
  async getUlnConfig(dstDeployment) {
    const ulnAddress = uiTon.bigIntToAddress(
      uiTon.computeTonUlnAddress(BigInt(this.addressConfig.ulnManager), BigInt(dstDeployment.eid))
    );
    const ulnConnectionAddress = uiTon.bigIntToAddress(
      uiTon.computeTonUlnConnectionAddress(
        // oftProxy is the ton oApp address
        BigInt(this.addressConfig.oftProxy),
        BigInt(dstDeployment.eid),
        BigInt(dstDeployment.oftProxy?.address ?? ""),
        BigInt(this.addressConfig.ulnManager),
        uiTon.addressToBigInt(ulnAddress)
      )
    );
    const ulnConnectionStorageResult = await this.client.provider(ulnConnectionAddress).get("getContractStorage", []);
    const ulnConnectionStorage = lzTonSdkV2.decodeClass(
      "UlnConnection",
      ulnConnectionStorageResult.stack.readCell()
    );
    return ulnConnectionStorage.UlnSendConfigOApp;
  }
  async getOptions(input) {
    const taxiOption = {
      mode: "taxi"
    };
    return { options: [taxiOption] };
  }
  getUnclaimed(input) {
    return Promise.resolve(uiCore.CurrencyAmount.fromRawAmount(input.token, 0));
  }
  isRegistered(input) {
    return Promise.resolve(false);
  }
  supportsClaim(currency) {
    return false;
  }
  supportsRegister(currency) {
    return false;
  }
  tryGetDeployment(chainKey) {
    return this.config.deployments[chainKey];
  }
  supportsTransfer(srcToken, dstToken) {
    const srcDstChains = this.tryGetDeployment(srcToken.chainKey)?.destinationChains;
    if (srcDstChains) {
      if (!srcDstChains.includes(dstToken.chainKey)) {
        return false;
      }
    }
    return Boolean(
      uiCore.isTonChainKey(srcToken.chainKey) && this.tryGetDeployment(srcToken.chainKey)?.token.equals(srcToken) && this.tryGetDeployment(dstToken.chainKey)?.token.equals(dstToken)
    );
  }
};

// src/ton/OftBridgeApiFactory__ton.ts
var OftBridgeApiFactory__ton = class {
  constructor(client, addressConfig, ulnConfigs) {
    this.client = client;
    this.addressConfig = addressConfig;
    this.ulnConfigs = ulnConfigs;
  }
  create(config) {
    const impl = config.version === 3 ? new OftBridgeV3__ton(this.client, config, this.addressConfig, this.ulnConfigs) : void 0;
    if (!impl) {
      throw new Error("Unsupported Config version");
    }
    return impl;
  }
};
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/

exports.OftBridgeApiFactory__ton = OftBridgeApiFactory__ton;
exports.OftBridgeV3__ton = OftBridgeV3__ton;
exports.ulnConfigKey = ulnConfigKey;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=ton.cjs.map