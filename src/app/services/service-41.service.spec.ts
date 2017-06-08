/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service41Service } from './service-41.service';

describe('Service41Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service41Service]
    });
  });

  it('should ...', inject([Service41Service], (service: Service41Service) => {
    expect(service).toBeTruthy();
  }));
});
