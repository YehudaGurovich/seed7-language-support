#include <iostream>
#include <vector>

using namespace std;

int main()
{
	int a = 0;
	int b = 1000;
	cin >> a >> b;
	cout << a + b << endl;
	bool a = true;

	a ? b : b;

	for (int i = 0; i < 10; i++)
	{
		cout << i << endl;
	}

	if (a > b)
	{
		cout << "a > b" << endl;
	}
	else
	{
		cout << "a <= b" << endl;

	}

	return 0;
}
