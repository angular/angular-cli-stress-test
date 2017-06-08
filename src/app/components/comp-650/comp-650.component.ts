/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service650Service } from '../../services/service-650.service';

@Component({
  selector: 'app-comp-650',
  templateUrl: './comp-650.component.html',
  styleUrls: ['./comp-650.component.css']
})
export class Comp650Component implements OnInit {

  constructor(private _service: Service650Service) { }

  ngOnInit() {
  }

}
