

var others_labels = [
    "io.kubernetes.pod.namespace",
    "io.kubernetes.pod.name",
    "io.kubernetes.container.name" 
];
var ns_labels = [
    "io.kubernetes.pod.name",
    "io.kubernetes.container.name" 
];
var common_labels = [
    "io.kubernetes.pod.name",
];

var tokens = {
    others: "e3e58a10-f13b-4482-864a-385e320f87f2",
    ns_default: "d0943933-a55b-4f78-aecc-738dac439722",
    ns_kubesystem: "39056d37-d984-4bb9-923c-56afe9a934d3",
    "prod_api_gateway": "4125f4b4-5578-48bb-920e-4e165b30a644",
    "prod_api_gateway_tyk": "2161cfbd-f125-4dac-a863-745bea08170d",
    "prod_api_gateway_tyk_redis": "556e13aa-67f9-45b9-8a1f-35c82e93d53c",
    "prod_appstore_integration": "",
    "prod_client": "",
    "prod_client_web_portal": "",
    "prod_communication": "",
    "prod_file_management": "",
    "prod_import": "7e7ab4ce-f475-4749-87a6-f9c552f146fe",
    "prod_import_activemq_master": "625194b4-9f0c-45e1-b8ad-b7be1c7a921c",
    "prod_itunes_appstore_project": "",
    "prod_itunes_translation": "",
    "prod_legacy_translator_allocation": "032d17ea-e78f-417d-ade6-8329147821c1",
    "prod_parser_qa": "0070bc5f-48c9-40ee-8cd8-1779beda263b",
    "prod_payment": "",
    "prod_project_permit": "db17049f-aeb1-49e8-aade-2ddfcf310fe0",
    "prod_realtime_communication": "",
    "prod_tu_management": "",

    "stag_api_gateway": "6fb20b87-45c8-4da1-9f3c-5e2f99683259",
    "stag_api_gateway_tyk": "6b3712cd-d5e9-467e-85b9-4c420e6668da",
    "stag_api_gateway_tyk_redis": "96933e80-116e-4731-b1f8-3bbef0a2706c",
    "stag_appstore_integration": "c68d4bd3-fbc6-4ef1-94be-4e6ca865ca45",
    "stag_client": "e9567137-3c60-47dd-9fd8-fb73731f8a4e",
    "stag_client_web_portal": "95d36e1b-927b-4513-9b0f-9120162b672d",
    "stag_communication": "64418aa4-5f73-44e5-afc6-c21164f2324e",
    "stag_file_management": "2433bc11-5d31-46a7-8a2c-72c15e26d997",
    "stag_import": "",
    "stag_import_activemq_master": "",
    "stag_itunes_appstore_project": "8a091f8a-48ff-477d-af7e-5c799d556ccc",
    "stag_itunes_translation": "08334fb9-fac6-4e32-ac0f-6608d6dfa182",
    "stag_legacy_translator_allocation": "8790317a-10b4-4562-9311-e228d5ada680",
    "stag_parser_qa": "449b85fe-178b-47f5-a77f-351ebba0372f",
    "stag_payment": "449b85fe-178b-47f5-a77f-351ebba0372f",
    "stag_project_permit": "4bbafe20-3340-4e93-961e-ac77f183a34c",
    "stag_realtime_communication": "f289ba9b-7a52-4977-89ab-b7488916db74",
    "stag_tu_management": "0e6c1087-1fcc-4e4a-9c34-eaf43b3eb0da",

    "dev_api_gateway": "864ed427-4514-4d57-9d56-0545c56bb0d8",
    "dev_api_gateway_tyk": "89aa8a5d-a46b-43a3-9c71-c5d5377133c2",
    "dev_api_gateway_tyk_redis": "b0b3d121-e72e-44ba-a55c-eb6c00bd4540",
    "dev_appstore_integration": "3f31aac4-e7ea-4cd9-b20c-a821a709090d",
    "dev_client": "15b59cf6-8b7e-45eb-8d5e-edd0797bd5cc",
    "dev_client_web_portal": "7cc9edb7-3e3b-40da-832e-132f71d129c9",
    "dev_communication": "5ae376fc-bd7d-4d3c-901f-5f1ac3eb63ea",
    "dev_file_management": "deb69384-6a24-4ca6-b87c-a46b49793e03",
    "dev_import": "",
    "dev_import_activemq_master": "",
    "dev_itunes_appstore_project": "8cfe1c36-42cd-43d4-8dca-5f93152933a5",
    "dev_itunes_translation": "6e69f858-9ee7-4485-998f-061221920ff2",
    "dev_legacy_translator_allocation": "ff29c84d-b944-4c80-b343-4fcc3a5da422",
    "dev_parser_qa": "7a04a52a-62f2-427f-a123-78270b458771",
    "dev_payment": "2202cde4-4663-41ec-9434-d782b5c18122",
    "dev_project_permit": "727854a5-706b-4e44-9fb3-04e39bfc3d58",
    "dev_realtime_communication": "ad810283-9b6e-4731-bc2d-e9e34e08ca52",
    "dev_tu_management": "14a34d51-a3f2-419e-94a4-29812dae5e0d",

}

var envs = ['prod', 'stag', 'dev'];
var services = [
    'api-gateway',
    'api-gateway-tyk',
    'api-gateway-tyk-redis',
    'appstore-integration',
    'client',
    'client-web-portal',
    'communication',
    'file-management',
    'import',
    'import-activemq-master',
    'itunes-appstore-project',
    'itunes-translation',
    'legacy-translator-allocation',
    'parser-qa',
    'payment',
    'project-permit',
    'realtime-communication',
    'tu-management',
];


var result =  {
    default: {
        "labels": others_labels, 
        "token": tokens.others,
    },
    "filters": [
        {
            "labels": common_labels, 
            "filter": [
                "io.kubernetes.pod.namespace=default",
            ],
            "token": tokens.ns_default,
        },
        {
            "labels": ns_labels, 
            "filter": [
                "io.kubernetes.pod.namespace=kube-system",
            ],
            "token": tokens.ns_kubesystem,
        },

    ]
}

function gen_service_logset(env, service){
    var key = env+'_' + service.replace(/-/g, "_");
    if (!tokens[key]) {
        return;
    }
    var item = {
            "labels": common_labels, 
            "filter": [
                "io.kubernetes.pod.namespace="+env,
                "io.kubernetes.container.name="+service,
            ],
            "token": tokens[key],
        }
        result.filters.push(item);
}

envs.forEach(function(env){
    services.forEach(function(service){
        gen_service_logset(env, service)
    })

})

function gen_token_keys(){
    envs.forEach(function(env){
        services.forEach(function(service){
            var key = env+'_' + service.replace(/-/g, "_");
            if (!tokens[key]){
                tokens[key] = "";
            }

        })

    })
    console.log(JSON.stringify(tokens,null,2));
}

//console.log(JSON.stringify(result,null,2))
console.log(JSON.stringify(result))
//gen_token_keys();
