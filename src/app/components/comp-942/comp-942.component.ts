/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service942Service } from '../../services/service-942.service';

@Component({
  selector: 'app-comp-942',
  templateUrl: './comp-942.component.html',
  styleUrls: ['./comp-942.component.css']
})
export class Comp942Component implements OnInit {

  constructor(private _service: Service942Service) { }

  ngOnInit() {
  }

}
