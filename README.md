# Kubernetes Manifests
Stores manifests for OneSky Kubernetes cluster

# Kubernetes Glossaries
- `Pod`
  - 1 or more containers that must live and die together on the same host
  - Shares a network (can call each other through localhost:port)
  - E.g.
    - Single container pod
      - Import
    - Multiple container pod
      - Apache + Datadog agent for Apache

- `Replication Controller`
  - Ensure a certain number of `Pods` is running at all times

- `Service`
  - TCP / UDP Proxy to `Pod`
  - Can contain 1 or more type of `Pods`
  - Select by `Label`


# Best Practices
- ***If*** a `Service` is needed, ***always*** create the `Service` before creating `Pod` or `Replication Controller`
  - Allow others to discover your app even if it is down
  - Once `Pod` is available others can immediately connect to your app
  - Also allow self discovering infra like Cassandra, Redis, etc

# Config files
- use ./gen\_config to generate real kubernetes config yml files
- {{ENV}} - the namespace of prod, stag, dev environment
  - the service address (service.{{ENV}}.svc.cluster.local) will follow this convertion 
- Example:
 ```
$ IMG_VERSION=0.1.2 ./gen_config dev ./default/itunes-translation/itunes-translation.rc.yml
=== ENV=dev ===
apiVersion: v1
kind: ReplicationController
metadata:
  namespace: dev
  name: itunes-translation
spec:
  replicas: 1 
  template:
    metadata:
      labels:
        app: itunes-translation
    spec:
      imagePullSecrets:
      - name: quay
      containers:
      - name: itunes-appstore-project
        image: quay.io/onesky/itunes-translation:0.1.2
        ports:
        - containerPort: 50051
          name: rpc
        resources:
          limits:
            cpu: 400m
            memory: 512Mi
          requests:
            cpu: 200m
            memory: 384Mi
        env:
          - name: ORDERING_SERVICE_ADDRESS
            value: "ordering.dev.svc.cluster.local"
          - name: ITUNES_TRANSLATION_ADDRESS
            value: "itunes-translation.dev.svc.cluster.local"
          - name: PGSQL_HOST
            valueFrom:
              secretKeyRef:
                name: itunes-translation
                key: pgsql.host
          - name: PGSQL_PORT
            valueFrom:
              secretKeyRef:
                name: itunes-translation
                key: pgsql.port
          - name: PGSQL_USERNAME
            valueFrom:
              secretKeyRef:
                name: itunes-translation
                key: pgsql.username
          - name: PGSQL_PASSWORD
            valueFrom:
              secretKeyRef:
                name: itunes-translation
                key: pgsql.password
          - name: PGSQL_DATABASE
            valueFrom:
              secretKeyRef:
                name: itunes-translation
                key: pgsql.database
          - name: SENDGRID_API_KEY
            valueFrom:
              secretKeyRef:
                name: itunes-translation
                key: sendgrid.api-key
          - name: SENDGRID_TEMPLATE_ID
            valueFrom:
              secretKeyRef:
                name: itunes-translation
                key: sendgrid.template-id
          - name: SENDGRID_TRANSLATION_FROM_EMAIL
            valueFrom:
              secretKeyRef:
                name: itunes-translation
                key: sendgrid.translation-from-email
          - name: SENDGRID_TRANSLATION_BCC_EMAIL
            valueFrom:
              secretKeyRef:
                name: itunes-translation
                key: sendgrid.translation-bcc-email
          - name: SENDGRID_TRANSLATION_TO_EMAIL_TEMP
            valueFrom:
              secretKeyRef:
                name: itunes-translation
                key: sendgrid.translation-to-email-temp
          - name: RABBITMQ_HOST
            valueFrom:
              secretKeyRef:
                name: rabbitmq
                key: host
          - name: RABBITMQ_USERNAME
            valueFrom:
              secretKeyRef:
                name: rabbitmq
                key: username
          - name: RABBITMQ_PASSWORD
            valueFrom:
              secretKeyRef:
                name: rabbitmq
                key: password

 ```
