# Kubernetes Manifests
Stores manifests for OneSky Kubernetes cluster

# Kubernetes Glossaries
- `Pod`
  - ...
- `Replication Controller`
  - ...
- `Service`
  - ...

# Best Practices
- ***If*** a `Service` is needed, ***always*** create `Service` before creating `Pod` or `Replication Controller`
  - Allow others to discover your app even if it is down
  - Once `Pod` is available others can immediately connect to your app
