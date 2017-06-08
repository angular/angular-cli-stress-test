/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service504Service } from '../../services/service-504.service';

@Component({
  selector: 'app-comp-504',
  templateUrl: './comp-504.component.html',
  styleUrls: ['./comp-504.component.css']
})
export class Comp504Component implements OnInit {

  constructor(private _service: Service504Service) { }

  ngOnInit() {
  }

}
