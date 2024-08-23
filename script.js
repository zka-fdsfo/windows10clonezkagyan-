
    document.querySelector('.lq').addEventListener('click', function() {
        const vpElement = document.querySelector('.vp');
        const bpElement = document.querySelector('.bp');
        const currentTop = parseInt(window.getComputedStyle(vpElement).top, 10);
        
        if (currentTop === 700) {
            vpElement.style.top = '150px';
            bpElement.style.top = '700px';
        } else {
            vpElement.style.top = '700px';
        }
    });

    document.querySelector('.ghjp').addEventListener('click', function() {
        const bpElement = document.querySelector('.bp');
        const vpElement = document.querySelector('.vp');
        const currentTop = parseInt(window.getComputedStyle(bpElement).top, 10);
        
        if (currentTop === 700) {
            bpElement.style.top = '155px';
            vpElement.style.top = '700px';
        } else {
            bpElement.style.top = '700px';
        }
    });
   

document.addEventListener("DOMContentLoaded", function() {
    var fnp4Elements = document.querySelectorAll('.fnp4');

    fnp4Elements.forEach(function(fnp4) {
        var gdElement = fnp4.querySelector('.gd');
        var y6Element = fnp4.querySelector('.y6');
        var resizers = gdElement.querySelectorAll('.resizer');
        var originalWidth, originalHeight, originalX, originalY, originalMouseX, originalMouseY;

        fnp4.addEventListener('click', function(event) {
            if (event.target.closest('.y6')) {
                gdElement.classList.remove('active');
            } else if (!gdElement.classList.contains('active')) {
                gdElement.classList.add('active');
            }
        });

        resizers.forEach(function(resizer) {
            resizer.addEventListener('mousedown', function(e) {
                e.preventDefault();
                originalWidth = gdElement.offsetWidth;
                originalHeight = gdElement.offsetHeight;
                originalX = gdElement.getBoundingClientRect().left;
                originalY = gdElement.getBoundingClientRect().top;
                originalMouseX = e.clientX;
                originalMouseY = e.clientY;

                window.addEventListener('mousemove', resize);
                window.addEventListener('mouseup', stopResize);

                function resize(e) {
                    if (resizer.classList.contains('bottom-right')) {
                        gdElement.style.width = originalWidth + (e.clientX - originalMouseX) + 'px';
                        gdElement.style.height = originalHeight + (e.clientY - originalMouseY) + 'px';
                    } else if (resizer.classList.contains('bottom-left')) {
                        gdElement.style.width = originalWidth - (e.clientX - originalMouseX) + 'px';
                        gdElement.style.height = originalHeight + (e.clientY - originalMouseY) + 'px';
                        gdElement.style.left = originalX + (e.clientX - originalMouseX) + 'px';
                    } else if (resizer.classList.contains('top-right')) {
                        gdElement.style.width = originalWidth + (e.clientX - originalMouseX) + 'px';
                        gdElement.style.height = originalHeight - (e.clientY - originalMouseY) + 'px';
                        gdElement.style.top = originalY + (e.clientY - originalMouseY) + 'px';
                    } else if (resizer.classList.contains('top-left')) {
                        gdElement.style.width = originalWidth - (e.clientX - originalMouseX) + 'px';
                        gdElement.style.height = originalHeight - (e.clientY - originalMouseY) + 'px';
                        gdElement.style.left = originalX + (e.clientX - originalMouseX) + 'px';
                        gdElement.style.top = originalY + (e.clientY - originalMouseY) + 'px';
                    } else if (resizer.classList.contains('top')) {
                        gdElement.style.height = originalHeight - (e.clientY - originalMouseY) + 'px';
                        gdElement.style.top = originalY + (e.clientY - originalMouseY) + 'px';
                    } else if (resizer.classList.contains('bottom')) {
                        gdElement.style.height = originalHeight + (e.clientY - originalMouseY) + 'px';
                    } else if (resizer.classList.contains('left')) {
                        gdElement.style.width = originalWidth - (e.clientX - originalMouseX) + 'px';
                        gdElement.style.left = originalX + (e.clientX - originalMouseX) + 'px';
                    } else if (resizer.classList.contains('right')) {
                        gdElement.style.width = originalWidth + (e.clientX - originalMouseX) + 'px';
                    }
                }

                function stopResize() {
                    window.removeEventListener('mousemove', resize);
                    window.removeEventListener('mouseup', stopResize);
                }
            });
        });
    });
});


   
document.addEventListener("DOMContentLoaded", function() {
const volumeSlider = document.getElementById('volume-slider');
const volumePercentage = document.getElementById('volume-percentage');

// Function to update the slider background
function updateSliderBackground(value) {
    const percentage = (value / volumeSlider.max) * 100;
    volumeSlider.style.background = `linear-gradient(to right, #007BFF ${percentage}%, #ddd ${percentage}%)`;
}

// Initialize the percentage display and slider background
volumePercentage.textContent = `${volumeSlider.value}%`;
updateSliderBackground(volumeSlider.value);

// Update the percentage display and slider background when the slider value changes
volumeSlider.addEventListener('input', function() {
    volumePercentage.textContent = `${volumeSlider.value}%`;
    updateSliderBackground(volumeSlider.value);
});
});
document.addEventListener("DOMContentLoaded", function() {
// Select the elements
const fnp9Element = document.querySelector('.fnp9');
const qcvElement = document.querySelector('.qcv');

// Ensure qcv is initially hidden
qcvElement.style.display = 'none';

// Add a click event listener to the fnp9 element
fnp9Element.addEventListener('click', function() {
    // Toggle the visibility of the qcv element
    if (qcvElement.style.display === 'none') {
        qcvElement.style.display = 'block'; // Show the element
    } else {
        qcvElement.style.display = 'none'; // Hide the element
    }
});
});
// Toggle active class on
document.addEventListener("DOMContentLoaded", function() {
    var fnp2Elements = document.querySelectorAll('.fnp2');

    fnp2Elements.forEach(function(fnp2) {
        var qwElement = fnp2.querySelector('.qw');
        var y61Element = fnp2.querySelector('.y61');
        var resizers = qwElement.querySelectorAll('.resizer');
        var originalWidth, originalHeight, originalX, originalY, originalMouseX, originalMouseY;

        // Toggle visibility of .qw when clicking on .fnp2
        fnp2.addEventListener('click', function(event) {
            if (event.target.closest('.y61')) {
                qwElement.classList.remove('active');
                qwElement.style.opacity = '0';
                qwElement.style.visibility = 'hidden';
                qwElement.style.top = '-590px';
            } else if (!qwElement.classList.contains('active')) {
                qwElement.classList.add('active');
                qwElement.style.opacity = '1';
                qwElement.style.visibility = 'visible';
                qwElement.style.top = '-590px';
            }
        });

        // Close .qw when clicking on .y61
        y61Element.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click event from propagating to the document
            qwElement.classList.remove('active');
            qwElement.style.opacity = '0';
            qwElement.style.visibility = 'hidden';
            qwElement.style.top = '-620px';
        });

        // Resizing functionality
        resizers.forEach(function(resizer) {
            resizer.addEventListener('mousedown', function(e) {
                e.preventDefault();
                originalWidth = qwElement.offsetWidth;
                originalHeight = qwElement.offsetHeight;
                originalX = qwElement.getBoundingClientRect().left;
                originalY = qwElement.getBoundingClientRect().top;
                originalMouseX = e.clientX;
                originalMouseY = e.clientY;

                window.addEventListener('mousemove', resize);
                window.addEventListener('mouseup', stopResize);

                function resize(e) {
                    if (resizer.classList.contains('bottom-right')) {
                        qwElement.style.width = originalWidth + (e.clientX - originalMouseX) + 'px';
                        qwElement.style.height = originalHeight + (e.clientY - originalMouseY) + 'px';
                    } else if (resizer.classList.contains('bottom-left')) {
                        qwElement.style.width = originalWidth - (e.clientX - originalMouseX) + 'px';
                        qwElement.style.height = originalHeight + (e.clientY - originalMouseY) + 'px';
                        qwElement.style.left = originalX + (e.clientX - originalMouseX) + 'px';
                    } else if (resizer.classList.contains('top-right')) {
                        qwElement.style.width = originalWidth + (e.clientX - originalMouseX) + 'px';
                        qwElement.style.height = originalHeight - (e.clientY - originalMouseY) + 'px';
                        qwElement.style.top = originalY + (e.clientY - originalMouseY) + 'px';
                    } else if (resizer.classList.contains('top-left')) {
                        qwElement.style.width = originalWidth - (e.clientX - originalMouseX) + 'px';
                        qwElement.style.height = originalHeight - (e.clientY - originalMouseY) + 'px';
                        qwElement.style.left = originalX + (e.clientX - originalMouseX) + 'px';
                        qwElement.style.top = originalY + (e.clientY - originalMouseY) + 'px';
                    } else if (resizer.classList.contains('top')) {
                        qwElement.style.height = originalHeight - (e.clientY - originalMouseY) + 'px';
                        qwElement.style.top = originalY + (e.clientY - originalMouseY) + 'px';
                    } else if (resizer.classList.contains('bottom')) {
                        qwElement.style.height = originalHeight + (e.clientY - originalMouseY) + 'px';
                    } else if (resizer.classList.contains('left')) {
                        qwElement.style.width = originalWidth - (e.clientX - originalMouseX) + 'px';
                        qwElement.style.left = originalX + (e.clientX - originalMouseX) + 'px';
                    } else if (resizer.classList.contains('right')) {
                        qwElement.style.width = originalWidth + (e.clientX - originalMouseX) + 'px';
                    }
                }

                function stopResize() {
                    window.removeEventListener('mousemove', resize);
                    window.removeEventListener('mouseup', stopResize);
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var fnp3Elements = document.querySelectorAll('.fnp3');

    fnp3Elements.forEach(function(fnp3) {
        var epElement = fnp3.querySelector('.ep');
        var y62Element = fnp3.querySelector('.y62');
        var resizers = epElement.querySelectorAll('.resizer');
        var originalWidth, originalHeight, originalX, originalY, originalMouseX, originalMouseY;

        // Toggle visibility of .ep when clicking on .fnp3
        fnp3.addEventListener('click', function(event) {
            if (event.target.closest('.y62')) {
                epElement.classList.remove('active');
                epElement.style.opacity = '0';
                epElement.style.visibility = 'hidden';
                epElement.style.top = '-590px';
            } else if (!epElement.classList.contains('active')) {
                epElement.classList.add('active');
                epElement.style.opacity = '1';
                epElement.style.visibility = 'visible';
                epElement.style.top = '-590px';
            }
        });

        // Close .ep when clicking on .y62
        y62Element.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click event from propagating to the document
            epElement.classList.remove('active');
            epElement.style.opacity = '0';
            epElement.style.visibility = 'hidden';
            epElement.style.top = '-620px';
        });

        // Resizing functionality
        resizers.forEach(function(resizer) {
            resizer.addEventListener('mousedown', function(e) {
                e.preventDefault();
                originalWidth = epElement.offsetWidth;
                originalHeight = epElement.offsetHeight;
                originalX = epElement.getBoundingClientRect().left;
                originalY = epElement.getBoundingClientRect().top;
                originalMouseX = e.clientX;
                originalMouseY = e.clientY;

                window.addEventListener('mousemove', resize);
                window.addEventListener('mouseup', stopResize);

                function resize(e) {
                    if (resizer.classList.contains('bottom-right')) {
                        epElement.style.width = originalWidth + (e.clientX - originalMouseX) + 'px';
                        epElement.style.height = originalHeight + (e.clientY - originalMouseY) + 'px';
                    } else if (resizer.classList.contains('bottom-left')) {
                        epElement.style.width = originalWidth - (e.clientX - originalMouseX) + 'px';
                        epElement.style.height = originalHeight + (e.clientY - originalMouseY) + 'px';
                        epElement.style.left = originalX + (e.clientX - originalMouseX) + 'px';
                    } else if (resizer.classList.contains('top-right')) {
                        epElement.style.width = originalWidth + (e.clientX - originalMouseX) + 'px';
                        epElement.style.height = originalHeight - (e.clientY - originalMouseY) + 'px';
                        epElement.style.top = originalY + (e.clientY - originalMouseY) + 'px';
                    } else if (resizer.classList.contains('top-left')) {
                        epElement.style.width = originalWidth - (e.clientX - originalMouseX) + 'px';
                        epElement.style.height = originalHeight - (e.clientY - originalMouseY) + 'px';
                        epElement.style.left = originalX + (e.clientX - originalMouseX) + 'px';
                        epElement.style.top = originalY + (e.clientY - originalMouseY) + 'px';
                    } else if (resizer.classList.contains('top')) {
                        epElement.style.height = originalHeight - (e.clientY - originalMouseY) + 'px';
                        epElement.style.top = originalY + (e.clientY - originalMouseY) + 'px';
                    } else if (resizer.classList.contains('bottom')) {
                        epElement.style.height = originalHeight + (e.clientY - originalMouseY) + 'px';
                    } else if (resizer.classList.contains('left')) {
                        epElement.style.width = originalWidth - (e.clientX - originalMouseX) + 'px';
                        epElement.style.left = originalX + (e.clientX - originalMouseX) + 'px';
                    } else if (resizer.classList.contains('right')) {
                        epElement.style.width = originalWidth + (e.clientX - originalMouseX) + 'px';
                    }
                }

                function stopResize() {
                    window.removeEventListener('mousemove', resize);
                    window.removeEventListener('mouseup', stopResize);
                }
            });
        });
    });
});


let timeElement = document.getElementById("time");
let dateElement = document.getElementById("date");

let d = new Date();

// Time in 12-hour format without AM/PM
let options = { hour: '2-digit', minute: '2-digit', hour12: true };
let timeString = d.toLocaleTimeString([], options);

// Remove AM/PM from timeString
timeString = timeString.replace(/(AM|PM)/, '').trim();

// Date with day of the week, month, and day
let dateString = d.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });

timeElement.innerHTML = timeString;
dateElement.innerHTML = dateString;



document.addEventListener('DOMContentLoaded', function() {
    var lock = document.querySelector('.lock');
    var lock2 = document.querySelector('.lock2');

    lock.addEventListener('click', function() {
        if (lock2.style.display === 'none' || lock2.style.display === '') {
            lock2.style.display = 'block'; // Show lock2
        } else {
            lock2.style.display = 'none'; // Hide lock2
        }
    });
});




document.addEventListener('DOMContentLoaded', (event) => {
    const sinDiv = document.querySelector('.sin');
    const asdDiv = document.querySelector('.asd');
    const lockDiv = document.querySelector('.lock');
    const lock2Div = document.querySelector('.lock2');

    sinDiv.addEventListener('click', () => {
        // Toggle visibility of the asd div
        if (asdDiv.style.display === 'none' || asdDiv.style.display === '') {
            asdDiv.style.display = 'block';
        } else {
            asdDiv.style.display = 'none';
        }

        // Hide the lock and lock2 divs
        lockDiv.style.display = 'none';
        lock2Div.style.display = 'none';
    });
});

let gop = document.getElementsByClassName("gop")[0];
let song = document.getElementById("song");
let ctrlicon = document.getElementById("ctrlicon");
let currentTimeDisplay = document.getElementById("current-time");
let durationDisplay = document.getElementById("duration");

// Function to format time in MM:SS format
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    if (secs < 10) secs = '0' + secs;
    return minutes + ':' + secs;
}

// Set up when metadata is loaded
song.onloadedmetadata = function() {
    gop.max = song.duration;
    gop.value = song.currentTime;
    durationDisplay.textContent = formatTime(song.duration);
};

// Update the current time as the song plays
song.ontimeupdate = function() {
    gop.value = song.currentTime;
    currentTimeDisplay.textContent = formatTime(song.currentTime);
};

// Play/pause functionality
function playPause() {
    if (ctrlicon.classList.contains("fa-pause")) {
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
    } else {
        song.play();
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
    }
}

// Restart the song from the beginning
function restartSong() {
    song.currentTime = 0; // Reset the song to the beginning
    gop.value = 0; // Reset the range input to the beginning
    currentTimeDisplay.textContent = formatTime(song.currentTime); // Update the time display
    if (song.paused) {
        song.play(); // Start playing if the song was paused
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
    }
}

// Event listener for changing the value of the range input
gop.addEventListener('input', function() {
    song.currentTime = gop.value; // Jump to the position specified by the range input
    currentTimeDisplay.textContent = formatTime(song.currentTime); // Update the time display
    if (!song.paused) {
        song.play(); // Continue playing from the new position if the song was playing
    }
});

document.querySelector(".lock2").addEventListener("click", function() {
    const maincon = document.querySelector(".maincon");
    maincon.style.top = "455px";
});


var loader = document.getElementById("pre");
		window.addEventListener("load",function(){
          loader.style.display="none";
		  
		});


document.addEventListener("DOMContentLoaded", function() {
    var fnp2Elements = document.querySelectorAll('.fnp2');

    fnp2Elements.forEach(function(fnp2) {
        var qwElement = fnp2.querySelector('.qw');
        var y61Element = fnp2.querySelector('.y61');
        var resizers = qwElement.querySelectorAll('.resizer');
        var originalWidth, originalHeight, originalX, originalY, originalMouseX, originalMouseY;

        // Function to update the top position based on screen width using media query
        function updateTopPosition() {
            var mediaQuery = window.matchMedia("(max-width: 900px)");
            if (mediaQuery.matches) {
                qwElement.style.top = '-304px';
            } else {
                qwElement.style.top = '-590px';
            }
        }

        // Initial call to set the top position based on the current screen width
        updateTopPosition();

        // Listen for window resize events to adjust the top position dynamically
        window.addEventListener('resize', updateTopPosition);

        // Toggle visibility of .qw when clicking on .fnp2
        fnp2.addEventListener('click', function(event) {
            if (event.target.closest('.y61')) {
                qwElement.classList.remove('active');
                qwElement.style.opacity = '0';
                qwElement.style.visibility = 'hidden';
                updateTopPosition();  // Ensure top position is updated when hiding
            } else if (!qwElement.classList.contains('active')) {
                qwElement.classList.add('active');
                qwElement.style.opacity = '1';
                qwElement.style.visibility = 'visible';
                updateTopPosition();  // Ensure top position is updated when showing
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var fnp2Elements = document.querySelectorAll('.fnp2');

    fnp2Elements.forEach(function(fnp2) {
        var qwElement = fnp2.querySelector('.qw');
        var y61Element = fnp2.querySelector('.y61');

        // Function to determine the top value based on screen width
        function getTopValue() {
            return window.matchMedia("(max-width: 900px)").matches ? '-304px' : '-590px';
        }

        // Toggle visibility of .qw when clicking on .fnp2
        fnp2.addEventListener('click', function(event) {
            if (event.target.closest('.y61')) {
                qwElement.classList.remove('active');
                qwElement.style.opacity = '0';
                qwElement.style.visibility = 'hidden';
            } else if (!qwElement.classList.contains('active')) {
                qwElement.classList.add('active');
                qwElement.style.opacity = '1';
                qwElement.style.visibility = 'visible';
            }

            // Apply the top value based on the current screen width
            qwElement.style.top = getTopValue();
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var fnp3Elements = document.querySelectorAll('.fnp3');

    fnp3Elements.forEach(function(fnp3) {
        var epElement = fnp3.querySelector('.ep');
        var y62Element = fnp3.querySelector('.y62');

        // Function to determine the top value based on screen width
        function getTopValue() {
            return window.matchMedia("(max-width: 900px)").matches ? '-304px' : '-590px';
        }

        // Toggle visibility of .ep when clicking on .fnp3
        fnp3.addEventListener('click', function(event) {
            if (event.target.closest('.y62')) {
                epElement.classList.remove('active');
                epElement.style.opacity = '0';
                epElement.style.visibility = 'hidden';
            } else if (!epElement.classList.contains('active')) {
                epElement.classList.add('active');
                epElement.style.opacity = '1';
                epElement.style.visibility = 'visible';
            }

            // Apply the top value based on the current screen width
            epElement.style.top = getTopValue();
        });
    });
});




document.querySelector(".lock2").addEventListener("click", function() {
    const maincon = document.querySelector(".maincon");

    // Function to determine the top value based on screen width
    function getTopValue() {
        return window.matchMedia("(max-width: 900px)").matches ? '223px' : '455px';
    }

    // Apply the top value based on the current screen width
    maincon.style.top = getTopValue();
});



document.querySelector(".lock2").addEventListener("click", function() {
    const maincon = document.querySelector(".maincon");

    // Check if the screen height is 304px or less
    if (window.matchMedia("(max-height: 304px)").matches) {
        maincon.style.top = "183px";
    } else {
        maincon.style.top = "455px";
    }
});


document.querySelector(".lock2").addEventListener("click", function() {
    const maincon = document.querySelector(".maincon");

    // Check if the screen height is 304px or less
    if (window.matchMedia("(max-height:339px)").matches) {
        maincon.style.top = "183px";
    } else {
        maincon.style.top = "455px";
    }
});
