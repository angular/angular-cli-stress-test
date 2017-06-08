/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service324Service } from '../../services/service-324.service';

@Component({
  selector: 'app-comp-324',
  templateUrl: './comp-324.component.html',
  styleUrls: ['./comp-324.component.css']
})
export class Comp324Component implements OnInit {

  constructor(private _service: Service324Service) { }

  ngOnInit() {
  }

}
