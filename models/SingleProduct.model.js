const mongoose = require("mongoose");

const singleProductSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: false,
    },
    images: [
      {
        id: {
          type: String,
          required: true,
        },
        filename: {
          type: String,
          required: true,
        },
        height: {
          type: Number,
          required: false,
        },
        size: {
          type: Number,
          required: true
        },
        thumbnails: [
          {
            full: [
              {
                height: {
                  type: Number,
                  required: false
                },
                url: {
                  type: String,
                  required: false
                },
                width: {
                  type: Number,
                  required: false
                },
              },
            ],
            large: [
              {
                height: {
                  type: Number,
                  required: false
                },
                url: {
                  type: String,
                  required: false
                },
                width: {
                  type: Number,
                  required: false
                },
              }
            ],
            small: [
              {
                height: {
                  type: Number,
                  required: false
                },
                url: {
                  type: String,
                  required: false
                },
                width: {
                  type: Number,
                  required: false
                },
              }
            ],
            type: {
              type: String,
              required: false
            },
            url: {
              type: String,
              required: false
            },
            width: {
              type: Number,
              required: false
            },
          }
        ]
      },
    ],
    shipping: {    ////перевозки, доставка
      type: Boolean,
      required: false,
    },
    colors: [
      {
        type: String,
        required: true,
      }
    ],
    reviews: {
      type: Number,
      required: false,
    },
    stars: {
      type: Number,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
  },
);

const SingleProduct = mongoose.model("SingleProduct", singleProductSchema);
module.exports = SingleProduct;

