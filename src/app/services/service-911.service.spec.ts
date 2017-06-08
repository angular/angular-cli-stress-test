/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service911Service } from './service-911.service';

describe('Service911Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service911Service]
    });
  });

  it('should ...', inject([Service911Service], (service: Service911Service) => {
    expect(service).toBeTruthy();
  }));
});
