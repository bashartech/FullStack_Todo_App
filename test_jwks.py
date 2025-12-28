#!/usr/bin/env python3
"""
Test script to check if the Better Auth JWKS endpoint is accessible.
"""
import requests
import os
import json

def test_jwks_endpoint():
    better_auth_url = os.getenv("NEXT_PUBLIC_BETTER_AUTH_URL", "http://localhost:3000")
    jwks_url = f"{better_auth_url}/.well-known/jwks.json"

    print(f"Testing JWKS endpoint: {jwks_url}")

    try:
        response = requests.get(jwks_url, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response Text: {response.text[:500]}...")  # First 500 chars

        if response.text:
            try:
                jwks = response.json()
                print(f"JWKS Keys: {jwks.get('keys', [])}")
            except json.JSONDecodeError:
                print("Response is not valid JSON")
        else:
            print("Response is empty")

    except requests.exceptions.RequestException as e:
        print(f"Error fetching JWKS: {e}")

if __name__ == "__main__":
    test_jwks_endpoint()