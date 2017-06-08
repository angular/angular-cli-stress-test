/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service235Service } from '../../services/service-235.service';

@Component({
  selector: 'app-comp-235',
  templateUrl: './comp-235.component.html',
  styleUrls: ['./comp-235.component.css']
})
export class Comp235Component implements OnInit {

  constructor(private _service: Service235Service) { }

  ngOnInit() {
  }

}
