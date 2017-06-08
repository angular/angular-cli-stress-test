/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service299Service } from '../../services/service-299.service';

@Component({
  selector: 'app-comp-299',
  templateUrl: './comp-299.component.html',
  styleUrls: ['./comp-299.component.css']
})
export class Comp299Component implements OnInit {

  constructor(private _service: Service299Service) { }

  ngOnInit() {
  }

}
