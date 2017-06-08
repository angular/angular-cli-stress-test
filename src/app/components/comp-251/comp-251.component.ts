/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service251Service } from '../../services/service-251.service';

@Component({
  selector: 'app-comp-251',
  templateUrl: './comp-251.component.html',
  styleUrls: ['./comp-251.component.css']
})
export class Comp251Component implements OnInit {

  constructor(private _service: Service251Service) { }

  ngOnInit() {
  }

}
