    console.log('tarba de ta race')
        let sliderCanvas = document.querySelector('.pieces-slider__canvas');
        let imagesEl = [].slice.call(document.querySelectorAll('.pieces-slider__image'));
        let textEl = [].slice.call(document.querySelectorAll('.pieces-slider__text'));
        let slidesLength = imagesEl.length;

        // Define indexes related variables, as we will use indexes to reference items
        let currentIndex = 0,
            currentImageIndex, currentTextIndex, currentNumberIndex;
        let textIndexes = [];
        let numberIndexes = [];

        // Update current indexes for image, text and number
        function updateIndexes() {
            currentImageIndex = currentIndex * 3;
            currentTextIndex = currentImageIndex + 1;
            currentNumberIndex = currentImageIndex + 2;
        }
        updateIndexes();

        // Options for images
        let imageOption = {
            angle: 45, // rotate item pieces 45deg
            exraSpacing: {
                extraX: 100,
                extraY: 200
            }, // this extra spacing is needed to cover all the item, because angle != 0
            pieceWidth: function() {
                return Pieces.random(50, 200);
            }, // every piece will have a random width between 50px and 200px
            ty: function() {
                    return Pieces.random(-400, 400);
                } // every piece will be translated in the Y axis a random distance between -400px and 400px
        }

        // Options for texts
        let textOptions = {
            color: 'white',
            backgroundColor: '#0066CC',
            fontSize: function() {
                return windowWidth > 720 ? 50 : 30;
            },
            padding: '15 20 10 20',
            angle: -45,
            extraSpacing: {
                extraX: 0,
                extraY: 300
            },
            piecesWidth: function() {
                return Pieces.random(50, 200);
            },
            ty: function() {
                return Pieces.random(-200, 200);
            },
            translate: function() {
                if (windowWidth > 1120) return {
                    translateX: 200,
                    translateY: 200
                };
                if (windowWidth > 720) return {
                    translateX: 0,
                    translateY: 200
                };
                return {
                    translateX: 0,
                    translateY: 100
                };
            }
        };

        let numberOptions = {
            color: 'white',
            backgroundColor: '#0066CC',
            backgroundRadius: 300,
            fontSize: function() {
                return windowWidth > 720 ? 100 : 50;
            },
            padding: function() {
                return windowWidth > 720 ? '18 35 10 38' : '18 25 10 28';
            },
            angle: 0,
            piecesSpacing: 2,
            extraSpacing: {
                extraX: 10,
                extraY: 10
            },
            piecesWidth: 35,
            ty: function() {
                return Pieces.random(-200, 200);
            },
            translate: function() {
                if (windowWidth > 1120) return {
                    translateX: -340,
                    translateY: -180
                };
                if (windowWidth > 720) return {
                    translateX: -240,
                    translateY: -180
                };
                return {
                    translateX: -140,
                    translateY: -100
                };
            }
        };

        let items = [];
        let imagesReady = 0;
        for (let i = 0; i < slidesLength; i++) {
            // Wait for all images to load before initializing the slider and event listeners
            let slideImage = new Image();
            slideImage.onload = function() {
                if (++imagesReady == slidesLength) {
                    initSlider();
                    initEvents();
                }
            }


            // Push all elements for each slide with the corresponding options
            items.push({
                type: 'image',
                value: imagesEl[i],
                options: imageOptions
            });
            items.push({
                type: 'text',
                value: textEl[i].innerText,
                options: textOptions
            });
            items.push({
                type: 'text',
                value: i + 1,
                options: numberOptions
            });
            // Save indexes
            textIndexes.push(i * 3 + 1);
            numberIndexes.push(i * 3 + 2);
            // Set image src
            slideImage.src = imagesEl[i].src;

        };
        console.log(sliderCanvas);
        // Save the new Pieces instance
        piecesSlider = new Pieces({
            canvas: sliderCanvas, // CSS selector to get the canvas
            items: items, // the Array of items we've built before
            x: 'centerAll', // center all items in the X axis
            y: 'centerAll', // center all items in the Y axis
            piecesSpacing: 1, // default spacing between pieces
            fontFamily: ["'Helvetica Neue', sans-serif"],
            animation: { // animation options to use in any operation
                duration: function() {
                    return Pieces.random(1000, 2000);
                },
                easing: 'easeOutQuint'
            },
            debug: false // set `debug: true` to enable debug mode
        });

        // Animate all numbers to rotate clockwise indefinitely
        piecesSlider.animateItems({
            items: numberIndexes,
            duration: 20000,
            angle: 360,
            loop: true
        });

        // Show current items: image, text and number
        showItems();

        // Show current items: image, text and number
        function showItems() {
            // Show image pieces

            piecesSlider.showPieces({
                items: currentImageIndex,
                ignore: ['tx'],
                singly: true,
                update: (anim) => {
                    // Stop the pieces animation at 60%, and run a new indefinitely animation of `ty` for each piece
                    if (anim.progress > 60) {
                        let piece = anim.animatables[0].target;
                        let ty = piece.ty;
                        anime.remove(piece);
                        anime({
                            targets: piece,
                            ty: piece.h_ty < 300 ? [{
                                value: ty + 10,
                                duration: 1000
                            }, {
                                value: ty - 10,
                                duration: 2000
                            }, {
                                value: ty,
                                duration: 1000
                            }] : [{
                                value: ty - 10,
                                duration: 1000
                            }, {
                                value: ty + 10,
                                duration: 2000
                            }, {
                                value: ty,
                                duration: 1000
                            }],
                            duration: 2000,
                            easing: 'linear',
                            loop: true
                        });
                    }
                }
            });
            // Show pieces for text and number, using alternate `ty` values
            piecesSlider.showPieces({
                items: currentTextIndex
            });
            piecesSlider.showPieces({
                items: currentNumberIndex,
                ty: function(p, i) {
                    return p.s_ty - [-3, 3][i % 2];
                }
            });
        }

        // Hide current items: image, text and number
        function hideItems() {
            piecesSlider.hidePieces({
                items: [currentImageIndex, currentTextIndex, currentNumberIndex]
            });
        }
