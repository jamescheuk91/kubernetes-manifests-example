

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
}

var envs = ['prod'];
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
    'sms',
    'sms-api',
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
