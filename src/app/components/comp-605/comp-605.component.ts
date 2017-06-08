/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service605Service } from '../../services/service-605.service';

@Component({
  selector: 'app-comp-605',
  templateUrl: './comp-605.component.html',
  styleUrls: ['./comp-605.component.css']
})
export class Comp605Component implements OnInit {

  constructor(private _service: Service605Service) { }

  ngOnInit() {
  }

}
