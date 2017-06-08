/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service367Service } from '../../services/service-367.service';

@Component({
  selector: 'app-comp-367',
  templateUrl: './comp-367.component.html',
  styleUrls: ['./comp-367.component.css']
})
export class Comp367Component implements OnInit {

  constructor(private _service: Service367Service) { }

  ngOnInit() {
  }

}
