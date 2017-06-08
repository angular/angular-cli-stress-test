/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service969Service } from '../../services/service-969.service';

@Component({
  selector: 'app-comp-969',
  templateUrl: './comp-969.component.html',
  styleUrls: ['./comp-969.component.css']
})
export class Comp969Component implements OnInit {

  constructor(private _service: Service969Service) { }

  ngOnInit() {
  }

}
