export const particleConfig = {
    'particles': {
        'number': {
            'value': 20,
            'density': {
                'enable': false
            }
        },
        "color": {
            "value": "#E3E3E3"
        },
        "opacity": {
            "value": 0.2,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        'size': {
            'value': 4,
            'random': true,
            'anim': {
                'speed': 5,
                'size_min': 1
            }
        },
        'line_linked': {
            'enable': false
        },
        'move': {
            'random': true,
            'speed': 1,
            'direction': 'top',
            'out_mode': 'out'
        }
    },
    'interactivity': {
        'events': {
            'onhover': {
                'enable': true,
                'mode': 'bubble'
            },
            'onclick': {
                'enable': true,
                'mode': 'repulse'
            }
        },
        'modes': {
            'bubble': {
                'distance': 250,
                'duration': 20,
                'size': 0,
                'opacity': 0
            },
            'repulse': {
                'distance': 400,
                'duration': 4
            }
        }
    }
};
