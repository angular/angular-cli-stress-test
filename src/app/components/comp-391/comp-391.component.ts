/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service391Service } from '../../services/service-391.service';

@Component({
  selector: 'app-comp-391',
  templateUrl: './comp-391.component.html',
  styleUrls: ['./comp-391.component.css']
})
export class Comp391Component implements OnInit {

  constructor(private _service: Service391Service) { }

  ngOnInit() {
  }

}
