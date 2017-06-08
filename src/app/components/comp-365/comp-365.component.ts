/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service365Service } from '../../services/service-365.service';

@Component({
  selector: 'app-comp-365',
  templateUrl: './comp-365.component.html',
  styleUrls: ['./comp-365.component.css']
})
export class Comp365Component implements OnInit {

  constructor(private _service: Service365Service) { }

  ngOnInit() {
  }

}
