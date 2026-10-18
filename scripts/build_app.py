import json
import os

# Safely verify master seed data source or fallback cleanly to data/hellotalk-gifts.json
data_path = 'data/hellotalk-gifts.json'
backup_seed = 'data/template-seed.json'
raw_seed_source = '/storage/emulated/0/New file.txt'

if os.path.exists(data_path):
    with open(data_path, 'r', encoding='utf-8') as f:
        db = json.load(f)
elif os.path.exists(backup_seed):
    with open(backup_seed, 'r', encoding='utf-8') as f:
        db = json.load(f)
else:
    raise FileNotFoundError("Master seed database file not found.")

db_json = json.dumps(db, indent=2, ensure_ascii=False)

js_header = '''/**
 * ====================================================================
 * HELLOTALK DATABASE (V1.0.0) - MASTER ARCHITECTURAL APPLICATION ENGINE
 * Dedicated Series Master Catalog // Collected-Only Wall // Backpack Stock
 * Red Collection // Purple Luxury & Limited // Blue Featured // Indigo Collected
 * ====================================================================
 */

(() => {
  'use strict';

  const STORAGE_KEY = 'hellotalk_database_v3';
  const BATCH_SIZE = 60;

  const DEFAULT_SEED = '''

js_logic = ''';

  const DEFAULT_TAGS = [
    { key: 'wall', name: 'Wall', color: '#10b981', displayOrder: 1 },
    { key: 'series', name: 'Series', color: '#06b6d4', displayOrder: 2 },
    { key: 'backpack', name: 'Backpack', color: '#f43f5e', displayOrder: 3 }
  ];

  // ------------------------------------------------------------------
  // 1. STATE MANAGER (UNIFIED MASTER REPOSITORY)
  // ------------------------------------------------------------------
  class VaultState {
    constructor() {
      this.data = this.loadState();
      this.listeners = [];
    }

    loadState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed === 'object' && Array.isArray(parsed.items)) {
            const safeItems = parsed.items.map(item => {
              if (!item || typeof item !== 'object') return null;
              let notesVal = String(item.notes ?? '').trim();
              if (notesVal.includes(' > ') || notesVal.includes('coins).')) notesVal = '';
              const catId = String(item.categoryId ?? '').trim();
              const serId = String(item.seriesId ?? '').trim();
              const isWallOwned = typeof item.wallOwned === 'boolean' ? item.wallOwned : false;
              const rawQty = Math.max(0, Math.floor(Number(item.quantity) || 0));

              let itemTabs = Array.isArray(item.tabs) ? item.tabs.map(t => String(t).toLowerCase().trim()).filter(Boolean) : [];
              if (catId && serId && !itemTabs.includes('series')) {
                itemTabs.push('series');
              }
              if (isWallOwned && !itemTabs.includes('wall')) {
                itemTabs.push('wall');
              }
              if (rawQty > 0 && !itemTabs.includes('backpack')) {
                itemTabs.push('backpack');
              }
              itemTabs = [...new Set(itemTabs)];

              const finalWallOwned = isWallOwned || itemTabs.includes('wall');
              let finalQty = rawQty;
              if (itemTabs.includes('backpack') && finalQty === 0) {
                finalQty = 1;
              } else if (!itemTabs.includes('backpack') && finalQty > 0) {
                itemTabs.push('backpack');
              }

              return {
                id: String(item.id || '').trim(),
                categoryId: catId,
                seriesId: serId,
                name: String(item.name ?? '').trim(),
                baseValue: Math.max(0, Number(item.baseValue) || 0),
                marketWorth: Math.max(0, Number(item.marketWorth) || 0),
                quantity: finalQty,
                wallOwned: finalWallOwned,
                starred: typeof item.starred === 'boolean' ? item.starred : false,
                tier: String(item.tier || 'Standard').trim(),
                tabs: itemTabs,
                tags: Array.isArray(item.tags) ? item.tags.map(t => String(t).trim()).filter(Boolean) : [],
                notes: notesVal,
                updatedAt: Number(item.updatedAt) || Date.now()
              };
            }).filter(Boolean);

              const safeCategories = (Array.isArray(parsed.categories) ? parsed.categories : DEFAULT_SEED.categories).map(cat => {
                if (!cat || typeof cat !== 'object') return null;
                return {
                  id: String(cat.id || '').trim(),
                  name: String(cat.name || '').trim(),
                  order: Number(cat.order) || 1,
                  description: String(cat.description || '').trim()
                };
              }).filter(Boolean);

              const safeSeries = (Array.isArray(parsed.series) ? parsed.series : DEFAULT_SEED.series).map(ser => {
                if (!ser || typeof ser !== 'object') return null;
                return {
                  id: String(ser.id || '').trim(),
                  categoryId: String(ser.categoryId || '').trim(),
                  name: String(ser.name || '').trim(),
                  badge: String(ser.badge || '').trim(),
                  description: String(ser.description || '').trim(),
                  displayOrder: Number(ser.displayOrder ?? ser.order) || 1
                };
              }).filter(Boolean);

              const safeTiers = (Array.isArray(parsed.tiers) ? parsed.tiers : DEFAULT_SEED.tiers).map(t => {
                if (!t || typeof t !== 'object') return null;
                return {
                  id: String(t.id || '').trim(),
                  name: String(t.name || '').trim(),
                  color: String(t.color || '#e2e8f0').trim(),
                  bg: String(t.bg || 'rgba(226, 232, 240, 0.16)').trim(),
                  border: String(t.border || 'rgba(226, 232, 240, 0.35)').trim(),
                  rank: Number(t.rank) || 10,
                  displayOrder: Number(t.displayOrder ?? t.order) || 1,
                  description: String(t.description || '').trim()
                };
              }).filter(Boolean);

              let tags = DEFAULT_TAGS.map(t => ({ ...t }));
              if (parsed.themeConfig && typeof parsed.themeConfig === 'object') {
                if (Array.isArray(parsed.themeConfig.tags) && parsed.themeConfig.tags.length > 0) {
                  tags = DEFAULT_TAGS.map(def => {
                    const found = parsed.themeConfig.tags.find(t => t && t.key === def.key);
                    if (found) {
                      return {
                        key: def.key,
                        name: String(found.name || def.name).trim(),
                        color: String(found.color || def.color).trim(),
                        displayOrder: Number(found.displayOrder) || def.displayOrder
                      };
                    }
                    return { ...def };
                  }).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
                } else if (parsed.themeConfig.tagColors) {
                  tags.forEach(t => {
                    if (parsed.themeConfig.tagColors[t.key]) t.color = parsed.themeConfig.tagColors[t.key];
                  });
                }
              }
              const tagColors = {
                wall: tags.find(t => t.key === 'wall')?.color || '#10b981',
                series: tags.find(t => t.key === 'series')?.color || '#06b6d4',
                backpack: tags.find(t => t.key === 'backpack')?.color || '#f43f5e'
              };
              const themeConfig = { tags, tagColors };

              return {
                version: "1.0.0",
                lastExported: Number(parsed.lastExported) || Date.now(),
                categories: safeCategories,
                series: safeSeries,
                items: safeItems,
                tiers: safeTiers,
                themeConfig
              };
          }
        }
      } catch (err) {
        console.warn('HelloTalk Database: Error parsing localStorage, loading official seed.', err);
      }
      const seedCopy = JSON.parse(JSON.stringify(DEFAULT_SEED));
      if (!seedCopy.themeConfig) {
        seedCopy.themeConfig = {
          tags: DEFAULT_TAGS.map(t => ({ ...t })),
          tagColors: { wall: '#10b981', series: '#06b6d4', backpack: '#f43f5e' }
        };
      }
      return seedCopy;
    }

    getTags() {
      if (!this.data.themeConfig || !Array.isArray(this.data.themeConfig.tags)) {
        return DEFAULT_TAGS.map(t => ({ ...t }));
      }
      return [...this.data.themeConfig.tags].sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
    }

    getTag(key) {
      const tags = this.getTags();
      return tags.find(t => t.key === key) || DEFAULT_TAGS.find(t => t.key === key) || null;
    }

    getTagName(key) {
      const tag = this.getTag(key);
      return tag ? tag.name : (key.charAt(0).toUpperCase() + key.slice(1));
    }

    updateTag(key, updates = {}) {
      if (!this.data.themeConfig) this.data.themeConfig = {};
      if (!Array.isArray(this.data.themeConfig.tags)) {
        this.data.themeConfig.tags = DEFAULT_TAGS.map(t => ({ ...t }));
      }
      const tag = this.data.themeConfig.tags.find(t => t.key === key);
      if (tag) {
        if (updates.name !== undefined) tag.name = String(updates.name).trim();
        if (updates.color !== undefined) tag.color = String(updates.color).trim();
        if (updates.displayOrder !== undefined) tag.displayOrder = Number(updates.displayOrder);
      }
      if (!this.data.themeConfig.tagColors) this.data.themeConfig.tagColors = {};
      this.data.themeConfig.tags.forEach(t => {
        this.data.themeConfig.tagColors[t.key] = t.color;
      });
      this.saveState();
    }

    updateTagOrder(key, newOrder) {
      this.updateTag(key, { displayOrder: newOrder });
    }

    resetTags() {
      if (!this.data.themeConfig) this.data.themeConfig = {};
      this.data.themeConfig.tags = DEFAULT_TAGS.map(t => ({ ...t }));
      this.data.themeConfig.tagColors = {
        wall: '#10b981',
        series: '#06b6d4',
        backpack: '#f43f5e'
      };
      this.saveState();
    }

    getTagColors() {
      const defaults = { wall: '#10b981', series: '#06b6d4', backpack: '#f43f5e' };
      if (!this.data.themeConfig) return defaults;
      if (this.data.themeConfig.tagColors) {
        return {
          wall: this.data.themeConfig.tagColors.wall || defaults.wall,
          series: this.data.themeConfig.tagColors.series || defaults.series,
          backpack: this.data.themeConfig.tagColors.backpack || defaults.backpack
        };
      }
      return defaults;
    }

    setTagColor(tagKey, hexColor) {
      this.updateTag(tagKey, { color: hexColor });
    }

    resetTagColors() {
      this.resetTags();
    }

    saveState() {
      this.data.lastExported = Date.now();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      this.notify();
    }

    save() {
      this.saveState();
    }

    notify() {
      this.listeners.forEach(fn => fn(this.data));
    }

    subscribe(fn) {
      this.listeners.push(fn);
    }

    uid(prefix = 'id') {
      return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).substr(2, 6)}`;
    }

    // Item Operations
    getItem(id) {
      return this.data.items.find(i => i.id === id);
    }

    addItem(itemData) {
      const id = this.uid('item');
      const catId = (itemData.categoryId || '').trim();
      const serId = (itemData.seriesId || '').trim();
      let itemTabs = Array.isArray(itemData.tabs) ? itemData.tabs.map(t => String(t).toLowerCase().trim()).filter(Boolean) : [];
      if (catId && serId && !itemTabs.includes('series')) {
        itemTabs.push('series');
      }
      if (itemData.wallOwned && !itemTabs.includes('wall')) {
        itemTabs.push('wall');
      }
      if ((Number(itemData.quantity) || 0) > 0 && !itemTabs.includes('backpack')) {
        itemTabs.push('backpack');
      }
      if (itemTabs.length === 0) {
        if (catId && serId) itemTabs.push('series');
        else itemTabs.push('backpack');
      }
      itemTabs = [...new Set(itemTabs)];
      const wallOwned = itemTabs.includes('wall') || !!itemData.wallOwned;
      let qty = 0;
      if (itemTabs.includes('backpack')) {
        qty = Math.max(1, Math.floor(Number(itemData.quantity) || 0));
      }

      const newItem = {
        id,
        categoryId: catId,
        seriesId: serId,
        name: (itemData.name || '').trim(),
        baseValue: Math.max(0, Number(itemData.baseValue) || 0),
        marketWorth: Math.max(0, Number(itemData.marketWorth) || 0),
        quantity: qty,
        wallOwned,
        starred: !!itemData.starred,
        tier: (itemData.tier || 'Standard').trim(),
        tabs: itemTabs,
        tags: Array.isArray(itemData.tags) ? itemData.tags : [],
        notes: (itemData.notes || '').trim(),
        updatedAt: Date.now()
      };
      // Prepend to top of master items array
      this.data.items.unshift(newItem);
      this.saveState();
      return newItem;
    }

    updateItem(id, itemData) {
      const idx = this.data.items.findIndex(i => i.id === id);
      if (idx !== -1) {
        const cur = this.data.items[idx];
        const catId = (itemData.categoryId !== undefined ? itemData.categoryId : cur.categoryId).trim();
        const serId = (itemData.seriesId !== undefined ? itemData.seriesId : cur.seriesId).trim();
        let itemTabs = Array.isArray(itemData.tabs) ? itemData.tabs.map(t => String(t).toLowerCase().trim()).filter(Boolean) : [...(cur.tabs || [])];
        if (catId && serId && !itemTabs.includes('series')) {
          itemTabs.push('series');
        }
        itemTabs = [...new Set(itemTabs)];

        const wallOwned = itemTabs.includes('wall') || (itemData.wallOwned !== undefined ? !!itemData.wallOwned : !!cur.wallOwned);
        let qty = 0;
        if (itemTabs.includes('backpack')) {
          const reqQty = Number(itemData.quantity !== undefined ? itemData.quantity : cur.quantity);
          qty = reqQty > 0 ? Math.floor(reqQty) : 1;
        }

        this.data.items[idx] = {
          ...cur,
          categoryId: catId,
          seriesId: serId,
          name: (itemData.name !== undefined ? itemData.name : cur.name).trim(),
          baseValue: Math.max(0, Number(itemData.baseValue !== undefined ? itemData.baseValue : cur.baseValue) || 0),
          marketWorth: Math.max(0, Number(itemData.marketWorth !== undefined ? itemData.marketWorth : cur.marketWorth) || 0),
          quantity: qty,
          wallOwned,
          starred: itemData.starred !== undefined ? !!itemData.starred : !!cur.starred,
          tier: (itemData.tier || cur.tier || 'Standard').trim(),
          tabs: itemTabs,
          tags: Array.isArray(itemData.tags) ? itemData.tags : cur.tags,
          notes: (itemData.notes !== undefined ? itemData.notes : cur.notes || '').trim(),
          updatedAt: Date.now()
        };
        this.saveState();
        return this.data.items[idx];
      }
      return null;
    }

    deleteItem(id) {
      const idx = this.data.items.findIndex(i => i.id === id);
      if (idx !== -1) {
        const removed = this.data.items.splice(idx, 1)[0];
        this.saveState();
        return removed;
      }
      return null;
    }

    toggleWallOwned(id) {
      const item = this.getItem(id);
      if (item) {
        if (!Array.isArray(item.tabs)) item.tabs = [];
        item.wallOwned = !item.wallOwned;
        if (item.wallOwned) {
          if (!item.tabs.includes('wall')) item.tabs.push('wall');
        } else {
          item.tabs = item.tabs.filter(t => t !== 'wall');
        }
        item.updatedAt = Date.now();
        this.saveState();
        return item.wallOwned;
      }
      return false;
    }

    incrementQuantity(id, delta) {
      const item = this.getItem(id);
      if (item) {
        if (!Array.isArray(item.tabs)) item.tabs = [];
        item.quantity = Math.max(0, (item.quantity || 0) + delta);
        if (item.quantity === 0) {
          item.tabs = item.tabs.filter(t => t !== 'backpack');
        } else {
          if (!item.tabs.includes('backpack')) item.tabs.push('backpack');
        }
        item.updatedAt = Date.now();
        this.saveState();
      }
    }

    toggleStarred(id) {
      const item = this.getItem(id);
      if (item) {
        item.starred = !item.starred;
        item.updatedAt = Date.now();
        this.saveState();
        return item.starred;
      }
      return false;
    }

    toggleItemTab(id, tabName) {
      const item = this.getItem(id);
      if (!item) return { success: false, reason: 'Gift not found' };
      if (!Array.isArray(item.tabs)) {
        item.tabs = [];
        if (item.categoryId && item.seriesId) item.tabs.push('series');
        if (item.wallOwned) item.tabs.push('wall');
        if ((Number(item.quantity) || 0) > 0) item.tabs.push('backpack');
      }
      const t = String(tabName || '').toLowerCase().trim();
      const hasTab = item.tabs.includes(t);
      if (hasTab) {
        item.tabs = item.tabs.filter(x => x !== t);
        if (t === 'wall') item.wallOwned = false;
        if (t === 'backpack') item.quantity = 0;
      } else {
        if (t === 'series') {
          if (!item.categoryId || !item.seriesId || !this.getSeries(item.seriesId)) {
            return { success: false, reason: 'Series tab requires a valid Category and Series. Assign them in Edit Gift.' };
          }
        }
        item.tabs.push(t);
        if (t === 'wall') item.wallOwned = true;
        if (t === 'backpack') {
          item.quantity = Math.max(1, item.quantity || 1);
        }
      }
      item.updatedAt = Date.now();
      this.saveState();
      return { success: true, added: !hasTab };
    }

    // Category Operations
    getCategory(id) {
      if (!id) return null;
      return this.data.categories.find(c => c.id === id);
    }

    addCategory(catData) {
      const id = this.uid('cat');
      const order = Number(catData.order) || (this.data.categories.length + 1);
      const newCat = {
        id,
        name: catData.name.trim(),
        order,
        description: (catData.description || '').trim()
      };
      this.data.categories.push(newCat);
      this.saveState();
      return newCat;
    }

    updateCategory(id, catData) {
      const cat = this.getCategory(id);
      if (cat) {
        cat.name = catData.name.trim();
        if (catData.order !== undefined) cat.order = Number(catData.order);
        if (catData.description !== undefined) cat.description = (catData.description || '').trim();
        this.saveState();
      }
    }

    deleteCategory(id) {
      this.data.categories = this.data.categories.filter(c => c.id !== id);
      this.data.series.forEach(s => {
        if (s.categoryId === id) s.categoryId = '';
      });
      this.data.items.forEach(i => {
        if (i.categoryId === id) {
          i.categoryId = '';
          i.seriesId = '';
        }
      });
      this.saveState();
    }

    // Series Operations
    getSeries(id) {
      if (!id) return null;
      return this.data.series.find(s => s.id === id);
    }

    addSeries(seriesData) {
      const id = this.uid('ser');
      const displayOrder = Number(seriesData.displayOrder) || (this.data.series.length + 1);
      const newSeries = {
        id,
        categoryId: seriesData.categoryId || '',
        name: seriesData.name.trim(),
        badge: (seriesData.badge || '').trim(),
        description: (seriesData.description || '').trim(),
        displayOrder
      };
      this.data.series.push(newSeries);
      this.saveState();
      return newSeries;
    }

    updateSeries(id, seriesData) {
      const ser = this.getSeries(id);
      if (ser) {
        ser.categoryId = seriesData.categoryId || '';
        ser.name = seriesData.name.trim();
        ser.badge = (seriesData.badge || '').trim();
        ser.description = (seriesData.description || '').trim();
        if (seriesData.displayOrder !== undefined) ser.displayOrder = Number(seriesData.displayOrder);
        this.saveState();
      }
    }

    deleteSeries(id) {
      this.data.series = this.data.series.filter(s => s.id !== id);
      this.data.items.forEach(i => {
        if (i.seriesId === id) i.seriesId = '';
      });
      this.saveState();
    }

    // Tier Operations (CRUD & Color Management)
    getTier(idOrName) {
      if (!idOrName || !this.data.tiers) return null;
      const clean = String(idOrName).toLowerCase().trim();
      return this.data.tiers.find(t => (t.id && t.id.toLowerCase() === clean) || (t.name && t.name.toLowerCase() === clean));
    }

    addTier(tierData) {
      const id = this.uid('tier');
      const rank = Number(tierData.rank) || 10;
      const displayOrder = Number(tierData.displayOrder) || (this.data.tiers ? this.data.tiers.length + 1 : 1);
      const description = (tierData.description || '').trim();
      const color = (tierData.color || '#e2e8f0').trim();
      const rgb = this.hexToRgb(color);
      const newTier = {
        id,
        name: tierData.name.trim(),
        color,
        bg: tierData.bg || `rgba(${rgb}, 0.16)`,
        border: tierData.border || `rgba(${rgb}, 0.35)`,
        rank,
        displayOrder,
        description
      };
      if (!this.data.tiers) this.data.tiers = [];
      this.data.tiers.push(newTier);
      this.saveState();
      return newTier;
    }

    updateTier(id, tierData) {
      const tier = this.getTier(id);
      if (tier) {
        tier.name = tierData.name.trim();
        if (tierData.color) {
          tier.color = tierData.color.trim();
          const rgb = this.hexToRgb(tier.color);
          tier.bg = tierData.bg || `rgba(${rgb}, 0.16)`;
          tier.border = tierData.border || `rgba(${rgb}, 0.35)`;
        }
        if (tierData.rank !== undefined) tier.rank = Number(tierData.rank);
        if (tierData.displayOrder !== undefined) tier.displayOrder = Number(tierData.displayOrder);
        if (tierData.description !== undefined) tier.description = (tierData.description || '').trim();
        this.saveState();
        return tier;
      }
      return null;
    }

    deleteTier(id) {
      const tier = this.getTier(id);
      if (!tier) return;
      const deletedName = tier.name;
      this.data.tiers = this.data.tiers.filter(t => t.id !== tier.id);
      // Revert items with this deleted tier to Standard
      this.data.items.forEach(i => {
        if (i.tier && i.tier.toLowerCase() === deletedName.toLowerCase()) {
          i.tier = 'Standard';
        }
      });
      this.saveState();
    }

    hexToRgb(hex) {
      const clean = (hex || '').replace('#', '');
      if (clean.length === 3) {
        const r = parseInt(clean[0] + clean[0], 16) || 226;
        const g = parseInt(clean[1] + clean[1], 16) || 232;
        const b = parseInt(clean[2] + clean[2], 16) || 240;
        return `${r}, ${g}, ${b}`;
      }
      if (clean.length === 6) {
        const r = parseInt(clean.substring(0, 2), 16) || 226;
        const g = parseInt(clean.substring(2, 4), 16) || 232;
        const b = parseInt(clean.substring(4, 6), 16) || 240;
        return `${r}, ${g}, ${b}`;
      }
      return '226, 232, 240';
    }

    wipeAll() {
      const savedTheme = this.data.themeConfig;
      this.data = JSON.parse(JSON.stringify(DEFAULT_SEED));
      this.data.version = "1.0.0";
      if (savedTheme) {
        this.data.themeConfig = savedTheme;
      }
      this.saveState();
    }

    importData(importedData) {
      if (!importedData || typeof importedData !== 'object' || !Array.isArray(importedData.items)) {
        throw new Error('Invalid JSON structure. Missing items array.');
      }
      const safeItems = importedData.items.map(item => {
        if (!item || typeof item !== 'object') return null;
        let notesVal = String(item.notes ?? '').trim();
        if (notesVal.includes(' > ') || notesVal.includes('coins).')) notesVal = '';
        const catId = String(item.categoryId ?? '').trim();
        const serId = String(item.seriesId ?? '').trim();
        const isWallOwned = typeof item.wallOwned === 'boolean' ? item.wallOwned : false;
        const rawQty = Math.max(0, Math.floor(Number(item.quantity) || 0));

        let itemTabs = Array.isArray(item.tabs) ? item.tabs.map(t => String(t).toLowerCase().trim()).filter(Boolean) : [];
        if (catId && serId && !itemTabs.includes('series')) {
          itemTabs.push('series');
        }
        if (isWallOwned && !itemTabs.includes('wall')) {
          itemTabs.push('wall');
        }
        if (rawQty > 0 && !itemTabs.includes('backpack')) {
          itemTabs.push('backpack');
        }
        itemTabs = [...new Set(itemTabs)];

        const finalWallOwned = isWallOwned || itemTabs.includes('wall');
        let finalQty = rawQty;
        if (itemTabs.includes('backpack') && finalQty === 0) {
          finalQty = 1;
        } else if (!itemTabs.includes('backpack') && finalQty > 0) {
          itemTabs.push('backpack');
        }

        return {
          id: String(item.id || this.uid('item')).trim(),
          categoryId: catId,
          seriesId: serId,
          name: String(item.name ?? '').trim(),
          baseValue: Math.max(0, Number(item.baseValue) || 0),
          marketWorth: Math.max(0, Number(item.marketWorth) || 0),
          quantity: finalQty,
          wallOwned: finalWallOwned,
          starred: typeof item.starred === 'boolean' ? item.starred : false,
          tier: String(item.tier || 'Standard').trim(),
          tabs: itemTabs,
          tags: Array.isArray(item.tags) ? item.tags.map(t => String(t).trim()).filter(Boolean) : [],
          notes: notesVal,
          updatedAt: Number(item.updatedAt) || Date.now()
        };
      }).filter(Boolean);

      const safeCategories = (Array.isArray(importedData.categories) ? importedData.categories : this.data.categories).map(cat => {
        if (!cat || typeof cat !== 'object') return null;
        return {
          id: String(cat.id || this.uid('cat')).trim(),
          name: String(cat.name || '').trim(),
          order: Number(cat.order) || 1,
          description: String(cat.description || '').trim()
        };
      }).filter(Boolean);

      const safeSeries = (Array.isArray(importedData.series) ? importedData.series : this.data.series).map(ser => {
        if (!ser || typeof ser !== 'object') return null;
        return {
          id: String(ser.id || this.uid('ser')).trim(),
          categoryId: String(ser.categoryId || '').trim(),
          name: String(ser.name || '').trim(),
          badge: String(ser.badge || '').trim(),
          description: String(ser.description || '').trim(),
          displayOrder: Number(ser.displayOrder ?? ser.order) || 1
        };
      }).filter(Boolean);

      const safeTiers = (Array.isArray(importedData.tiers) ? importedData.tiers : this.data.tiers).map(t => {
        if (!t || typeof t !== 'object') return null;
        const color = String(t.color || '#e2e8f0').trim();
        const rgb = this.hexToRgb(color);
        return {
          id: String(t.id || this.uid('tier')).trim(),
          name: String(t.name || '').trim(),
          color,
          bg: String(t.bg || `rgba(${rgb}, 0.16)`).trim(),
          border: String(t.border || `rgba(${rgb}, 0.35)`).trim(),
          rank: Number(t.rank) || 10,
          displayOrder: Number(t.displayOrder ?? t.order) || 1,
          description: String(t.description || '').trim()
        };
      }).filter(Boolean);

      let themeConfig = {
        tags: DEFAULT_TAGS.map(t => ({ ...t })),
        tagColors: { wall: '#10b981', series: '#06b6d4', backpack: '#f43f5e' }
      };
      if (importedData.themeConfig && typeof importedData.themeConfig === 'object') {
        if (Array.isArray(importedData.themeConfig.tags)) {
          themeConfig.tags = importedData.themeConfig.tags;
        }
        if (importedData.themeConfig.tagColors) {
          themeConfig.tagColors = importedData.themeConfig.tagColors;
        }
      } else if (this.data.themeConfig) {
        themeConfig = this.data.themeConfig;
      }

      this.data = {
        version: "1.0.0",
        lastExported: Date.now(),
        categories: safeCategories,
        series: safeSeries,
        items: safeItems,
        tiers: safeTiers,
        themeConfig
      };
      this.saveState();
    }
  }

  // ------------------------------------------------------------------
  // 2. CONTROLLER & PRESENTATION LAYER
  // ------------------------------------------------------------------
  class HelloTalkApp {
    constructor() {
      this.state = new VaultState();

      // Active Navigation Tab: Persisted in localStorage
      const validTabs = ['tab-backpack', 'tab-series', 'tab-wall', 'tab-portfolio'];
      let savedTab = null;
      try {
        savedTab = localStorage.getItem('hellotalk_active_tab');
      } catch (e) {}
      this.currentTab = (savedTab && validTabs.includes(savedTab)) ? savedTab : 'tab-backpack';

      // Unified Global Search (Synchronized across all tabs)
      this.globalSearchQuery = '';

      // Tab 1: Backpack Inventory Filter State (Default Active Tab)
      this.bpStatusFilter = 'all'; // all, in-stock, exchange-needed, starred, extras
      this.bpSelectedCategory = '';
      this.bpSelectedSeries = '';
      this.bpSelectedTier = '';
      this.bpSortMethod = 'worth-desc';
      this.bpRenderedCount = BATCH_SIZE;

      // Tab 2: Series Master Catalog Filter State
      this.seriesStatusFilter = 'all'; // all, collected, missing, in-stock
      this.seriesSelectedCategory = '';
      this.seriesSelectedSeries = '';
      this.seriesSelectedTier = '';
      this.seriesSortMethod = 'coins-desc';
      this.seriesRenderedCount = BATCH_SIZE;
      this.focusedSeriesId = null;

      // Tab 3: Wall Collected Gallery Filter State
      this.wallStatusFilter = 'all'; // all, starred
      this.wallSelectedCategory = '';
      this.wallSelectedSeries = '';
      this.wallSelectedTier = '';
      this.wallSortMethod = 'coins-desc';
      this.wallRenderedCount = BATCH_SIZE;

      this.pendingConfirmAction = null;

      this.initDomReferences();
      this.applyThemeColors();
      this.bindEvents();

      // Synchronize active tab state from storage
      this.switchTab(this.currentTab, false);

      this.state.subscribe(() => {
        this.renderAll();
        this.applyThemeColors();
      });

      this.renderAll();
      this.setupBatchObservers();
    }

    initDomReferences() {
      // Global Search
      this.globalSearchInput = document.getElementById('globalSearchInput');
      this.globalClearSearchBtn = document.getElementById('globalClearSearchBtn');

      // Navigation Dock
      this.navTabButtons = document.querySelectorAll('.dock-item');
      this.tabPanes = document.querySelectorAll('.tab-pane');

      // ----------------------------------------------------------------
      // Tab 1: Backpack Inventory References
      // ----------------------------------------------------------------
      this.bpTotalUnits = document.getElementById('bpTotalUnits');
      this.bpUniqueItems = document.getElementById('bpUniqueItems');
      this.bpMarketWorth = document.getElementById('bpMarketWorth');
      this.bpBaseWorth = document.getElementById('bpBaseWorth');
      this.bpProfitSpread = document.getElementById('bpProfitSpread');
      this.bpExchangeMarkerCount = document.getElementById('bpExchangeMarkerCount');

      this.bpStatusPills = document.getElementById('bpStatusPills');
      this.bpCountAll = document.getElementById('bpCountAll');
      this.bpCountInStock = document.getElementById('bpCountInStock');
      this.bpCountExchange = document.getElementById('bpCountExchange');
      this.bpCountStarred = document.getElementById('bpCountStarred');
      this.bpCountExtras = document.getElementById('bpCountExtras');
      this.bpTierPills = document.getElementById('bpTierPills');

      this.bpFilterCategory = document.getElementById('bpFilterCategory');
      this.bpFilterSeries = document.getElementById('bpFilterSeries');
      this.bpFilterTier = document.getElementById('bpFilterTier');
      this.bpSortBy = document.getElementById('bpSortBy');
      this.bpResetFiltersBtn = document.getElementById('bpResetFiltersBtn');
      this.bpResultsCount = document.getElementById('bpResultsCount');
      this.bpResultsAggregate = document.getElementById('bpResultsAggregate');
      this.backpackGrid = document.getElementById('backpackGrid');
      this.bpScrollSentinel = document.getElementById('bpScrollSentinel');

      // ----------------------------------------------------------------
      // Tab 2: Series Master Catalog References
      // ----------------------------------------------------------------
      this.seriesTotalGifts = document.getElementById('seriesTotalGifts');
      this.seriesTotalCount = document.getElementById('seriesTotalCount');
      this.seriesWallProgressRatio = document.getElementById('seriesWallProgressRatio');
      this.seriesWallProgressBar = document.getElementById('seriesWallProgressBar');
      this.seriesWallProgressPercent = document.getElementById('seriesWallProgressPercent');
      this.seriesCompleteRatio = document.getElementById('seriesCompleteRatio');
      this.seriesCompleteBar = document.getElementById('seriesCompleteBar');
      this.seriesCompletePercent = document.getElementById('seriesCompletePercent');

      this.seriesFilterHub = document.getElementById('seriesFilterHub');
      this.seriesStatusPills = document.getElementById('seriesStatusPills');
      this.seriesCountAll = document.getElementById('seriesCountAll');
      this.seriesCountCollected = document.getElementById('seriesCountCollected');
      this.seriesCountMissing = document.getElementById('seriesCountMissing');
      this.seriesCountInStock = document.getElementById('seriesCountInStock');
      this.seriesTierPills = document.getElementById('seriesTierPills');

      this.seriesFilterCategory = document.getElementById('seriesFilterCategory');
      this.seriesFilterSeries = document.getElementById('seriesFilterSeries');
      this.seriesFilterTier = document.getElementById('seriesFilterTier');
      this.seriesSortBy = document.getElementById('seriesSortBy');
      this.seriesResetFiltersBtn = document.getElementById('seriesResetFiltersBtn');
      this.seriesResultsCount = document.getElementById('seriesResultsCount');
      this.seriesResultsAggregate = document.getElementById('seriesResultsAggregate');

      this.seriesGiftsContainer = document.getElementById('seriesGiftsContainer');
      this.seriesGiftsGrid = document.getElementById('seriesGiftsGrid');
      this.seriesScrollSentinel = document.getElementById('seriesScrollSentinel');

      this.seriesDrillDownView = document.getElementById('seriesDrillDownView');
      this.backToSeriesListBtn = document.getElementById('backToSeriesListBtn');
      this.drillCategoryCrumb = document.getElementById('drillCategoryCrumb');
      this.drillSeriesTitle = document.getElementById('drillSeriesTitle');
      this.drillSeriesDesc = document.getElementById('drillSeriesDesc');
      this.drillSeriesBadge = document.getElementById('drillSeriesBadge');
      this.drillProgressText = document.getElementById('drillProgressText');
      this.drillUnitsText = document.getElementById('drillUnitsText');
      this.drillProgressBar = document.getElementById('drillProgressBar');
      this.drillGiftsCountTitle = document.getElementById('drillGiftsCountTitle');
      this.drillGiftsGrid = document.getElementById('drillGiftsGrid');

      // ----------------------------------------------------------------
      // Tab 3: Wall Collected Gallery References
      // ----------------------------------------------------------------
      this.wallCollectedTotal = document.getElementById('wallCollectedTotal');
      this.wallBaseTotal = document.getElementById('wallBaseTotal');
      this.wallMarketTotal = document.getElementById('wallMarketTotal');

      this.wallStatusPills = document.getElementById('wallStatusPills');
      this.wallCountCollectedOnly = document.getElementById('wallCountCollectedOnly');
      this.wallCountStarredOnly = document.getElementById('wallCountStarredOnly');
      this.wallTierPills = document.getElementById('wallTierPills');

      this.wallFilterCategory = document.getElementById('wallFilterCategory');
      this.wallFilterSeries = document.getElementById('wallFilterSeries');
      this.wallFilterTier = document.getElementById('wallFilterTier');
      this.wallSortBy = document.getElementById('wallSortBy');
      this.wallResetFiltersBtn = document.getElementById('wallResetFiltersBtn');
      this.wallResultsCount = document.getElementById('wallResultsCount');
      this.wallResultsAggregate = document.getElementById('wallResultsAggregate');
      this.wallGrid = document.getElementById('wallGrid');
      this.wallScrollSentinel = document.getElementById('wallScrollSentinel');

      // ----------------------------------------------------------------
      // Tab 4: Portfolio & Studio References
      // ----------------------------------------------------------------
      this.ledgerTierTableBody = document.getElementById('ledgerTierTableBody');
      this.ledgerSeriesTableBody = document.getElementById('ledgerSeriesTableBody');
      this.catTotalCount = document.getElementById('catTotalCount');
      this.serTotalCount = document.getElementById('serTotalCount');
      this.categoryManagerList = document.getElementById('categoryManagerList');
      this.seriesManagerList = document.getElementById('seriesManagerList');
      this.addCategoryBtn = document.getElementById('addCategoryBtn');
      this.addSeriesBtn = document.getElementById('addSeriesBtn');
      this.addTierBtn = document.getElementById('addTierBtn');
      this.tierTotalCount = document.getElementById('tierTotalCount');
      this.tierManagerList = document.getElementById('tierManagerList');
      this.exportDataBtn = document.getElementById('exportDataBtn');
      this.importFileInput = document.getElementById('importFileInput');
      this.wipeDataBtn = document.getElementById('wipeDataBtn');

      // Duplicate Detection and Integrity Tools
      this.editItemDuplicateAlert = document.getElementById('editItemDuplicateAlert');
      this.duplicateWarningText = document.getElementById('duplicateWarningText');
      this.duplicateLoadExistingBtn = document.getElementById('duplicateLoadExistingBtn');
      this.scanDuplicatesBtn = document.getElementById('scanDuplicatesBtn');
      this.duplicateAuditResults = document.getElementById('duplicateAuditResults');

      // GitHub Cloud Synchronization
      this.ghSyncStatusBadge = document.getElementById('ghSyncStatusBadge');
      this.ghLastSyncTime = document.getElementById('ghLastSyncTime');
      this.ghPatInput = document.getElementById('ghPatInput');
      this.ghSaveTokenBtn = document.getElementById('ghSaveTokenBtn');
      this.ghClearTokenBtn = document.getElementById('ghClearTokenBtn');
      this.ghPushBtn = document.getElementById('ghPushBtn');
      this.ghPullBtn = document.getElementById('ghPullBtn');

      // ----------------------------------------------------------------
      // Modals
      // ----------------------------------------------------------------
      this.itemModal = document.getElementById('itemModal');
      this.itemModalTitle = document.getElementById('itemModalTitle');
      this.editItemForm = document.getElementById('editItemForm');
      this.editItemId = document.getElementById('editItemId');
      this.editItemCategory = document.getElementById('editItemCategory');
      this.editItemSeries = document.getElementById('editItemSeries');
      this.editItemName = document.getElementById('editItemName');
      this.editItemBaseValue = document.getElementById('editItemBaseValue');
      this.editItemMarketWorth = document.getElementById('editItemMarketWorth');
      this.editItemQuantity = document.getElementById('editItemQuantity');
      this.editItemTabsPresets = document.getElementById('editItemTabsPresets');
      this.editItemStarred = document.getElementById('editItemStarred');
      this.editItemTier = document.getElementById('editItemTier');
      this.editItemTierPresets = document.getElementById('editItemTierPresets');
      this.modalDeleteBtn = document.getElementById('modalDeleteBtn');

      this.categoryModal = document.getElementById('categoryModal');
      this.catModalTitle = document.getElementById('catModalTitle');
      this.categoryForm = document.getElementById('categoryForm');
      this.catModalId = document.getElementById('catModalId');
      this.catModalName = document.getElementById('catModalName');
      this.catModalOrder = document.getElementById('catModalOrder');
      this.catModalDesc = document.getElementById('catModalDesc');
      this.catModalDeleteBtn = document.getElementById('catModalDeleteBtn');

      this.seriesModal = document.getElementById('seriesModal');
      this.serModalTitle = document.getElementById('serModalTitle');
      this.seriesForm = document.getElementById('seriesForm');
      this.serModalId = document.getElementById('serModalId');
      this.serModalCategory = document.getElementById('serModalCategory');
      this.serModalName = document.getElementById('serModalName');
      this.serModalOrder = document.getElementById('serModalOrder');
      this.serModalBadge = document.getElementById('serModalBadge');
      this.serModalDesc = document.getElementById('serModalDesc');
      this.serModalDeleteBtn = document.getElementById('serModalDeleteBtn');

      this.tierModal = document.getElementById('tierModal');
      this.tierModalTitle = document.getElementById('tierModalTitle');
      this.tierForm = document.getElementById('tierForm');
      this.tierModalId = document.getElementById('tierModalId');
      this.tierModalName = document.getElementById('tierModalName');
      this.tierModalRank = document.getElementById('tierModalRank');
      this.tierModalOrder = document.getElementById('tierModalOrder');
      this.tierModalDesc = document.getElementById('tierModalDesc');
      this.tierColorPalettePresets = document.getElementById('tierColorPalettePresets');
      this.tierModalColorPicker = document.getElementById('tierModalColorPicker');
      this.tierModalColorHex = document.getElementById('tierModalColorHex');
      this.tierModalPreviewBadge = document.getElementById('tierModalPreviewBadge');
      this.tierModalDeleteBtn = document.getElementById('tierModalDeleteBtn');

      this.confirmModal = document.getElementById('confirmModal');
      this.confirmModalTitle = document.getElementById('confirmModalTitle');
      this.confirmModalMessage = document.getElementById('confirmModalMessage');
      this.confirmAcceptBtn = document.getElementById('confirmAcceptBtn');
      this.confirmCancelBtn = document.getElementById('confirmCancelBtn');

      this.toastContainer = document.getElementById('toastContainer');

      // Tag and Series Management
      this.tagTotalCount = document.getElementById('tagTotalCount');
      this.tagManagerList = document.getElementById('tagManagerList');
      this.resetTagManagerBtn = document.getElementById('resetTagManagerBtn');

      // Tag Modal
      this.tagModal = document.getElementById('tagModal');
      this.tagModalTitle = document.getElementById('tagModalTitle');
      this.tagForm = document.getElementById('tagForm');
      this.tagModalKey = document.getElementById('tagModalKey');
      this.tagModalName = document.getElementById('tagModalName');
      this.tagColorPalettePresets = document.getElementById('tagColorPalettePresets');
      this.tagModalColorPicker = document.getElementById('tagModalColorPicker');
      this.tagModalColorHex = document.getElementById('tagModalColorHex');
      this.tagModalPreviewBadge = document.getElementById('tagModalPreviewBadge');
    }

    applyThemeColors() {
      const colors = this.state.getTagColors();
      const wallColor = colors.wall || '#10b981';
      const seriesColor = colors.series || '#06b6d4';
      const backpackColor = colors.backpack || '#f43f5e';

      document.documentElement.style.setProperty('--tag-wall-color', wallColor);
      document.documentElement.style.setProperty('--tag-series-color', seriesColor);
      document.documentElement.style.setProperty('--tag-backpack-color', backpackColor);
    }

    bindEvents() {
      // Bottom Dock Navigation
      this.navTabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.dataset.tab) {
            this.switchTab(btn.dataset.tab);
          }
        });
      });

      // Primary Navigation Row Add Gift Action (+ New Gift next to search bar)
      const addGiftBtn = document.getElementById('navAddGiftBtn');
      if (addGiftBtn) {
        addGiftBtn.addEventListener('click', () => {
          this.openNewItemModal();
        });
      }

      // Universal Modal Delete Handlers (Destructive actions moved exclusively inside modals)
      if (this.modalDeleteBtn) {
        this.modalDeleteBtn.addEventListener('click', () => {
          this.handleDeleteItem();
        });
      }

      if (this.catModalDeleteBtn) {
        this.catModalDeleteBtn.addEventListener('click', () => {
          const id = this.catModalId.value;
          if (!id) return;
          const cat = this.state.getCategory(id);
          const name = cat ? cat.name : 'this category';
          this.confirmAction(
            'Confirm Delete Category',
            `Are you sure you want to delete category "${name}"? Series inside will become standalone.`,
            () => {
              this.state.deleteCategory(id);
              this.closeModal('categoryModal');
              this.showToast(`Deleted category "${name}"`);
            }
          );
        });
      }

      if (this.serModalDeleteBtn) {
        this.serModalDeleteBtn.addEventListener('click', () => {
          const id = this.serModalId.value;
          if (!id) return;
          const ser = this.state.getSeries(id);
          const name = ser ? ser.name : 'this series';
          this.confirmAction(
            'Confirm Delete Series',
            `Are you sure you want to delete series "${name}"? Gifts inside will become standalone.`,
            () => {
              this.state.deleteSeries(id);
              this.closeModal('seriesModal');
              this.showToast(`Deleted series "${name}"`);
            }
          );
        });
      }

      if (this.tierModalDeleteBtn) {
        this.tierModalDeleteBtn.addEventListener('click', () => {
          this.handleDeleteTier();
        });
      }

      if (this.tierForm) {
        this.tierForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleSaveTier();
        });
      }

      if (this.tierModalColorPicker && this.tierModalColorHex) {
        this.tierModalColorPicker.addEventListener('input', (e) => {
          this.tierModalColorHex.value = e.target.value;
          this.updateTierModalPreview();
        });
        this.tierModalColorHex.addEventListener('input', (e) => {
          const val = e.target.value.trim();
          if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
            this.tierModalColorPicker.value = val;
            this.updateTierModalPreview();
          }
        });
      }

      if (this.tierModalName) {
        this.tierModalName.addEventListener('input', () => {
          this.updateTierModalPreview();
        });
      }

      // Unified Global Search across all tabs
      let searchDebounceTimer;
      this.globalSearchInput.addEventListener('input', (e) => {
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => {
          this.globalSearchQuery = e.target.value.trim().toLowerCase();
          this.globalClearSearchBtn.style.display = this.globalSearchQuery ? 'block' : 'none';
          this.seriesRenderedCount = BATCH_SIZE;
          this.wallRenderedCount = BATCH_SIZE;
          this.bpRenderedCount = BATCH_SIZE;
          this.renderActiveTab();
        }, 120);
      });

      this.globalClearSearchBtn.addEventListener('click', () => {
        this.globalSearchInput.value = '';
        this.globalSearchQuery = '';
        this.globalClearSearchBtn.style.display = 'none';
        this.seriesRenderedCount = BATCH_SIZE;
        this.wallRenderedCount = BATCH_SIZE;
        this.bpRenderedCount = BATCH_SIZE;
        this.renderActiveTab();
      });

      // ----------------------------------------------------------------
      // Tab: Series Master Catalog Events
      // ----------------------------------------------------------------
      this.backToSeriesListBtn.addEventListener('click', () => {
        this.focusedSeriesId = null;
        this.seriesDrillDownView.style.display = 'none';
        this.seriesGiftsContainer.style.display = 'block';
        this.seriesFilterHub.style.display = 'flex';
        this.renderSeriesTab();
      });

      this.seriesStatusPills.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-chip');
        if (!btn || !btn.dataset.seriesStatus) return;
        this.seriesStatusFilter = btn.dataset.seriesStatus;
        this.seriesStatusPills.querySelectorAll('.filter-chip').forEach(b => {
          b.classList.toggle('active', b.dataset.seriesStatus === this.seriesStatusFilter);
        });
        this.seriesRenderedCount = BATCH_SIZE;
        this.renderSeriesTab();
      });

      this.seriesFilterCategory.addEventListener('change', () => {
        this.seriesSelectedCategory = this.seriesFilterCategory.value;
        this.updateSeriesDropdownFilter();
        this.seriesRenderedCount = BATCH_SIZE;
        this.renderSeriesTab();
      });

      this.seriesFilterSeries.addEventListener('change', () => {
        this.seriesSelectedSeries = this.seriesFilterSeries.value;
        this.seriesRenderedCount = BATCH_SIZE;
        this.renderSeriesTab();
      });

      this.seriesFilterTier.addEventListener('change', () => {
        this.seriesSelectedTier = this.seriesFilterTier.value;
        this.syncSeriesTierPills();
        this.seriesRenderedCount = BATCH_SIZE;
        this.renderSeriesTab();
      });

      this.seriesSortBy.addEventListener('change', () => {
        this.seriesSortMethod = this.seriesSortBy.value;
        this.seriesRenderedCount = BATCH_SIZE;
        this.renderSeriesTab();
      });

      this.seriesResetFiltersBtn.addEventListener('click', () => {
        this.globalSearchInput.value = '';
        this.globalSearchQuery = '';
        this.globalClearSearchBtn.style.display = 'none';
        this.seriesStatusFilter = 'all';
        this.seriesStatusPills.querySelectorAll('.filter-chip').forEach(b => {
          b.classList.toggle('active', b.dataset.seriesStatus === 'all');
        });
        this.seriesSelectedCategory = '';
        this.seriesFilterCategory.value = '';
        this.seriesSelectedSeries = '';
        this.seriesFilterSeries.value = '';
        this.seriesSelectedTier = '';
        this.seriesFilterTier.value = '';
        this.syncSeriesTierPills();
        this.seriesSortMethod = 'coins-desc';
        this.seriesSortBy.value = 'coins-desc';
        this.seriesRenderedCount = BATCH_SIZE;
        this.renderSeriesTab();
      });

      // ----------------------------------------------------------------
      // Tab 2: Wall Events
      // ----------------------------------------------------------------
      this.wallStatusPills.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-chip');
        if (!btn || !btn.dataset.wallStatus) return;
        this.wallStatusFilter = btn.dataset.wallStatus;
        this.wallStatusPills.querySelectorAll('.filter-chip').forEach(b => {
          b.classList.toggle('active', b.dataset.wallStatus === this.wallStatusFilter);
        });
        this.wallRenderedCount = BATCH_SIZE;
        this.renderWallTab();
      });

      this.wallFilterCategory.addEventListener('change', () => {
        this.wallSelectedCategory = this.wallFilterCategory.value;
        this.updateWallSeriesDropdownFilter();
        this.wallRenderedCount = BATCH_SIZE;
        this.renderWallTab();
      });

      this.wallFilterSeries.addEventListener('change', () => {
        this.wallSelectedSeries = this.wallFilterSeries.value;
        this.wallRenderedCount = BATCH_SIZE;
        this.renderWallTab();
      });

      this.wallFilterTier.addEventListener('change', () => {
        this.wallSelectedTier = this.wallFilterTier.value;
        this.syncWallTierPills();
        this.wallRenderedCount = BATCH_SIZE;
        this.renderWallTab();
      });

      this.wallSortBy.addEventListener('change', () => {
        this.wallSortMethod = this.wallSortBy.value;
        this.wallRenderedCount = BATCH_SIZE;
        this.renderWallTab();
      });

      this.wallResetFiltersBtn.addEventListener('click', () => {
        this.globalSearchInput.value = '';
        this.globalSearchQuery = '';
        this.globalClearSearchBtn.style.display = 'none';
        this.wallStatusFilter = 'all';
        this.wallStatusPills.querySelectorAll('.filter-chip').forEach(b => {
          b.classList.toggle('active', b.dataset.wallStatus === 'all');
        });
        this.wallSelectedCategory = '';
        this.wallFilterCategory.value = '';
        this.wallSelectedSeries = '';
        this.wallFilterSeries.value = '';
        this.wallSelectedTier = '';
        this.wallFilterTier.value = '';
        this.syncWallTierPills();
        this.wallSortMethod = 'coins-desc';
        this.wallSortBy.value = 'coins-desc';
        this.wallRenderedCount = BATCH_SIZE;
        this.renderWallTab();
      });

      // ----------------------------------------------------------------
      // Tab 3: Backpack Events
      // ----------------------------------------------------------------
      this.bpStatusPills.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-chip');
        if (!btn || !btn.dataset.bpStatus) return;
        this.bpStatusFilter = btn.dataset.bpStatus;
        this.bpStatusPills.querySelectorAll('.filter-chip').forEach(b => {
          b.classList.toggle('active', b.dataset.bpStatus === this.bpStatusFilter);
        });
        this.bpRenderedCount = BATCH_SIZE;
        this.renderBackpackTab();
      });

      this.bpFilterCategory.addEventListener('change', () => {
        this.bpSelectedCategory = this.bpFilterCategory.value;
        this.updateBpSeriesDropdownFilter();
        this.bpRenderedCount = BATCH_SIZE;
        this.renderBackpackTab();
      });

      this.bpFilterSeries.addEventListener('change', () => {
        this.bpSelectedSeries = this.bpFilterSeries.value;
        this.bpRenderedCount = BATCH_SIZE;
        this.renderBackpackTab();
      });

      this.bpFilterTier.addEventListener('change', () => {
        this.bpSelectedTier = this.bpFilterTier.value;
        this.syncBpTierPills();
        this.bpRenderedCount = BATCH_SIZE;
        this.renderBackpackTab();
      });

      this.bpSortBy.addEventListener('change', () => {
        this.bpSortMethod = this.bpSortBy.value;
        this.bpRenderedCount = BATCH_SIZE;
        this.renderBackpackTab();
      });

      this.bpResetFiltersBtn.addEventListener('click', () => {
        this.globalSearchInput.value = '';
        this.globalSearchQuery = '';
        this.globalClearSearchBtn.style.display = 'none';
        this.bpStatusFilter = 'all';
        this.bpStatusPills.querySelectorAll('.filter-chip').forEach(b => {
          b.classList.toggle('active', b.dataset.bpStatus === 'all');
        });
        this.bpSelectedCategory = '';
        this.bpFilterCategory.value = '';
        this.bpSelectedSeries = '';
        this.bpFilterSeries.value = '';
        this.bpSelectedTier = '';
        this.bpFilterTier.value = '';
        this.syncBpTierPills();
        this.bpSortMethod = 'worth-desc';
        this.bpSortBy.value = 'worth-desc';
        this.bpRenderedCount = BATCH_SIZE;
        this.renderBackpackTab();
      });

      // ----------------------------------------------------------------
      // Tab 4: Portfolio & Studio Events
      // ----------------------------------------------------------------
      this.addCategoryBtn.addEventListener('click', () => {
        this.openCategoryModal();
      });

      this.addSeriesBtn.addEventListener('click', () => {
        this.openSeriesModal();
      });

      if (this.addTierBtn) {
        this.addTierBtn.addEventListener('click', () => {
          this.openTierModal();
        });
      }

      this.exportDataBtn.addEventListener('click', () => {
        this.exportDatabaseJSON();
      });

      this.importFileInput.addEventListener('change', (e) => {
        this.handleImportFile(e);
      });

      this.wipeDataBtn.addEventListener('click', () => {
        this.confirmAction(
          'Reset to Official Seed',
          'This will reset your catalog, series, and categories to the verified 759-gift database. All changes will be overwritten.',
          () => {
            this.state.wipeAll();
            this.showToast('Database reset to official 759-gift seed.');
          }
        );
      });

      // Duplicate Detection and Catalog Integrity Listeners
      this.initDuplicateDetection();

      // GitHub Cloud Synchronization Listeners
      this.initGitHubSync();

      // ----------------------------------------------------------------
      // Tag and Series Management Events
      // ----------------------------------------------------------------
      if (this.resetTagManagerBtn) {
        this.resetTagManagerBtn.addEventListener('click', () => {
          this.confirmAction('Reset Default Tags', 'Restore default tag names and colors (Wall, Series, Backpack)?', () => {
            this.state.resetTags();
            this.applyThemeColors();
            this.renderTagManagerList();
            this.renderAll();
            this.showToast('Default tags and colors restored');
          });
        });
      }

      if (this.tagForm) {
        this.tagForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleSaveTag();
        });
      }

      if (this.tagModalName) {
        this.tagModalName.addEventListener('input', () => {
          this.updateTagModalPreview();
        });
      }

      if (this.tagModalColorPicker) {
        this.tagModalColorPicker.addEventListener('input', (e) => {
          this.tagModalColorHex.value = e.target.value;
          this.updateTagModalPreview();
        });
      }

      if (this.tagModalColorHex) {
        this.tagModalColorHex.addEventListener('input', (e) => {
          let hex = e.target.value.trim();
          if (hex && !hex.startsWith('#')) hex = '#' + hex;
          if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
            this.tagModalColorPicker.value = hex;
          }
          this.updateTagModalPreview();
        });
      }

      // ----------------------------------------------------------------
      // Modal Category Change -> Dynamic Series Cascade
      // ----------------------------------------------------------------
      this.editItemCategory.addEventListener('change', () => {
        const catId = this.editItemCategory.value;
        this.populateModalSeriesSelect(catId);
      });

      // Modal Target Tabs Selection Buttons (Multi-Select)
      if (this.editItemTabsPresets) {
        this.editItemTabsPresets.addEventListener('click', (e) => {
          const btn = e.target.closest('.tab-preset-btn');
          if (!btn) return;
          btn.classList.toggle('active');
        });
      }

      // Modal Manual Tier Selection Buttons
      this.editItemTierPresets.addEventListener('click', (e) => {
        const btn = e.target.closest('.tier-preset-btn');
        if (!btn || !btn.dataset.tier) return;
        const chosenTier = btn.dataset.tier;
        this.editItemTier.value = chosenTier;
        this.editItemTierPresets.querySelectorAll('.tier-preset-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.tier === chosenTier);
        });
      });

      // Save Item Form
      this.editItemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSaveItem();
      });

      // Save Category Form
      this.categoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSaveCategory();
      });

      // Save Series Form
      this.seriesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSaveSeries();
      });

      // Modal Close Handlers (Overlay & Cancel buttons)
      document.querySelectorAll('[data-modal]').forEach(el => {
        el.addEventListener('click', () => {
          const modalId = el.dataset.modal;
          if (modalId) this.closeModal(modalId);
        });
      });

      document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay) {
            overlay.style.display = 'none';
            this.pendingConfirmAction = null;
          }
        });
      });

      // Keyboard Accessibility: Escape key dismisses open modals cleanly
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          document.querySelectorAll('.modal-overlay').forEach(overlay => {
            if (overlay.style.display === 'flex') {
              overlay.style.display = 'none';
            }
          });
          this.pendingConfirmAction = null;
        }
      });

      // Confirm Modal Action
      this.confirmAcceptBtn.addEventListener('click', () => {
        if (typeof this.pendingConfirmAction === 'function') {
          this.pendingConfirmAction();
        }
        this.closeModal('confirmModal');
      });

      this.confirmCancelBtn.addEventListener('click', () => {
        this.closeModal('confirmModal');
      });
    }

    switchTab(tabId, saveToStorage = true) {
      if (!tabId) return;
      const validTabs = ['tab-backpack', 'tab-series', 'tab-wall', 'tab-portfolio'];
      if (!validTabs.includes(tabId)) return;
      this.currentTab = tabId;

      if (saveToStorage) {
        try {
          localStorage.setItem('hellotalk_active_tab', tabId);
        } catch (e) {}
      }

      this.navTabButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
      });

      this.tabPanes.forEach(pane => {
        pane.classList.toggle('active', pane.id === tabId);
      });

      this.renderActiveTab();
      if (saveToStorage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    renderActiveTab() {
      switch (this.currentTab) {
        case 'tab-series': this.renderSeriesTab(); break;
        case 'tab-wall': this.renderWallTab(); break;
        case 'tab-backpack': this.renderBackpackTab(); break;
        case 'tab-portfolio': this.renderPortfolioTab(); break;
      }
    }

    // ------------------------------------------------------------------
    // ------------------------------------------------------------------
    // MASTER RENDER DISPATCHER
    // ------------------------------------------------------------------
    renderAll() {
      this.renderSeriesTab();
      this.renderWallTab();
      this.renderBackpackTab();
      this.renderPortfolioTab();
      this.populateCategorySelects();
    }

    // ------------------------------------------------------------------
    // TAB CATALOG ROUTING & SCOPING HELPERS
    // ------------------------------------------------------------------
    getSeriesCatalogItems() {
      return this.state.data.items.filter(i => {
        return !!(i.categoryId && i.seriesId && this.state.getSeries(i.seriesId));
      });
    }

    getWallCatalogItems() {
      return this.state.data.items.filter(i => {
        return !!i.wallOwned;
      });
    }

    getBackpackCatalogItems() {
      return this.state.data.items.filter(i => {
        return (Number(i.quantity) || 0) > 0;
      });
    }

    // ------------------------------------------------------------------
    // TAB 1: SERIES (MASTER CATALOG FOR ALL 759 GIFTS & 91 SERIES)
    // ------------------------------------------------------------------
    renderSeriesTab() {
      const seriesItems = this.getSeriesCatalogItems();
      const totalItems = seriesItems.length;
      const wallCollectedCount = seriesItems.filter(i => !!i.wallOwned).length;
      const wallMissingCount = totalItems - wallCollectedCount;
      const inStockCount = seriesItems.filter(i => (Number(i.quantity) || 0) > 0).length;

      const completionPct = totalItems > 0 ? ((wallCollectedCount / totalItems) * 100).toFixed(1) : '0.0';

      this.seriesTotalGifts.textContent = totalItems;
      this.seriesTotalCount.textContent = this.state.data.series.length;
      this.seriesWallProgressRatio.textContent = `${wallCollectedCount} / ${totalItems}`;
      this.seriesWallProgressPercent.textContent = `${completionPct}% Collected on Wall`;
      this.seriesWallProgressBar.style.width = `${completionPct}%`;

      // Series completion tracking
      let completedSeriesCount = 0;
      const totalSeries = this.state.data.series.length;
      this.state.data.series.forEach(s => {
        const sItems = seriesItems.filter(i => i.seriesId === s.id);
        if (sItems.length > 0 && sItems.every(i => !!i.wallOwned)) {
          completedSeriesCount++;
        }
      });
      const seriesPct = totalSeries > 0 ? ((completedSeriesCount / totalSeries) * 100).toFixed(1) : '0.0';
      this.seriesCompleteRatio.textContent = `${completedSeriesCount} / ${totalSeries}`;
      this.seriesCompletePercent.textContent = `${seriesPct}% Series Complete`;
      this.seriesCompleteBar.style.width = `${seriesPct}%`;

      // Status Pill Counts
      this.seriesCountAll.textContent = totalItems;
      this.seriesCountCollected.textContent = wallCollectedCount;
      this.seriesCountMissing.textContent = wallMissingCount;
      this.seriesCountInStock.textContent = inStockCount;

      this.updateSeriesCategoryDropdownFilter(seriesItems);
      this.updateSeriesDropdownFilter(seriesItems);
      this.updateSeriesTierDropdownFilter(seriesItems);
      this.renderSeriesTierPills(seriesItems);

      if (this.focusedSeriesId) {
        this.openSeriesDrilldown(this.focusedSeriesId);
        return;
      }

      const filtered = this.getFilteredSeriesItems();

      const hasActiveFilters = this.globalSearchQuery || this.seriesStatusFilter !== 'all' || this.seriesSelectedCategory || this.seriesSelectedSeries || this.seriesSelectedTier;
      this.seriesResetFiltersBtn.style.display = hasActiveFilters ? 'inline-block' : 'none';

      const toRender = filtered.slice(0, this.seriesRenderedCount);
      const currentHeight = this.seriesGiftsGrid.offsetHeight;
      if (currentHeight > 0) {
        this.seriesGiftsGrid.style.minHeight = `${currentHeight}px`;
      }
      this.seriesGiftsGrid.innerHTML = '';

      if (toRender.length === 0) {
        this.seriesGiftsGrid.style.minHeight = '';
        this.seriesGiftsGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
            <div style="font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">No gifts match current criteria</div>
            <p style="font-size: 13px; color: var(--text-muted);">Adjust search query or reset filter pills to browse the master catalog.</p>
          </div>
        `;
        if (this.seriesResultsCount) this.seriesResultsCount.textContent = 'Showing 0 gifts';
        if (this.seriesResultsAggregate) this.seriesResultsAggregate.textContent = 'Master Catalog';
        return;
      }

      const fragment = document.createDocumentFragment();
      toRender.forEach(item => {
        const card = this.createSeriesGiftCard(item);
        fragment.appendChild(card);
      });
      this.seriesGiftsGrid.appendChild(fragment);
      requestAnimationFrame(() => {
        this.seriesGiftsGrid.style.minHeight = '';
      });

      if (this.seriesResultsCount) this.seriesResultsCount.textContent = `Showing ${filtered.length} of ${totalItems} gifts`;
      if (this.seriesResultsAggregate) this.seriesResultsAggregate.textContent = `Wall: ${wallCollectedCount}/${totalItems} (${completionPct}%)`;
    }

    getFilteredSeriesItems() {
      let items = this.getSeriesCatalogItems();

      if (this.globalSearchQuery) {
        const q = this.globalSearchQuery;
        items = items.filter(i => {
          const cat = this.state.getCategory(i.categoryId);
          const ser = this.state.getSeries(i.seriesId);
          return (
            (i.name && i.name.toLowerCase().includes(q)) ||
            (cat && cat.name.toLowerCase().includes(q)) ||
            (ser && ser.name.toLowerCase().includes(q)) ||
            (i.tier && i.tier.toLowerCase().includes(q)) ||
            (i.notes && i.notes.toLowerCase().includes(q))
          );
        });
      }

      if (this.seriesStatusFilter === 'collected') {
        items = items.filter(i => !!i.wallOwned);
      } else if (this.seriesStatusFilter === 'missing') {
        items = items.filter(i => !i.wallOwned);
      } else if (this.seriesStatusFilter === 'in-stock') {
        items = items.filter(i => (Number(i.quantity) || 0) > 0);
      }

      if (this.seriesSelectedCategory) {
        items = items.filter(i => i.categoryId === this.seriesSelectedCategory);
      }

      if (this.seriesSelectedSeries) {
        items = items.filter(i => i.seriesId === this.seriesSelectedSeries);
      }

      if (this.seriesSelectedTier) {
        const cleanTier = this.seriesSelectedTier.toLowerCase();
        items = items.filter(i => (i.tier || '').toLowerCase() === cleanTier);
      }

      items.sort((a, b) => {
        const aBase = a.baseValue || 0;
        const bBase = b.baseValue || 0;
        const aOwned = a.wallOwned ? 1 : 0;
        const bOwned = b.wallOwned ? 1 : 0;

        switch (this.seriesSortMethod) {
          case 'coins-desc': return bBase - aBase;
          case 'coins-asc': return aBase - bBase;
          case 'missing-first':
            if (aOwned !== bOwned) return aOwned - bOwned;
            return bBase - aBase;
          case 'tier-rank': {
            const aRank = this.getTierInfo(a.tier).rank;
            const bRank = this.getTierInfo(b.tier).rank;
            if (aRank !== bRank) return aRank - bRank;
            return bBase - aBase;
          }
          case 'name-asc': return (a.name || '').localeCompare(b.name || '');
          case 'series-group': {
            const aSer = this.state.getSeries(a.seriesId);
            const bSer = this.state.getSeries(b.seriesId);
            const aName = aSer ? aSer.name : 'Standalone';
            const bName = bSer ? bSer.name : 'Standalone';
            return aName.localeCompare(bName) || (bBase - aBase);
          }
          default: return 0;
        }
      });

      return items;
    }

    createSeriesGiftCard(item) {
      const tierInfo = this.getTierInfo(item.tier);
      const card = document.createElement('div');
      const isOwned = !!item.wallOwned;
      const isStarred = !!item.starred;
      const ser = this.state.getSeries(item.seriesId);
      const qty = Number(item.quantity) || 0;
      const isInBackpack = (Array.isArray(item.tabs) ? item.tabs.includes('backpack') : false) || qty > 0;

      card.className = `gift-card ${isOwned ? 'is-owned ' + tierInfo.cardClass : ''}`;

      const baseVal = item.baseValue || 0;
      const marketVal = item.marketWorth !== undefined ? item.marketWorth : 0;

      // Clean card top: Badges ONLY
      card.innerHTML = `
        <div>
          <div class="card-badges-row">
            <div class="badges-group-left">
              <span class="tier-badge ${tierInfo.className}" style="color: ${tierInfo.color}; background-color: ${tierInfo.bg}; border-color: ${tierInfo.border};">${this.escapeHtml(tierInfo.name)}</span>
              ${ser ? `<span class="badge-series" title="Series: ${this.escapeHtml(ser.name)}">${this.escapeHtml(ser.name)}</span>` : ''}
            </div>
          </div>

          <div class="card-body">
            <div class="gift-title" title="${this.escapeHtml(item.name)}">${this.escapeHtml(item.name)}</div>
            <div class="coin-valuation-box">
              <div class="coins-main tabular">${this.formatNumber(baseVal)} <span>Coins</span></div>
              <div class="coins-worth tabular">${this.formatNumber(marketVal)} <span>Worth</span></div>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <div class="card-footer-top">
            <button class="btn-wall-toggle ${isOwned ? 'is-collected' : ''}" title="${isOwned ? 'Click to unmark from Wall' : 'Mark Collected on Wall'}">
              ${isOwned
                ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Collected</span>`
                : `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg><span>Mark Collected</span>`
              }
            </button>

            <button type="button" class="star-mark-badge ${isStarred ? 'is-starred' : 'is-unstarred'}" title="${isStarred ? 'Priority (Do Not Trade) - Click to unmark' : 'Click to mark as Priority (Do Not Trade)'}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="${isStarred ? '#f59e0b' : 'none'}" stroke="${isStarred ? '#f59e0b' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>

            <div class="card-actions">
              <button class="action-icon-btn btn-edit" title="Edit gift details" aria-label="Edit gift">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
            </div>
          </div>

          <div class="card-context-row">
            <button type="button" class="btn-context-tag tag-bp ${isInBackpack ? 'is-active' : ''}" data-action="toggle-bp" title="${isInBackpack ? 'In Backpack (Click to remove)' : 'Add to Backpack'}">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></path><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path><path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"></path><line x1="8" y1="10" x2="16" y2="10"></line></svg>
              <span>${this.escapeHtml(this.state.getTagName('backpack'))}${qty > 0 ? ` (${qty})` : ''}</span>
            </button>
          </div>
        </div>
      `;

      const btnStar = card.querySelector('.star-mark-badge');
      const btnToggle = card.querySelector('.btn-wall-toggle');
      const btnBp = card.querySelector('.tag-bp');
      const btnEdit = card.querySelector('.btn-edit');

      if (btnStar) {
        btnStar.addEventListener('click', (e) => {
          e.stopPropagation();
          const willStar = !item.starred;
          const scrollY = window.scrollY;
          this.state.toggleStarred(item.id);
          this.renderAll();
          this.showToast(`Updated "${item.name}" priority: ${willStar ? 'Marked Priority' : 'Unmarked'}`);
          window.scrollTo({ top: scrollY });
        });
      }

      if (btnToggle) {
        btnToggle.addEventListener('click', (e) => {
          e.stopPropagation();
          const willBeOwned = !item.wallOwned;
          this.confirmAction(
            'Confirm Wall Status',
            `Are you sure you want to mark "${item.name}" as ${willBeOwned ? 'collected on' : 'missing from'} the Wall?`,
            () => {
              const scrollY = window.scrollY;
              this.state.toggleWallOwned(item.id);
              this.renderAll();
              this.showToast(`Updated "${item.name}" wall status`);
              window.scrollTo({ top: scrollY });
            }
          );
        });
      }

      if (btnBp) {
        btnBp.addEventListener('click', (e) => {
          e.stopPropagation();
          const scrollY = window.scrollY;
          const res = this.state.toggleItemTab(item.id, 'backpack');
          if (!res.success) {
            this.showToast(res.reason || 'Could not update Backpack tab');
            return;
          }
          this.renderAll();
          this.showToast(res.added ? `Added "${item.name}" to Backpack` : `Removed "${item.name}" from Backpack`);
          window.scrollTo({ top: scrollY });
        });
      }

      if (btnEdit) {
        btnEdit.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openEditItemModal(item.id);
        });
      }

      return card;
    }

    openSeriesDrilldown(seriesId) {
      const ser = this.state.getSeries(seriesId);
      if (!ser) return;

      this.focusedSeriesId = seriesId;
      this.seriesGiftsContainer.style.display = 'none';
      this.seriesFilterHub.style.display = 'none';
      this.seriesDrillDownView.style.display = 'block';

      const cat = this.state.getCategory(ser.categoryId);
      this.drillCategoryCrumb.textContent = cat ? cat.name : 'Standalone Category';
      this.drillSeriesTitle.textContent = ser.name;
      this.drillSeriesBadge.textContent = ser.badge || ser.name;
      this.drillSeriesDesc.textContent = ser.description || '';

      const sItems = this.getSeriesCatalogItems().filter(i => i.seriesId === ser.id);
      const total = sItems.length;
      const collected = sItems.filter(i => !!i.wallOwned).length;
      const totalUnits = sItems.reduce((sum, i) => sum + (Number(i.quantity) || 0), 0);
      const pct = total > 0 ? ((collected / total) * 100).toFixed(0) : '0';

      this.drillProgressText.textContent = `${collected} / ${total} Collected on Wall (${pct}%)`;
      this.drillUnitsText.textContent = `${totalUnits} Units in Backpack`;
      this.drillProgressBar.style.width = `${pct}%`;
      this.drillGiftsCountTitle.textContent = `Series Gifts (${total})`;

      this.drillGiftsGrid.innerHTML = '';
      sItems.sort((a, b) => (b.baseValue || 0) - (a.baseValue || 0));
      sItems.forEach(item => {
        const card = this.createSeriesGiftCard(item);
        this.drillGiftsGrid.appendChild(card);
      });
    }

    // ------------------------------------------------------------------
    // TAB 2: WALL (STRICTLY COLLECTED-ONLY GALLERY)
    // ------------------------------------------------------------------
    renderWallTab() {
      // ONLY GIFTS MARKED AS COLLECTED
      const collectedGifts = this.getWallCatalogItems();
      const totalCollected = collectedGifts.length;

      const totalBase = collectedGifts.reduce((s, i) => s + (Number(i.baseValue) || 0), 0);
      const totalMarket = collectedGifts.reduce((s, i) => s + (Number(i.marketWorth) || 0), 0);

      this.wallCollectedTotal.textContent = totalCollected;
      this.wallBaseTotal.textContent = this.formatNumber(totalBase);
      this.wallMarketTotal.textContent = this.formatNumber(totalMarket);

      this.wallCountCollectedOnly.textContent = totalCollected;
      this.wallCountStarredOnly.textContent = collectedGifts.filter(i => !!i.starred).length;

      this.updateWallCategoryDropdownFilter(collectedGifts);
      this.updateWallSeriesDropdownFilter(collectedGifts);
      this.updateWallTierDropdownFilter(collectedGifts);
      this.renderWallTierPills(collectedGifts);

      const filtered = this.getFilteredWallItems(collectedGifts);

      const hasActiveFilters = this.globalSearchQuery || this.wallStatusFilter !== 'all' || this.wallSelectedCategory || this.wallSelectedSeries || this.wallSelectedTier;
      this.wallResetFiltersBtn.style.display = hasActiveFilters ? 'inline-block' : 'none';

      const toRender = filtered.slice(0, this.wallRenderedCount);
      const currentHeight = this.wallGrid.offsetHeight;
      if (currentHeight > 0) {
        this.wallGrid.style.minHeight = `${currentHeight}px`;
      }
      this.wallGrid.innerHTML = '';

      if (toRender.length === 0) {
        this.wallGrid.style.minHeight = '';
        this.wallGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
            <div style="font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">
              ${totalCollected === 0 ? 'No gifts marked as collected on your Wall yet' : 'No collected gifts match current filters'}
            </div>
            <p style="font-size: 13px; color: var(--text-muted);">
              ${totalCollected === 0 ? 'Switch to the Series catalog and click "Mark Collected" on gifts to populate your Wall gallery.' : 'Adjust search query or reset filter pills to view your full Wall collection.'}
            </p>
          </div>
        `;
        if (this.wallResultsCount) this.wallResultsCount.textContent = 'Showing 0 collected gifts';
        if (this.wallResultsAggregate) this.wallResultsAggregate.textContent = 'Wall Gallery';
        return;
      }

      const fragment = document.createDocumentFragment();
      toRender.forEach(item => {
        const card = this.createWallCard(item);
        fragment.appendChild(card);
      });
      this.wallGrid.appendChild(fragment);
      requestAnimationFrame(() => {
        this.wallGrid.style.minHeight = '';
      });

      if (this.wallResultsCount) this.wallResultsCount.textContent = `Showing ${filtered.length} of ${totalCollected} collected gifts`;
      if (this.wallResultsAggregate) this.wallResultsAggregate.textContent = `Wall Base: ${this.formatNumber(totalBase)} // Market: ${this.formatNumber(totalMarket)}`;
    }

    getFilteredWallItems(collectedGifts) {
      let items = [...collectedGifts];

      if (this.globalSearchQuery) {
        const q = this.globalSearchQuery;
        items = items.filter(i => {
          const cat = this.state.getCategory(i.categoryId);
          const ser = this.state.getSeries(i.seriesId);
          return (
            (i.name && i.name.toLowerCase().includes(q)) ||
            (cat && cat.name.toLowerCase().includes(q)) ||
            (ser && ser.name.toLowerCase().includes(q)) ||
            (i.tier && i.tier.toLowerCase().includes(q)) ||
            (i.notes && i.notes.toLowerCase().includes(q))
          );
        });
      }

      if (this.wallStatusFilter === 'starred') {
        items = items.filter(i => !!i.starred);
      }

      if (this.wallSelectedCategory) {
        if (this.wallSelectedCategory === '__standalone__') {
          items = items.filter(i => !i.categoryId);
        } else {
          items = items.filter(i => i.categoryId === this.wallSelectedCategory);
        }
      }

      if (this.wallSelectedSeries) {
        items = items.filter(i => i.seriesId === this.wallSelectedSeries);
      }

      if (this.wallSelectedTier) {
        const cleanTier = this.wallSelectedTier.toLowerCase();
        items = items.filter(i => (i.tier || '').toLowerCase() === cleanTier);
      }

      items.sort((a, b) => {
        const aBase = a.baseValue || 0;
        const bBase = b.baseValue || 0;

        switch (this.wallSortMethod) {
          case 'coins-desc': return bBase - aBase;
          case 'coins-asc': return aBase - bBase;
          case 'tier-rank': {
            const aRank = this.getTierInfo(a.tier).rank;
            const bRank = this.getTierInfo(b.tier).rank;
            if (aRank !== bRank) return aRank - bRank;
            return bBase - aBase;
          }
          case 'name-asc': return (a.name || '').localeCompare(b.name || '');
          case 'recent-desc': return (b.updatedAt || 0) - (a.updatedAt || 0);
          default: return 0;
        }
      });

      return items;
    }

    createWallCard(item) {
      const tierInfo = this.getTierInfo(item.tier);
      const card = document.createElement('div');
      const isStarred = !!item.starred;
      const ser = this.state.getSeries(item.seriesId);
      const qty = Number(item.quantity) || 0;
      const isInSeries = (Array.isArray(item.tabs) ? item.tabs.includes('series') : false) && !!(item.categoryId && item.seriesId && this.state.getSeries(item.seriesId));
      const isInBackpack = (Array.isArray(item.tabs) ? item.tabs.includes('backpack') : false) || qty > 0;

      // On Wall tab, all displayed items are owned -> tier glow active!
      card.className = `gift-card is-owned ${tierInfo.cardClass}`;

      const baseVal = item.baseValue || 0;
      const marketVal = item.marketWorth !== undefined ? item.marketWorth : 0;

      // Clean card top: Badges ONLY
      card.innerHTML = `
        <div>
          <div class="card-badges-row">
            <div class="badges-group-left">
              <span class="tier-badge ${tierInfo.className}" style="color: ${tierInfo.color}; background-color: ${tierInfo.bg}; border-color: ${tierInfo.border};">${this.escapeHtml(tierInfo.name)}</span>
              ${ser ? `<span class="badge-series" title="Series: ${this.escapeHtml(ser.name)}">${this.escapeHtml(ser.name)}</span>` : ''}
            </div>
          </div>

          <div class="card-body">
            <div class="gift-title" title="${this.escapeHtml(item.name)}">${this.escapeHtml(item.name)}</div>
            <div class="coin-valuation-box">
              <div class="coins-main tabular">${this.formatNumber(baseVal)} <span>Coins</span></div>
              <div class="coins-worth tabular">${this.formatNumber(marketVal)} <span>Worth</span></div>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <div class="card-footer-top">
            <button class="btn-wall-toggle is-collected" title="Click to unmark from Wall">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Collected</span>
            </button>

            <button type="button" class="star-mark-badge ${isStarred ? 'is-starred' : 'is-unstarred'}" title="${isStarred ? 'Priority (Do Not Trade) - Click to unmark' : 'Click to mark as Priority (Do Not Trade)'}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="${isStarred ? '#f59e0b' : 'none'}" stroke="${isStarred ? '#f59e0b' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>

            <div class="card-actions">
              <button class="action-icon-btn btn-edit" title="Edit gift details" aria-label="Edit gift">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
            </div>
          </div>

          <div class="card-context-row">
            <button type="button" class="btn-context-tag tag-series ${isInSeries ? 'is-active' : ''}" data-action="route-series" title="${isInSeries ? 'In Series Catalog (Click to view series)' : 'Series Catalog'}">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <span>${this.escapeHtml(this.state.getTagName('series'))}</span>
            </button>
            <button type="button" class="btn-context-tag tag-bp ${isInBackpack ? 'is-active' : ''}" data-action="toggle-bp" title="${isInBackpack ? 'In Backpack (Click to remove)' : 'Add to Backpack'}">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></path><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path><path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"></path><line x1="8" y1="10" x2="16" y2="10"></line></svg>
              <span>${this.escapeHtml(this.state.getTagName('backpack'))}${qty > 0 ? ` (${qty})` : ''}</span>
            </button>
          </div>
        </div>
      `;

      const btnStar = card.querySelector('.star-mark-badge');
      const btnToggle = card.querySelector('.btn-wall-toggle');
      const btnSeries = card.querySelector('.tag-series');
      const btnBp = card.querySelector('.tag-bp');
      const btnEdit = card.querySelector('.btn-edit');

      if (btnStar) {
        btnStar.addEventListener('click', (e) => {
          e.stopPropagation();
          const willStar = !item.starred;
          const scrollY = window.scrollY;
          this.state.toggleStarred(item.id);
          this.renderAll();
          this.showToast(`Updated "${item.name}" priority: ${willStar ? 'Marked Priority' : 'Unmarked'}`);
          window.scrollTo({ top: scrollY });
        });
      }

      if (btnToggle) {
        btnToggle.addEventListener('click', (e) => {
          e.stopPropagation();
          this.confirmAction(
            'Confirm Wall Status',
            `Are you sure you want to remove "${item.name}" from your Wall?`,
            () => {
              const scrollY = window.scrollY;
              const res = this.state.toggleItemTab(item.id, 'wall');
              if (!res.success) {
                this.showToast(res.reason || 'Could not remove from Wall');
                return;
              }
              this.renderAll();
              this.showToast(`Removed "${item.name}" from Wall`);
              window.scrollTo({ top: scrollY });
            }
          );
        });
      }

      if (btnSeries) {
        btnSeries.addEventListener('click', (e) => {
          e.stopPropagation();
          if (item.seriesId) {
            this.switchTab('tab-series');
            this.openSeriesDrilldown(item.seriesId);
          }
        });
      }

      if (btnBp) {
        btnBp.addEventListener('click', (e) => {
          e.stopPropagation();
          const scrollY = window.scrollY;
          const res = this.state.toggleItemTab(item.id, 'backpack');
          if (!res.success) {
            this.showToast(res.reason || 'Could not update Backpack tab');
            return;
          }
          this.renderAll();
          this.showToast(res.added ? `Added "${item.name}" to Backpack` : `Removed "${item.name}" from Backpack`);
          window.scrollTo({ top: scrollY });
        });
      }

      if (btnEdit) {
        btnEdit.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openEditItemModal(item.id);
        });
      }

      return card;
    }

    // ------------------------------------------------------------------
    // TAB 3: BACKPACK (INVENTORY & STOCK LINKED TO MASTER CATALOG)
    // ------------------------------------------------------------------
    renderBackpackTab() {
      // STRICT VIEW SCOPE: Only gifts physically in user backpack inventory
      const bpItems = this.getBackpackCatalogItems();
      const totalUnits = bpItems.reduce((sum, i) => sum + (Number(i.quantity) || 0), 0);
      const totalBaseWorth = bpItems.reduce((sum, i) => sum + (Number(i.quantity) || 0) * (Number(i.baseValue) || 0), 0);
      const totalMarketWorth = bpItems.reduce((sum, i) => sum + (Number(i.quantity) || 0) * (Number(i.marketWorth) || 0), 0);
      const netSpread = totalMarketWorth - totalBaseWorth;
      const spreadSign = netSpread > 0 ? '+' : '';

      const exchangeNeededGifts = bpItems.filter(i => !i.wallOwned);
      const starredGifts = bpItems.filter(i => !!i.starred);
      const inStockExact1 = bpItems.filter(i => (Number(i.quantity) || 0) === 1);
      const extrasGifts = bpItems.filter(i => (Number(i.quantity) || 0) > 1);

      this.bpTotalUnits.textContent = this.formatNumber(totalUnits);
      this.bpUniqueItems.textContent = bpItems.length;
      this.bpMarketWorth.textContent = this.formatNumber(totalMarketWorth);
      this.bpBaseWorth.textContent = this.formatNumber(totalBaseWorth);
      this.bpProfitSpread.textContent = `${spreadSign}${this.formatNumber(netSpread)} Coins`;
      this.bpExchangeMarkerCount.textContent = exchangeNeededGifts.length;

      // Status Pill Counts
      this.bpCountAll.textContent = bpItems.length;
      this.bpCountInStock.textContent = inStockExact1.length;
      this.bpCountExchange.textContent = exchangeNeededGifts.length;
      this.bpCountStarred.textContent = starredGifts.length;
      this.bpCountExtras.textContent = extrasGifts.length;

      this.updateBpCategoryDropdownFilter(bpItems);
      this.updateBpSeriesDropdownFilter(bpItems);
      this.updateBpTierDropdownFilter(bpItems);
      this.renderBpTierPills(bpItems);

      const filtered = this.getFilteredBpItems();

      const hasActiveFilters = this.globalSearchQuery || this.bpStatusFilter !== 'all' || this.bpSelectedCategory || this.bpSelectedSeries || this.bpSelectedTier;
      this.bpResetFiltersBtn.style.display = hasActiveFilters ? 'inline-block' : 'none';

      const toRender = filtered.slice(0, this.bpRenderedCount);
      const currentHeight = this.backpackGrid.offsetHeight;
      if (currentHeight > 0) {
        this.backpackGrid.style.minHeight = `${currentHeight}px`;
      }
      this.backpackGrid.innerHTML = '';

      if (toRender.length === 0) {
        this.backpackGrid.style.minHeight = '';
        this.backpackGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
            <div style="font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">No inventory gifts match criteria</div>
            <p style="font-size: 13px; color: var(--text-muted);">Adjust search query or filter pills to browse your Backpack stock.</p>
          </div>
        `;
        if (this.bpResultsCount) this.bpResultsCount.textContent = 'Showing 0 inventory gifts';
        if (this.bpResultsAggregate) this.bpResultsAggregate.textContent = 'Base: 0 // Market: 0';
        return;
      }

      const fragment = document.createDocumentFragment();
      toRender.forEach(item => {
        const card = this.createBackpackCard(item);
        fragment.appendChild(card);
      });
      this.backpackGrid.appendChild(fragment);
      requestAnimationFrame(() => {
        this.backpackGrid.style.minHeight = '';
      });

      const subBase = filtered.reduce((s, i) => s + (Number(i.quantity) || 0) * (Number(i.baseValue) || 0), 0);
      const subMarket = filtered.reduce((s, i) => s + (Number(i.quantity) || 0) * (Number(i.marketWorth) || 0), 0);

      if (this.bpResultsCount) this.bpResultsCount.textContent = `Showing ${filtered.length} inventory gift${filtered.length === 1 ? '' : 's'}`;
      if (this.bpResultsAggregate) this.bpResultsAggregate.textContent = `Held Base: ${this.formatNumber(subBase)} // Market: ${this.formatNumber(subMarket)}`;
    }

    getFilteredBpItems() {
      // STRICT VIEW SCOPE: Only gifts physically in user backpack inventory
      let items = this.getBackpackCatalogItems();

      if (this.globalSearchQuery) {
        const q = this.globalSearchQuery;
        items = items.filter(i => {
          const cat = this.state.getCategory(i.categoryId);
          const ser = this.state.getSeries(i.seriesId);
          return (
            (i.name && i.name.toLowerCase().includes(q)) ||
            (cat && cat.name.toLowerCase().includes(q)) ||
            (ser && ser.name.toLowerCase().includes(q)) ||
            (i.tier && i.tier.toLowerCase().includes(q)) ||
            (i.notes && i.notes.toLowerCase().includes(q))
          );
        });
      }

      if (this.bpStatusFilter === 'in-stock') {
        items = items.filter(i => (Number(i.quantity) || 0) === 1);
      } else if (this.bpStatusFilter === 'exchange-needed') {
        items = items.filter(i => !i.wallOwned);
      } else if (this.bpStatusFilter === 'starred') {
        items = items.filter(i => !!i.starred);
      } else if (this.bpStatusFilter === 'extras') {
        items = items.filter(i => (Number(i.quantity) || 0) > 1);
      }

      if (this.bpSelectedCategory) {
        if (this.bpSelectedCategory === '__standalone__') {
          items = items.filter(i => !i.categoryId);
        } else {
          items = items.filter(i => i.categoryId === this.bpSelectedCategory);
        }
      }

      if (this.bpSelectedSeries) {
        items = items.filter(i => i.seriesId === this.bpSelectedSeries);
      }

      if (this.bpSelectedTier) {
        const cleanTier = this.bpSelectedTier.toLowerCase();
        items = items.filter(i => (i.tier || '').toLowerCase() === cleanTier);
      }

      items.sort((a, b) => {
        const aBase = a.baseValue || 0;
        const bBase = b.baseValue || 0;
        const aWorth = a.marketWorth || 0;
        const bWorth = b.marketWorth || 0;
        const aQty = a.quantity || 0;
        const bQty = b.quantity || 0;
        const aTotalWorth = aQty * aWorth;
        const bTotalWorth = bQty * bWorth;

        switch (this.bpSortMethod) {
          case 'base-desc':
          case 'worth-desc': return (bQty * bBase) - (aQty * aBase) || (bBase - aBase);
          case 'base-asc': return (aQty * aBase) - (bQty * bBase) || (aBase - bBase);
          case 'qty-desc': return bQty - aQty || ((bQty * bBase) - (aQty * aBase));
          case 'tier-rank': {
            const aRank = this.getTierInfo(a.tier).rank;
            const bRank = this.getTierInfo(b.tier).rank;
            if (aRank !== bRank) return aRank - bRank;
            return (bQty * bBase) - (aQty * aBase);
          }
          case 'name-asc': return (a.name || '').localeCompare(b.name || '');
          case 'recent-desc': return (b.updatedAt || 0) - (a.updatedAt || 0);
          default: return 0;
        }
      });

      return items;
    }

    createBackpackCard(item) {
      const tierInfo = this.getTierInfo(item.tier);
      const card = document.createElement('div');
      const qty = Number(item.quantity) || 0;
      const isOwned = qty > 0;
      const isStarred = !!item.starred;
      const isExchangeNeeded = qty > 0 && !item.wallOwned;
      const ser = this.state.getSeries(item.seriesId);
      const isInSeries = (Array.isArray(item.tabs) ? item.tabs.includes('series') : false) && !!(item.categoryId && item.seriesId && this.state.getSeries(item.seriesId));
      const isWallOwned = !!item.wallOwned;

      card.className = `gift-card ${isOwned ? 'is-owned ' + tierInfo.cardClass : ''}`;

      const baseVal = item.baseValue || 0;
      const marketVal = item.marketWorth !== undefined ? item.marketWorth : 0;

      // Clean card top: Badges ONLY
      card.innerHTML = `
        <div>
          <div class="card-badges-row">
            <div class="badges-group-left">
              <span class="tier-badge ${tierInfo.className}" style="color: ${tierInfo.color}; background-color: ${tierInfo.bg}; border-color: ${tierInfo.border};">${this.escapeHtml(tierInfo.name)}</span>
              ${ser ? `<span class="badge-series" title="Series: ${this.escapeHtml(ser.name)}">${this.escapeHtml(ser.name)}</span>` : ''}
              ${isExchangeNeeded ? `<span class="marker-badge-exchange" title="In Backpack but missing on Wall">Exchange Needed</span>` : ''}
            </div>
          </div>

          <div class="card-body">
            <div class="gift-title" title="${this.escapeHtml(item.name)}">${this.escapeHtml(item.name)}</div>
            <div class="coin-valuation-box">
              <div class="coins-main tabular">${this.formatNumber(baseVal)} <span>Coins</span></div>
              <div class="coins-worth tabular">${this.formatNumber(marketVal)} <span>Worth</span></div>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <div class="card-footer-top">
            <div class="stepper-group">
              <button class="stepper-btn btn-minus" aria-label="Decrease quantity">&minus;</button>
              <span class="stepper-qty tabular">${qty}</span>
              <button class="stepper-btn btn-plus" aria-label="Increase quantity">&plus;</button>
            </div>

            <button type="button" class="star-mark-badge ${isStarred ? 'is-starred' : 'is-unstarred'}" style="margin-left: auto;" title="${isStarred ? 'Priority (Do Not Trade) - Click to unmark' : 'Click to mark as Priority (Do Not Trade)'}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="${isStarred ? '#f59e0b' : 'none'}" stroke="${isStarred ? '#f59e0b' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>

            <div class="card-actions">
              <button class="action-icon-btn btn-edit" title="Edit gift details" aria-label="Edit gift">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
            </div>
          </div>

          <div class="card-context-row">
            <button type="button" class="btn-context-tag tag-wall ${isWallOwned ? 'is-active' : ''}" data-action="toggle-wall" title="${isWallOwned ? 'On Wall (Click to remove)' : 'Add to Wall'}">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect></svg>
              <span>${this.escapeHtml(this.state.getTagName('wall'))}</span>
            </button>
            <button type="button" class="btn-context-tag tag-series ${isInSeries ? 'is-active' : ''}" data-action="route-series" title="${isInSeries ? 'In Series Catalog (Click to view series)' : 'Series Catalog'}">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <span>${this.escapeHtml(this.state.getTagName('series'))}</span>
            </button>
          </div>
        </div>
      `;

      const btnStar = card.querySelector('.star-mark-badge');
      const btnMinus = card.querySelector('.btn-minus');
      const btnPlus = card.querySelector('.btn-plus');
      const btnWall = card.querySelector('.tag-wall');
      const btnSeries = card.querySelector('.tag-series');
      const btnEdit = card.querySelector('.btn-edit');

      if (btnStar) {
        btnStar.addEventListener('click', (e) => {
          e.stopPropagation();
          const willStar = !item.starred;
          const scrollY = window.scrollY;
          this.state.toggleStarred(item.id);
          this.renderAll();
          this.showToast(`Updated "${item.name}" priority: ${willStar ? 'Marked Priority' : 'Unmarked'}`);
          window.scrollTo({ top: scrollY });
        });
      }

      if (btnMinus) {
        btnMinus.addEventListener('click', (e) => {
          e.stopPropagation();
          const scrollY = window.scrollY;
          this.state.incrementQuantity(item.id, -1);
          this.renderAll();
          window.scrollTo({ top: scrollY });
        });
      }

      if (btnPlus) {
        btnPlus.addEventListener('click', (e) => {
          e.stopPropagation();
          const scrollY = window.scrollY;
          this.state.incrementQuantity(item.id, 1);
          this.renderAll();
          window.scrollTo({ top: scrollY });
        });
      }

      if (btnWall) {
        btnWall.addEventListener('click', (e) => {
          e.stopPropagation();
          const scrollY = window.scrollY;
          const res = this.state.toggleItemTab(item.id, 'wall');
          if (!res.success) {
            this.showToast(res.reason || 'Could not update Wall tab');
            return;
          }
          this.renderAll();
          this.showToast(res.added ? `Added "${item.name}" to Wall` : `Removed "${item.name}" from Wall`);
          window.scrollTo({ top: scrollY });
        });
      }

      if (btnSeries) {
        btnSeries.addEventListener('click', (e) => {
          e.stopPropagation();
          if (item.seriesId) {
            this.switchTab('tab-series');
            this.openSeriesDrilldown(item.seriesId);
          }
        });
      }

      if (btnEdit) {
        btnEdit.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openEditItemModal(item.id);
        });
      }

      return card;
    }

    // ------------------------------------------------------------------
    // TAB 4: PORTFOLIO & STUDIO
    // ------------------------------------------------------------------
    renderPortfolioTab() {
      const items = this.state.data.items;
      const series = this.state.data.series;

      // Tier Breakdown Table
      this.ledgerTierTableBody.innerHTML = '';
      const tierMap = new Map();
      const currentTiers = this.getDynamicTierList();

      currentTiers.forEach(t => {
        tierMap.set(t, { name: t, info: this.getTierInfo(t), count: 0, ownedUnits: 0, baseVal: 0, marketVal: 0 });
      });

      items.forEach(i => {
        const info = this.getTierInfo(i.tier);
        const entry = tierMap.get(info.name) || { name: info.name, info, count: 0, ownedUnits: 0, baseVal: 0, marketVal: 0 };
        entry.count++;
        const qty = Number(i.quantity) || 0;
        entry.ownedUnits += qty;
        entry.baseVal += (Number(i.baseValue) || 0) * qty;
        entry.marketVal += (Number(i.marketWorth) || 0) * qty;
        tierMap.set(info.name, entry);
      });

      tierMap.forEach(tData => {
        const tr = document.createElement('tr');
        const diff = tData.marketVal - tData.baseVal;
        const spreadPct = tData.baseVal > 0 ? ((diff / tData.baseVal) * 100).toFixed(0) : '0';
        const spreadSign = diff > 0 ? '+' : '';

        tr.innerHTML = `
          <td><span class="tier-badge ${tData.info.className}" style="color: ${tData.info.color}; background-color: ${tData.info.bg}; border-color: ${tData.info.border};">${tData.name}</span></td>
          <td class="tabular">${tData.count}</td>
          <td class="tabular" style="font-weight: 700;">${this.formatNumber(tData.ownedUnits)}</td>
          <td class="tabular">${this.formatNumber(tData.baseVal)}</td>
          <td class="tabular" style="color: #38bdf8; font-weight: 700;">${this.formatNumber(tData.marketVal)}</td>
          <td class="tabular" style="color: ${diff >= 0 ? '#38bdf8' : 'var(--danger)'}; font-weight: 700;">
            ${spreadSign}${this.formatNumber(diff)} (${spreadSign}${spreadPct}%)
          </td>
        `;
        this.ledgerTierTableBody.appendChild(tr);
      });

      // Series Breakdown Table
      this.ledgerSeriesTableBody.innerHTML = '';
      const sortedSeries = [...series].sort((a, b) => a.name.localeCompare(b.name));
      sortedSeries.forEach(s => {
        const cat = this.state.getCategory(s.categoryId);
        const sItems = items.filter(i => i.seriesId === s.id);
        const total = sItems.length;
        const wallCollected = sItems.filter(i => !!i.wallOwned).length;
        const wallPct = total > 0 ? ((wallCollected / total) * 100).toFixed(0) : '0';
        const bpUnits = sItems.reduce((sum, i) => sum + (Number(i.quantity) || 0), 0);
        const bpBase = sItems.reduce((sum, i) => sum + (Number(i.quantity) || 0) * (Number(i.baseValue) || 0), 0);
        const bpMarket = sItems.reduce((sum, i) => sum + (Number(i.quantity) || 0) * (Number(i.marketWorth) || 0), 0);

        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><span class="badge-series">${this.escapeHtml(s.name)}</span></td>
          <td style="color: var(--text-muted); font-size: 11px;">${cat ? this.escapeHtml(cat.name) : 'Standalone'}</td>
          <td class="tabular">${wallCollected} / ${total} (${wallPct}%)</td>
          <td class="tabular" style="font-weight: 700;">${this.formatNumber(bpUnits)}</td>
          <td class="tabular">${this.formatNumber(bpBase)}</td>
          <td class="tabular" style="color: #38bdf8; font-weight: 700;">${this.formatNumber(bpMarket)}</td>
        `;
        this.ledgerSeriesTableBody.appendChild(tr);
      });

      this.renderCategoryManagerList();
      this.renderSeriesManagerList();
      this.renderTierManagerList();
      this.renderTagManagerList();
    }

    setupDraggableList(container, itemSelector, onReorder) {
      if (!container) return;
      const rows = Array.from(container.querySelectorAll(itemSelector));
      let draggedElement = null;
      let draggedIndex = -1;

      const clearIndicators = () => {
        rows.forEach(r => {
          r.classList.remove('is-dragging', 'drag-over-top', 'drag-over-bottom');
        });
      };

      rows.forEach((row, index) => {
        row.setAttribute('draggable', 'true');

        row.addEventListener('dragstart', (e) => {
          if (e.target.closest('button') || e.target.closest('input')) {
            e.preventDefault();
            return;
          }
          draggedElement = row;
          draggedIndex = index;
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/plain', String(index));
          setTimeout(() => row.classList.add('is-dragging'), 0);
        });

        row.addEventListener('dragover', (e) => {
          e.preventDefault();
          if (!draggedElement || draggedElement === row) return;
          e.dataTransfer.dropEffect = 'move';

          const rect = row.getBoundingClientRect();
          const midY = rect.top + rect.height / 2;
          if (e.clientY < midY) {
            row.classList.add('drag-over-top');
            row.classList.remove('drag-over-bottom');
          } else {
            row.classList.add('drag-over-bottom');
            row.classList.remove('drag-over-top');
          }
        });

        row.addEventListener('dragleave', () => {
          row.classList.remove('drag-over-top', 'drag-over-bottom');
        });

        row.addEventListener('drop', (e) => {
          e.preventDefault();
          if (!draggedElement || draggedElement === row) {
            clearIndicators();
            return;
          }
          const rect = row.getBoundingClientRect();
          const isBefore = e.clientY < (rect.top + rect.height / 2);
          clearIndicators();

          let targetIndex = rows.indexOf(row);
          if (!isBefore && draggedIndex < targetIndex) {
            // target remains targetIndex
          } else if (isBefore && draggedIndex > targetIndex) {
            // target remains targetIndex
          } else if (!isBefore && draggedIndex > targetIndex) {
            targetIndex = targetIndex + 1;
          } else if (isBefore && draggedIndex < targetIndex) {
            targetIndex = targetIndex - 1;
          }
          if (targetIndex >= 0 && targetIndex < rows.length && targetIndex !== draggedIndex) {
            onReorder(draggedIndex, targetIndex);
          }
        });

        row.addEventListener('dragend', () => {
          clearIndicators();
          draggedElement = null;
          draggedIndex = -1;
        });

        // Mobile touch drag handle support
        const handle = row.querySelector('.drag-handle');
        if (handle) {
          handle.addEventListener('click', (e) => e.stopPropagation());

          let touchStartTarget = null;
          let activeHoverRow = null;
          let isOverTop = false;

          handle.addEventListener('touchstart', (e) => {
            touchStartTarget = row;
            draggedIndex = index;
            row.classList.add('is-dragging');
          }, { passive: true });

          handle.addEventListener('touchmove', (e) => {
            if (!touchStartTarget) return;
            e.preventDefault();
            const touch = e.touches[0];
            touchStartTarget.style.pointerEvents = 'none';
            const elemBelow = document.elementFromPoint(touch.clientX, touch.clientY);
            touchStartTarget.style.pointerEvents = '';
            const targetRow = elemBelow ? elemBelow.closest(itemSelector) : null;

            rows.forEach(r => r.classList.remove('drag-over-top', 'drag-over-bottom'));

            if (targetRow && targetRow !== touchStartTarget && container.contains(targetRow)) {
              activeHoverRow = targetRow;
              const rect = targetRow.getBoundingClientRect();
              isOverTop = touch.clientY < (rect.top + rect.height / 2);
              if (isOverTop) {
                targetRow.classList.add('drag-over-top');
              } else {
                targetRow.classList.add('drag-over-bottom');
              }
            } else {
              activeHoverRow = null;
            }
          }, { passive: false });

          const handleTouchEnd = () => {
            if (!touchStartTarget) return;
            touchStartTarget.style.pointerEvents = '';
            const from = draggedIndex;
            const hover = activeHoverRow;
            const before = isOverTop;

            touchStartTarget.classList.remove('is-dragging');
            rows.forEach(r => r.classList.remove('drag-over-top', 'drag-over-bottom'));
            touchStartTarget = null;
            activeHoverRow = null;

            if (hover && hover !== rows[from]) {
              let targetIndex = rows.indexOf(hover);
              if (!before && from < targetIndex) {
                // target remains
              } else if (before && from > targetIndex) {
                // target remains
              } else if (!before && from > targetIndex) {
                targetIndex = targetIndex + 1;
              } else if (before && from < targetIndex) {
                targetIndex = targetIndex - 1;
              }
              if (targetIndex >= 0 && targetIndex < rows.length && targetIndex !== from) {
                onReorder(from, targetIndex);
              }
            }
          };

          handle.addEventListener('touchend', handleTouchEnd);
          handle.addEventListener('touchcancel', () => {
            if (touchStartTarget) {
              touchStartTarget.style.pointerEvents = '';
              touchStartTarget.classList.remove('is-dragging');
            }
            rows.forEach(r => r.classList.remove('drag-over-top', 'drag-over-bottom'));
            touchStartTarget = null;
            activeHoverRow = null;
          });
        }
      });
    }

    renderCategoryManagerList() {
      this.categoryManagerList.innerHTML = '';
      const cats = [...this.state.data.categories].sort((a, b) => (a.order || 0) - (b.order || 0));
      this.catTotalCount.textContent = cats.length;

      cats.forEach(c => {
        const count = this.state.data.series.filter(s => s.categoryId === c.id).length;
        const row = document.createElement('div');
        row.className = 'manager-row';
        row.dataset.id = c.id;
        row.style.cursor = 'pointer';
        row.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="drag-handle" title="Drag to reorder category" aria-label="Drag handle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="5" r="1.5"></circle>
                <circle cx="9" cy="12" r="1.5"></circle>
                <circle cx="9" cy="19" r="1.5"></circle>
                <circle cx="15" cy="5" r="1.5"></circle>
                <circle cx="15" cy="12" r="1.5"></circle>
                <circle cx="15" cy="19" r="1.5"></circle>
              </svg>
            </div>
            <div>
              <strong>${this.escapeHtml(c.name)}</strong>
              <span style="color:var(--text-muted); font-size: 11px;">(#${c.order || 1} &bull; ${count} series)</span>
              ${c.description ? `<div style="font-size: 10.5px; color: var(--text-dim); margin-top: 2px;">${this.escapeHtml(c.description)}</div>` : ''}
            </div>
          </div>
          <div style="display:flex; gap:4px; align-items:center;">
            <button class="btn-secondary edit-cat-btn" style="padding: 2px 8px; font-size: 11px;" title="Edit Category">Edit</button>
          </div>
        `;
        const editCatBtn = row.querySelector('.edit-cat-btn');
        if (editCatBtn) editCatBtn.addEventListener('click', (e) => { e.stopPropagation(); this.openCategoryModal(c.id); });
        const handle = row.querySelector('.drag-handle');
        if (handle) handle.addEventListener('click', (e) => e.stopPropagation());
        row.addEventListener('click', () => this.openCategoryModal(c.id));
        this.categoryManagerList.appendChild(row);
      });

      this.setupDraggableList(this.categoryManagerList, '.manager-row', (fromIdx, toIdx) => {
        const list = [...cats];
        const moved = list.splice(fromIdx, 1)[0];
        list.splice(toIdx, 0, moved);
        list.forEach((c, i) => {
          const itemInState = this.state.data.categories.find(x => x.id === c.id);
          if (itemInState) itemInState.order = i + 1;
        });
        this.state.data.categories.sort((a, b) => (a.order || 0) - (b.order || 0));
        this.state.saveState();
        this.renderCategoryManagerList();
        this.updateSeriesCategoryDropdownFilter();
        this.updateWallCategoryDropdownFilter();
        this.updateBpCategoryDropdownFilter();
        this.renderAll();
        this.showToast('Category order updated');
      });
    }

    renderSeriesManagerList() {
      this.seriesManagerList.innerHTML = '';
      const sers = [...this.state.data.series].sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0) || a.name.localeCompare(b.name));
      this.serTotalCount.textContent = sers.length;

      sers.forEach(s => {
        const cat = this.state.getCategory(s.categoryId);
        const count = this.state.data.items.filter(i => i.seriesId === s.id).length;
        const row = document.createElement('div');
        row.className = 'manager-row';
        row.dataset.id = s.id;
        row.style.cursor = 'pointer';
        row.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="drag-handle" title="Drag to reorder series" aria-label="Drag handle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="5" r="1.5"></circle>
                <circle cx="9" cy="12" r="1.5"></circle>
                <circle cx="9" cy="19" r="1.5"></circle>
                <circle cx="15" cy="5" r="1.5"></circle>
                <circle cx="15" cy="12" r="1.5"></circle>
                <circle cx="15" cy="19" r="1.5"></circle>
              </svg>
            </div>
            <div>
              <strong style="color: #f8fafc;">${this.escapeHtml(s.name)}</strong>
              <span style="font-size:11px; color:var(--text-muted);">(#${s.displayOrder || 1} &bull; ${cat ? this.escapeHtml(cat.name) : 'Standalone'} &bull; ${count} gifts)</span>
              ${s.description ? `<div style="font-size: 10.5px; color: var(--text-dim); margin-top: 2px;">${this.escapeHtml(s.description)}</div>` : ''}
            </div>
          </div>
          <div style="display:flex; gap:4px; align-items:center;">
            <button class="btn-secondary edit-ser-btn" style="padding: 2px 8px; font-size: 11px;" title="Edit Series">Edit</button>
          </div>
        `;
        const editSerBtn = row.querySelector('.edit-ser-btn');
        if (editSerBtn) editSerBtn.addEventListener('click', (e) => { e.stopPropagation(); this.openSeriesModal(s.id); });
        const handle = row.querySelector('.drag-handle');
        if (handle) handle.addEventListener('click', (e) => e.stopPropagation());
        row.addEventListener('click', () => this.openSeriesModal(s.id));
        this.seriesManagerList.appendChild(row);
      });

      this.setupDraggableList(this.seriesManagerList, '.manager-row', (fromIdx, toIdx) => {
        const list = [...sers];
        const moved = list.splice(fromIdx, 1)[0];
        list.splice(toIdx, 0, moved);
        list.forEach((s, i) => {
          const itemInState = this.state.data.series.find(x => x.id === s.id);
          if (itemInState) itemInState.displayOrder = i + 1;
        });
        this.state.data.series.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
        this.state.saveState();
        this.renderSeriesManagerList();
        this.updateSeriesDropdownFilter();
        this.updateWallSeriesDropdownFilter();
        this.updateBpSeriesDropdownFilter();
        this.renderAll();
        this.showToast('Series order updated');
      });
    }

    renderTierManagerList() {
      if (!this.tierManagerList) return;
      this.tierManagerList.innerHTML = '';
      const orderMap = { 'standard': 1, 'featured': 2, 'limited': 3, 'luxury': 4, 'collection': 5 };
      const tiers = [...(this.state.data.tiers || [])].sort((a, b) => {
        const aOrder = a.displayOrder ?? orderMap[(a.name || '').toLowerCase()] ?? 99;
        const bOrder = b.displayOrder ?? orderMap[(b.name || '').toLowerCase()] ?? 99;
        return aOrder - bOrder;
      });
      if (this.tierTotalCount) this.tierTotalCount.textContent = tiers.length;

      tiers.forEach(t => {
        const count = this.state.data.items.filter(i => (i.tier || '').toLowerCase() === t.name.toLowerCase()).length;
        const row = document.createElement('div');
        row.className = 'manager-row';
        row.dataset.id = t.id;
        row.style.cursor = 'pointer';
        row.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="drag-handle" title="Drag to reorder tier" aria-label="Drag handle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="5" r="1.5"></circle>
                <circle cx="9" cy="12" r="1.5"></circle>
                <circle cx="9" cy="19" r="1.5"></circle>
                <circle cx="15" cy="5" r="1.5"></circle>
                <circle cx="15" cy="12" r="1.5"></circle>
                <circle cx="15" cy="19" r="1.5"></circle>
              </svg>
            </div>
            <span style="width: 10px; height: 10px; border-radius: 50%; background-color: ${t.color || '#e2e8f0'}; display: inline-block;"></span>
            <div>
              <strong>${this.escapeHtml(t.name)}</strong>
              <span style="color:var(--text-muted); font-size: 11px;">(#${t.displayOrder || 1} &bull; ${count} gifts)</span>
              ${t.description ? `<div style="font-size: 10.5px; color: var(--text-dim); margin-top: 2px;">${this.escapeHtml(t.description)}</div>` : ''}
            </div>
          </div>
          <div style="display:flex; gap:4px; align-items:center;">
            <button class="btn-secondary edit-tier-btn" style="padding: 2px 8px; font-size: 11px;" title="Edit Tier">Edit</button>
          </div>
        `;
        const editBtn = row.querySelector('.edit-tier-btn');
        if (editBtn) editBtn.addEventListener('click', (e) => { e.stopPropagation(); this.openTierModal(t.id); });
        const handle = row.querySelector('.drag-handle');
        if (handle) handle.addEventListener('click', (e) => e.stopPropagation());
        row.addEventListener('click', () => this.openTierModal(t.id));
        this.tierManagerList.appendChild(row);
      });

      this.setupDraggableList(this.tierManagerList, '.manager-row', (fromIdx, toIdx) => {
        const list = [...tiers];
        const moved = list.splice(fromIdx, 1)[0];
        list.splice(toIdx, 0, moved);
        list.forEach((t, i) => {
          const itemInState = this.state.data.tiers.find(x => x.id === t.id);
          if (itemInState) itemInState.displayOrder = i + 1;
        });
        this.state.data.tiers.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
        this.state.saveState();
        this.renderTierManagerList();
        this.renderPortfolioTab();
        this.updateSeriesTierDropdownFilter();
        this.updateWallTierDropdownFilter();
        this.updateBpTierDropdownFilter();
        this.renderSeriesTierPills();
        this.renderBpTierPills();
        this.renderWallTierPills();
        this.renderAll();
        this.showToast('Tier order updated');
      });
    }

    renderTagManagerList() {
      if (!this.tagManagerList) return;
      this.tagManagerList.innerHTML = '';
      const tags = this.state.getTags();
      if (this.tagTotalCount) this.tagTotalCount.textContent = tags.length;

      const tagIcons = {
        wall: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect></svg>',
        series: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
        backpack: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></path><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path><path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"></path><line x1="8" y1="10" x2="16" y2="10"></line></svg>'
      };

      tags.forEach(t => {
        const row = document.createElement('div');
        row.className = 'manager-row';
        row.dataset.key = t.key;
        row.style.cursor = 'pointer';
        const iconSvg = tagIcons[t.key] || '';
        const tagClass = t.key === 'backpack' ? 'tag-bp' : (t.key === 'series' ? 'tag-series' : 'tag-wall');

        row.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="drag-handle" title="Drag to reorder tag" aria-label="Drag handle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="5" r="1.5"></circle>
                <circle cx="9" cy="12" r="1.5"></circle>
                <circle cx="9" cy="19" r="1.5"></circle>
                <circle cx="15" cy="5" r="1.5"></circle>
                <circle cx="15" cy="12" r="1.5"></circle>
                <circle cx="15" cy="19" r="1.5"></circle>
              </svg>
            </div>
            <span class="btn-context-tag is-active ${tagClass}" style="pointer-events: none; margin: 0; padding: 2px 8px; font-size: 11px;">
              ${iconSvg}
              <span>${this.escapeHtml(t.name)}</span>
            </span>
            <div>
              <span style="color:var(--text-muted); font-size: 11px;">(#${t.displayOrder || 1} &bull; ${t.color.toUpperCase()})</span>
            </div>
          </div>
          <div style="display:flex; gap:4px; align-items:center;">
            <button class="btn-secondary edit-tag-btn" style="padding: 2px 8px; font-size: 11px;" title="Edit Tag">Edit</button>
          </div>
        `;

        const editBtn = row.querySelector('.edit-tag-btn');
        if (editBtn) editBtn.addEventListener('click', (e) => { e.stopPropagation(); this.openTagModal(t.key); });
        const handle = row.querySelector('.drag-handle');
        if (handle) handle.addEventListener('click', (e) => e.stopPropagation());
        row.addEventListener('click', () => this.openTagModal(t.key));
        this.tagManagerList.appendChild(row);
      });

      this.setupDraggableList(this.tagManagerList, '.manager-row', (fromIdx, toIdx) => {
        const list = [...tags];
        const moved = list.splice(fromIdx, 1)[0];
        list.splice(toIdx, 0, moved);
        list.forEach((t, i) => {
          this.state.updateTagOrder(t.key, i + 1);
        });
        this.state.saveState();
        this.renderTagManagerList();
        this.renderAll();
        this.showToast('Tag order updated');
      });
    }

    // ------------------------------------------------------------------
    // DYNAMIC FILTER ADAPTATION FOR ACTIVE TAB
    // ------------------------------------------------------------------
    // Series Master Tab Filters
    updateSeriesCategoryDropdownFilter(seriesItems) {
      if (!seriesItems) seriesItems = this.getSeriesCatalogItems();
      const currentVal = this.seriesFilterCategory.value;
      this.seriesFilterCategory.innerHTML = '<option value="">All Categories</option>';
      const cats = [...this.state.data.categories].sort((a, b) => (a.order || 0) - (b.order || 0));
      cats.forEach(c => {
        const count = seriesItems.filter(i => i.categoryId === c.id).length;
        if (count > 0) {
          const opt = document.createElement('option');
          opt.value = c.id;
          opt.textContent = `${c.name} (${count})`;
          this.seriesFilterCategory.appendChild(opt);
        }
      });
      this.seriesFilterCategory.value = currentVal;
    }

    updateSeriesDropdownFilter(seriesItems) {
      if (!seriesItems) seriesItems = this.getSeriesCatalogItems();
      const currentVal = this.seriesFilterSeries.value;
      this.seriesFilterSeries.innerHTML = '<option value="">All Series</option>';

      this.seriesFilterSeries.disabled = false;
      let seriesList = [...this.state.data.series];
      if (this.seriesSelectedCategory) {
        seriesList = seriesList.filter(s => s.categoryId === this.seriesSelectedCategory);
      }
      seriesList.sort((a, b) => a.name.localeCompare(b.name));
      seriesList.forEach(s => {
        const count = seriesItems.filter(i => i.seriesId === s.id).length;
        if (count > 0) {
          const opt = document.createElement('option');
          opt.value = s.id;
          opt.textContent = `${s.name} (${count})`;
          this.seriesFilterSeries.appendChild(opt);
        }
      });

      const exists = seriesList.some(s => s.id === currentVal);
      if (exists) {
        this.seriesFilterSeries.value = currentVal;
        this.seriesSelectedSeries = currentVal;
      } else {
        this.seriesFilterSeries.value = '';
        this.seriesSelectedSeries = '';
      }
    }

    getDynamicTierList() {
      const orderMap = { 'standard': 1, 'featured': 2, 'limited': 3, 'luxury': 4, 'collection': 5 };
      if (this.state.data.tiers && this.state.data.tiers.length) {
        return [...this.state.data.tiers].sort((a, b) => {
          const aOrder = a.displayOrder ?? orderMap[(a.name || '').toLowerCase()] ?? 99;
          const bOrder = b.displayOrder ?? orderMap[(b.name || '').toLowerCase()] ?? 99;
          return aOrder - bOrder;
        }).map(t => t.name);
      }
      return ['Standard', 'Featured', 'Limited', 'Luxury', 'Collection'];
    }

    updateSeriesTierDropdownFilter(seriesItems) {
      if (!seriesItems) seriesItems = this.getSeriesCatalogItems();
      const currentVal = this.seriesFilterTier.value;
      this.seriesFilterTier.innerHTML = '<option value="">All Tiers</option>';
      this.getDynamicTierList().forEach(t => {
        const count = seriesItems.filter(i => (i.tier || '').toLowerCase() === t.toLowerCase()).length;
        const opt = document.createElement('option');
        opt.value = t;
        opt.textContent = `${t} (${count})`;
        this.seriesFilterTier.appendChild(opt);
      });
      this.seriesFilterTier.value = currentVal;
    }

    renderSeriesTierPills(items) {
      if (!this.seriesTierPills) return;
      this.seriesTierPills.innerHTML = '';
      const counts = new Map();
      const tierList = this.getDynamicTierList();
      tierList.forEach(t => counts.set(t, 0));
      items.forEach(i => {
        const info = this.getTierInfo(i.tier);
        counts.set(info.name, (counts.get(info.name) || 0) + 1);
      });

      const allBtn = document.createElement('button');
      allBtn.className = `filter-chip ${!this.seriesSelectedTier ? 'active' : ''}`;
      allBtn.dataset.tier = '';
      allBtn.innerHTML = `All Tiers <span class="chip-badge">${items.length}</span>`;
      allBtn.addEventListener('click', () => {
        this.seriesSelectedTier = '';
        this.seriesFilterTier.value = '';
        this.syncSeriesTierPills();
        this.seriesRenderedCount = BATCH_SIZE;
        this.renderSeriesTab();
      });
      this.seriesTierPills.appendChild(allBtn);

      tierList.forEach(tierName => {
        const info = this.getTierInfo(tierName);
        const count = counts.get(tierName) || 0;
        const btn = document.createElement('button');
        const isActive = (this.seriesSelectedTier || '').toLowerCase() === tierName.toLowerCase();
        btn.className = `filter-chip tier-chip ${info.chipClass} ${isActive ? 'active' : ''}`;
        btn.dataset.tier = tierName;
        btn.innerHTML = `${tierName} <span class="chip-badge">${count}</span>`;
        btn.addEventListener('click', () => {
          this.seriesSelectedTier = (this.seriesSelectedTier.toLowerCase() === tierName.toLowerCase()) ? '' : tierName;
          this.seriesFilterTier.value = this.seriesSelectedTier;
          this.syncSeriesTierPills();
          this.seriesRenderedCount = BATCH_SIZE;
          this.renderSeriesTab();
        });
        this.seriesTierPills.appendChild(btn);
      });
    }

    syncSeriesTierPills() {
      if (!this.seriesTierPills) return;
      this.seriesTierPills.querySelectorAll('.filter-chip').forEach(btn => {
        const t = btn.dataset.tier || '';
        const isActive = (this.seriesSelectedTier || '').toLowerCase() === t.toLowerCase();
        btn.classList.toggle('active', isActive);
      });
    }

    // Wall Tab Dynamic Filters (Adapted to collected items only)
    updateWallCategoryDropdownFilter(collectedGifts) {
      const currentVal = this.wallFilterCategory.value;
      this.wallFilterCategory.innerHTML = '<option value="">All Collected Categories</option>';

      const standaloneCount = collectedGifts.filter(i => !i.categoryId).length;
      if (standaloneCount > 0) {
        const stOpt = document.createElement('option');
        stOpt.value = '__standalone__';
        stOpt.textContent = `Standalone Base (${standaloneCount})`;
        this.wallFilterCategory.appendChild(stOpt);
      }

      const cats = [...this.state.data.categories].sort((a, b) => (a.order || 0) - (b.order || 0));
      cats.forEach(c => {
        const count = collectedGifts.filter(i => i.categoryId === c.id).length;
        if (count > 0) {
          const opt = document.createElement('option');
          opt.value = c.id;
          opt.textContent = `${c.name} (${count})`;
          this.wallFilterCategory.appendChild(opt);
        }
      });
      this.wallFilterCategory.value = currentVal;
    }

    updateWallSeriesDropdownFilter(collectedGifts) {
      const currentVal = this.wallFilterSeries.value;
      this.wallFilterSeries.innerHTML = '<option value="">All Collected Series</option>';

      if (this.wallSelectedCategory === '__standalone__') {
        this.wallFilterSeries.disabled = true;
        this.wallFilterSeries.value = '';
        this.wallSelectedSeries = '';
        return;
      }

      this.wallFilterSeries.disabled = false;
      let seriesList = [...this.state.data.series];
      if (this.wallSelectedCategory) {
        seriesList = seriesList.filter(s => s.categoryId === this.wallSelectedCategory);
      }
      seriesList.sort((a, b) => a.name.localeCompare(b.name));
      seriesList.forEach(s => {
        const count = collectedGifts.filter(i => i.seriesId === s.id).length;
        if (count > 0) {
          const opt = document.createElement('option');
          opt.value = s.id;
          opt.textContent = `${s.name} (${count})`;
          this.wallFilterSeries.appendChild(opt);
        }
      });

      const exists = seriesList.some(s => s.id === currentVal);
      if (exists) {
        this.wallFilterSeries.value = currentVal;
        this.wallSelectedSeries = currentVal;
      } else {
        this.wallFilterSeries.value = '';
        this.wallSelectedSeries = '';
      }
    }

    updateWallTierDropdownFilter(collectedGifts) {
      const currentVal = this.wallFilterTier.value;
      this.wallFilterTier.innerHTML = '<option value="">All Tiers</option>';
      this.getDynamicTierList().forEach(t => {
        const count = collectedGifts.filter(i => (i.tier || '').toLowerCase() === t.toLowerCase()).length;
        const opt = document.createElement('option');
        opt.value = t;
        opt.textContent = `${t} (${count})`;
        this.wallFilterTier.appendChild(opt);
      });
      this.wallFilterTier.value = currentVal;
    }

    renderWallTierPills(collectedGifts) {
      if (!this.wallTierPills) return;
      this.wallTierPills.innerHTML = '';
      const counts = new Map();
      const tierList = this.getDynamicTierList();
      tierList.forEach(t => counts.set(t, 0));
      collectedGifts.forEach(i => {
        const info = this.getTierInfo(i.tier);
        counts.set(info.name, (counts.get(info.name) || 0) + 1);
      });

      const allBtn = document.createElement('button');
      allBtn.className = `filter-chip ${!this.wallSelectedTier ? 'active' : ''}`;
      allBtn.dataset.tier = '';
      allBtn.innerHTML = `All Tiers <span class="chip-badge">${collectedGifts.length}</span>`;
      allBtn.addEventListener('click', () => {
        this.wallSelectedTier = '';
        this.wallFilterTier.value = '';
        this.syncWallTierPills();
        this.wallRenderedCount = BATCH_SIZE;
        this.renderWallTab();
      });
      this.wallTierPills.appendChild(allBtn);

      tierList.forEach(tierName => {
        const info = this.getTierInfo(tierName);
        const count = counts.get(tierName) || 0;
        const btn = document.createElement('button');
        const isActive = (this.wallSelectedTier || '').toLowerCase() === tierName.toLowerCase();
        btn.className = `filter-chip tier-chip ${info.chipClass} ${isActive ? 'active' : ''}`;
        btn.dataset.tier = tierName;
        btn.innerHTML = `${tierName} <span class="chip-badge">${count}</span>`;
        btn.addEventListener('click', () => {
          this.wallSelectedTier = (this.wallSelectedTier.toLowerCase() === tierName.toLowerCase()) ? '' : tierName;
          this.wallFilterTier.value = this.wallSelectedTier;
          this.syncWallTierPills();
          this.wallRenderedCount = BATCH_SIZE;
          this.renderWallTab();
        });
        this.wallTierPills.appendChild(btn);
      });
    }

    syncWallTierPills() {
      if (!this.wallTierPills) return;
      this.wallTierPills.querySelectorAll('.filter-chip').forEach(btn => {
        const t = btn.dataset.tier || '';
        const isActive = (this.wallSelectedTier || '').toLowerCase() === t.toLowerCase();
        btn.classList.toggle('active', isActive);
      });
    }

    // Backpack Dropdowns
    updateBpCategoryDropdownFilter(bpItems) {
      if (!bpItems) bpItems = this.getBackpackCatalogItems();
      const currentVal = this.bpFilterCategory.value;
      this.bpFilterCategory.innerHTML = '<option value="">All Categories</option>';
      const standaloneCount = bpItems.filter(i => !i.categoryId).length;
      if (standaloneCount > 0) {
        const stOpt = document.createElement('option');
        stOpt.value = '__standalone__';
        stOpt.textContent = `Standalone Base (${standaloneCount})`;
        this.bpFilterCategory.appendChild(stOpt);
      }
      const cats = [...this.state.data.categories].sort((a, b) => (a.order || 0) - (b.order || 0));
      cats.forEach(c => {
        const count = bpItems.filter(i => i.categoryId === c.id).length;
        if (count > 0) {
          const opt = document.createElement('option');
          opt.value = c.id;
          opt.textContent = `${c.name} (${count})`;
          this.bpFilterCategory.appendChild(opt);
        }
      });
      this.bpFilterCategory.value = currentVal;
    }

    updateBpSeriesDropdownFilter(bpItems) {
      if (!bpItems) bpItems = this.getBackpackCatalogItems();
      const currentVal = this.bpFilterSeries.value;
      this.bpFilterSeries.innerHTML = '<option value="">All Series</option>';

      if (this.bpSelectedCategory === '__standalone__') {
        this.bpFilterSeries.disabled = true;
        this.bpFilterSeries.value = '';
        this.bpSelectedSeries = '';
        return;
      }

      this.bpFilterSeries.disabled = false;
      let seriesList = [...this.state.data.series];
      if (this.bpSelectedCategory) {
        seriesList = seriesList.filter(s => s.categoryId === this.bpSelectedCategory);
      }
      seriesList.sort((a, b) => a.name.localeCompare(b.name));
      seriesList.forEach(s => {
        const count = bpItems.filter(i => i.seriesId === s.id).length;
        if (count > 0) {
          const opt = document.createElement('option');
          opt.value = s.id;
          opt.textContent = `${s.name} (${count})`;
          this.bpFilterSeries.appendChild(opt);
        }
      });

      const exists = seriesList.some(s => s.id === currentVal);
      if (exists) {
        this.bpFilterSeries.value = currentVal;
        this.bpSelectedSeries = currentVal;
      } else {
        this.bpFilterSeries.value = '';
        this.bpSelectedSeries = '';
      }
    }

    updateBpTierDropdownFilter(bpItems) {
      if (!bpItems) bpItems = this.getBackpackCatalogItems();
      const currentVal = this.bpFilterTier.value;
      this.bpFilterTier.innerHTML = '<option value="">All Tiers</option>';
      this.getDynamicTierList().forEach(t => {
        const count = bpItems.filter(i => (i.tier || '').toLowerCase() === t.toLowerCase()).length;
        const opt = document.createElement('option');
        opt.value = t;
        opt.textContent = `${t} (${count})`;
        this.bpFilterTier.appendChild(opt);
      });
      this.bpFilterTier.value = currentVal;
    }

    renderBpTierPills(items) {
      if (!this.bpTierPills) return;
      this.bpTierPills.innerHTML = '';
      const counts = new Map();
      const tierList = this.getDynamicTierList();
      tierList.forEach(t => counts.set(t, 0));
      items.forEach(i => {
        const info = this.getTierInfo(i.tier);
        counts.set(info.name, (counts.get(info.name) || 0) + 1);
      });

      const allBtn = document.createElement('button');
      allBtn.className = `filter-chip ${!this.bpSelectedTier ? 'active' : ''}`;
      allBtn.dataset.tier = '';
      allBtn.innerHTML = `All Tiers <span class="chip-badge">${items.length}</span>`;
      allBtn.addEventListener('click', () => {
        this.bpSelectedTier = '';
        this.bpFilterTier.value = '';
        this.syncBpTierPills();
        this.bpRenderedCount = BATCH_SIZE;
        this.renderBackpackTab();
      });
      this.bpTierPills.appendChild(allBtn);

      tierList.forEach(tierName => {
        const info = this.getTierInfo(tierName);
        const count = counts.get(tierName) || 0;
        const btn = document.createElement('button');
        const isActive = (this.bpSelectedTier || '').toLowerCase() === tierName.toLowerCase();
        btn.className = `filter-chip tier-chip ${info.chipClass} ${isActive ? 'active' : ''}`;
        btn.dataset.tier = tierName;
        btn.innerHTML = `${tierName} <span class="chip-badge">${count}</span>`;
        btn.addEventListener('click', () => {
          this.bpSelectedTier = (this.bpSelectedTier.toLowerCase() === tierName.toLowerCase()) ? '' : tierName;
          this.bpFilterTier.value = this.bpSelectedTier;
          this.syncBpTierPills();
          this.bpRenderedCount = BATCH_SIZE;
          this.renderBackpackTab();
        });
        this.bpTierPills.appendChild(btn);
      });
    }

    syncBpTierPills() {
      if (!this.bpTierPills) return;
      this.bpTierPills.querySelectorAll('.filter-chip').forEach(btn => {
        const t = btn.dataset.tier || '';
        const isActive = (this.bpSelectedTier || '').toLowerCase() === t.toLowerCase();
        btn.classList.toggle('active', isActive);
      });
    }

    // ------------------------------------------------------------------
    // TIER INFO LOOKUP
    // ------------------------------------------------------------------
    getTierInfo(tier) {
      const clean = (tier || '').trim().toLowerCase();
      if (this.state && this.state.data && Array.isArray(this.state.data.tiers)) {
        const found = this.state.data.tiers.find(t =>
          (t.name && t.name.toLowerCase() === clean) ||
          (t.id && t.id.toLowerCase() === clean)
        );
        if (found) {
          const color = found.color || '#e2e8f0';
          const rgb = this.state.hexToRgb ? this.state.hexToRgb(color) : '226, 232, 240';
          return {
            name: found.name,
            className: `tier-${found.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
            cardClass: `tier-card-${found.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
            chipClass: `tier-chip-${found.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
            color,
            bg: found.bg || `rgba(${rgb}, 0.16)`,
            border: found.border || `rgba(${rgb}, 0.35)`,
            rank: Number(found.rank) || 10
          };
        }
      }

      // Default tier fallbacks (strict v1.0.0 Morphe palette)
      if (clean.includes('collection')) return { name: 'Collection', className: 'tier-collection', cardClass: 'tier-card-collection', chipClass: 'tier-chip-collection', color: '#ef4444', bg: '#450a0a', border: 'rgba(239, 68, 68, 0.35)', rank: 100 };
      if (clean.includes('luxury')) return { name: 'Luxury', className: 'tier-luxury', cardClass: 'tier-card-luxury', chipClass: 'tier-chip-luxury', color: '#facc15', bg: '#422006', border: 'rgba(250, 204, 21, 0.35)', rank: 80 };
      if (clean.includes('limited')) return { name: 'Limited', className: 'tier-limited', cardClass: 'tier-card-limited', chipClass: 'tier-chip-limited', color: '#c084fc', bg: '#3b0764', border: 'rgba(192, 132, 252, 0.35)', rank: 60 };
      if (clean.includes('featured')) return { name: 'Featured', className: 'tier-featured', cardClass: 'tier-card-featured', chipClass: 'tier-chip-featured', color: '#38bdf8', bg: '#0c4a6e', border: 'rgba(56, 189, 248, 0.35)', rank: 40 };
      return { name: 'Standard', className: 'tier-standard', cardClass: 'tier-card-standard', chipClass: 'tier-chip-standard', color: '#e2e8f0', bg: '#1e293b', border: 'rgba(226, 232, 240, 0.25)', rank: 10 };
    }

    // ------------------------------------------------------------------
    // BATCH SCROLL OBSERVERS (60FPS SCROLLING)
    // ------------------------------------------------------------------
    setupBatchObservers() {
      if ('IntersectionObserver' in window) {
        const seriesObserver = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && this.currentTab === 'tab-series') {
            const filtered = this.getFilteredSeriesItems();
            if (this.seriesRenderedCount < filtered.length) {
              this.seriesRenderedCount += BATCH_SIZE;
              this.renderSeriesTab();
            }
          }
        }, { rootMargin: '300px' });
        if (this.seriesScrollSentinel) seriesObserver.observe(this.seriesScrollSentinel);

        const wallObserver = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && this.currentTab === 'tab-wall') {
            const collected = this.getWallCatalogItems();
            const filtered = this.getFilteredWallItems(collected);
            if (this.wallRenderedCount < filtered.length) {
              this.wallRenderedCount += BATCH_SIZE;
              this.renderWallTab();
            }
          }
        }, { rootMargin: '300px' });
        if (this.wallScrollSentinel) wallObserver.observe(this.wallScrollSentinel);

        const bpObserver = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && this.currentTab === 'tab-backpack') {
            const filtered = this.getFilteredBpItems();
            if (this.bpRenderedCount < filtered.length) {
              this.bpRenderedCount += BATCH_SIZE;
              this.renderBackpackTab();
            }
          }
        }, { rootMargin: '300px' });
        if (this.bpScrollSentinel) bpObserver.observe(this.bpScrollSentinel);
      }
    }

    // ------------------------------------------------------------------
    // MODALS: ITEM / CATEGORY / SERIES (MANAGES CATEGORY & SERIES EXCLUSIVELY)
    // ------------------------------------------------------------------
    populateCategorySelects() {
      this.serModalCategory.innerHTML = '<option value="">Select Category</option>';
      const cats = [...this.state.data.categories].sort((a, b) => (a.order || 0) - (b.order || 0));
      cats.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name;
        this.serModalCategory.appendChild(opt);
      });
    }

    populateModalCategorySelect(selectedCatId = '') {
      this.editItemCategory.innerHTML = '<option value="">None / Standalone Base</option>';
      const cats = [...this.state.data.categories].sort((a, b) => (a.order || 0) - (b.order || 0));
      cats.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name;
        this.editItemCategory.appendChild(opt);
      });
      this.editItemCategory.value = selectedCatId || '';
      this.populateModalSeriesSelect(selectedCatId, '');
    }

    populateModalSeriesSelect(categoryId = '', selectedSeriesId = '') {
      if (!categoryId) {
        this.editItemSeries.innerHTML = '<option value="">None / Standalone</option>';
        this.editItemSeries.disabled = true;
        this.editItemSeries.value = '';
        return;
      }

      this.editItemSeries.disabled = false;
      this.editItemSeries.innerHTML = '<option value="">Select Series</option>';
      const sers = this.state.data.series.filter(s => s.categoryId === categoryId).sort((a, b) => a.name.localeCompare(b.name));
      sers.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.id;
        opt.textContent = s.name;
        this.editItemSeries.appendChild(opt);
      });
      this.editItemSeries.value = selectedSeriesId || '';
    }

    getModalSelectedTabs() {
      if (!this.editItemTabsPresets) return ['backpack'];
      const tabs = [];
      this.editItemTabsPresets.querySelectorAll('.tab-preset-btn.active').forEach(btn => {
        if (btn.dataset.tabName) tabs.push(btn.dataset.tabName);
      });
      return tabs;
    }

    setModalSelectedTabs(tabs = []) {
      if (!this.editItemTabsPresets) return;
      const clean = Array.isArray(tabs) ? tabs.map(t => String(t).toLowerCase().trim()) : [];
      const tagList = this.state.getTags();
      this.editItemTabsPresets.innerHTML = tagList.map(t => {
        const isActive = clean.includes(t.key);
        return `<button type="button" class="preset-btn tab-preset-btn ${isActive ? 'active' : ''}" data-tab-name="${t.key}">${this.escapeHtml(t.name)}</button>`;
      }).join('');
    }

    openNewItemModal() {
      this.itemModalTitle.textContent = 'Add New Gift';
      this.editItemId.value = '';
      if (this.modalDeleteBtn) this.modalDeleteBtn.style.display = 'none';
      if (this.editItemDuplicateAlert) this.editItemDuplicateAlert.style.display = 'none';
      this.populateModalCategorySelect('');
      this.editItemName.value = '';
      this.editItemBaseValue.value = '';
      this.editItemMarketWorth.value = '';
      this.editItemQuantity.value = '1';
      this.editItemStarred.checked = false;
      this.editItemTier.value = 'Standard';
      this.populateModalTierPresets('Standard');

      let defaultTabs = ['backpack'];
      if (this.currentTab === 'tab-series') defaultTabs = ['series'];
      else if (this.currentTab === 'tab-wall') defaultTabs = ['wall'];
      this.setModalSelectedTabs(defaultTabs);

      this.openModal('itemModal');
      setTimeout(() => this.editItemName.focus(), 100);
    }

    openEditItemModal(itemId) {
      const item = this.state.getItem(itemId);
      if (!item) return;

      this.itemModalTitle.textContent = 'Edit Gift';
      this.editItemId.value = item.id;
      if (this.modalDeleteBtn) this.modalDeleteBtn.style.display = 'inline-flex';
      if (this.editItemDuplicateAlert) this.editItemDuplicateAlert.style.display = 'none';
      this.populateModalCategorySelect(item.categoryId || '');
      this.populateModalSeriesSelect(item.categoryId || '', item.seriesId || '');
      this.editItemName.value = item.name || '';
      this.editItemBaseValue.value = item.baseValue !== undefined ? item.baseValue : 0;
      this.editItemMarketWorth.value = (item.marketWorth !== undefined && Number(item.marketWorth) > 0) ? item.marketWorth : '';
      this.editItemQuantity.value = (item.quantity !== undefined && Number(item.quantity) > 0) ? item.quantity : '';
      this.editItemStarred.checked = !!item.starred;

      let itemTabs = Array.isArray(item.tabs) ? [...item.tabs] : [];
      if (item.categoryId && item.seriesId && !itemTabs.includes('series')) {
        itemTabs.push('series');
      }
      if (item.wallOwned && !itemTabs.includes('wall')) {
        itemTabs.push('wall');
      }
      if ((Number(item.quantity) || 0) > 0 && !itemTabs.includes('backpack')) {
        itemTabs.push('backpack');
      }
      this.setModalSelectedTabs(itemTabs);

      const t = item.tier || 'Standard';
      this.editItemTier.value = t;
      this.populateModalTierPresets(t);
      this.openModal('itemModal');
    }

    populateModalTierPresets(selectedTier) {
      if (!this.editItemTierPresets) return;
      this.editItemTierPresets.innerHTML = '';
      const tierList = this.getDynamicTierList();
      const cleanSelected = (selectedTier || 'Standard').toLowerCase().trim();

      tierList.forEach(tName => {
        const info = this.getTierInfo(tName);
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `preset-btn tier-preset-btn ${tName.toLowerCase() === cleanSelected ? 'active' : ''}`;
        btn.dataset.tier = tName;
        btn.textContent = tName;
        btn.style.color = info.color;
        btn.addEventListener('click', () => {
          this.editItemTier.value = tName;
          this.setModalTierPresets(tName);
        });
        this.editItemTierPresets.appendChild(btn);
      });
    }

    setModalTierPresets(tier) {
      const clean = (tier || 'Standard').trim().toLowerCase();
      this.editItemTierPresets.querySelectorAll('.tier-preset-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tier.toLowerCase() === clean);
      });
    }

    updateTierPreviewBadge(badgeEl, tier) {
      if (!badgeEl) return;
      const info = this.getTierInfo(tier);
      badgeEl.className = `tier-badge ${info.className}`;
      badgeEl.textContent = info.name;
      badgeEl.style.color = info.color;
      badgeEl.style.backgroundColor = info.bg;
      badgeEl.style.borderColor = info.border;
    }

    handleSaveItem() {
      const id = this.editItemId.value;
      const existingItem = id ? this.state.getItem(id) : null;

      const rawName = this.editItemName.value.trim();
      const name = this.toSmartTitleCase(rawName);
      const rawBase = this.editItemBaseValue.value.trim();
      const rawMarket = this.editItemMarketWorth.value.trim();
      const rawQty = this.editItemQuantity.value.trim();
      const categoryId = this.editItemCategory.value.trim();
      const seriesId = this.editItemSeries.value.trim();
      const selectedTabs = this.getModalSelectedTabs();

      // Strict validation checks
      if (!name) {
        this.showToast('Validation Error: Gift Name is required.');
        this.editItemName.focus();
        return;
      }

      if (rawBase === '' || isNaN(Number(rawBase)) || Number(rawBase) <= 0) {
        this.showToast('Validation Error: Base Coins must be greater than 0.');
        this.editItemBaseValue.focus();
        return;
      }
      const baseCoins = Math.round(Number(rawBase));

      if (rawMarket === '' || isNaN(Number(rawMarket)) || Number(rawMarket) <= 0) {
        this.showToast('Validation Error: Market Worth must be greater than 0.');
        this.editItemMarketWorth.focus();
        return;
      }
      const marketCoins = Math.round(Number(rawMarket));

      const effectiveTabs = Array.isArray(selectedTabs) ? [...selectedTabs] : [];
      if (categoryId && seriesId && this.state.getSeries(seriesId) && !effectiveTabs.includes('series')) {
        effectiveTabs.push('series');
      }

      if (!categoryId && effectiveTabs.length === 0) {
        this.showToast('Validation Error: Standalone gifts must be assigned to Backpack or Wall.');
        return;
      }

      if (effectiveTabs.includes('series')) {
        if (!categoryId || !seriesId || !this.state.getSeries(seriesId)) {
          this.showToast('Validation Error: Series tab requires a valid Category and Series.');
          this.editItemCategory.focus();
          return;
        }
      }

      let qty = (rawQty !== '' && !isNaN(Number(rawQty))) ? Math.max(0, Math.floor(Number(rawQty))) : 0;
      if (effectiveTabs.includes('backpack')) {
        if (qty <= 0) {
          qty = 1;
          this.editItemQuantity.value = '1';
        }
      } else {
        qty = 0;
      }

      const isWallOwned = effectiveTabs.includes('wall');

      const itemData = {
        categoryId,
        seriesId,
        name,
        baseValue: baseCoins,
        marketWorth: marketCoins,
        quantity: qty,
        wallOwned: isWallOwned,
        starred: this.editItemStarred.checked,
        tier: this.editItemTier.value.trim() || 'Standard',
        tabs: effectiveTabs,
        notes: existingItem ? (existingItem.notes || '') : ''
      };

      // Smart Duplicate Check Scoped to Same Series
      const items = this.state.data.items || [];
      const duplicateMatch = items.find(i => 
        i.id !== id && 
        (i.seriesId || '') === seriesId && 
        (i.name || '').trim().toLowerCase() === name.toLowerCase()
      );

      if (duplicateMatch) {
        if (duplicateMatch.baseValue === baseCoins) {
          // Exact duplicate in same series with matching coins: prompt to merge stock
          this.confirmAction(
            'Duplicate Gift Detected',
            `A gift named "${duplicateMatch.name}" with ${baseCoins} coins already exists in this series.\n\nWould you like to merge stock (${qty} units) and collection status into the existing gift instead of creating a duplicate?`,
            () => {
              const scrollY = window.scrollY;
              const mergedQty = (Number(duplicateMatch.quantity) || 0) + qty;
              const mergedWall = duplicateMatch.wallOwned || isWallOwned;
              const mergedStarred = duplicateMatch.starred || this.editItemStarred.checked;
              const mergedTabs = Array.isArray(duplicateMatch.tabs) ? [...duplicateMatch.tabs] : [];
              if (mergedWall && !mergedTabs.includes('wall')) mergedTabs.push('wall');
              if (mergedQty > 0 && !mergedTabs.includes('backpack')) mergedTabs.push('backpack');

              this.state.updateItem(duplicateMatch.id, {
                quantity: mergedQty,
                wallOwned: mergedWall,
                starred: mergedStarred,
                tabs: mergedTabs
              });
              this.closeModal('itemModal');
              this.showToast(`Merged stock into existing "${duplicateMatch.name}"`);
              window.scrollTo({ top: scrollY });
            }
          );
          return;
        } else {
          // Same name but different coin values: prompt as price variant
          this.confirmAction(
            'Price Variant Detected',
            `A gift named "${duplicateMatch.name}" exists in this series with ${duplicateMatch.baseValue} coins.\n\nDo you want to save "${name}" as a distinct coin variation with ${baseCoins} coins?`,
            () => {
              const scrollY = window.scrollY;
              if (id) {
                this.state.updateItem(id, itemData);
                this.showToast(`Updated "${itemData.name}" (${itemData.baseValue} coins)`);
              } else {
                this.state.addItem(itemData);
                this.showToast(`Added variant "${itemData.name}" (${itemData.baseValue} coins)`);
              }
              this.closeModal('itemModal');
              window.scrollTo({ top: scrollY });
            }
          );
          return;
        }
      }

      if (id) {
        // Universal confirmation for saving edits to an existing gift
        this.confirmAction(
          'Confirm Save Changes',
          `Are you sure you want to save changes to "${itemData.name}"?`,
          () => {
            const scrollY = window.scrollY;
            this.state.updateItem(id, itemData);
            this.closeModal('itemModal');
            this.showToast(`Updated "${itemData.name}"`);
            window.scrollTo({ top: scrollY });
          }
        );
      } else {
        // Universal confirmation for adding a brand new gift
        this.confirmAction(
          'Confirm Add New Gift',
          `Are you sure you want to add "${itemData.name}" (${itemData.baseValue} base coins, ${itemData.tier} tier) to the database?`,
          () => {
            const scrollY = window.scrollY;
            this.state.addItem(itemData);
            this.closeModal('itemModal');
            this.showToast(`Added "${itemData.name}" to catalog`);
            window.scrollTo({ top: scrollY });
          }
        );
      }
    }

    handleDeleteItem() {
      const id = this.editItemId.value;
      if (!id) return;
      const item = this.state.getItem(id);
      if (!item) return;

      this.confirmAction(
        'Confirm Delete Gift',
        `Are you sure you want to permanently delete "${item.name}" from the database?`,
        () => {
          const scrollY = window.scrollY;
          this.state.deleteItem(id);
          this.closeModal('itemModal');
          this.showToast(`Deleted "${item.name}"`);
          window.scrollTo({ top: scrollY });
        }
      );
    }

    openCategoryModal(catId = null) {
      if (this.catModalDeleteBtn) {
        this.catModalDeleteBtn.style.display = catId ? 'inline-block' : 'none';
      }
      if (catId) {
        const cat = this.state.getCategory(catId);
        if (!cat) return;
        this.catModalTitle.textContent = 'Edit Category';
        this.catModalId.value = cat.id;
        this.catModalName.value = cat.name;
        if (this.catModalOrder) this.catModalOrder.value = cat.order || 1;
        if (this.catModalDesc) this.catModalDesc.value = cat.description || '';
      } else {
        this.catModalTitle.textContent = 'New Category';
        this.catModalId.value = '';
        this.catModalName.value = '';
        if (this.catModalOrder) this.catModalOrder.value = this.state.data.categories.length + 1;
        if (this.catModalDesc) this.catModalDesc.value = '';
      }
      this.openModal('categoryModal');
      setTimeout(() => this.catModalName.focus(), 100);
    }

    handleSaveCategory() {
      const id = this.catModalId.value;
      const name = this.catModalName.value.trim();
      const existingCat = id ? this.state.getCategory(id) : null;
      const order = existingCat && existingCat.order !== undefined ? existingCat.order : (this.state.data.categories.length + 1);
      const description = this.catModalDesc ? this.catModalDesc.value.trim() : '';
      if (!name) return;

      const actionTitle = id ? 'Confirm Save Category' : 'Confirm New Category';
      const actionMsg = id ? `Save changes to category "${name}"?` : `Create new category "${name}"?`;

      this.confirmAction(actionTitle, actionMsg, () => {
        if (id) {
          this.state.updateCategory(id, { name, order, description });
          this.showToast(`Updated category "${name}"`);
        } else {
          this.state.addCategory({ name, order, description });
          this.showToast(`Created category "${name}"`);
        }
        this.closeModal('categoryModal');
      });
    }

    openSeriesModal(serId = null) {
      this.populateCategorySelects();
      if (this.serModalDeleteBtn) {
        this.serModalDeleteBtn.style.display = serId ? 'inline-block' : 'none';
      }
      if (serId) {
        const ser = this.state.getSeries(serId);
        if (!ser) return;
        this.serModalTitle.textContent = 'Edit Series';
        this.serModalId.value = ser.id;
        this.serModalCategory.value = ser.categoryId || '';
        this.serModalName.value = ser.name;
        if (this.serModalOrder) this.serModalOrder.value = ser.displayOrder !== undefined ? ser.displayOrder : 1;
        this.serModalBadge.value = ser.badge || '';
        this.serModalDesc.value = ser.description || '';
      } else {
        this.serModalTitle.textContent = 'New Series';
        this.serModalId.value = '';
        this.serModalCategory.value = this.state.data.categories[0] ? this.state.data.categories[0].id : '';
        this.serModalName.value = '';
        if (this.serModalOrder) this.serModalOrder.value = this.state.data.series.length + 1;
        this.serModalBadge.value = '';
        this.serModalDesc.value = '';
      }
      this.openModal('seriesModal');
      setTimeout(() => this.serModalName.focus(), 100);
    }

    handleSaveSeries() {
      const id = this.serModalId.value;
      const categoryId = this.serModalCategory.value;
      const name = this.serModalName.value.trim();
      const existingSer = id ? this.state.getSeries(id) : null;
      const displayOrder = existingSer && existingSer.displayOrder !== undefined ? existingSer.displayOrder : (this.state.data.series.length + 1);
      const badge = this.serModalBadge.value.trim();
      const description = this.serModalDesc.value.trim();
      if (!name) return;

      const actionTitle = id ? 'Confirm Save Series' : 'Confirm New Series';
      const actionMsg = id ? `Save changes to series "${name}"?` : `Create new series "${name}"?`;

      this.confirmAction(actionTitle, actionMsg, () => {
        if (id) {
          this.state.updateSeries(id, { categoryId, name, badge, description, displayOrder });
          this.showToast(`Updated series "${name}"`);
        } else {
          this.state.addSeries({ categoryId, name, badge, description, displayOrder });
          this.showToast(`Created series "${name}"`);
        }
        this.closeModal('seriesModal');
      });
    }

    openTierModal(tierId = null) {
      if (this.tierModalDeleteBtn) {
        this.tierModalDeleteBtn.style.display = tierId ? 'inline-block' : 'none';
      }
      if (tierId) {
        const tier = this.state.getTier(tierId);
        if (!tier) return;
        this.tierModalTitle.textContent = 'Edit Tier';
        this.tierModalId.value = tier.id;
        this.tierModalName.value = tier.name;
        this.tierModalRank.value = tier.rank !== undefined ? tier.rank : 10;
        if (this.tierModalOrder) this.tierModalOrder.value = tier.displayOrder !== undefined ? tier.displayOrder : 1;
        if (this.tierModalDesc) this.tierModalDesc.value = tier.description || '';
        const col = tier.color || '#c084fc';
        this.tierModalColorPicker.value = col.startsWith('#') && col.length === 7 ? col : '#c084fc';
        this.tierModalColorHex.value = col;
      } else {
        this.tierModalTitle.textContent = 'New Tier';
        this.tierModalId.value = '';
        this.tierModalName.value = '';
        this.tierModalRank.value = 50;
        if (this.tierModalOrder) this.tierModalOrder.value = (this.state.data.tiers ? this.state.data.tiers.length : 0) + 1;
        if (this.tierModalDesc) this.tierModalDesc.value = '';
        this.tierModalColorPicker.value = '#c084fc';
        this.tierModalColorHex.value = '#c084fc';
      }
      this.populateTierColorPresets();
      this.updateTierModalPreview();
      this.openModal('tierModal');
      setTimeout(() => this.tierModalName.focus(), 100);
    }

    populateTierColorPresets() {
      if (!this.tierColorPalettePresets) return;
      this.tierColorPalettePresets.innerHTML = '';
      const palette = [
        { name: 'Red', hex: '#ef4444' },
        { name: 'Yellow', hex: '#facc15' },
        { name: 'Purple', hex: '#c084fc' },
        { name: 'Deep Violet', hex: '#a855f7' },
        { name: 'Blue', hex: '#38bdf8' },
        { name: 'Cyan', hex: '#06b6d4' },
        { name: 'Orange', hex: '#fb923c' },
        { name: 'Rose', hex: '#f43f5e' },
        { name: 'Light Grey', hex: '#e2e8f0' }
      ];

      const currentHex = (this.tierModalColorHex.value || '#c084fc').toLowerCase();

      palette.forEach(p => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `color-swatch-btn ${p.hex.toLowerCase() === currentHex ? 'active' : ''}`;
        btn.style.backgroundColor = p.hex;
        btn.title = p.name;
        btn.addEventListener('click', () => {
          this.tierModalColorPicker.value = p.hex;
          this.tierModalColorHex.value = p.hex;
          this.tierColorPalettePresets.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.updateTierModalPreview();
        });
        this.tierColorPalettePresets.appendChild(btn);
      });
    }

    updateTierModalPreview() {
      if (!this.tierModalPreviewBadge) return;
      const name = (this.tierModalName.value || 'Preview Tier').trim();
      const color = (this.tierModalColorHex.value || '#c084fc').trim();
      this.tierModalPreviewBadge.textContent = name || 'Preview Tier';
      this.tierModalPreviewBadge.style.color = color;
      const rgb = this.state.hexToRgb ? this.state.hexToRgb(color) : '192, 132, 252';
      this.tierModalPreviewBadge.style.backgroundColor = `rgba(${rgb}, 0.16)`;
      this.tierModalPreviewBadge.style.borderColor = `rgba(${rgb}, 0.45)`;
    }

    handleSaveTier() {
      const id = this.tierModalId.value;
      const name = this.tierModalName.value.trim();
      const rank = Number(this.tierModalRank.value) || 10;
      const existingTier = id ? this.state.getTier(id) : null;
      const displayOrder = existingTier && existingTier.displayOrder !== undefined ? existingTier.displayOrder : ((this.state.data.tiers ? this.state.data.tiers.length : 0) + 1);
      const description = this.tierModalDesc ? this.tierModalDesc.value.trim() : '';
      let color = this.tierModalColorHex.value.trim() || this.tierModalColorPicker.value || '#c084fc';
      if (!name) return;

      const actionTitle = id ? 'Confirm Save Tier' : 'Confirm New Tier';
      const actionMsg = id ? `Save changes to tier "${name}"?` : `Create new tier "${name}"?`;

      this.confirmAction(actionTitle, actionMsg, () => {
        if (id) {
          this.state.updateTier(id, { name, rank, color, displayOrder, description });
          this.showToast(`Updated tier "${name}"`);
        } else {
          this.state.addTier({ name, rank, color, displayOrder, description });
          this.showToast(`Created tier "${name}"`);
        }
        this.closeModal('tierModal');
      });
    }

    handleDeleteTier() {
      const id = this.tierModalId.value;
      if (!id) return;
      const tier = this.state.getTier(id);
      const name = tier ? tier.name : 'this tier';

      this.confirmAction(
        'Confirm Delete Tier',
        `Are you sure you want to delete tier "${name}"? Any gifts classified under this tier will safely revert to Standard.`,
        () => {
          this.state.deleteTier(id);
          this.closeModal('tierModal');
          this.showToast(`Deleted tier "${name}"`);
        }
      );
    }

    openTagModal(tagKey) {
      const tag = this.state.getTag(tagKey);
      if (!tag) return;
      this.tagModalTitle.textContent = `Edit "${tag.name}" Tag`;
      this.tagModalKey.value = tag.key;
      this.tagModalName.value = tag.name;
      const col = tag.color || (tag.key === 'wall' ? '#10b981' : (tag.key === 'series' ? '#06b6d4' : '#f43f5e'));
      this.tagModalColorPicker.value = col.startsWith('#') && col.length === 7 ? col : '#10b981';
      this.tagModalColorHex.value = col;
      this.populateTagColorPresets(tag.key);
      this.updateTagModalPreview();
      this.openModal('tagModal');
      setTimeout(() => this.tagModalName.focus(), 100);
    }

    populateTagColorPresets(tagKey) {
      if (!this.tagColorPalettePresets) return;
      this.tagColorPalettePresets.innerHTML = '';
      const curatedPresets = {
        wall: [
          { name: 'Emerald', hex: '#10b981' },
          { name: 'Neon Mint', hex: '#00f5a0' },
          { name: 'Green', hex: '#22c55e' },
          { name: 'Lime', hex: '#84cc16' },
          { name: 'Teal', hex: '#14b8a6' },
          { name: 'Cyan', hex: '#06b6d4' },
          { name: 'Sky Blue', hex: '#0ea5e9' },
          { name: 'Rose', hex: '#f43f5e' },
          { name: 'Coral', hex: '#ff6b4a' }
        ],
        series: [
          { name: 'Cyan', hex: '#06b6d4' },
          { name: 'Sky Blue', hex: '#0ea5e9' },
          { name: 'Electric Blue', hex: '#38bdf8' },
          { name: 'Indigo', hex: '#6366f1' },
          { name: 'Purple', hex: '#a855f7' },
          { name: 'Emerald', hex: '#10b981' },
          { name: 'Rose', hex: '#f43f5e' },
          { name: 'Orange', hex: '#f97316' },
          { name: 'Teal', hex: '#14b8a6' }
        ],
        backpack: [
          { name: 'Rose', hex: '#f43f5e' },
          { name: 'Coral', hex: '#ff6b4a' },
          { name: 'Orange', hex: '#f97316' },
          { name: 'Pink', hex: '#ec4899' },
          { name: 'Amber', hex: '#fbbf24' },
          { name: 'Emerald', hex: '#10b981' },
          { name: 'Cyan', hex: '#06b6d4' },
          { name: 'Sky Blue', hex: '#0ea5e9' },
          { name: 'Purple', hex: '#a855f7' }
        ]
      };

      const palette = curatedPresets[tagKey] || curatedPresets.wall;
      const currentHex = (this.tagModalColorHex.value || '#10b981').toLowerCase();

      palette.forEach(p => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `color-swatch-btn ${p.hex.toLowerCase() === currentHex ? 'active' : ''}`;
        btn.style.backgroundColor = p.hex;
        btn.title = p.name;
        btn.addEventListener('click', () => {
          this.tagModalColorPicker.value = p.hex;
          this.tagModalColorHex.value = p.hex;
          this.tagColorPalettePresets.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.updateTagModalPreview();
        });
        this.tagColorPalettePresets.appendChild(btn);
      });
    }

    updateTagModalPreview() {
      if (!this.tagModalPreviewBadge) return;
      const key = this.tagModalKey.value || 'wall';
      const name = (this.tagModalName.value || (key.charAt(0).toUpperCase() + key.slice(1))).trim();
      let color = (this.tagModalColorHex.value || this.tagModalColorPicker.value || '#10b981').trim();
      if (!color.startsWith('#')) color = '#' + color;

      const tagIcons = {
        wall: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect></svg>',
        series: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
        backpack: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></path><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path><path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"></path><line x1="8" y1="10" x2="16" y2="10"></line></svg>'
      };

      const icon = tagIcons[key] || '';
      this.tagModalPreviewBadge.innerHTML = `${icon}<span>${this.escapeHtml(name)}</span>`;
      this.tagModalPreviewBadge.style.color = color;
      this.tagModalPreviewBadge.style.backgroundColor = `color-mix(in srgb, ${color} 14%, transparent)`;
      this.tagModalPreviewBadge.style.borderColor = `color-mix(in srgb, ${color} 42%, transparent)`;
    }

    handleSaveTag() {
      const key = this.tagModalKey.value;
      const name = this.tagModalName.value.trim();
      let color = (this.tagModalColorHex.value || this.tagModalColorPicker.value || '#10b981').trim();
      if (!name || !key) return;
      if (!color.startsWith('#')) color = '#' + color;

      this.confirmAction('Confirm Save Tag', `Save changes to "${name}" tag?`, () => {
        this.state.updateTag(key, { name, color });
        this.applyThemeColors();
        this.renderTagManagerList();
        this.renderAll();
        this.closeModal('tagModal');
        this.showToast(`Updated "${name}" tag`);
      });
    }

    openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'flex';
        document.body.classList.add('modal-open');
      }
    }

    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'none';
      if (modalId === 'confirmModal') {
        this.pendingConfirmAction = null;
      }
      const anyOpen = Array.from(document.querySelectorAll('.modal-overlay')).some(m => m.style.display === 'flex');
      if (!anyOpen) {
        document.body.classList.remove('modal-open');
      }
    }

    confirmAction(title, message, onAccept) {
      this.confirmModalTitle.textContent = title;
      this.confirmModalMessage.textContent = message;
      this.pendingConfirmAction = onAccept;
      this.openModal('confirmModal');
    }

    exportDatabaseJSON() {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.state.data, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `hellotalk-gifts-backup-${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      this.showToast('Database exported as JSON backup.');
    }

    handleImportFile(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          this.state.importData(parsed);
          this.showToast('Database successfully imported and restored.');
        } catch (err) {
          alert('Failed to parse JSON file: ' + err.message);
        }
      };
      reader.readAsText(file);
      e.target.value = '';
    }

    toSmartTitleCase(str) {
      if (!str) return '';
      const trimmed = str.trim();
      // If user typed entirely lowercase, capitalize each word nicely
      if (trimmed === trimmed.toLowerCase()) {
        return trimmed.split(' ').map(w => w ? (w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()) : '').join(' ');
      }
      // If string begins with lowercase letter, capitalize first letter
      if (/^[a-z]/.test(trimmed)) {
        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
      }
      return trimmed;
    }

    initDuplicateDetection() {
      let duplicateDebounceTimer;
      if (this.editItemName) {
        this.editItemName.addEventListener('input', () => {
          clearTimeout(duplicateDebounceTimer);
          duplicateDebounceTimer = setTimeout(() => {
            this.checkItemDuplicates();
          }, 150);
        });
      }

      if (this.editItemSeries) {
        this.editItemSeries.addEventListener('change', () => {
          this.checkItemDuplicates();
        });
      }

      if (this.scanDuplicatesBtn) {
        this.scanDuplicatesBtn.addEventListener('click', () => {
          this.scanDuplicates();
        });
      }
    }

    checkItemDuplicates() {
      if (!this.editItemDuplicateAlert || !this.editItemName) return;
      const name = this.editItemName.value.trim();
      const seriesId = this.editItemSeries ? this.editItemSeries.value.trim() : '';
      const currentId = this.editItemId ? this.editItemId.value : '';

      if (!name) {
        this.editItemDuplicateAlert.style.display = 'none';
        return;
      }

      const normName = name.toLowerCase();
      const items = this.state.data.items || [];

      // 1. Same-series match check
      const sameSeriesMatch = items.find(i => 
        i.id !== currentId && 
        (i.seriesId || '') === seriesId && 
        (i.name || '').trim().toLowerCase() === normName
      );

      if (sameSeriesMatch) {
        const ser = this.state.getSeries(sameSeriesMatch.seriesId);
        const serName = ser ? ser.name : 'Current Series';
        this.duplicateWarningText.innerHTML = `⚠️ Conflict: <strong>"${this.escapeHtml(sameSeriesMatch.name)}"</strong> already exists in <em>${this.escapeHtml(serName)}</em> (${sameSeriesMatch.baseValue} coins).`;
        this.duplicateLoadExistingBtn.style.display = 'inline-block';
        this.duplicateLoadExistingBtn.onclick = () => {
          this.openEditItemModal(sameSeriesMatch.id);
        };
        this.editItemDuplicateAlert.style.display = 'flex';
        return;
      }

      // 2. Cross-series informational note (HelloTalk allows duplicate names in different series)
      const otherSeriesMatch = items.find(i => 
        i.id !== currentId && 
        (i.name || '').trim().toLowerCase() === normName
      );

      if (otherSeriesMatch) {
        const ser = this.state.getSeries(otherSeriesMatch.seriesId);
        const serName = ser ? ser.name : 'Another Series';
        this.duplicateWarningText.innerHTML = `ℹ️ Note: <strong>"${this.escapeHtml(otherSeriesMatch.name)}"</strong> exists in <em>${this.escapeHtml(serName)}</em> (${otherSeriesMatch.baseValue} coins). Duplicate names across different series are valid.`;
        this.duplicateLoadExistingBtn.style.display = 'none';
        this.editItemDuplicateAlert.style.display = 'flex';
        return;
      }

      this.editItemDuplicateAlert.style.display = 'none';
    }

    scanDuplicates() {
      if (!this.duplicateAuditResults) return;
      this.duplicateAuditResults.style.display = 'block';
      this.duplicateAuditResults.innerHTML = '<div style="padding: 10px; color: var(--text-muted);">Auditing catalog gifts...</div>';

      const items = this.state.data.items || [];
      const groups = new Map();

      items.forEach(item => {
        const key = (item.seriesId || 'standalone') + ':::' + (item.name || '').trim().toLowerCase();
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(item);
      });

      const duplicateGroups = Array.from(groups.values()).filter(arr => arr.length > 1);

      if (duplicateGroups.length === 0) {
        this.duplicateAuditResults.innerHTML = `
          <div style="padding: 10px 12px; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.35); border-radius: var(--radius-sm); color: #34d399; display: flex; align-items: center; gap: 8px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span><strong>Catalog Integrity Verified:</strong> 0 duplicate gifts found across all series. Total items: ${items.length}.</span>
          </div>
        `;
        return;
      }

      let html = `
        <div style="margin-bottom: 8px; font-weight: 700; color: #f87171;">
          Found ${duplicateGroups.length} duplicate group(s):
        </div>
      `;

      duplicateGroups.forEach(group => {
        const sample = group[0];
        const ser = this.state.getSeries(sample.seriesId);
        const serName = ser ? ser.name : 'Standalone';

        html += `
          <div class="duplicate-audit-group">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-weight: 700; color: var(--text-primary);">${this.escapeHtml(sample.name)} (${this.escapeHtml(serName)})</span>
              <button type="button" class="btn-secondary duplicate-merge-btn" data-group-ids="${group.map(g => g.id).join(',')}" style="font-size: 11px; padding: 3px 8px; color: #60a5fa; border-color: rgba(96, 165, 250, 0.4);">
                Merge into One
              </button>
            </div>
            ${group.map(g => `
              <div class="duplicate-item-row">
                <span style="font-size: 11px; color: var(--text-muted);">
                  ID: ${this.escapeHtml(g.id)} | Base: ${g.baseValue} coins | Qty: ${g.quantity || 0} | Wall: ${g.wallOwned ? 'Yes' : 'No'} | Tier: ${this.escapeHtml(g.tier || 'Standard')}
                </span>
                <button type="button" class="btn-modal-delete" data-delete-id="${g.id}" style="font-size: 10px; padding: 2px 6px;">Delete</button>
              </div>
            `).join('')}
          </div>
        `;
      });

      this.duplicateAuditResults.innerHTML = html;

      // Bind merge action
      this.duplicateAuditResults.querySelectorAll('.duplicate-merge-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const ids = btn.dataset.groupIds.split(',');
          if (ids.length <= 1) return;
          const primaryId = ids[0];
          const primary = this.state.getItem(primaryId);
          if (!primary) return;

          let totalQty = Number(primary.quantity) || 0;
          let anyWall = !!primary.wallOwned;
          let anyStarred = !!primary.starred;

          for (let i = 1; i < ids.length; i++) {
            const other = this.state.getItem(ids[i]);
            if (other) {
              totalQty += Number(other.quantity) || 0;
              if (other.wallOwned) anyWall = true;
              if (other.starred) anyStarred = true;
              this.state.deleteItem(ids[i]);
            }
          }

          const tabs = Array.isArray(primary.tabs) ? [...primary.tabs] : [];
          if (anyWall && !tabs.includes('wall')) tabs.push('wall');
          if (totalQty > 0 && !tabs.includes('backpack')) tabs.push('backpack');

          this.state.updateItem(primaryId, {
            quantity: totalQty,
            wallOwned: anyWall,
            starred: anyStarred,
            tabs: tabs
          });

          this.showToast(`Merged duplicate group into "${primary.name}"`);
          this.scanDuplicates();
        });
      });

      // Bind delete action
      this.duplicateAuditResults.querySelectorAll('[data-delete-id]').forEach(btn => {
        btn.addEventListener('click', () => {
          const delId = btn.dataset.deleteId;
          this.state.deleteItem(delId);
          this.showToast('Deleted duplicate item');
          this.scanDuplicates();
        });
      });
    }

    initGitHubSync() {
      const STORAGE_KEY_TOKEN = 'ht_gh_pat';
      const STORAGE_KEY_LAST_SYNC = 'ht_gh_last_sync';

      const updateUI = () => {
        const token = localStorage.getItem(STORAGE_KEY_TOKEN);
        const lastSync = localStorage.getItem(STORAGE_KEY_LAST_SYNC);

        if (token) {
          if (this.ghSyncStatusBadge) {
            this.ghSyncStatusBadge.className = 'status-badge status-online';
            this.ghSyncStatusBadge.textContent = 'Token Connected';
          }
          if (this.ghClearTokenBtn) this.ghClearTokenBtn.style.display = 'inline-block';
          if (this.ghPatInput && !this.ghPatInput.value) {
            this.ghPatInput.placeholder = '•••••••••••••••••••••••••••• (Saved)';
          }
        } else {
          if (this.ghSyncStatusBadge) {
            this.ghSyncStatusBadge.className = 'status-badge status-offline';
            this.ghSyncStatusBadge.textContent = 'No Token';
          }
          if (this.ghClearTokenBtn) this.ghClearTokenBtn.style.display = 'none';
          if (this.ghPatInput) this.ghPatInput.placeholder = 'Personal Access Token (ghp_...)';
        }

        if (this.ghLastSyncTime) {
          this.ghLastSyncTime.textContent = lastSync ? `Last synced: ${lastSync}` : 'Never synced';
        }
      };

      if (this.ghSaveTokenBtn) {
        this.ghSaveTokenBtn.addEventListener('click', () => {
          const val = this.ghPatInput ? this.ghPatInput.value.trim() : '';
          if (!val) {
            this.showToast('Please enter a GitHub Personal Access Token.');
            return;
          }
          localStorage.setItem(STORAGE_KEY_TOKEN, val);
          if (this.ghPatInput) this.ghPatInput.value = '';
          updateUI();
          this.showToast('GitHub token securely saved in browser storage.');
        });
      }

      if (this.ghClearTokenBtn) {
        this.ghClearTokenBtn.addEventListener('click', () => {
          localStorage.removeItem(STORAGE_KEY_TOKEN);
          if (this.ghPatInput) this.ghPatInput.value = '';
          updateUI();
          this.showToast('GitHub token cleared.');
        });
      }

      if (this.ghPushBtn) {
        this.ghPushBtn.addEventListener('click', () => {
          this.pushToGitHub();
        });
      }

      if (this.ghPullBtn) {
        this.ghPullBtn.addEventListener('click', () => {
          this.pullFromGitHub();
        });
      }

      updateUI();
    }

    async pushToGitHub() {
      const STORAGE_KEY_TOKEN = 'ht_gh_pat';
      const STORAGE_KEY_LAST_SYNC = 'ht_gh_last_sync';
      const token = localStorage.getItem(STORAGE_KEY_TOKEN);

      if (!token) {
        alert('Please save a GitHub Personal Access Token (Fine-grained or classic with "repo" permission) before syncing.');
        if (this.ghPatInput) this.ghPatInput.focus();
        return;
      }

      this.confirmAction(
        'Commit & Deploy to GitHub Pages',
        'Push current database changes (Categories, Series, and 759 Gifts) to GitHub repo "LbsLightX/ht-database"?\\n\\nThis will trigger GitHub Actions to auto-rebuild and update GitHub Pages.',
        async () => {
          const repo = 'LbsLightX/ht-database';
          const filePaths = ['data/hellotalk-gifts.json', 'data/template-seed.json'];
          const commitMessage = `Update database via Web Vault [${new Date().toISOString()}]`;
          const jsonContent = JSON.stringify(this.state.data, null, 2);

          const utf8ToBase64 = (str) => {
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
              return String.fromCharCode(parseInt(p1, 16));
            }));
          };
          const base64Content = utf8ToBase64(jsonContent);

          this.showToast('Connecting to GitHub API...');

          try {
            for (const path of filePaths) {
              const url = `https://api.github.com/repos/${repo}/contents/${path}`;

              let currentSha = null;
              const getRes = await fetch(url, {
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Accept': 'application/vnd.github.v3+json'
                }
              });

              if (getRes.ok) {
                const getData = await getRes.json();
                currentSha = getData.sha;
              } else if (getRes.status !== 404) {
                const errData = await getRes.json().catch(() => ({}));
                throw new Error(`Failed to query ${path}: ${errData.message || getRes.statusText}`);
              }

              const putBody = {
                message: commitMessage,
                content: base64Content,
                branch: 'main'
              };
              if (currentSha) {
                putBody.sha = currentSha;
              }

              const putRes = await fetch(url, {
                method: 'PUT',
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Accept': 'application/vnd.github.v3+json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(putBody)
              });

              if (!putRes.ok) {
                const putErr = await putRes.json().catch(() => ({}));
                throw new Error(`Failed to commit ${path}: ${putErr.message || putRes.statusText}`);
              }
            }

            const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            localStorage.setItem(STORAGE_KEY_LAST_SYNC, nowStr);
            if (this.ghLastSyncTime) this.ghLastSyncTime.textContent = `Last synced: ${nowStr}`;
            this.showToast('🚀 Pushed to GitHub! GitHub Pages is building automatically.');
          } catch (err) {
            alert('GitHub Sync Error: ' + err.message);
          }
        }
      );
    }

    async pullFromGitHub() {
      const STORAGE_KEY_TOKEN = 'ht_gh_pat';
      const STORAGE_KEY_LAST_SYNC = 'ht_gh_last_sync';
      const token = localStorage.getItem(STORAGE_KEY_TOKEN);
      const repo = 'LbsLightX/ht-database';
      const path = 'data/hellotalk-gifts.json';

      this.confirmAction(
        'Pull Latest from GitHub',
        'Pull latest database JSON from repository "LbsLightX/ht-database"? This will update your local browser data.',
        async () => {
          this.showToast('Fetching latest database from GitHub...');
          try {
            const headers = { 'Accept': 'application/vnd.github.v3+json' };
            if (token) headers['Authorization'] = `Bearer ${token}`;

            const url = `https://api.github.com/repos/${repo}/contents/${path}?ref=main&t=${Date.now()}`;
            const res = await fetch(url, { headers });

            if (!res.ok) {
              const errData = await res.json().catch(() => ({}));
              throw new Error(`Failed to fetch database: ${errData.message || res.statusText}`);
            }

            const data = await res.json();
            if (!data.content) throw new Error('Repository response does not contain file content.');

            const base64ToUtf8 = (str) => {
              const binStr = atob(str.replace(/\\s+/g, ''));
              const bytes = new Uint8Array(binStr.length);
              for (let i = 0; i < binStr.length; i++) {
                bytes[i] = binStr.charCodeAt(i);
              }
              return new TextDecoder('utf-8').decode(bytes);
            };

            const rawJson = base64ToUtf8(data.content);
            const parsed = JSON.parse(rawJson);
            this.state.importData(parsed);

            const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            localStorage.setItem(STORAGE_KEY_LAST_SYNC, nowStr);
            if (this.ghLastSyncTime) this.ghLastSyncTime.textContent = `Last synced: ${nowStr}`;

            this.showToast('✅ Successfully pulled and synced latest database from GitHub!');
          } catch (err) {
            alert('GitHub Pull Error: ' + err.message);
          }
        }
      );
    }

    showToast(msg) {
      if (!this.toastContainer) return;
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = msg;
      this.toastContainer.appendChild(toast);
      setTimeout(() => {
        toast.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(8px)';
        setTimeout(() => toast.remove(), 200);
      }, 2400);
    }

    formatNumber(num) {
      return (Number(num) || 0).toLocaleString('en-US');
    }

    escapeHtml(str) {
      return String(str ?? '').replace(/[&<>"']/g, m => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[m]));
    }
  }

  // Boot Application on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new HelloTalkApp());
  } else {
    new HelloTalkApp();
  }
})();
'''

full_app_js = js_header + db_json + js_logic

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(full_app_js)

print('app.js successfully built with Series master catalog, Collected-only Wall, and confirmation dialogs!')
