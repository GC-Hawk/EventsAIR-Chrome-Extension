# EventsAir Data Clearer

## Overview

The EventsAir Data Clearer is a Chrome extension designed to enhance the user experience on the EventsAIR platform. It helps users clear locally stored data such as cache and IndexedDB, and performs a hard reload of the page to ensure smooth operation. This tool is particularly useful for non-technical users who may find it challenging to clear browser data manually.

Developed by [Håkon Jevnesveen](https://jevnesveen.no/en/cv/) in his spare time to improve the quality of life for himself and his coworkers, this extension aims to reduce the workload on IT teams by empowering users to resolve common issues themselves.

![Extension Popup](images/github/screenshot.png)

## Features

- **Domain Verification**: The extension verifies that the active tab is within the correct domain, ensuring functionality only on the EventsAIR platform.
- **Data Clearing**: With a single click, users can clear various types of browser data, including cache and IndexedDB.
- **Hard Reload**: After clearing the data, the extension performs a hard reload to ensure a fresh start.
- **Visual Feedback**: Users receive visual feedback during the data clearing process, keeping them informed of the extension's actions.

## Installation (Developer Mode Only)

To install the EventsAir Data Clearer extension in developer mode, follow these steps:

1. Clone or download the repository to your local machine. If you download it as a ZIP file, unzip it to a safe location where it will not be deleted. The folder name will be "EventsAIR-Chrome-Extension".
2. Open the Chrome browser and navigate to `chrome://extensions/`.
3. Enable `Developer mode` by toggling the switch in the top right corner.
4. Click on `Load unpacked` and select the extension folder where you have cloned or extracted the repository files.
5. The extension icon should now appear in your browser's toolbar. To pin it for easy access, click the Extensions icon (a puzzle piece) in the toolbar, find the EventsAir Data Clearer extension, and click the pin icon as shown below:

   ![Pin Extension](images/github/screenshot-pin.png)

## Usage

1. Navigate to any page within the EventsAIR platform.
2. Click on the extension icon in the toolbar.
3. If the tab is within the correct domain, the extension will display the domain and enable the "Clear Data & Refresh" button.
4. Click the "Clear Data & Refresh" button to clear the browser data and perform a hard reload of the page.

## Disclaimer

This extension is developed independently and is not affiliated with EventsAIR in any way. It is created purely to assist in personal and coworker use, aiming to enhance the user experience on the EventsAIR platform.

The developer does not take any responsibility or liability for the use of this extension. Users are encouraged to review the code themselves to ensure it meets their needs and standards. By downloading and installing this extension, users agree to do so at their own risk, acknowledging that they are using the extension as-is, without any warranty.

## Support

For any questions, feedback, or support, please reach out to:

- **Name**: Håkon Jevnesveen
- **Email**:
  - **Private**: [hakonjj@gmail.com](mailto:hakonjj@gmail.com)
  - **Work**: [hj@gyro.no](mailto:hj@gyro.no) (Gyro Conference AS, Norway)
- **Website/CV**: [https://jevnesveen.no/en/cv/](https://jevnesveen.no/en/cv/)

## License

This project is open-source and available for any individual to use and modify for personal use. Contributions to help improve the project are welcome. However, redistribution of this project in any form is prohibited. The name "Håkon Jevnesveen" must always be retained as the author of this project. By using this project, you agree to adhere to these terms.
