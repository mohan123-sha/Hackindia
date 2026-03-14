"""
Demonstration of the Dynamic Configuration System
Shows how the system works without any hardcoded values
"""
import os
from pathlib import Path
from dotenv import load_dotenv
from google import genai

# Load environment variables
load_dotenv()

print("=" * 70)
print("DYNAMIC AI VERIFICATION SYSTEM - DEMONSTRATION")
print("=" * 70)
print()

# Show configuration is loaded dynamically
print("📋 CONFIGURATION (from .env file)")
print("-" * 70)
api_key = os.getenv("GEMINI_API_KEY", "")
model = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")
print(f"API Key: {'*' * 30}{api_key[-10:] if len(api_key) > 10 else 'NOT SET'}")
print(f"Model: {model}")
print(f"Host: {os.getenv('HOST', '0.0.0.0')}")
print(f"Port: {os.getenv('PORT', '8000')}")
print()

if not api_key:
    print("❌ Error: GEMINI_API_KEY not set in .env file")
    exit(1)

# Demonstrate dynamic client initialization
print("🔧 DYNAMIC CLIENT INITIALIZATION")
print("-" * 70)
client = genai.Client(api_key=api_key)
print(f"✅ Client initialized with model: {model}")
print()

# Test 1: Basic verification
print("🧪 TEST 1: Basic API Call")
print("-" * 70)
try:
    response = client.models.generate_content(
        model=model,
        contents="Say 'Dynamic configuration working!'"
    )
    print(f"✅ Response: {response.text.strip()}")
except Exception as e:
    print(f"❌ Failed: {e}")
    exit(1)
print()

# Test 2: Generate test input (simulating verification flow)
print("🧪 TEST 2: Generate Test Input")
print("-" * 70)
agent_description = "A sentiment analysis AI that classifies text as positive, negative, or neutral"
try:
    response = client.models.generate_content(
        model=model,
        contents=f"Generate a short test sentence for: {agent_description}"
    )
    test_input = response.text.strip()
    print(f"Agent: {agent_description}")
    print(f"✅ Generated: {test_input}")
except Exception as e:
    print(f"❌ Failed: {e}")
print()

# Test 3: Model flexibility
print("🧪 TEST 3: Model Flexibility")
print("-" * 70)
print(f"Current model: {model}")
print("You can change the model by:")
print("  1. Editing GEMINI_MODEL in .env file")
print("  2. Passing model parameter to API: ?model=gemini-2.5-pro")
print("  3. Setting environment variable: export GEMINI_MODEL=gemini-2.5-pro")
print()

# Summary
print("=" * 70)
print("✅ DYNAMIC SYSTEM DEMONSTRATION COMPLETE")
print("=" * 70)
print()
print("KEY FEATURES DEMONSTRATED:")
print("  ✅ Configuration loaded from .env file")
print("  ✅ No hardcoded API keys or credentials")
print("  ✅ Dynamic client initialization")
print("  ✅ Flexible model selection")
print("  ✅ Easy to change settings")
print()
print("TO USE THE SYSTEM:")
print("  1. Configure .env file with your settings")
print("  2. Start server: uvicorn app.main:app --reload")
print("  3. Upload agents via POST /upload-agent")
print("  4. Verify with POST /verify-agent/{id}?use_ai=true")
print()
print("=" * 70)