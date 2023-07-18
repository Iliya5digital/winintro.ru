var TITEMS = [ 
 ["Access Control", "html/2062f415-b057-4d7f-976a-aa598ff61cd7.htm", "1",
  ["Access Control Overview", "html/5aba2b2a-d3a5-4a69-b408-8dca63fe2346.htm", "11"],
  ["Checklist: Setting Access Controls on Objects", "html/e97dce40-e248-41dc-8663-01351360bfa7.htm", "11"],
  ["Managing Permissions", "html/24cb5900-6f96-4fd0-bb0c-e3456e1e5f0c.htm", "1",
   ["What Are Permissions?", "html/6f5229e8-e1e2-4831-9317-c021a093fbf3.htm", "11"],
   ["File and Folder Permissions", "html/d5c47d5f-271d-4863-817c-a9cef4976c47.htm", "11"],
   ["Share and NTFS Permissions on a File Server", "html/4e2dc3e0-7408-4d58-be7f-fbc367dd489b.htm", "11"],
   ["Inherited Permissions", "html/43111cad-938d-4a92-b67b-d45d54d827d1.htm", "11"],
   ["How Effective Permissions Are Determined", "html/ebfa5c70-6870-4101-839c-dc20ff4ab45c.htm", "11"],
   ["Determine Where to Apply Permissions", "html/6e91ebf8-2a9a-4e49-9d75-632d56470ac0.htm", "11"],
   ["Set, View, Change, or Remove Permissions on an Object", "html/a513c103-5b10-46db-a939-018b47d37f15.htm", "1",
	["Set, View, Change, or Remove Permissions on Files and Folders", "html/66aa4130-5b9b-433c-aacc-14d874c5fe01.htm", "11"],
	["View Effective Permissions on Files and Folders", "html/72f8fa57-8cd1-46ae-923a-657a01937941.htm", "11"],
	["Set, View, Change, or Remove Special Permissions", "html/ea0a7b99-df60-4ca6-91ee-3e39af57836f.htm", "11"],
	["Set Permissions on a Shared Resource", "html/fc747cd7-e7ca-4544-b485-3c40230d848c.htm", "11"]
   ]
  ],
  ["Managing Object Ownership", "html/daa22437-b34b-4418-9196-5871dfbef2f5.htm", "1",
   ["Take Ownership of a File or Folder", "html/459c9959-d1d8-4b56-b1c3-a4474f728cea.htm", "11"]
  ],
  ["Managing Security Auditing", "html/7b0de306-9880-42ac-861e-e24a0a44398e.htm", "1",
   ["Audit Policies", "html/6076bede-08b6-49ac-84fa-f357e341ad96.htm", "11"],
   ["Define or Modify Auditing Policy Settings for an Event Category", "html/c2afe41c-b845-4623-a445-be6ad0a92ab4.htm", "11"],
   ["Apply or Modify Auditing Policy Settings for a Local File or Folder", "html/33049c64-45d1-4b9e-9bed-9bd57d35a131.htm", "11"],
   ["View the Security Log", "html/b709a6a7-632d-4a29-8f84-3d7c6971ec5f.htm", "11"]
  ],
  ["Understanding User Account Control", "html/61bbaf37-c16c-4420-bc13-cac3db3b488a.htm", "11"],
  ["Resources for Access Control", "html/2cea42b8-ecb8-473c-9785-35d59350b2c6.htm", "11"],
  ["User Interface: Access Control", "html/c69245e2-2ed1-4b73-8b37-e6a15e51c176.htm", "1",
   ["Security Settings Property Page", "html/74879417-e006-4295-9d09-f9d339305957.htm", "11"],
   ["Select Users, Computers, or Groups Dialog Box", "html/7ea10cbc-874f-4083-90e5-1b7363f8fe9f.htm", "11"],
   ["Object Types Dialog Box", "html/714fe1cc-dd0a-47f2-b86c-a593c00f8dc3.htm", "11"],
   ["Select Users, Computers, or Groups Dialog Box - Advanced Page", "html/de9eb804-154e-4c4f-9d21-81f992b97562.htm", "11"],
   ["Permission Entry Dialog Box", "html/4a9b1c9c-8649-4857-8715-b50c3ece6a87.htm", "11"],
   ["Advanced Security Settings Properties Page - Auditing Tab", "html/49645c80-bcfd-4483-a815-73047bb3d868.htm", "11"],
   ["Advanced Security Settings Properties Page - Owner Tab", "html/066cf7b1-0e68-40bb-b889-6268f1308575.htm", "11"],
   ["Advanced Security Settings Properties Page - Permissions Tab", "html/63909479-3669-48af-942d-ea29c74cfa7d.htm", "11"],
   ["Auditing Entry Dialog Box", "html/ef763292-21dc-42bb-92f7-2dc30f115fac.htm", "11"]
  ]
 ]
];


var FITEMS = arr_flatten(TITEMS);

function arr_flatten (x) {
   var y = []; if (x == null) return y;
   for (var i=0; i<x.length; i++) {
	if (typeof(x[i]) == "object") {
		 var flat = arr_flatten(x[i]);
		 for (var j=0; j<flat.length; j++)
			 y[y.length]=flat[j];
} else {
		 if ((i%3==0))
		y[y.length]=x[i+1];
}
   }
   return y;
}

