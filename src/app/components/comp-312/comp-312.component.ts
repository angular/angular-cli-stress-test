/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service312Service } from '../../services/service-312.service';

@Component({
  selector: 'app-comp-312',
  templateUrl: './comp-312.component.html',
  styleUrls: ['./comp-312.component.css']
})
export class Comp312Component implements OnInit {

  constructor(private _service: Service312Service) { }

  ngOnInit() {
  }

}
