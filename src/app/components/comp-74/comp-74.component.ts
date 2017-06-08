/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service74Service } from '../../services/service-74.service';

@Component({
  selector: 'app-comp-74',
  templateUrl: './comp-74.component.html',
  styleUrls: ['./comp-74.component.css']
})
export class Comp74Component implements OnInit {

  constructor(private _service: Service74Service) { }

  ngOnInit() {
  }

}
