/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service263Service } from '../../services/service-263.service';

@Component({
  selector: 'app-comp-263',
  templateUrl: './comp-263.component.html',
  styleUrls: ['./comp-263.component.css']
})
export class Comp263Component implements OnInit {

  constructor(private _service: Service263Service) { }

  ngOnInit() {
  }

}
