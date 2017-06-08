/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service201Service } from '../../services/service-201.service';

@Component({
  selector: 'app-comp-201',
  templateUrl: './comp-201.component.html',
  styleUrls: ['./comp-201.component.css']
})
export class Comp201Component implements OnInit {

  constructor(private _service: Service201Service) { }

  ngOnInit() {
  }

}
