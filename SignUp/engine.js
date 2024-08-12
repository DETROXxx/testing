document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab a');
    const tabContents = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all tabs
            tabs.forEach(t => t.parentElement.classList.remove('active'));
            // Add active class to clicked tab
            tab.parentElement.classList.add('active');

            // Get target pane
            const target = tab.getAttribute('href').substring(1);
            const targetPane = document.getElementById(target);

            // Animate and switch active panes
            tabContents.forEach(pane => {
                if (pane.id === target) {
                    pane.classList.add('active');
                    pane.classList.remove('inactive');
                } else {
                    pane.classList.remove('active');
                    pane.classList.add('inactive');
                }
            });
        });
    });
});
