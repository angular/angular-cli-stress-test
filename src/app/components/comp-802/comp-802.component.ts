/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service802Service } from '../../services/service-802.service';

@Component({
  selector: 'app-comp-802',
  templateUrl: './comp-802.component.html',
  styleUrls: ['./comp-802.component.css']
})
export class Comp802Component implements OnInit {

  constructor(private _service: Service802Service) { }

  ngOnInit() {
  }

}
