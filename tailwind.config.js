/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        "drop-in": {
                    "0%": {
                        opacity: "0",
                        transform: "scale(0)",
                        animationTimingFunction: "cubic-bezier(0.34, 1.61, 0.7, 1)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "scale(1)",
                    },
                },
                "fade-in-down": {
                  "0%": {
                      opacity: 0,
                      transform: "translate3d(0, -100%, 0)",
                  },
                  "100%": {
                      opacity: 1,
                      transform: "translate3d(0, 0, 0)",
                  },
              },
        
    
                        "fade-in-left": {
                          "0%": {
                              opacity: 0,
                              transform: "translate3d(-100%, 0, 0)",
                          },
                          "100%": {
                              opacity: 1,
                              transform: "translate3d(0, 0, 0)",
                          },
                      },
                      "fade-in-right": {
                        "0%": {
                            opacity: 0,
                            transform: "translate3d(100%, 0, 0)",
                        },
                        "100%": {
                            opacity: 1,
                            transform: "translate3d(0, 0, 0)",
                        },
                    },
                  
      },
      boxShadow: {
        'around': 'rgba(100, 100, 111, 0.2) 4px 4px 22px -6px',
        'around2': 'rgba(100, 100, 111, 0.2) -19px -3px 21px -12px',
      },
      animation:{
        dropin: 'drop-in 1s ease-in-out 0.25s 1',
        fadeindown: 'fade-in-down 0.8s ease-in 0.25s forwards ',
        fadeinleft: 'fade-in-left 1.4s ease-in-out 1s forwards ',
        fadeinright: 'fade-in-right 1.4s ease-in-out 1s forwards',
      }
    },
  },
  plugins: [],
}