/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service603Service } from './service-603.service';

describe('Service603Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service603Service]
    });
  });

  it('should ...', inject([Service603Service], (service: Service603Service) => {
    expect(service).toBeTruthy();
  }));
});
