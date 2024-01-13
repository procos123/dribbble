// Function to be executed when an element with class "observed" becomes visible
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add a class to the element when it becomes visible
            entry.target.classList.add('on-screen');
        } else {
            // Remove the class when the element is not visible
            entry.target.classList.remove('on-screen');
        }
    });
}

// Options for the Intersection Observer
const options = {
    root: null, // Use the viewport as the root
    threshold: 0.5, // Trigger when 50% of the section is visible
};

// Create an Intersection Observer with the callback and options
const elementObserver = new IntersectionObserver(handleIntersection, options);

// Observe all elements with class "observed"
const elementsToObserve = document.querySelectorAll('.observed');

// Start observing each section element after 2s when the loader is gone
setTimeout(() => {
    elementsToObserve.forEach(section => {
        elementObserver.observe(section);
    });
}, 1500)



