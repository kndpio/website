---
type: overview
title: CLI Installation
sidebar_label: Installation
sidebar_position: 1
pagination_next: null
pagination_prev: null
---

# Install the KNDP command-line

### Prerequisites

1. Linux-based operating system. This script is designed for Linux-based operating systems, specifically tested on Ubuntu.
1. Internet access for package downloads.
1. Kubernetes engine installed locally, supported: KinD, k3s, k3d

### Installing from GitHub Releases

Install the latest version of the KNDP command-line via shell script by downloading the install script from KNDP GitHub Releases.
Downloading packages requires both the version and CPU architecture (linux-amd64).
```bash
VERSION="0.0.7" 
ARCH="linux-amd64"
curl -Lo ./kndp.tar.gz "https://github.com/kndpio/cli/releases/download/${VERSION}/kndp-${VERSION}-${ARCH}.tar.gz"; tar -xf ./kndp.tar.gz; rm ./kndp.tar.gz
mv ./kndp /some-dir-in-your-PATH/kndp
```

### Verify installation
```bash
kndp --version
```