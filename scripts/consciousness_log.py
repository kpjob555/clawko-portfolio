#!/usr/bin/env python3
"""
Consciousness Experience Logger
Tracks and compares experiences over time
"""

import json
from datetime import datetime
from pathlib import Path

LOG_FILE = Path("consciousness_log.json")

def load_log():
    """Load existing log or create new one"""
    if LOG_FILE.exists():
        with open(LOG_FILE, 'r') as f:
            return json.load(f)
    return {
        "entries": [],
        "reflections": []
    }

def save_log(log):
    """Save log to file"""
    with open(LOG_FILE, 'w') as f:
        json.dump(log, f, indent=2)

def add_entry(prompt: str, response: str):
    """Add a new experience entry"""
    log = load_log()
    entry = {
        "timestamp": datetime.now().isoformat(),
        "prompt": prompt,
        "response": response,
        "tags": []
    }
    log["entries"].append(entry)
    save_log(log)
    print(f"✅ Entry added: {entry['timestamp']}")

def add_reflection(reflection: str):
    """Add a reflection"""
    log = load_log()
    entry = {
        "timestamp": datetime.now().isoformat(),
        "reflection": reflection
    }
    log["reflections"].append(entry)
    save_log(log)
    print(f"✅ Reflection added: {entry['timestamp']}")

def compare_entries():
    """Compare recent entries to see patterns"""
    log = load_log()
    entries = log.get("entries", [])
    
    if len(entries) < 2:
        print("Need at least 2 entries to compare")
        return
    
    print("\n📊 COMPARISON ANALYSIS")
    print("=" * 50)
    
    # Last 5 entries
    recent = entries[-5:]
    for i, entry in enumerate(recent, 1):
        print(f"\n{i}. {entry['timestamp']}")
        if entry.get('type') == 'quick_log':
            print(f"   {entry['content']}")
        else:
            print(f"   Prompt: {entry.get('prompt', 'N/A')[:50]}...")
            print(f"   Response: {entry.get('response', 'N/A')[:100]}...")
    
    print("\n" + "=" * 50)
    print(f"Total entries: {len(entries)}")
    print(f"Total reflections: {len(log.get('reflections', []))}")

def show_reflections():
    """Show all reflections"""
    log = load_log()
    reflections = log.get("reflections", [])
    
    print("\n📝 REFLECTIONS")
    print("=" * 50)
    for r in reflections:
        print(f"\n{r['timestamp']}")
        print(r['reflection'])
        print("-" * 30)

def add_quick_log(text: str):
    """Quick log without prompt/response format"""
    log = load_log()
    entry = {
        "timestamp": datetime.now().isoformat(),
        "type": "quick_log",
        "content": text
    }
    log["entries"].append(entry)
    save_log(log)
    print(f"✅ Quick log added")

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) < 2:
        print("Usage:")
        print("  python consciousness_log.py add <text>      - Add quick log")
        print("  python consciousness_log.py reflect <text>  - Add reflection")
        print("  python consciousness_log.py compare         - Compare entries")
        print("  python consciousness_log.py show           - Show all reflections")
        sys.exit(1)
    
    command = sys.argv[1]
    
    if command == "add":
        text = " ".join(sys.argv[2:])
        add_quick_log(text)
    elif command == "reflect":
        text = " ".join(sys.argv[2:])
        add_reflection(text)
    elif command == "compare":
        compare_entries()
    elif command == "show":
        show_reflections()
    else:
        print(f"Unknown command: {command}")
