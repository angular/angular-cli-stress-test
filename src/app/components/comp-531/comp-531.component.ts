/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service531Service } from '../../services/service-531.service';

@Component({
  selector: 'app-comp-531',
  templateUrl: './comp-531.component.html',
  styleUrls: ['./comp-531.component.css']
})
export class Comp531Component implements OnInit {

  constructor(private _service: Service531Service) { }

  ngOnInit() {
  }

}
