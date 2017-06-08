/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service864Service } from '../../services/service-864.service';

@Component({
  selector: 'app-comp-864',
  templateUrl: './comp-864.component.html',
  styleUrls: ['./comp-864.component.css']
})
export class Comp864Component implements OnInit {

  constructor(private _service: Service864Service) { }

  ngOnInit() {
  }

}
