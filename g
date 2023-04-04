#!/bin/bash

# Add all changes
git add .

# Commit with specified message
git commit -m "$1"

# Push changes to origin branch
git push

