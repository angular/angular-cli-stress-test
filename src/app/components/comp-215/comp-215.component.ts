/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service215Service } from '../../services/service-215.service';

@Component({
  selector: 'app-comp-215',
  templateUrl: './comp-215.component.html',
  styleUrls: ['./comp-215.component.css']
})
export class Comp215Component implements OnInit {

  constructor(private _service: Service215Service) { }

  ngOnInit() {
  }

}
