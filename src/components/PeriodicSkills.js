import React, { Component } from 'react'
import * as THREE from "three";
import { CSS3DObject, CSS3DRenderer } from 'three-css3drenderer';
import TrackballControls from 'three-trackballcontrols';
import { table } from "../data/skillsThree";
import * as TWEEN from 'tween.js'
import DestrucBtn from './DestrucBtn';

class PeriodicSkills extends Component {


    componentDidMount(){
        
        // THREE PARAMETRES
        let scene, camera, renderer, controls;
        const objects = [];
        const targets = {
            grid: [],
            helix: [],
            table:[],
            sphere:[]
        };
        const container = document.getElementById('periodic-container');
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        init();
        animation();
        onWindowResize()

        function init(){
            
            const felidView = 40;
            
            const aspect = width / height;
            const nearPlane = 0.1;
            const farPlane = 1000;
            const WebGloutput = container;

            scene = new THREE.Scene();
            
            camera = new THREE.PerspectiveCamera( felidView, aspect, nearPlane, farPlane);
            camera.position.z = 1500;
       
        //ELEMENTS
        
            for( let i=0; i < table.length; i +=5 ) {
                const element = document.createElement('div');
                element.className = 'element';
                element.style.backgroundColor = `rgba(0, 127, 127, ${ Math.random() * 0.5 + 0.25})`;

                const number = document.createElement('div');
                number.className = 'number';
                number.textContent = i / 5 + 1;
                element.appendChild(number);

                const symbol = document.createElement('div');
                symbol.className = 'symbol';
                symbol.textContent = table[ i ];
                element.appendChild(symbol);

                const detail = document.createElement('div');
                detail.className = 'detail';
                detail.innerHTML = `${ table[ i+1 ]} <br/> ${ table[ i+2 ]}`;
                element.appendChild(detail);

                const card = new CSS3DObject( element );
                card.position.x = Math.random() * width - (width/2);
                card.position.y = Math.random() * 1000 - 600 ;
                card.position.z = Math.random() * 1000 - 800;

                scene.add(card);
                objects.push( card );

                //TABLE

                const object = new THREE.Object3D();
                object.position.x = table[i + 3] * 140 - (width/3); 
                object.position.y = -table[i + 4] * 180 + (height/1.5); 
                object.position.z = 0;

                targets.table.push(object);
            } 

    
            
            

    //SPHERE
            function sphere(){
                const vector = new THREE.Vector3();

                for (let i =0; i< objects.length; ++i){
                    let phi = Math.acos(-1 + ( 2 * i )/ objects.length);
                    let theta = Math.sqrt( objects.length * Math.PI ) * phi;
                    
                    var object = new THREE.Object3D();

                    object.position.x = 800 * Math.cos( theta ) * Math.sin( phi );
                    object.position.y = 800 * Math.sin( theta ) * Math.sin( phi ); 
                    object.position.z = 800 * Math.cos( phi );

                    //rotation object

                    vector.copy( object.position ).multiplyScalar(2);
                    object.lookAt( vector );
                    targets.sphere.push( object );
                }
            }
            sphere()
    // HELIX
            function helix(){
                const vector = new THREE.Vector3();

                for(let i=0; i<objects.length; ++i){

                    let phi = i * 0.739 + Math.PI;
                    const object = new THREE.Object3D();
                    object.position.x = 800  * Math.sin( phi );
                    object.position.y = -( i * 8 ) + 50;
                    object.position.z = 800  * Math.cos( phi + Math.PI );
            
                    object.scale.set( 1.1, 1.1, 1.1 );
            
                    vector.x = object.position.x * 2;
                    vector.y = object.position.y;
                    vector.z = object.position.z * 2;
            
                    object.lookAt( vector );
                    targets.helix.push( object );

                }
            }
            
            helix()
    //GRID 
            
                for (let i =0 ; i<objects.length; i++ ) {
    
                    const object = new THREE.Object3D();
            
                    object.position.x =  360  * ( i   % 3) - 350;
	                object.position.y = -360  * ( ( i /  3 >> 0 ) % 3 ) + 350;
	                object.position.z = -700  * ( i / 9 >> 0 );

            
                    targets.grid.push( object );
                    
                }


                //RENDERER
                renderer = new CSS3DRenderer();
                renderer.setSize( width, height);
                renderer.domElement.style.position = 'absolute';
                WebGloutput.appendChild( renderer.domElement);
            
                //CAMERA CONTROLE
                controls = new TrackballControls( camera, renderer.domElement );
				controls.rotateSpeed = 2;
				controls.minDistance = 1000;
				controls.maxDistance = 4000;
				controls.addEventListener( 'change', render );

            const gridBtn = document.getElementById('grid');
            const tableBtn = document.getElementById('table');
            const helixBtn = document.getElementById('helix');
            const sphereBtn = document.getElementById('sphere');

            
            gridBtn.addEventListener('click', function() { transform( targets.grid, 2000 )}, false );
            tableBtn.addEventListener('click', function() { transform( targets.table, 2000 ) }, false );
            helixBtn.addEventListener('click', function() { transform( targets.helix, 2000 ) }, false );
            sphereBtn.addEventListener('click', function() { transform( targets.sphere, 2000 ) }, false );

            transform( targets.table, 2000 );
        };
        
        function transform( targets, duration){
            TWEEN.removeAll();

            for(let i = 0; i< objects.length; ++i){
                let object = objects[i];
                let target = targets[i];

                new TWEEN.Tween(object.position)
                    .to({ x: target.position.x, y: target.position.y, z: target.position.z}, Math.random() * duration + duration)
                    .easing( TWEEN.Easing.Exponential.InOut )
                    .start();

                new TWEEN.Tween( object.rotation )
	                .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z },Math.random() * duration + duration )
	                .easing( TWEEN.Easing.Exponential.InOut )
	                .start();

            }

        
            new TWEEN.Tween({})
                .to({}, duration * 2)
                .onUpdate( render )
                .start();
        }

        function render() {

            renderer.render( scene, camera );

        }

        function onWindowResize(){
            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize( width, height);
            render();
        }
        

        function animation(){
            requestAnimationFrame( animation );
            TWEEN.update();
            controls.update();
            
        }

    
    }
    

    render () {
        
        return (
            <div id="periodic-container">
    	     
                <div id="menu">
                    <div id="table"><DestrucBtn word={"TABLE"}/></div>
                    <div id="sphere"><DestrucBtn word={"SPHERE"}/></div>
                    <div id="helix"><DestrucBtn word={"HELIX"}/></div>
                    <div id="grid"><DestrucBtn word={"GRID"}/></div>
                </div>
            </div>
        )
    }
}

export default PeriodicSkills;