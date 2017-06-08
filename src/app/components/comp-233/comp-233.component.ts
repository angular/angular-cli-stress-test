/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service233Service } from '../../services/service-233.service';

@Component({
  selector: 'app-comp-233',
  templateUrl: './comp-233.component.html',
  styleUrls: ['./comp-233.component.css']
})
export class Comp233Component implements OnInit {

  constructor(private _service: Service233Service) { }

  ngOnInit() {
  }

}
