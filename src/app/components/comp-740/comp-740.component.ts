/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service740Service } from '../../services/service-740.service';

@Component({
  selector: 'app-comp-740',
  templateUrl: './comp-740.component.html',
  styleUrls: ['./comp-740.component.css']
})
export class Comp740Component implements OnInit {

  constructor(private _service: Service740Service) { }

  ngOnInit() {
  }

}
