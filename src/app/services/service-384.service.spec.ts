/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service384Service } from './service-384.service';

describe('Service384Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service384Service]
    });
  });

  it('should ...', inject([Service384Service], (service: Service384Service) => {
    expect(service).toBeTruthy();
  }));
});
