import QtQuick.Controls 1.0
import QtQuick.Layouts 1.1
import QtWebEngine 1.0

ApplicationWindow {
    width: 800
    height: 600
    ColumnLayout {
        anchors.fill: parent
        TextField {
            id: addressBar
            focus: true
            text: webView.url
            onAccepted: webView.url = text
            Layout.fillWidth: true
        }
        WebEngineView {
            id: webView
            url: "http://www.qt.io"
            Layout.fillWidth: true
            Layout.fillHeight: true
        }
    }
}
