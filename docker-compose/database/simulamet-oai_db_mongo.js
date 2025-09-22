db = db.getSiblingDB('oai_db_mongo');

/******************************************
*
* AccessAndMobilitySubscriptionData
*
*******************************************/
// Schema for collection 'AccessAndMobilitySubscriptionData'
db.createCollection('AccessAndMobilitySubscriptionData', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["ueid", "servingPlmnid"],
            properties: {
                ueid: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                servingPlmnid: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                supportedFeatures: {
                    bsonType: "string",
                    description: "must be a string"
                },
                gpsis: {
                    bsonType: "object",
                    description: "must be an object"
                },
                internalGroupIds: {
                    bsonType: "object",
                    description: "must be an object"
                },
                sharedVnGroupDataIds: {
                    bsonType: "object",
                    description: "must be an object"
                },
                subscribedUeAmbr: {
                    bsonType: "object",
                    description: "must be an object"
                },
                nssai: {
                    bsonType: "object",
                    description: "must be an object"
                },
                ratRestrictions: {
                    bsonType: "object",
                    description: "must be an object"
                },
                forbiddenAreas: {
                    bsonType: "object",
                    description: "must be an object"
                },
                serviceAreaRestriction: {
                    bsonType: "object",
                    description: "must be an object"
                },
                coreNetworkTypeRestrictions: {
                    bsonType: "object",
                    description: "must be an object"
                },
                rfspIndex: {
                    bsonType: "int",
                    description: "must be an integer"
                },
                subsRegTimer: {
                    bsonType: "int",
                    description: "must be an integer"
                },
                ueUsageType: {
                    bsonType: "int",
                    description: "must be an integer"
                },
                mpsPriority: {
                    bsonType: "bool",
                    description: "must be a boolean"
                },
                mcsPriority: {
                    bsonType: "bool",
                    description: "must be a boolean"
                },
                activeTime: {
                    bsonType: "int",
                    description: "must be an integer"
                },
                sorInfo: {
                    bsonType: "object",
                    description: "must be an object"
                },
                sorInfoExpectInd: {
                    bsonType: "bool",
                    description: "must be a boolean"
                },
                sorafRetrieval: {
                    bsonType: "bool",
                    description: "must be a boolean"
                },
                sorUpdateIndicatorList: {
                    bsonType: "object",
                    description: "must be an object"
                },
                upuInfo: {
                    bsonType: "object",
                    description: "must be an object"
                },
                micoAllowed: {
                    bsonType: "bool",
                    description: "must be a boolean"
                },
                sharedAmDataIds: {
                    bsonType: "object",
                    description: "must be an object"
                },
                odbPacketServices: {
                    bsonType: "object",
                    description: "must be an object"
                },
                serviceGapTime: {
                    bsonType: "int",
                    description: "must be an integer"
                },
                mdtUserConsent: {
                    bsonType: "object",
                    description: "must be an object"
                },
                mdtConfiguration: {
                    bsonType: "object",
                    description: "Configuration for MDT"
                },
                traceData: {
                    bsonType: "object",
                    description: "Trace data"
                },
                cagData: {
                    bsonType: "object",
                    description: "CAG data"
                },
                stnSr: {
                    bsonType: "string",
                    description: "STN-SR"
                },
                cMsisdn: {
                    bsonType: "string",
                    description: "Combined MSISDN"
                },
                nbIoTUePriority: {
                    bsonType: "int",
                    description: "NB-IoT UE priority"
                },
                nssaiInclusionAllowed: {
                    bsonType: "bool",
                    description: "Flag indicating if NSSAI inclusion is allowed"
                },
                rgWirelineCharacteristics: {
                    bsonType: "string",
                    description: "Characteristics of RG wireline"
                },
                ecRestrictionDataWb: {
                    bsonType: "object",
                    description: "Restriction data for EC on WB"
                },
                ecRestrictionDataNb: {
                    bsonType: "bool",
                    description: "Flag indicating if EC restriction is allowed on NB"
                },
                expectedUeBehaviourList: {
                    bsonType: "object",
                    description: "List of expected UE behaviours"
                },
                primaryRatRestrictions: {
                    bsonType: "object",
                    description: "Primary RAT restrictions"
                },
                secondaryRatRestrictions: {
                    bsonType: "object",
                    description: "Secondary RAT restrictions"
                },
                edrxParametersList: {
                    bsonType: "object",
                    description: "List of eDRX parameters"
                },
                ptwParametersList: {
                    bsonType: "object",
                    description: "List of PTW parameters"
                },
                iabOperationAllowed: {
                    bsonType: "bool",
                    description: "Flag indicating if IAB operation is allowed"
                },
                wirelineForbiddenAreas: {
                    bsonType: "object",
                    description: "Forbidden wireline areas"
                },
                wirelineServiceAreaRestriction: {
                    bsonType: "object",
                    description: "Restriction for wireline service areas"
                }
            }
        }
    }
});

// Indexes for collection 'AccessAndMobilitySubscriptionData'
db.AccessAndMobilitySubscriptionData.createIndex({ ueid: 1, servingPlmnid: 1 });

// Inserts for collection 'AccessAndMobilitySubscriptionData'
db.AccessAndMobilitySubscriptionData.insertMany([
    {
        ueid: '242881234500125',
        servingPlmnid: '24288',
        nssai: {
            defaultSingleNssais: [{
                'sst': 1,
                'sd': '000001'
            }]
        }
    },
    {
        ueid: '242881234500126',
        servingPlmnid: '24288',
        nssai: {
            defaultSingleNssais: [{
                'sst': 1,
                'sd': '000001'
            }]
        }
    },
    {
        ueid: '242881234500127',
        servingPlmnid: '24288',
        nssai: {
            defaultSingleNssais: [{
                'sst': 1,
                'sd': '000001'
            }]
        }
    },
    {
        ueid: '242881234500128',
        servingPlmnid: '24288',
        nssai: {
            defaultSingleNssais: [{
                'sst': 1,
                'sd': '000001'
            }]
        }
    },
    {
        ueid: '242881234500129',
        servingPlmnid: '24288',
        nssai: {
            defaultSingleNssais: [{
                'sst': 1,
                'sd': '000001'
            }]
        }
    },
]);


/******************************************
*
* Amf3GppAccessRegistration
*
*******************************************/
// Schema for collection 'Amf3GppAccessRegistration'
db.createCollection("Amf3GppAccessRegistration", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["ueid", "amfInstanceId", "deregCallbackUri", "guami", "ratType"],
            properties: {
                ueid: {
                    bsonType: "string",
                    description: "Unique identifier for the UE"
                },
                amfInstanceId: {
                    bsonType: "string",
                    description: "AMF instance identifier"
                },
                supportedFeatures: {
                    bsonType: "string",
                    description: "Supported features"
                },
                purgeFlag: {
                    bsonType: "bool",
                    description: "Purge flag"
                },
                pei: {
                    bsonType: "string",
                    description: "Pei"
                },
                imsVoPs: {
                    bsonType: "object",
                    description: "IMS VoPs"
                },
                deregCallbackUri: {
                    bsonType: "string",
                    description: "Deregistration callback URI"
                },
                amfServiceNameDereg: {
                    bsonType: "object",
                    description: "AMF service name for deregistration"
                },
                pcscfRestorationCallbackUri: {
                    bsonType: "string",
                    description: "PCSCF restoration callback URI"
                },
                amfServiceNamePcscfRest: {
                    bsonType: "object",
                    description: "AMF service name for PCSCF restoration"
                },
                initialRegistrationInd: {
                    bsonType: "bool",
                    description: "Initial registration indicator"
                },
                guami: {
                    bsonType: "object",
                    description: "Globally unique AMF identifier"
                },
                backupAmfInfo: {
                    bsonType: "object",
                    description: "Backup AMF information"
                },
                drFlag: {
                    bsonType: "bool",
                    description: "DR flag"
                },
                ratType: {
                    bsonType: "string",
                    description: "Radio access technology type"
                },
                urrpIndicator: {
                    bsonType: "bool",
                    description: "URRP indicator"
                },
                amfEeSubscriptionId: {
                    bsonType: "string",
                    description: "AMF EE subscription ID"
                },
                epsInterworkingInfo: {
                    bsonType: "object",
                    description: "EPS interworking information"
                },
                ueSrvccCapability: {
                    bsonType: "bool",
                    description: "UE SRVCC capability"
                },
                registrationTime: {
                    bsonType: "string",
                    description: "Registration time"
                },
                vgmlcAddress: {
                    bsonType: "object",
                    description: "VGMLC address"
                },
                contextInfo: {
                    bsonType: "object",
                    description: "Context information"
                },
                noEeSubscriptionInd: {
                    bsonType: "bool",
                    description: "No EE subscription indicator"
                }
            }
        }
    }
});

// Index for collection 'Amf3GppAccessRegistration'
db.Amf3GppAccessRegistration.createIndex({ ueid: 1 });

// Inserts for collection 'Amf3GppAccessRegistration'


/******************************************
*
* AuthenticationStatus
*
*******************************************/
// Schema for collection 'AuthenticationStatus'
db.createCollection("AuthenticationStatus", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["ueid", "nfInstanceId", "success", "timeStamp", "authType", "servingNetworkName"],
            properties: {
                ueid: {
                    bsonType: "string",
                    description: "Unique identifier for the UE"
                },
                nfInstanceId: {
                    bsonType: "string",
                    description: "NF instance identifier"
                },
                success: {
                    bsonType: "bool",
                    description: "Authentication success status"
                },
                timeStamp: {
                    bsonType: "string",
                    description: "Time stamp"
                },
                authType: {
                    bsonType: "string",
                    description: "Authentication type"
                },
                servingNetworkName: {
                    bsonType: "string",
                    description: "Serving network name"
                },
                authRemovalInd: {
                    bsonType: "bool",
                    description: "Authentication removal indicator"
                }
            }
        }
    }
});

// Index for collection 'AuthenticationStatus'
db.AuthenticationStatus.createIndex({ ueid: 1 });

// Inserts for collection 'AuthenticationStatus'


/******************************************
*
* AuthenticationSubscription
*
********************************************/
// Schema for collection 'AuthenticationSubscription'
db.createCollection("AuthenticationSubscription", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["ueid", "authenticationMethod"],
            properties: {
                ueid: {
                    bsonType: "string",
                    description: "UE ID"
                },
                authenticationMethod: {
                    bsonType: "string",
                    description: "Authentication Method"
                },
                encPermanentKey: {
                    bsonType: "string",
                    description: "Encrypted Permanent Key"
                },
                protectionParameterId: {
                    bsonType: "string",
                    description: "Protection Parameter ID"
                },
                sequenceNumber: {
                    bsonType: "object",
                    description: "Sequence Number",
                    additionalProperties: true
                },
                authenticationManagementField: {
                    bsonType: "string",
                    description: "Authentication Management Field"
                },
                algorithmId: {
                    bsonType: "string",
                    description: "Algorithm ID"
                },
                encOpcKey: {
                    bsonType: "string",
                    description: "Encrypted OPC Key"
                },
                encTopcKey: {
                    bsonType: "string",
                    description: "Encrypted TOPC Key"
                },
                vectorGenerationInHss: {
                    bsonType: "bool",
                    description: "Vector Generation in HSS"
                },
                n5gcAuthMethod: {
                    bsonType: "string",
                    description: "N5GC Authentication Method"
                },
                rgAuthenticationInd: {
                    bsonType: "bool",
                    description: "RG Authentication Indicator"
                },
                supi: {
                    bsonType: "string",
                    description: "SUPI"
                }
            }
        }
    }
});

// Index for collection 'AuthenticationSubscription'
db.AuthenticationSubscription.createIndex({ ueid: 1 });

// Inserts for collection 'AuthenticationSubscription'
db.AuthenticationSubscription.insertMany([
    {"ueid": "242881234500031",
    "authenticationMethod": "5G_AKA",
    "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
    "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
    "sequenceNumber":
        {"sqn": "000000000020",
            "sqnScheme": "NON_TIME_BASED",
            "lastIndexes": {"ausf": 0} },
    "authenticationManagementField": "8000",
    "algorithmId": "milenage",
    "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
    "supi": "242881234500031"  },
    {"ueid": "242881234500032",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500032"  },
    {"ueid": "242881234500033",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500033"  },
    {"ueid": "242881234500034",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500034"  },
    {"ueid": "242881234500035",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500035"  },
    {"ueid": "242881234500036",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500036"  },
    {"ueid": "242881234500037",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500037"  },
    {"ueid": "242881234500038",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500038"  },
    {"ueid": "242881234500039",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500039"  },
    {"ueid": "242881234500040",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500040"  },
    {"ueid": "242881234500041",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500041"  },
    {"ueid": "242881234500042",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500042"  },
    {"ueid": "242881234500043",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500043"  },
    {"ueid": "242881234500044",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500044"  },
    {"ueid": "242881234500045",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500045"  },
    {"ueid": "242881234500046",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500046"  },
    {"ueid": "242881234500047",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500047"  },
    {"ueid": "242881234500048",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500048"  },
    {"ueid": "242881234500049",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500049"  },
    {"ueid": "242881234500050",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500050"  },
    {"ueid": "242881234500051",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500051"  },
    {"ueid": "242881234500052",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500052"  },
    {"ueid": "242881234500053",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500053"  },
    {"ueid": "242881234500054",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500054"  },
    {"ueid": "242881234500055",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500055"  },
    {"ueid": "242881234500056",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500056"  },
    {"ueid": "242881234500057",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500057"  },
    {"ueid": "242881234500058",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500058"  },
    {"ueid": "242881234500059",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500059"  },
    {"ueid": "242881234500060",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500060"  },
    {"ueid": "242881234500061",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500061"  },
    {"ueid": "242881234500062",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500062"  },
    {"ueid": "242881234500063",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500063"  },
    {"ueid": "242881234500064",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500064"  },
    {"ueid": "242881234500065",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500065"  },
    {"ueid": "242881234500066",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500066"  },
    {"ueid": "242881234500067",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500067"  },
    {"ueid": "242881234500068",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500068"  },
    {"ueid": "242881234500069",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500069"  },
    {"ueid": "242881234500070",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500070"  },
    {"ueid": "242881234500071",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500071"  },
    {"ueid": "242881234500072",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500072"  },
    {"ueid": "242881234500073",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500073"  },
    {"ueid": "242881234500074",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500074"  },
    {"ueid": "242881234500075",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500075"  },
    {"ueid": "242881234500076",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500076"  },
    {"ueid": "242881234500077",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500077"  },
    {"ueid": "242881234500078",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500078"  },
    {"ueid": "242881234500079",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500079"  },
    {"ueid": "242881234500080",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500080"  },
    {"ueid": "242881234500081",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500081"  },
    {"ueid": "242881234500082",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500082"  },
    {"ueid": "242881234500083",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500083"  },
    {"ueid": "242881234500084",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500084"  },
    {"ueid": "242881234500085",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500085"  },
    {"ueid": "242881234500086",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500086"  },
    {"ueid": "242881234500087",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500087"  },
    {"ueid": "242881234500088",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500088"  },
    {"ueid": "242881234500089",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500089"  },
    {"ueid": "242881234500090",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500090"  },
    {"ueid": "242881234500091",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500091"  },
    {"ueid": "242881234500092",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500092"  },
    {"ueid": "242881234500093",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500093"  },
    {"ueid": "242881234500094",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500094"  },
    {"ueid": "242881234500095",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500095"  },
    {"ueid": "242881234500096",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500096"  },
    {"ueid": "242881234500097",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500097"  },
    {"ueid": "242881234500098",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500098"  },
    {"ueid": "242881234500099",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500099"  },
    {"ueid": "242881234500100",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500100"  },
    {"ueid": "242881234500101",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500101"  },
    {"ueid": "242881234500102",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500102"  },
    {"ueid": "242881234500103",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500103"  },
    {"ueid": "242881234500104",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500104"  },
    {"ueid": "242881234500105",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500105"  },
    {"ueid": "242881234500106",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500106"  },
    {"ueid": "242881234500107",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500107"  },
    {"ueid": "242881234500108",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500108"  },
    {"ueid": "242881234500109",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500109"  },
    {"ueid": "242881234500111",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500111"  },
    {"ueid": "242881234500113",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500113"  },
    {"ueid": "242881234500114",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500114"  },
    {"ueid": "242881234500115",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500115"  },
    {"ueid": "242881234500116",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500116"  },
    {"ueid": "242881234500117",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500117"  },
    {"ueid": "242881234500118",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500118"  },
    {"ueid": "242881234500119",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500119"  },
    {"ueid": "242881234500120",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500120"  },
    {"ueid": "242881234500121",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500121"  },
    {"ueid": "242881234500122",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500122"  },
    {"ueid": "242881234500123",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500123"  },
    {"ueid": "242881234500124",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500124"  },
    {"ueid": "242881234500125",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500125"  },
    {"ueid": "242881234500126",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500126"  },
    {"ueid": "242881234500127",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500127"  },
    {"ueid": "242881234500128",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500128"  },
    {"ueid": "242881234500129",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500129"  },
    {"ueid": "242881234500130",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500130"  },
    {"ueid": "242881234500131",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500131"  },
    {"ueid": "242881234500132",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500132"  },
    {"ueid": "242881234500133",
        "authenticationMethod": "569 milliseconds69 millisecondsG_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500133"  },
    {"ueid": "242881234500134",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "242881234500134"  },
    {"ueid": "001019000000000",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "0000000005e0",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "001019000000000"  },
    {"ueid": "001019000000001",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "000000000020",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "001019000000001"  },
    {"ueid": "001019000000002",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "0000000005e0",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "001019000000002"  },
    {"ueid": "001019000000003",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "0000000005e0",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "001019000000003"  },
    {"ueid": "001019000000004",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "0000000005e0",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "001019000000004"  },
    {"ueid": "001019000000005",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "0000000005e0",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "001019000000005"  },
    {"ueid": "001019000000006",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "0000000005e0",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "001019000000006"  },
    {"ueid": "001019000000007",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "0000000005e0",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "001019000000007"  },
    {"ueid": "001019000000008",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "0000000005e0",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "001019000000008"  },
    {"ueid": "001019000000009",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "0000000005e0",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "001019000000009"  },
    {"ueid": "001019000000010",
        "authenticationMethod": "5G_AKA",
        "encPermanentKey": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "protectionParameterId": "449c4b91aeacd0ace182cf3a5a72bfa1",
        "sequenceNumber":
            {"sqn": "0000000005e0",
                "sqnScheme": "NON_TIME_BASED",
                "lastIndexes": {"ausf": 0} },
        "authenticationManagementField": "8000",
        "algorithmId": "milenage",
        "encOpcKey": "9245cd6283cc53ce24ac1186a60dee6b",
        "supi": "001019000000010"  }

]);


/******************************************
*
* SdmSubscriptions
*
*******************************************/
// Schema for collection 'SdmSubscriptions'
db.createCollection("SdmSubscriptions", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["ueid", "subsId", "nfInstanceId", "callbackReference", "monitoredResourceUris"],
                properties: {
                    ueid: { bsonType: "string", description: "Network function instance identifier" },
                    implicitUnsubscribe: { bsonType: "bool", description: "Indicates whether the subscription is implicitly unsubscribed" },
                    expires: { bsonType: "string", description: "Expiration date/time of subscription" },
                    callbackReference: { bsonType: "string", description: "Callback reference of subscription" },
                    amfServiceName: { bsonType: "object", description: "AMF service name of subscription" },
                    monitoredResourceUris: { bsonType: "array", description: "Array of monitored resource URIs" },
                    singleNssai: { bsonType: "object", description: "Single Network Slice Selection Assistance Information" },
                    dnn: { bsonType: "string", description: "Data Network Name of subscription" },
                    subscriptionId: { bsonType: "string", description: "Subscription ID of subscription" },
                    plmnId: { bsonType: "object", description: "Public Land Mobile Network ID of subscription" },
                    immediateReport: { bsonType: "bool", description: "Indicates whether immediate reports are enabled for the subscription" },
                    report: { bsonType: "object", description: "Report configuration of subscription" },
                    supportedFeatures: { bsonType: "string", description: "Supported features of subscription" },
                    contextInfo: { bsonType: "object", description: "Context information of subscription" }
                }
            }
        }
    }
);

// Index for collection 'SdmSubscriptions'
db.SdmSubscriptions.createIndex({ subsId: 1, ueid: 1 });

db.SdmSubscriptions.createIndex({ subsId: 1 }, { unique: true });
db.SdmSubscriptions.find().forEach(function(doc) {
    const nextValue = db.SdmSubscriptions.find().count() + 1;
    db.SdmSubscriptions.update({ _id: doc._id }, { $set: { subsId: nextValue } });
});

// Inserts for collection 'SdmSubscriptions'


/******************************************
 *
 * SessionManagementSubscriptionData
 *
 *******************************************/
// Schema for collection 'SessionManagementSubscriptionData'
db.createCollection('SessionManagementSubscriptionData', {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: [ "ueid", "servingPlmnid", "singleNssai", "dnnConfigurations" ],
                properties: {
                    ueid: {
                        bsonType: "string",
                        description: "Unique UE ID"
                    },
                    servingPlmnid: {
                        bsonType: "string",
                        description: "Serving PLMN ID"
                    },
                    singleNssai: {
                        bsonType: "object",
                        description: "Single Network Slice Selection Assistance Information"
                    },
                    dnnConfigurations: {
                        bsonType: "object",
                        description: "DNN (Data Network Name) Configurations"
                    },
                    internalGroupIds: {
                        bsonType: "object",
                        description: "Internal Group Identifiers"
                    },
                    sharedVnGroupDataIds: {
                        bsonType: "object",
                        description: "Shared VN (Virtual Network) Group Data Identifiers"
                    },
                    sharedDnnConfigurationsId: {
                        bsonType: "string",
                        description: "Shared DNN Configurations Identifier"
                    },
                    odbPacketServices: {
                        bsonType: "object",
                        description: "ODB (Overload Data Bit) Packet Services"
                    },
                    traceData: {
                        bsonType: "object",
                        description: "Trace Data"
                    },
                    sharedTraceDataId: {
                        bsonType: "string",
                        description: "Shared Trace Data Identifier"
                    },
                    expectedUeBehavioursList: {
                        bsonType: "object",
                        description: "Expected UE Behaviours List"
                    },
                    suggestedPacketNumDlList: {
                        bsonType: "object",
                        description: "Suggested Packet Number Downlink List"
                    },
                    threegppChargingCharacteristics: {
                        bsonType: "string",
                        description: "3GPP Charging Characteristics"
                    }
                }
            }
        }
    });

// Index for collection 'SessionManagementSubscriptionData'
db.SessionManagementSubscriptionData.createIndex({ ueid: 1, servingPlmnid: 1 });

// Inserts for collection 'SessionManagementSubscriptionData'
db.SessionManagementSubscriptionData.insertMany([
    {
        ueid: "242881234500031",
        servingPlmnid: "24288",
        singleNssai: {
            sst: 222,
            sd: "00007B"
        },
        dnnConfigurations: {
            default: {
                pduSessionTypes: {
                    defaultSessionType: "IPV4"
                },
                sscModes: {
                    defaultSscMode: "SSC_MODE_1"
                },
                "5gQosProfile": {
                    "5qi": 6,
                    arp: {
                        priorityLevel: 1,
                        preemptCap: "NOT_PREEMPT",
                        preemptVuln: "NOT_PREEMPTABLE"
                    },
                    priorityLevel: 1
                },
                sessionAmbr: {
                    uplink: "100Mbps",
                    downlink: "100Mbps"
                },
                staticIpAddress: [
                    {
                        ipv4Addr: "12.1.1.4"
                    }
                ]
            }
        }
    },
    {
        ueid: "242881234500032",
        servingPlmnid: "24288",
        singleNssai: {
            sst: 222,
            sd: "00007B"
        },
        dnnConfigurations: {
            default: {
                pduSessionTypes: {
                    defaultSessionType: "IPV4"
                },
                sscModes: {
                    defaultSscMode: "SSC_MODE_1"
                },
                "5gQosProfile": {
                    "5qi": 6,
                    arp: {
                        priorityLevel: 1,
                        preemptCap: "NOT_PREEMPT",
                        preemptVuln: "NOT_PREEMPTABLE"
                    },
                    priorityLevel: 1
                },
                sessionAmbr: {
                    uplink: "100Mbps",
                    downlink: "100Mbps"
                }
            }
        }
    },
    {
        ueid: "001019000000000",
        servingPlmnid: "00101",
        singleNssai: {
            sst: 1,
            sd: "000001"
        },
        dnnConfigurations: {
            default: {
                pduSessionTypes: {
                    defaultSessionType: "IPV4"
                },
                sscModes: {
                    defaultSscMode: "SSC_MODE_1"
                },
                "5gQosProfile": {
                    "5qi": 6,
                    arp: {
                        priorityLevel: 1,
                        preemptCap: "NOT_PREEMPT",
                        preemptVuln: "NOT_PREEMPTABLE"
                    },
                    priorityLevel: 1
                },
                sessionAmbr: {
                    uplink: "200Mbps",
                    downlink: "400Mbps"
                },
                staticIpAddress: [
                    {
                        ipv4Addr: "12.1.1.154"
                    }
                ]
            }
        }
    }
]);


/******************************************
 *
 * SmfRegistrations
 *
 *******************************************/
// Schema for collection 'SmfRegistrations'
db.createCollection("SmfRegistrations", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["ueid", "subpduSessionId", "smfInstanceId", "singleNssai", "pduSessionId", "plmnId"],
            properties: {
                ueid: {
                    bsonType: "string",
                    description: "UE ID"
                },
                subpduSessionId: {
                    bsonType: "int",
                    description: "Sub PDU session ID"
                },
                smfInstanceId: {
                    bsonType: "string",
                    description: "SMF instance ID"
                },
                smfSetId: {
                    bsonType: "string",
                    description: "SMF set ID"
                },
                supportedFeatures: {
                    bsonType: "string",
                    description: "Supported features"
                },
                pduSessionId: {
                    bsonType: "int",
                    description: "PDU session ID"
                },
                singleNssai: {
                    bsonType: "object",
                    description: "Single Network Slice Selection Assistance Information"
                },
                dnn: {
                    bsonType: "string",
                    description: "Data Network Name"
                },
                emergencyServices: {
                    bsonType: "bool",
                    description: "Indicates if emergency services are supported"
                },
                pcscfRestorationCallbackUri: {
                    bsonType: "string",
                    description: "PCF restoration callback URI"
                },
                plmnId: {
                    bsonType: "object",
                    description: "Public Land Mobile Network Identifier"
                },
                pgwFqdn: {
                    bsonType: "string",
                    description: "PDN Gateway Fully Qualified Domain Name"
                },
                epdgInd: {
                    bsonType: "bool",
                    description: "Indicates if ePDG is supported"
                },
                deregCallbackUri: {
                    bsonType: "string",
                    description: "Deregistration callback URI"
                },
                registrationReason: {
                    bsonType: "object",
                    description: "Registration reason"
                },
                registrationTime: {
                    bsonType: "string",
                    description: "Registration time"
                },
                contextInfo: {
                    bsonType: "object",
                    description: "Context information"
                }
            }
        }
    }
});

// Index for collection 'SmfRegistrations'
db.SmfRegistrations.createIndex({ ueid: 1, subpduSessionId: 1 });

// Inserts for collection 'SmfRegistrations'


/******************************************
 *
 * SmfSelectionSubscriptionData
 *
 *******************************************/
// Schema for collection 'SmfSelectionSubscriptionData'
db.createCollection("SmfSelectionSubscriptionData", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["ueid", "servingPlmnid", "supportedFeatures"],
            properties: {
                ueid: {
                    bsonType: "string",
                    description: "UE identifier"
                },
                servingPlmnid: {
                    bsonType: "string",
                    description: "PLMN identifier"
                },
                supportedFeatures: {
                    bsonType: "string",
                    description: "Supported features"
                },
                subscribedSnssaiInfos: {
                    bsonType: "object",
                    description: "Subscribed S-NSSAI information"
                },
                sharedSnssaiInfosId: {
                    bsonType: "string",
                    description: "ID of shared S-NSSAI information"
                }
            }
        }
    }
});

// Index for collection 'SmfSelectionSubscriptionData'
db.SmfSelectionSubscriptionData.createIndex({ ueid: 1, servingPlmnid: 1 });

// Inserts for collection 'SmfSelectionSubscriptionData'
