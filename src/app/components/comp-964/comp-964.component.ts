/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service964Service } from '../../services/service-964.service';

@Component({
  selector: 'app-comp-964',
  templateUrl: './comp-964.component.html',
  styleUrls: ['./comp-964.component.css']
})
export class Comp964Component implements OnInit {

  constructor(private _service: Service964Service) { }

  ngOnInit() {
  }

}
