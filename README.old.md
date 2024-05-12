# wifiqrgenerator
This is a application for generating a QR code for your Wi-Fi details making connection faster and easier

We propose a syntax like "MECARD" for specifying wi-fi configuration. Scanning such a code would, after prompting the user, configure the device's Wi-Fi accordingly. Example:

WIFI:T:WPA;S:mynetwork;P:mypass;;
Parameter	Example	Description
T	WPA	Authentication type; can be WEP or WPA or WPA2-EAP, or nopass for no password. Or, omit for no password.
S	mynetwork	Network SSID. Required. Enclose in double quotes if it is an ASCII name, but could be interpreted as hex (i.e. "ABCD")
P	mypass	Password, ignored if T is nopass (in which case it may be omitted). Enclose in double quotes if it is an ASCII name, but could be interpreted as hex (i.e. "ABCD")
H	true	Optional. True if the network SSID is hidden. Note this was mistakenly also used to specify phase 2 method in releases up to 4.7.8 / Barcode Scanner 3.4.0. If not a boolean, it will be interpreted as phase 2 method (see below) for backwards-compatibility
E	TTLS	(WPA2-EAP only) EAP method, like TTLS or PWD
A	anon	(WPA2-EAP only) Anonymous identity
I	myidentity	(WPA2-EAP only) Identity
PH2	MSCHAPV2	(WPA2-EAP only) Phase 2 method, like MSCHAPV2
Order of fields does not matter. Special characters \, ;, ,, " and : should be escaped with a backslash (\) as in MECARD encoding. For example, if an SSID was literally "foo;bar\baz" (with double quotes part of the SSID name itself) then it would be encoded like: WIFI:S:\"foo\;bar\\baz\";;
