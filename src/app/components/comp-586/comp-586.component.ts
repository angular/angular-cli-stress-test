/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service586Service } from '../../services/service-586.service';

@Component({
  selector: 'app-comp-586',
  templateUrl: './comp-586.component.html',
  styleUrls: ['./comp-586.component.css']
})
export class Comp586Component implements OnInit {

  constructor(private _service: Service586Service) { }

  ngOnInit() {
  }

}
