/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service421Service } from '../../services/service-421.service';

@Component({
  selector: 'app-comp-421',
  templateUrl: './comp-421.component.html',
  styleUrls: ['./comp-421.component.css']
})
export class Comp421Component implements OnInit {

  constructor(private _service: Service421Service) { }

  ngOnInit() {
  }

}
