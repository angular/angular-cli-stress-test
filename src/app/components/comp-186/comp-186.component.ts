/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service186Service } from '../../services/service-186.service';

@Component({
  selector: 'app-comp-186',
  templateUrl: './comp-186.component.html',
  styleUrls: ['./comp-186.component.css']
})
export class Comp186Component implements OnInit {

  constructor(private _service: Service186Service) { }

  ngOnInit() {
  }

}
