/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service742Service } from '../../services/service-742.service';

@Component({
  selector: 'app-comp-742',
  templateUrl: './comp-742.component.html',
  styleUrls: ['./comp-742.component.css']
})
export class Comp742Component implements OnInit {

  constructor(private _service: Service742Service) { }

  ngOnInit() {
  }

}
