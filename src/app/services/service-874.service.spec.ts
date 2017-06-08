/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service874Service } from './service-874.service';

describe('Service874Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service874Service]
    });
  });

  it('should ...', inject([Service874Service], (service: Service874Service) => {
    expect(service).toBeTruthy();
  }));
});
