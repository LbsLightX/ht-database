#!/usr/bin/env python3
"""
Catalog Schema & Integrity Validator for HelloTalk Database (ht-database)
Ensures 100% schema compliance, valid relational foreign keys, non-negative
values, and unique IDs before any commit or deployment.
"""

import os
import sys
import json

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
MASTER_JSON_PATH = os.path.join(PROJECT_ROOT, "data", "hellotalk-gifts.json")

def validate_catalog(filepath=MASTER_JSON_PATH):
    if not os.path.exists(filepath):
        print(f"❌ Error: Database file not found at: {filepath}")
        return False

    with open(filepath, "r", encoding="utf-8") as f:
        try:
            db = json.load(f)
        except json.JSONDecodeError as e:
            print(f"❌ JSON Decode Error: {e}")
            return False

    errors = []
    warnings = []

    # 1. Top-Level Keys
    required_keys = ["version", "categories", "series", "items", "tiers"]
    for k in required_keys:
        if k not in db:
            errors.append(f"Missing top-level key: '{k}'")

    if errors:
        for err in errors:
            print(f"❌ {err}")
        return False

    # 2. Categories Validation
    categories = db.get("categories", [])
    cat_ids = set()
    for idx, cat in enumerate(categories):
        cid = cat.get("id")
        cname = cat.get("name")
        if not cid or not str(cid).strip():
            errors.append(f"Category at index {idx} has missing or empty 'id'")
        elif cid in cat_ids:
            errors.append(f"Duplicate category id: '{cid}'")
        else:
            cat_ids.add(cid)
        if not cname or not str(cname).strip():
            errors.append(f"Category '{cid}' has missing or empty 'name'")

    # 3. Series Validation
    series_list = db.get("series", [])
    series_ids = set()
    for idx, s in enumerate(series_list):
        sid = s.get("id")
        sname = s.get("name")
        scat_id = s.get("categoryId")
        if not sid or not str(sid).strip():
            errors.append(f"Series at index {idx} has missing or empty 'id'")
        elif sid in series_ids:
            errors.append(f"Duplicate series id: '{sid}'")
        else:
            series_ids.add(sid)

        if not sname or not str(sname).strip():
            errors.append(f"Series '{sid}' has missing or empty 'name'")

        if scat_id and scat_id not in cat_ids:
            errors.append(f"Series '{sname}' ({sid}) references non-existent categoryId: '{scat_id}'")

    # 4. Tiers Validation
    tiers = db.get("tiers", [])
    tier_names = set()
    for idx, t in enumerate(tiers):
        tname = t.get("name")
        if not tname or not str(tname).strip():
            errors.append(f"Tier at index {idx} has missing or empty 'name'")
        else:
            tier_names.add(tname)

    # 5. Items Validation
    items = db.get("items", [])
    item_ids = set()
    for idx, item in enumerate(items):
        iid = item.get("id")
        iname = item.get("name")
        isid = item.get("seriesId")
        icid = item.get("categoryId")
        base_val = item.get("baseValue", 0)
        market_val = item.get("marketWorth", 0)
        tier = item.get("tier", "Standard")

        if not iid or not str(iid).strip():
            errors.append(f"Item at index {idx} has missing or empty 'id'")
        elif iid in item_ids:
            errors.append(f"Duplicate item id: '{iid}'")
        else:
            item_ids.add(iid)

        if not iname or not str(iname).strip():
            errors.append(f"Item '{iid}' has missing or empty 'name'")

        if isid and isid not in series_ids:
            errors.append(f"Item '{iname}' ({iid}) references non-existent seriesId: '{isid}'")

        if icid and icid not in cat_ids:
            errors.append(f"Item '{iname}' ({iid}) references non-existent categoryId: '{icid}'")

        if not isinstance(base_val, (int, float)) or base_val < 0:
            errors.append(f"Item '{iname}' ({iid}) has invalid baseValue: {base_val}")

        if not isinstance(market_val, (int, float)) or market_val < 0:
            errors.append(f"Item '{iname}' ({iid}) has invalid marketWorth: {market_val}")

        if tier and tier not in tier_names:
            warnings.append(f"Item '{iname}' ({iid}) has custom or non-standard tier '{tier}'")

    # Report
    print("=" * 65)
    print("  HELLOTALK DATABASE SCHEMA & INTEGRITY AUDIT")
    print("=" * 65)
    print(f" Catalog File:      {filepath}")
    print(f" Version:           {db.get('version', 'unknown')}")
    print(f" Total Categories:  {len(categories)}")
    print(f" Total Series:      {len(series_list)}")
    print(f" Total Gifts:       {len(items)}")
    print(f" Total Tiers:       {len(tiers)}")
    print("-" * 65)

    if warnings:
        print(f"ℹ️  Notice: {len(warnings)} non-standard tier warning(s):")
        for w in warnings[:5]:
            print(f"   • {w}")
        if len(warnings) > 5:
            print(f"   ... and {len(warnings) - 5} more.")

    if errors:
        print(f"\n❌ Validation FAILED with {len(errors)} error(s):")
        for err in errors[:10]:
            print(f"   • {err}")
        if len(errors) > 10:
            print(f"   ... and {len(errors) - 10} more.")
        print("=" * 65)
        return False

    print("✅ All integrity checks passed! Database is 100% compliant and ready.")
    print("=" * 65)
    return True

if __name__ == "__main__":
    success = validate_catalog()
    sys.exit(0 if success else 1)
