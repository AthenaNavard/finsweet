/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily:{ IRANSans:['IRANSans']},
      backgroundImage: {
        'card-image': "url('/public/imges/Card (1).png')",
        'card-image2': "url('/public/imges/Rectangle 1313.png')",
        'card-image3': "url('/public/imges/Card.png')",
        'card-left': "url('/public/imges/left-card-vi.png')",
        'card-right': "url('/public/imges/top-card.png')",
        'back': "url('/public/imges/pri-b.png')"

      },

    },
  },
  plugins: [],
}
