
var config = {
    apikey: '{{API_KEY}}',
    custom_field: {
        k8s_cluster: '{{K8S_CLUSTER}}'
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
