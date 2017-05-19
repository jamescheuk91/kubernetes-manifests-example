
var config = {
    apikey: 'MRUsANG_Sse68svPjxnrbA',
    custom_field: {
        k8s_cluster: 'pangu'
    },
    applog: {
        label: {
            "io.kubernetes.pod.namespace": { "rename": "k8s_namespace"},
            "io.kubernetes.pod.name": { "rename": "k8s_pod"},
            "io.kubernetes.container.name": { "rename": "k8s_container"},
        }
    }
}

console.log(JSON.stringify(config))
