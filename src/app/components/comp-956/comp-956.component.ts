/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service956Service } from '../../services/service-956.service';

@Component({
  selector: 'app-comp-956',
  templateUrl: './comp-956.component.html',
  styleUrls: ['./comp-956.component.css']
})
export class Comp956Component implements OnInit {

  constructor(private _service: Service956Service) { }

  ngOnInit() {
  }

}
