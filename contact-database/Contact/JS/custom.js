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
    var modal_wrapper = document.querySelector('.modal');
    var modal_edit = document.querySelector('.modal-edit'); 
    var modal_contact = document.querySelector('.contactReach');

    // Close drawer when clicking outside of it
    document.addEventListener('click', function(event) {
        // Check if the drawer has the 'show' class and if the click event target is outside the '.drawer-dialog' and not the notification button
        if (drawer.classList.contains('show') && !modal_edit.contains(event.target) && !drawer_wrap.contains(event.target)  && !modal_wrapper.contains(event.target)  && !modal_contact.contains(event.target) && event.target !== notificationButton) {
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
    var toolTip = document.querySelector('.tooltipBtn');
    var nextModal = document.querySelector('.contactReach');
    var nextModalBtn = document.querySelector('.outreachNxt');
    var changeBtn = document.querySelector('.makeChange');
    var closeNext = document.querySelector('.closeNxt');

    closeNext.addEventListener('click', function() {
        nextModal.classList.remove('show'); // Remove 'show' class from the modal
    });

    outreach_btn.addEventListener('click', function() {
        modal.classList.add('show'); // Add 'show' class to the drawer
    });

    nextModalBtn.addEventListener('click', function() {
        nextModal.classList.add('show'); // Add 'show' class to the drawer
    });

    nextModalBtn.addEventListener('click', function() {
        modal.classList.remove('show'); // Remove 'show' class from the modal
    });

    changeBtn.addEventListener('click', function() {
        nextModal.classList.remove('show'); // Remove 'show' class from the modal
    });
    
    changeBtn.addEventListener('click', function() {
        modal.classList.add('show'); // Add 'show' class to the drawer
    });

    toolTip.addEventListener('click', function() {
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
    var closeBtnUpdate = document.querySelector('.updateCancel');
    var closeBtnUpdate1 = document.querySelector('.closeUpdate');
    var updateModal = document.querySelector('.updateModal');

    closeBtnUpdate.addEventListener('click', function() {
        updateModal.classList.remove('show'); // Add 'show' class to the drawer
    });

    closeBtnUpdate1.addEventListener('click', function() {
        updateModal.classList.remove('show'); // Add 'show' class to the drawer
    });
    

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


function activateTab(tab) {
    // Remove 'active' class from all li elements
    var tabs = document.querySelectorAll('.table-tabs li');
    tabs.forEach(function(tab) {
      tab.classList.remove('active');
    });
  
    // Add 'active' class to the clicked tab
    tab.classList.add('active');
  }

  
  document.addEventListener('DOMContentLoaded', function() {
    var filtarBtn = document.querySelector('.clear-btn');
    var filtar = document.querySelector('.filter-table');

    filtarBtn.addEventListener('click', function() {
        filtar.classList.remove('show'); // Remove 'show' class from the modal
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
  
  
// document.addEventListener("DOMContentLoaded", function() {
//     const checkboxes = document.querySelectorAll('.slds-table tbody input[type="checkbox"]:not(.bulkCheck)');
//     const bulkCheckButton = document.querySelector('.bulkCheck');
    
//     checkboxes.forEach(function(checkbox) {
//       checkbox.addEventListener('change', function() {
//         updateSelectedCount();
//         if (!checkbox.classList.contains('opened')) {
//           checkbox.classList.add('opened');
//         }
//       });
//     });
  
//     bulkCheckButton.addEventListener('click', bulkCheck);
  
//     function updateSelectedCount() {
//       let selectedCount = 0;
//       checkboxes.forEach(function(checkbox) {
//         if (checkbox.checked) {
//           selectedCount++;
//         }
//       });
//       const selectedNumberElements = document.querySelectorAll('.selectedNumber');
//       selectedNumberElements.forEach(function(selectedNumberElement) {
//         selectedNumberElement.textContent = selectedCount;
//       });
//     }
  
//     function bulkCheck() {
//       checkboxes.forEach(function(checkbox) {
//         checkbox.checked = true;
//       });
//       updateSelectedCount();
//     }
//   });
  
  

document.querySelectorAll('.downloadBtn').forEach(function(profileDropToggle) {
    profileDropToggle.addEventListener('click', function() {
        document.querySelector('.dropdownDownload').classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the file input element
    var fileInput = document.getElementById('fileInput');

    // Add event listener for change event
    fileInput.addEventListener('change', function(event) {
        // Get the selected file
        var file = event.target.files[0];

        // Check if a file was selected
        if (file) {
            // Create a FileReader object
            var reader = new FileReader();

            // Set up the FileReader onload event
            reader.onload = function() {
                // Set the src attribute of the profile image to the data URL of the selected file
                document.getElementById('profileImage').src = reader.result;
            };

            // Read the selected file as a data URL
            reader.readAsDataURL(file);
        }
    });
});


  document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.querySelector('.select-filter-dropdown');
    const tableTabs = document.querySelector('.table-tabs');
    const filterClientOnly = document.querySelector('.filter-client-only');

    dropdownButton.addEventListener('click', function () {

      tableTabs.classList.toggle('d-none');
      filterClientOnly.classList.toggle('d-none');
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    var modalContact = document.querySelector('.addContactModal');
    var closeContact = document.querySelector('.closeContact');
    var cancelContact = document.querySelector('.cancelContact');
    var addContact = document.querySelector('.addContactBtn');
    

    cancelContact.addEventListener('click', function() {
        modalContact.classList.remove('show'); // Add 'show' class to the drawer
    });

    closeContact.addEventListener('click', function() {
        modalContact.classList.remove('show'); // Add 'show' class to the drawer
    });
    

    addContact.addEventListener('click', function() {
        modalContact.classList.add('show'); // Add 'show' class to the drawer
    });
    
});

document.addEventListener('DOMContentLoaded', function() {
    var modalContactNew = document.querySelector('.addNewContact');
    var closeContactNew = document.querySelector('.closeNewContact');
    var cancelContactNew = document.querySelector('.cancelNewContact');
    var addContactNew = document.querySelector('.addContactBtn');
    

    closeContactNew.addEventListener('click', function() {
        modalContactNew.classList.remove('show'); // Add 'show' class to the drawer
    });

    cancelContactNew.addEventListener('click', function() {
        modalContactNew.classList.remove('show'); // Add 'show' class to the drawer
    });
    

    addContactNew.addEventListener('click', function() {
        modalContactNew.classList.add('show'); // Add 'show' class to the drawer
    });
    
});

document.addEventListener("DOMContentLoaded", function() {
    const targetDiv = document.getElementById('targetDiv');
    const displayButton = document.querySelector('.btn-display');
    const displayClose = document.querySelector('.closeTooltip');
    const displayButton1 = document.querySelector('.btn-display-edit');
    const modalEdited = document.querySelector('.modal-edit');
    const modalNewContact = document.querySelector('.addNewContact');


    displayButton.addEventListener('click', function() {
        // Add the 'show' class
        targetDiv.classList.add('show');

        // Remove the 'show' class after 10 seconds
        setTimeout(function() {
            targetDiv.classList.remove('show');
        }, 10000); // 10 seconds in milliseconds
    });

    displayButton1.addEventListener('click', function() {
        // Add the 'show' class
        targetDiv.classList.add('show');

        // Remove the 'show' class after 10 seconds
        setTimeout(function() {
            targetDiv.classList.remove('show');
        }, 10000); // 10 seconds in milliseconds
    });

    displayClose.addEventListener('click', function() {
        // Remove the 'show' class
        targetDiv.classList.remove('show');
    });

    displayButton1.addEventListener('click', function() {
        // Remove the 'show' class
        modalEdited.classList.remove('show');
    });

    displayButton.addEventListener('click', function() {
        // Remove the 'show' class
        modalNewContact.classList.remove('show');
    });
});
