/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service60Service } from '../../services/service-60.service';

@Component({
  selector: 'app-comp-60',
  templateUrl: './comp-60.component.html',
  styleUrls: ['./comp-60.component.css']
})
export class Comp60Component implements OnInit {

  constructor(private _service: Service60Service) { }

  ngOnInit() {
  }

}
