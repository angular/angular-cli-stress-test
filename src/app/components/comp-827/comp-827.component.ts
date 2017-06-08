/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service827Service } from '../../services/service-827.service';

@Component({
  selector: 'app-comp-827',
  templateUrl: './comp-827.component.html',
  styleUrls: ['./comp-827.component.css']
})
export class Comp827Component implements OnInit {

  constructor(private _service: Service827Service) { }

  ngOnInit() {
  }

}
