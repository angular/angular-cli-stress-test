/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service479Service } from '../../services/service-479.service';

@Component({
  selector: 'app-comp-479',
  templateUrl: './comp-479.component.html',
  styleUrls: ['./comp-479.component.css']
})
export class Comp479Component implements OnInit {

  constructor(private _service: Service479Service) { }

  ngOnInit() {
  }

}
