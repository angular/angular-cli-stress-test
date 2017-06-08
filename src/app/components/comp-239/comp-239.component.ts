/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service239Service } from '../../services/service-239.service';

@Component({
  selector: 'app-comp-239',
  templateUrl: './comp-239.component.html',
  styleUrls: ['./comp-239.component.css']
})
export class Comp239Component implements OnInit {

  constructor(private _service: Service239Service) { }

  ngOnInit() {
  }

}
