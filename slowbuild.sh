#!/bin/bash
rm -rf .cache
rm -rf public
gatsby build
gatsby serve
