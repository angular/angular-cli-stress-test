/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service108Service } from '../../services/service-108.service';

@Component({
  selector: 'app-comp-108',
  templateUrl: './comp-108.component.html',
  styleUrls: ['./comp-108.component.css']
})
export class Comp108Component implements OnInit {

  constructor(private _service: Service108Service) { }

  ngOnInit() {
  }

}
