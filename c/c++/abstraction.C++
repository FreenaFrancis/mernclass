#include <iostream>
#include <string>

using namespace std;

class GoogleSearch {
private:
    string searchText;
    string searchResult;

    void searchProcess() {
        searchResult = "Result about " + searchText;
        cout << searchResult << endl;
    }

public:
    void search(string text) {
        searchText = text;
        searchProcess();
    }
};

int main() {
    GoogleSearch gt;
    gt.search("india");
    return 0;
}
