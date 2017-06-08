/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service784Service } from './service-784.service';

describe('Service784Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service784Service]
    });
  });

  it('should ...', inject([Service784Service], (service: Service784Service) => {
    expect(service).toBeTruthy();
  }));
});
