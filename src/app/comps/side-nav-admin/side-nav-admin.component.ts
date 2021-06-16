import { Component, OnInit } from '@angular/core';

interface NavItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-side-nav-admin',
  templateUrl: './side-nav-admin.component.html',
  styleUrls: ['./side-nav-admin.component.css'],
})
export class SideNavAdminComponent implements OnInit {
  navItems: NavItem[] = [
    {
      title: 'customers',
      link: '/admin',
    },
    {
      title: 'contacts',
      link: '/admin/contacts',
    },
    {
      title: 'leads',
      link: '/admin/customers',
    },
    {
      title: 'reports',
      link: '/admin/customers',
    },
    {
      title: 'integrations',
      link: 'integrations',
    },
    {
      title: 'year-end sale',
      link: 'year-end-sale',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
