/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service233Service } from './service-233.service';

describe('Service233Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service233Service]
    });
  });

  it('should ...', inject([Service233Service], (service: Service233Service) => {
    expect(service).toBeTruthy();
  }));
});
