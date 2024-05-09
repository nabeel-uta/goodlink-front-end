document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dropdown-toggle').forEach(function(dropToggle) {
        dropToggle.addEventListener('click', function() {
            this.classList.toggle('show');
        });
    });

    document.querySelectorAll('.profile-text .dropdown-toggle').forEach(function(profileDropToggle) {
        profileDropToggle.addEventListener('click', function() {
            this.classList.toggle('show');
            document.querySelector('.profile-menu').classList.toggle('show');
        });
    });
    
    // Add event listener to the main wrapper to detect hover-class removal
    document.querySelector('.sidebar').addEventListener('transitionend', function(event) {
        // Check if the event target is the main wrapper and the hover-class has been removed
        if (event.target === this && !this.classList.contains('hover-class')) {
            // Remove the 'show' class from the profile menu
            document.querySelector('.profile-menu').classList.remove('show');
        }
    });

    document.querySelectorAll('.profile-menu li').forEach(function(profileMenuItem) {
        profileMenuItem.addEventListener('click', function() {
            document.querySelectorAll('.profile-menu li').forEach(function(item) {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    document.querySelectorAll('.notification-wrapper').forEach(function(notificationWrapper) {
        notificationWrapper.addEventListener('click', function() {
            this.closest('.sidebar').classList.add('open');
        });
    });

    document.querySelectorAll('.close-btn').forEach(function(closeButton) {
        closeButton.addEventListener('click', function() {
            this.closest('.sidebar').classList.remove('open');
            this.closest('.sidebar').classList.add('hover-class');
        });
    });

    // document.querySelectorAll('.notification-dropdown').forEach(function(notificationDropdown) {
    //     notificationDropdown.addEventListener('click', function() {
    //         this.classList.toggle('show');
    //     });
    // });
});


// Get the sidebar element
var sidebar = document.getElementById('sidebar');

// Add event listeners for mouseenter and mouseleave
sidebar.addEventListener('mouseenter', function () {
  sidebar.classList.add('hover-class');
});

sidebar.addEventListener('mouseleave', function () {
  sidebar.classList.remove('hover-class');
});

document.addEventListener('DOMContentLoaded', function() {
    var modal_2 = document.querySelector('.outreach_modal');
    var btnClose_1 = document.querySelector('.close-btn-modal-outreach');
    var closeBtn_modal_1 = document.querySelector('.close-btnModal');
    var edit_btn = document.querySelector('.box-list-wrapper');

    edit_btn.addEventListener('click', function() {
        modal_2.classList.add('show'); // Add 'show' class to the drawer
    });
    
    closeBtn_modal_1.addEventListener('click', function() {
        modal_2.classList.remove('show'); // Remove 'show' class from the modal
    });

    btnClose_1.addEventListener('click', function() {
        modal_2.classList.remove('show'); // Remove 'show' class from the modal
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var markRead = document.querySelector('.notification-dropdown');
    var notificationItems = document.querySelectorAll('.notification-list .highlighted');

    markRead.addEventListener('click', function() {
        notificationItems.forEach(function(item) {
            item.classList.remove('highlighted');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var tabsButtons = document.querySelectorAll('.tabs-button button');
    var tabContents = document.querySelectorAll('.tab-content');

    tabsButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            tabsButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Get the corresponding tab content data-id
            var tabId = button.getAttribute('id');

            // Remove 'active' class from all tab contents
            tabContents.forEach(function(content) {
                content.classList.remove('active');
            });

            // Add 'active' class to the corresponding tab content
            var correspondingTabContent = document.querySelector('.tab-content[data-id="' + tabId + '"]');
            if (correspondingTabContent) {
                correspondingTabContent.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the "Mark all as Read" button
    var markAllAsReadButton = document.querySelector('.notification-dropdown');

    // Add event listener to the "Mark all as Read" button
    markAllAsReadButton.addEventListener('click', function() {
        // Get the notification count element
        var notificationCount = document.querySelector('.notification');

        // Update the notification count to 0
        notificationCount.textContent = '0';
    });
});
