#include <QtWebEngineWidgets>

int main(int argc, char * argv[])
{
    QApplication app(argc, argv);
    QUrl url = (argc > 1) ? QUrl::fromUserInput(argv[1]) : QUrl("http://qt.io");

    QWebEngineView view;
    view.load(url);
    view.show();
    return app.exec();
}
