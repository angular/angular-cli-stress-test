/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service55Service } from '../../services/service-55.service';

@Component({
  selector: 'app-comp-55',
  templateUrl: './comp-55.component.html',
  styleUrls: ['./comp-55.component.css']
})
export class Comp55Component implements OnInit {

  constructor(private _service: Service55Service) { }

  ngOnInit() {
  }

}
