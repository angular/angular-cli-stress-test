/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service397Service } from './service-397.service';

describe('Service397Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service397Service]
    });
  });

  it('should ...', inject([Service397Service], (service: Service397Service) => {
    expect(service).toBeTruthy();
  }));
});
