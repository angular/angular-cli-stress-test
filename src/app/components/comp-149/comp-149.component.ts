/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service149Service } from '../../services/service-149.service';

@Component({
  selector: 'app-comp-149',
  templateUrl: './comp-149.component.html',
  styleUrls: ['./comp-149.component.css']
})
export class Comp149Component implements OnInit {

  constructor(private _service: Service149Service) { }

  ngOnInit() {
  }

}
