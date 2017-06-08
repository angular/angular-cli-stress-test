/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service745Service } from '../../services/service-745.service';

@Component({
  selector: 'app-comp-745',
  templateUrl: './comp-745.component.html',
  styleUrls: ['./comp-745.component.css']
})
export class Comp745Component implements OnInit {

  constructor(private _service: Service745Service) { }

  ngOnInit() {
  }

}
