from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Report"),
			"items": [
				{
					"type": "report",
					"name": "sun_general_ledger",
					"doctype": "GL Entry",
					"is_query_report": True,
				}
			]
			
		}
	]
