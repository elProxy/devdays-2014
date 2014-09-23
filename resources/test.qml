import QtQuick 2.2
import QtQuick.Window 2.2
import QtWebEngine 1.0

Window {
    width: 800;
    height:600;
    WebEngineView {
        id: webView
        url: "file:///Users/elproxy/Documents/devdays-2014/resources/flippin-qt-logo.html"
        anchors.fill: parent;
    }
}
