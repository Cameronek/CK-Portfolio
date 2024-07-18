import Particles from "react-tsparticles";

const particleBackground = () => {

	const particleOptions = {

				background: {
					color: {
						value: "#dddddd",
					},
				},
				fpsLimit: 60,
				interactivity: {
					detectsOn: "canvas",
					events: {
						resize: true
					},
				},

				particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
    },

	};


	return ( 
	
	<div className = "background"> 

		<Particles 
			style = {{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
			}}
			options={{

				background: {
					color: {
						value: "#282A36",
					},
				},
				fpsLimit: 60,
				interactivity: {
					detectsOn: "canvas",
					events: {
						resize: true
					},
				},

				particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
      fullScreen: {
        enable: false,
      },

    }
			
		}}

			/>
			
			</div>
)}

export default particleBackground;