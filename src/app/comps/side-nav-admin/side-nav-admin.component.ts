import { Component, OnInit } from '@angular/core';

interface NavItem {
  title: string;
  icon: string;
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
      icon: 'fa fa-users',
      link: '/admin',
    },
    {
      title: 'contacts',
      icon: 'fa fa-address-book',
      link: '/admin/contacts',
    },

    {
      title: 'reports',
      icon: 'fa fa-flag',
      link: 'reports',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
