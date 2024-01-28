const mongoose = require("mongoose");

const worldSchema = new mongoose.Schema({
  name: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  rotation: {
    x: {
      type: Number,
      default: 345,
    },
    y: {
      type: Number,
      default: 40,
    },
  },
  position: {
    top: {
      type: Number,
      default: 400,
    },
    left: {
      type: Number,
      default: 250,
    },
  },
  hotbar: {
    active: {
      type: Number,
      default: 1,
    },
    slots: {
      slot1: {
        type: String,
        default: null,
      },
      slot2: {
        type: String,
        default: null,
      },
      slot3: {
        type: String,
        default: null,
      },
      slot4: {
        type: String,
        default: null,
      },
      slot5: {
        type: String,
        default: null,
      },
      slot6: {
        type: String,
        default: null,
      },
      slot7: {
        type: String,
        default: null,
      },
      slot8: {
        type: String,
        default: null,
      },
      slot9: {
        type: String,
        default: null,
      },
    },
  },
  blockmap: [
    {
      position: String,
      block: String,
    },
  ],
});

const World = mongoose.model("World", worldSchema);

module.exports = World;
