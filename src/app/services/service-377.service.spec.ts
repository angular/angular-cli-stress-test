/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service377Service } from './service-377.service';

describe('Service377Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service377Service]
    });
  });

  it('should ...', inject([Service377Service], (service: Service377Service) => {
    expect(service).toBeTruthy();
  }));
});
