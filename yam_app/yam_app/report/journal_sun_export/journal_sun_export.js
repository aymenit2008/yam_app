
frappe.query_reports["Journal Sun Export"] = {
	"filters": [
	{
			"fieldname":"from_date",
			"label": __("من تاريخ"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1,
			"width": "60px"
		},
		{
			"fieldname":"to_date",
			"label": __("الى تاريخ"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1,
			"width": "60px"
		}
	]
};
