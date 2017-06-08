/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service594Service } from '../../services/service-594.service';

@Component({
  selector: 'app-comp-594',
  templateUrl: './comp-594.component.html',
  styleUrls: ['./comp-594.component.css']
})
export class Comp594Component implements OnInit {

  constructor(private _service: Service594Service) { }

  ngOnInit() {
  }

}
