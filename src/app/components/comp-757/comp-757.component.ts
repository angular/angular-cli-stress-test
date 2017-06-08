/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service757Service } from '../../services/service-757.service';

@Component({
  selector: 'app-comp-757',
  templateUrl: './comp-757.component.html',
  styleUrls: ['./comp-757.component.css']
})
export class Comp757Component implements OnInit {

  constructor(private _service: Service757Service) { }

  ngOnInit() {
  }

}
