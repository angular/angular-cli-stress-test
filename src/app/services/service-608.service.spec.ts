/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service608Service } from './service-608.service';

describe('Service608Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service608Service]
    });
  });

  it('should ...', inject([Service608Service], (service: Service608Service) => {
    expect(service).toBeTruthy();
  }));
});
