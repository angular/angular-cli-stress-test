/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service142Service } from '../../services/service-142.service';

@Component({
  selector: 'app-comp-142',
  templateUrl: './comp-142.component.html',
  styleUrls: ['./comp-142.component.css']
})
export class Comp142Component implements OnInit {

  constructor(private _service: Service142Service) { }

  ngOnInit() {
  }

}
