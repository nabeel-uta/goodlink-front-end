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

    document.querySelectorAll('.notification-dropdpwn').forEach(function(notificationDropdown) {
        notificationDropdown.addEventListener('click', function() {
            this.classList.toggle('show');
        });
    });
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
    var notificationButton = document.querySelector('.notification-btn');
    var drawer = document.querySelector('.drawer');
    var drawer_wrap = document.querySelector('.drawer-dialog');
    var btnClose = document.querySelector('.btn-close');

    // Close drawer when clicking outside of it
    document.addEventListener('click', function(event) {
        // Check if the drawer has the 'show' class and if the click event target is outside the '.drawer-dialog' and not the notification button
        if (drawer.classList.contains('show') && !drawer_wrap.contains(event.target) && event.target !== notificationButton) {
            drawer.classList.remove('show'); // Remove 'show' class from the drawer
        }
    });

    btnClose.addEventListener('click', function() {
        drawer.classList.remove('show'); // Remove 'show' class from the drawer
    });

    notificationButton.addEventListener('click', function() {
        drawer.classList.add('show'); // Add 'show' class to the drawer
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


// document.querySelectorAll('.select-filter-dropdown').forEach(function(profileDropToggle) {
//     profileDropToggle.addEventListener('click', function() {
//         this.classList.toggle('show');
//         document.querySelector('.filter-table').classList.toggle('show');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to each 'select-filter-dropdown'
    document.querySelectorAll('.select-filter-dropdown').forEach(function(profileDropToggle) {
        profileDropToggle.addEventListener('click', function() {
            var filterTable = document.querySelector('.filter-table');
            
            // Toggle 'show' class for the clicked element
            if (this.classList.contains('show')) {
                this.classList.remove('show');
            } else {
                this.classList.add('show');
            }

            // Toggle 'show' class for the element with class 'filter-table'
            if (filterTable.classList.contains('show')) {
                filterTable.classList.remove('show');
                filterTable.style.height = '0px'; // Collapses the element
            } else {
                filterTable.classList.add('show');
                filterTable.style.height = filterTable.scrollHeight + 'px'; // Expands the element
            }
        });
    });

    // Add click event listener to 'Clear Filters' button
    document.querySelector('.clear-btn').addEventListener('click', function() {
        var filterTable = document.querySelector('.filter-table');
        
        // Hide the filter table
        filterTable.classList.remove('show');
        filterTable.style.height = '0px'; // Collapses the element

        // Reset the dropdowns to their default state
        document.querySelectorAll('.slds-select').forEach(function(select) {
            select.value = '';
        });

        // If needed, reset the input fields to their default state
        document.querySelectorAll('.slds-input').forEach(function(input) {
            input.value = '';
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var modal = document.querySelector('.modal-outreach');
    var btnClose = document.querySelector('.close-btn-modal');
    var closeBtn_modal = document.querySelector('.close-btn-modal-btn');
    var outreach_btn = document.querySelector('.outreachBtn');

    outreach_btn.addEventListener('click', function() {
        modal.classList.add('show'); // Add 'show' class to the drawer
    });
    
    btnClose.addEventListener('click', function() {
        modal.classList.remove('show'); // Remove 'show' class from the modal
    });

    closeBtn_modal.addEventListener('click', function() {
        modal.classList.remove('show'); // Remove 'show' class from the modal
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var modal_2 = document.querySelector('.modal-edit');
    var btnClose_1 = document.querySelector('.cancel-btn');
    var closeBtn_modal_1 = document.querySelector('.close-btn-edit');
    var edit_btn = document.querySelector('.editCompany');

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
    var modal_2 = document.querySelector('.outreach_modal');
    var btnClose_1 = document.querySelector('.close-btn-modal-outreach');
    var closeBtn_modal_1 = document.querySelector('.close-btnModal');
    var edit_btn = document.querySelector('.files-btn');

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
    var modal_2 = document.querySelector('.calendar_modal');
    var btnClose_1 = document.querySelector('.closeCalendar');
    var closeBtn_modal_1 = document.querySelector('.close-btn-modal-calendar');
    var calendar_btn = document.querySelector('.calendar-btn');
    var closeBtnUpdate = document.querySelector('.updateCancel');
    var closeBtnUpdate1 = document.querySelector('.closeUpdate');
    var updateModal = document.querySelector('.updateModal');

    calendar_btn.addEventListener('click', function() {
        modal_2.classList.add('show'); // Add 'show' class to the drawer
    });

    closeBtnUpdate.addEventListener('click', function() {
        updateModal.classList.remove('show'); // Add 'show' class to the drawer
    });

    closeBtnUpdate1.addEventListener('click', function() {
        updateModal.classList.remove('show'); // Add 'show' class to the drawer
    });
    
    closeBtn_modal_1.addEventListener('click', function() {
        modal_2.classList.remove('show'); // Remove 'show' class from the modal
    });

    btnClose_1.addEventListener('click', function() {
        modal_2.classList.remove('show'); // Remove 'show' class from the modal
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var filtarBtn = document.querySelector('.clear-btn');
    var filtar = document.querySelector('.filter-table');

    filtarBtn.addEventListener('click', function() {
        filtar.classList.remove('show'); // Remove 'show' class from the modal
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all select elements
    var selectElements = document.querySelectorAll('.updateSelect');
    
    // Get the button element
    var buttons = document.querySelectorAll('.closeUpdate');
    
    // Add change event listener to each select element
    selectElements.forEach(function(selectElement) {
        selectElement.addEventListener('change', function() {
            // Check if any select element has a value selected
            var anySelected = Array.from(selectElements).some(function(select) {
                return select.value !== '';
            });
            
            // If at least one select element has a value selected, remove disabled class from the buttons
            buttons.forEach(function(button) {
                if (anySelected) {
                    button.classList.remove('disabled');
                } else {
                    button.classList.add('disabled');
                }
            });
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

document.addEventListener('DOMContentLoaded', function() {
    // Get the checkbox in the thead
    var selectAllCheckbox = document.querySelector('.bulkCheck');

    // Add event listener to the select all checkbox
    selectAllCheckbox.addEventListener('click', function() {
        // Get all checkboxes except the select all checkbox
        var checkboxes = document.querySelectorAll('.slds-table tbody input[type="checkbox"]:not(.bulkCheck)');

        // Set the state of each checkbox in the tbody to match the state of the select all checkbox
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = selectAllCheckbox.checked;
        });
    });
});

document.querySelectorAll('.downloadBtn').forEach(function(profileDropToggle) {
    profileDropToggle.addEventListener('click', function() {
        document.querySelector('.dropdownDownload').classList.toggle('show');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('.slds-table tbody input[type="checkbox"]:not(.bulkCheck)');
    const bulkCheckButton = document.querySelector('.bulkCheck');
    const itemSelectDivs = document.querySelectorAll('.item-select');
  
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        updateSelectedCount();
        toggleItemSelectVisibility();
      });
    });
  
    bulkCheckButton.addEventListener('click', bulkCheck);
  
    function updateSelectedCount() {
        let selectedCount = 0;
        checkboxes.forEach(function(checkbox) {
          if (checkbox.checked) {
            selectedCount++;
          }
        });
        const selectedNumberElements = document.querySelectorAll('.selectedNumber');
        selectedNumberElements.forEach(function(selectedNumberElement) {
          selectedNumberElement.textContent = selectedCount;
        });
      }
    
      function toggleItemSelectVisibility() {
        let anyCheckboxChecked = false;
        checkboxes.forEach(function(checkbox) {
          if (checkbox.checked) {
            anyCheckboxChecked = true;
          }
        });
        itemSelectDivs.forEach(function(itemSelectDiv) {
          itemSelectDiv.style.display = anyCheckboxChecked ? 'block' : 'none';
        });
      }
    
      function bulkCheck() {
        checkboxes.forEach(function(checkbox) {
          checkbox.checked = true;
        });
        updateSelectedCount();
        toggleItemSelectVisibility();
      }
    });

    document.addEventListener('DOMContentLoaded', function() {
        var modalUpdate = document.querySelector('.updateModal');
        var btnClose_1 = document.querySelector('.closeUpdateModal');
        var btnClose_2 = document.querySelector('.closeUpdate');
        var btnClose_3 = document.querySelector('.editSelect');
       
    
        btnClose_3.addEventListener('click', function() {
            modalUpdate.classList.add('show'); // Add 'show' class to the drawer
        });
    
        btnClose_1.addEventListener('click', function() {
            modalUpdate.classList.remove('show'); // Add 'show' class to the drawer
        });
    
        btnClose_2.addEventListener('click', function() {
            modalUpdate.classList.remove('show'); // Add 'show' class to the drawer
        });
    });