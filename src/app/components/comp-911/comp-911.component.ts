/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service911Service } from '../../services/service-911.service';

@Component({
  selector: 'app-comp-911',
  templateUrl: './comp-911.component.html',
  styleUrls: ['./comp-911.component.css']
})
export class Comp911Component implements OnInit {

  constructor(private _service: Service911Service) { }

  ngOnInit() {
  }

}
